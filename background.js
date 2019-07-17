let currentWindow

function listen(lang) {
  if (currentWindow) {
    chrome.runtime.sendMessage({ type: 'toggle', lang: lang }, () => {})
    return
  }
  chrome.windows.create(
    {
      url: 'popup.html#lang=' + lang,
      type: 'popup',
      top: screen.availHeight - 200,
      left: 0,
      width: screen.availWidth,
      height: 180,
      focused: false,
    },
    window => {
      currentWindow = window.id
    },
  )
}

chrome.commands.onCommand.addListener(function(command) {
  chrome.storage.sync.get(defaultSettings, function(settings) {
    if (command === 'listen1') {
      listen(settings.language1)
    }
    if (command === 'listen2') {
      listen(settings.language2)
    }
  })
})

chrome.windows.onRemoved.addListener(function(windowId) {
  console.log('Window closed', windowId, currentWindow)
  if (windowId === currentWindow) {
    currentWindow = null
  }
})

chrome.browserAction.onClicked.addListener(function() {
  chrome.storage.sync.get(defaultSettings, function(settings) {
    listen(settings.language1)
  })
})
