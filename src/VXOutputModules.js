// @ts-check
/// <reference path="./types.ts" />

export const PopupOutputModule = (() => {
  let activePopup
  let state
  let autoFocus
  let stop

  function broadcastState() {
    if (state) {
      chrome.runtime.sendMessage({ state }, () => {
        if (chrome.runtime.lastError) {
          const silencedMessages = [
            'The message port closed before a response was received.',
            'Could not establish connection. Receiving end does not exist.',
          ]
          const message = chrome.runtime.lastError.message
          if (!silencedMessages.includes(message)) {
            console.error(
              '[broadcastState] failed:',
              chrome.runtime.lastError.message,
            )
          }
        }
      })
    }
  }
  chrome.runtime.onMessage.addListener(message => {
    if (message.popupOpened) {
      broadcastState()
    }
  })
  function createPopup() {
    let windowId, tabId
    const messageListener = (message, sender) => {
      if (message.overlayInjected && sender.tab) {
        tabId = sender.tab.id
      }
    }
    chrome.runtime.onMessage.addListener(messageListener)
    const windowRemovedListener = function(removedWindowId) {
      if (removedWindowId === windowId) {
        if (stop) stop()
        chrome.windows.onRemoved.removeListener(windowRemovedListener)
        activePopup = null
      }
    }
    chrome.windows.onRemoved.addListener(windowRemovedListener)
    chrome.tabs.executeScript({ file: 'content-script.js' }, () => {
      if (chrome.runtime.lastError) {
        chrome.windows.create(
          {
            url: 'popup.html?full',
            type: 'popup',
            top: screen.availHeight - 200,
            left: 0,
            width: screen.availWidth,
            height: 180,
            focused: autoFocus,
          },
          window => {
            windowId = window.id
          },
        )
        return
      }
    })
    return {
      dispose() {
        chrome.windows.onRemoved.removeListener(windowRemovedListener)
        if (windowId) {
          chrome.windows.remove(windowId)
          activePopup = null
        }
        if (tabId) {
          chrome.tabs.sendMessage(tabId, { disposeOverlay: true })
        }
      },
    }
  }
  return /** @type {VXOutput} */ (function PopupOutputModule(
    nextState,
    settings,
    actions,
  ) {
    if (settings.outputPopup !== 'on') return
    autoFocus = settings.outputPopupAutoFocus === 'on'
    stop = actions.stop
    state = nextState

    if (nextState.showing && !activePopup) {
      if (nextState.status !== 'ended') {
        activePopup = createPopup()
      }
    } else if (!nextState.showing && activePopup) {
      activePopup.dispose()
      activePopup = null
    }
    broadcastState()
  })
})()

export const SessionNotificationOutputModule = (() => {
  let active = false
  return /** @type {VXOutput} */ (function NotificationOutputModule(
    { status, finalTranscript, interimTranscript, showing },
    settings,
  ) {
    if (settings.outputNotificationSession !== 'on') return

    const message = `${finalTranscript}${interimTranscript}`
    const title = `${status}`
    const progress = finalTranscript ? 100 : 0
    if (showing) {
      if (active) {
        chrome.notifications.update('vx', {
          type: 'progress',
          title,
          message,
          progress,
        })
      } else {
        active = true
        chrome.notifications.create('vx', {
          type: 'progress',
          title,
          message,
          silent: true,
          progress,
          iconUrl: 'icon.png',
          requireInteraction: true,
        })
      }
    } else {
      if (active) {
        active = false
        chrome.notifications.clear('vx')
      }
    }
  })
})()

export const TranscriptNotificationOutputModule = (() => {
  let transcript = ''

  return /** @type {VXOutput} */ (function SoundOutputModule(state, settings) {
    if (settings.outputNotificationTranscript !== 'on') return

    const nextTranscript = state.finalTranscript
    if (nextTranscript !== transcript) {
      transcript = nextTranscript
      if (nextTranscript) {
        chrome.notifications.create({
          type: 'basic',
          title: 'Copied to clipboard',
          message: transcript,
          silent: true,
          iconUrl: 'icon.png',
          requireInteraction: false,
        })
      }
    }
  })
})()

export const SoundOutputModule = (() => {
  let toneGenerator = null
  let status = null
  let transcript = ''

  function getToneGenerator() {
    if (toneGenerator) {
      return toneGenerator
    }

    var ac = new AudioContext()
    let nextToneTime = 0

    /**
     * @param {number} f
     * @param {number} s
     */
    function emitTone(f, s) {
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

    toneGenerator = { emitTone }
    return toneGenerator
  }

  /**
   * @param {number} f
   * @param {number} s
   */
  function tone(f, s) {
    getToneGenerator().emitTone(f, s)
  }

  function onStatusUpdate(status) {
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
  }

  return /** @type {VXOutput} */ (function SoundOutputModule(state, settings) {
    if (settings.outputSound !== 'on') return

    const nextStatus = state.status
    if (status !== nextStatus) {
      status = nextStatus
      onStatusUpdate(status)
    }
    const nextTranscript = state.finalTranscript
    if (nextTranscript !== transcript) {
      transcript = nextTranscript
      if (nextTranscript) {
        tone(5, 0)
        tone(10, 1)
        tone(15, 2)
      }
    }
  })
})()

export const CustomOutputModule = (() => {
  return /** @type {VXOutput} */ (function CustomOutputModule(state, settings) {
    if (!settings.customOutputModuleCode) return
    new Function('state', settings.customOutputModuleCode)(state)
  })
})()
