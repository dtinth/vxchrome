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
  if (command === 'listen-en') {
    listen('en')
  }
  if (command === 'listen-th') {
    listen('th')
  }
})

chrome.windows.onRemoved.addListener(function(windowId) {
  console.log('Window closed', windowId, currentWindow)
  if (windowId === currentWindow) {
    currentWindow = null
  }
})

chrome.browserAction.onClicked.addListener(buttonClicked)
function buttonClicked() {
  if (chrome.runtime.openOptionsPage) {
    chrome.runtime.openOptionsPage();
  } else {
    window.open(chrome.runtime.getURL('options.html'));
  }
};

















