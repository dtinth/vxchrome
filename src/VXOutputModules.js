// @ts-check
/// <reference path="./types.ts" />

export const PopupOutputModule = (() => {
  let activePopup
  let state
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
            focused: true,
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
  return /** @type {VXOutput} */ (function PopupOutputModule(nextState) {
    state = nextState
    if (nextState.showing && !activePopup) {
      activePopup = createPopup()
    } else if (!nextState.showing && activePopup) {
      activePopup.dispose()
      activePopup = null
    }
    broadcastState()
  })
})()

export const NotificationOutputModule = (() => {
  let active = false
  return /** @type {VXOutput} */ (function NotificationOutputModule({
    status,
    finalTranscript,
    interimTranscript,
    showing,
  }) {
    const message = `${finalTranscript}${interimTranscript}`
    const title = `${status}`
    const progress = finalTranscript ? 100 : 0
    if (showing) {
      if (active) {
        console.log('Updating!')
        chrome.notifications.update('vx', {
          title,
          message,
          progress,
        })
      } else {
        console.log('Creating!')
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
        console.log('Clearing!')
        active = false
        chrome.notifications.clear('vx')
      }
    }
  })
})()
