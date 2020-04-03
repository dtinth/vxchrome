// @ts-check
/// <reference types="chrome" />

import { defaultSettings } from './VXDefaultSettings.js'
import * as vx from './VXController.js'

function listen(lang, settings) {
  vx.toggle({ lang, settings })
}

chrome.commands.onCommand.addListener(function(command) {
  chrome.storage.sync.get(defaultSettings, function(settings) {
    if (command === 'listen1') {
      listen(settings.language1, settings)
    }
    if (command === 'listen2') {
      listen(settings.language2, settings)
    }
  })
})

chrome.browserAction.onClicked.addListener(function() {
  chrome.storage.sync.get(defaultSettings, function(settings) {
    listen(settings.language1, settings)
  })
})
