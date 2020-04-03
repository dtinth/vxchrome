Vue.config.productionTip = false
Vue.config.devtools = false

var vm

function main({ defaultSettings, settings }) {
  vm = new Vue({
    el: '#app',
    data: {
      savedSettings: JSON.parse(JSON.stringify(settings)),
      settings,
      defaultSettings,
      status: '',
    },
    computed: {
      changed() {
        return (
          JSON.stringify(this.settings) !== JSON.stringify(this.savedSettings)
        )
      },
    },
    watch: {
      changed() {
        if (this.status) this.status = ''
      },
    },
    methods: {
      save() {
        const newSettings = JSON.parse(JSON.stringify(settings))
        chrome.storage.sync.set(newSettings, () => {
          this.savedSettings = newSettings
          this.status = 'All changes saved'
        })
      },
    },
  })
}

import('./src/VXDefaultSettings.js').then(({ defaultSettings }) => {
  chrome.storage.sync.get(defaultSettings, settings => {
    main({ defaultSettings, settings })
  })
})
