import * as VXViews from './VXOutputModules.js'

var ac = new AudioContext()
let nextToneTime = 0

let views = [VXViews.PopupOutputModule]
let resultHandler = defaultResultHandler

function tone(f, s) {
  const d = s * 0.05
  const t = Math.max(ac.currentTime + d, nextToneTime)
  nextToneTime = t + 0.05

  const osc = ac.createOscillator()
  const gain = ac.createGain()

  osc.frequency.value = 220 * Math.pow(2, f / 12)
  osc.connect(gain)

  gain.gain.setValueAtTime(0.5, t)
  gain.gain.linearRampToValueAtTime(0.0, t + 0.07)
  gain.connect(ac.destination)

  osc.start(t)
  osc.stop(t + 0.1)
}

const state = mobx.observable({
  status: 'idle',
  interimTranscript: '',
  finalTranscript: '',
})

// Sound
mobx.autorun(() => {
  const { status } = state
  if (status === 'starting') {
    tone(0, 0)
  }
  if (status === 'listening') {
    tone(5, 0)
    tone(10, 1)
  }
  if (status === 'error') {
    tone(15, 0)
    tone(12, 1)
    tone(9, 2)
  }
  if (status === 'ended') {
    tone(15, 0)
    tone(8, 1)
    tone(1, 2)
  }
})

// View
{
  const view = payload => {
    console.log('View:', payload)
    views.forEach(v => {
      try {
        v(payload)
      } catch (e) {
        console.error(`Output module "${v.name}" failed`, e)
      }
    })
  }

  const viewState = mobx.observable({
    showing: false,
    get shouldShow() {
      const { status } = state
      return status === 'listening' || status === 'starting'
    },
  })

  let hideTimer
  mobx.reaction(
    () => viewState.shouldShow,
    shouldShow => {
      clearTimeout(hideTimer)
      if (shouldShow) {
        viewState.showing = true
      } else {
        hideTimer = setTimeout(() => {
          viewState.showing = false
        }, 1500)
      }
    },
  )

  mobx.autorun(() => {
    const { status, interimTranscript, finalTranscript } = state
    const { showing } = viewState
    view({ status, finalTranscript, interimTranscript, showing })
  })
}

function log(text) {
  console.log('[' + new Date().toJSON() + '] ' + text)
}

var recognition = new webkitSpeechRecognition() // azureSpeechRecognition() //

recognition.continuous = true
recognition.interimResults = true

recognition.onstart = function() {
  mobx.runInAction('onstart', () => {
    state.status = 'listening'
  })
  log('Ready to listen')
}

recognition.onerror = function(event) {
  mobx.runInAction('onerror', () => {
    state.status = 'error'
  })
  if (event.error === 'no-speech') {
    log('Closed: No speech')
    return
  }
  const logError = message => {
    log('Error: ' + message)
  }
  if (event.error === 'audio-capture') {
    logError('No microphone was found.')
  }
  if (event.error === 'not-allowed') {
    logError('Permission to use microphone is blocked.')
  }
}

recognition.onend = function() {
  mobx.runInAction('onend', () => {
    state.status = 'ended'
  })
  log('Ended')
}

recognition.onresult = function(event) {
  var finalTranscript = ''
  var interimTranscript = ''
  for (var i = event.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal) {
      finalTranscript += event.results[i][0].transcript
    } else {
      interimTranscript += event.results[i][0].transcript
    }
  }
  mobx.runInAction('onresult', () => {
    state.finalTranscript = finalTranscript
    state.interimTranscript = interimTranscript
  })
  resultHandler(interimTranscript, finalTranscript)
  if (finalTranscript) {
    tone(5, 0)
    tone(10, 1)
    tone(15, 2)
  }
}

function defaultResultHandler(interimTranscript, finalTranscript) {
  if (finalTranscript) {
    copyTextToClipboard(finalTranscript.trim())
  }
}

function start(lang) {
  mobx.runInAction('start', () => {
    state.status = 'starting'
    state.interimTranscript = ''
    state.finalTranscript = ''
  })
  log('Start listening for ' + lang)
  recognition.lang = lang
  recognition.start()
}

function copyTextToClipboard(text) {
  var copyFrom = document.createElement('textarea')
  copyFrom.textContent = text
  document.body.appendChild(copyFrom)
  copyFrom.select()
  document.execCommand('copy')
  copyFrom.blur()
  document.body.removeChild(copyFrom)
}

export function isActive() {
  return state.status === 'listening' || state.status === 'starting'
}

export function toggle(request) {
  if (isActive()) {
    recognition.stop()
  } else {
    resultHandler = request.resultHandler || defaultResultHandler
    start(request.lang)
  }
}
