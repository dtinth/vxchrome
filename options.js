Vue.config.productionTip = false
Vue.config.devtools = false

{
  const html = String.raw

  Vue.component('save-button', {
    props: ['store'],
    template: html`
      <div class="flex items-center mb-4">
        <div class="w-1/3"></div>
        <div>
          <button
            @click="store.save"
            class="shadow text-090807 focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded"
            :class="[store.changed ? 'bg-d7fc70' : 'bg-8b8685']"
            type="button"
          >
            Save
          </button>
        </div>
        <div class="ml-4">
          {{store.status}}
        </div>
      </div>
    `,
  })

  Vue.component('boolean-flag', {
    props: ['store', 'settingKey', 'title'],
    data() {
      return {
        checked: this.getTargetValue(),
      }
    },
    computed: {
      targetValue() {
        return this.getTargetValue()
      },
    },
    methods: {
      getTargetValue() {
        return this.store.settings[this.settingKey] === 'on'
      },
      setTargetValue(flag) {
        this.store.settings[this.settingKey] = flag ? 'on' : 'off'
      },
    },
    watch: {
      checked(v) {
        if (this.getTargetValue() !== v) this.setTargetValue(v)
      },
      targetValue(v) {
        if (v !== this.checked) this.checked = v
      },
    },
    template: html`
      <article>
        <label class="flex items-baseline">
          <input
            type="checkbox"
            class="form-checkbox self-center bg-090807 border-656463"
            v-model="checked"
          />
          <span class="ml-2">{{title}}</span>
        </label>
        <span class="block ml-6 text-8b8685 italic mb-2">
          <slot></slot>
        </span>
      </article>
    `,
  })
}

var vm = new Vue({
  el: '#app',
  data: {
    store: null,
  },
  methods: {
    shortcuts() {
      chrome.tabs.create({
        url: 'chrome://extensions/shortcuts',
      })
    },
  },
})

function main({ defaultSettings, settings }) {
  vm.store = new Vue({
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
