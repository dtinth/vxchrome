import { createApp } from 'vue';
import Popup from './Popup.vue';


chrome.storage.sync.get(null, (_settings) => { 
    chrome.storage.local.get(null, (_state) => { 
        createApp(Popup, { _settings, _state }).mount('#popup');
      })
  })