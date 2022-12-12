// @ts-check
/// <reference types="chrome" />

import { defaultSettings } from './src/VXDefaultSettings.js'
import { defaultState } from './src/VXDefaultState.js'

var m_state, m_settings

chrome.runtime.onInstalled.addListener(() => {
  chrome.runtime.openOptionsPage( ()=>{
    if (chrome.runtime.lastError)
      console.error(chrome.runtime.lastError?.message)
  }
  )
});

async function init() {

  await Promise.all(
    [chrome.storage.local.get(defaultState).then(
    (state) => {
      m_state = state
    }),
    chrome.storage.sync.get(defaultSettings).then(
      (settings) => {
        m_settings = settings
    })] 
    )
}

function listen(lang) {
  m_state.language = lang
  chrome.storage.local.set(m_state)

  toggle()
}
chrome.commands.onCommand.addListener(function(command) {
  init().then(()=>{
    if (command === 'stop') {
      if (isActive()) {
        closeWindow()
      }
    }
    if (command === 'listen1') {
      listen(m_settings.language1)
    }
    if (command === 'listen2') {
      listen(m_settings.language2)
    }
  })
})

chrome.action.onClicked.addListener(function() {
  init().then(()=>{
    listen(m_settings.language1)
  })
})


function toggle() {
  if (isActive()) {
    closeWindow()
  } else {
    createWindow()
  }
}

function isActive() {
  return m_state.isWindowActive
}

function createWindow() {

  async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);

    return tab;
  }


  function contentScript() {
    if (!window.vxframe) {
      const css = String.raw
      const frame = document.createElement('iframe')
      frame.setAttribute('allow', "microphone; autoplay")
      frame.setAttribute(
        'style',
        css`
          position: fixed;
          top: 0px;
          left: 0px;
          width: 100vw;
          height: 100%;
          margin: 0;
          padding: 0;
          border: 0;
          background: transparent;
          z-index: 999999999;
          pointer-events: none;
        `,
      )
      frame.src = chrome.runtime.getURL('popup.html')
    
      document.body.appendChild(frame)
    
      window.vxframe = frame
    
      chrome.storage.onChanged.addListener((changes, namespace) => {
    
        chrome.storage.local.get(null, (state) => { 
    
          if (!state.isWindowActive) {
            window.vxframe = null
            frame.remove()
          }
        })
      });
    }
  }

  getCurrentTab().then( (tab) =>
    {

      if (m_settings.outputPopup === 'on' || (!tab.url?.startsWith("http://") && !tab.url?.startsWith("https://")) || tab?.id === undefined )
      {
        createWindow()
      }
      else
      {
        chrome.scripting.executeScript({ target: {tabId: tab.id}, func: contentScript /* files: ['content-script.js'] */ } )
      }

      m_state.isWindowActive = true
      chrome.storage.local.set( m_state )

      function createWindow() {
        chrome.system.display.getInfo(function (display_properties) {
          var primary_disp = display_properties[0]
          for (const element of display_properties) {
            if( element.isPrimary )
            {
              primary_disp = element
            }
          }

          chrome.windows.create(
            {
              url: 'popup.html?full',
              type: 'popup',
              left: 0,
              top: primary_disp.bounds.height - 200,
              width: primary_disp.bounds.width,
              height: 180,
              focused: m_settings.outputPopupAutoFocus === 'on',
            },
          )
        })
      }
    }
  )
}

function closeWindow() {
  m_state.isWindowActive = false
  chrome.storage.local.set( m_state )
}