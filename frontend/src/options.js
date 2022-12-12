import { createApp } from 'vue';
import './style.css';
import Options from './Options.vue';

import('../../src/VXDefaultSettings.js').then(({ defaultSettings }) => {
  chrome.storage.sync.get(defaultSettings, _settings => {
    createApp(Options, { _settings }).mount('#options');
  })
})