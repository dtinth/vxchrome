// @ts-check
/// <reference types="chrome" />

import { defaultSettings } from './VXDefaultSettings.js'
import * as vx from './VXController.js'

function listen(lang) {
  vx.toggle({ lang })
}

function injectContentScript() {
  chrome.tabs.executeScript({ code: 'void 0' }, () => {
    if (chrome.runtime.lastError) {
      // console.log('T_T', chrome.runtime.lastError.message)
    }
  })
}

chrome.commands.onCommand.addListener(function(command) {
  // injectContentScript()
  chrome.storage.sync.get(defaultSettings, function(settings) {
    if (command === 'listen1') {
      listen(settings.language1)
    }
    if (command === 'listen2') {
      listen(settings.language2)
    }
  })
})

chrome.browserAction.onClicked.addListener(function() {
  // injectContentScript()
  chrome.storage.sync.get(defaultSettings, function(settings) {
    listen(settings.language1)
  })
})
