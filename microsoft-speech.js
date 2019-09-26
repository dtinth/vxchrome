function azureSpeechRecognition() {
  let current
  const re = {
    start() {
      if (current) {
        throw new Error('Speech recognition is already in progress')
      }
      const audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput()
      const speechConfig = SpeechSDK.SpeechConfig.fromSubscription(
        '********************************',
        'southeastasia',
      )
      speechConfig.speechRecognitionLanguage = 'en-US' // re.lang
      const reco = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig)
      let listening = false
      reco.recognizing = function(s, e) {
        console.log('Recognizing', e)
        const result = { isFinal: false, 0: { transcript: e.result.text } }
        re.onresult({ results: [result], resultIndex: 0 })
      }
      reco.recognized = function(s, e) {
        console.log('Recognized', e)
        if (e.result.reason === SpeechSDK.ResultReason.NoMatch) {
          re.onresult({ results: [], resultIndex: 0 })
        } else {
          const result = { isFinal: true, 0: { transcript: e.result.text } }
          re.onresult({ results: [result], resultIndex: 0 })
        }
      }
      reco.canceled = function(s, e) {
        console.log(e)
        console.log(
          '(cancel) Reason: ' + SpeechSDK.CancellationReason[e.reason],
        )
        close()
      }
      reco.sessionStarted = function(s, e) {
        console.log('Started')
        listening = true
        re.onstart()
      }
      function close() {
        if (listening) {
          listening = false
          re.onend()
        }
      }
      reco.sessionStopped = function(s, e) {
        close()
      }
      current = { reco, close }
      reco.startContinuousRecognitionAsync()
    },
    stop() {
      if (!current) {
        throw new Error('No current recognition instance')
      }
      console.log('Stop!')
      current.reco.stopContinuousRecognitionAsync(console.log, console.error)
      current.close()
      current = null
    },
  }
  return re
}
