<script>
import SaveButton from './components/SaveButton.vue';
import BooleanFlag from './components/BooleanFlag.vue';
import { defaultSettings } from './../../src/VXDefaultSettings.js';

export default {
  props: ['_settings'],

  components: {
    SaveButton,
    BooleanFlag,
  },

  data() {
    return {
      store: {
        savedSettings: JSON.parse(JSON.stringify(this._settings)),
        settings: this._settings,
        defaultSettings,
        status: '',
      },
      grantStatus: null,
      source: null,
    };
  },

  mounted() {
    if (location.search.match(/err=not-allowed/)) {
      this.source = 'not-allowed-err';
    }
    if (location.search.match(/err=audio-capture/)) {
      this.source = 'audio-capture-err';
    }
  },

  methods: {
    shortcuts() {
      chrome.tabs.create({
        url: 'chrome://extensions/shortcuts',
      });
    },
    async grantMic() {
      this.grantStatus = { ok: 'pending' };
      try {
        await new Promise((resolve, reject) => {
          const sr = new webkitSpeechRecognition();
          sr.onstart = () => {
            sr.stop();
            resolve();
          };
          sr.onerror = (event) => {
            reject(new Error(event.error));
          };
          sr.start();
        });
        this.grantStatus = { ok: true };
      } catch (e) {
        this.grantStatus = { ok: false, message: String(e.message) };
      }
    },

    //
    save() {
      const newSettings = JSON.parse(JSON.stringify(this.store.settings));
      chrome.storage.sync.set(newSettings, () => {
        this.store.savedSettings = newSettings;
        this.store.status = 'All changes saved';
      });
    },
  },

  //
  computed: {
    changed() {
      return (
        JSON.stringify(this.store.settings) !==
        JSON.stringify(this.store.savedSettings)
      );
    },
  },
  watch: {
    changed() {
      if (this.store.status) this.store.status = '';
    },
  },
};
</script>

<template>
  <div v-if="store">
    <h1 class="text-8b8685 text-4xl">vx options</h1>
    <div class="max-w-xl">
      <div
        class="mb-4 text-xl bg-yellow-900 rounded p-4 text-white border border-yellow-400"
        v-if="source === 'audio-capture-err'"
      >
        <strong class="text-bbeeff">Hey there!</strong>
        It seems like Google Chrome did not detect any microphone on your
        machine. Make make sure your device has been set up properly!
      </div>

      <h2 class="text-2xl text-d7fc70 mt-6 mb-4">Microphone permission</h2>

      <div
        class="mb-4 text-xl bg-yellow-900 rounded p-4 text-white border border-yellow-400"
        v-if="source === 'not-allowed-err'"
      >
        <strong class="text-bbeeff">Hey there!</strong>
        It seems like you need to grant vx access to the microphone first.
        Just click the button below...
      </div>

      <div class="flex items-center mb-4">
        <div class="w-1/3 flex-none"></div>
        <div>
          <button
            @click="grantMic"
            type="button"
            class="block shadow bg-blue-500 text-white focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded"
          >
            Grant microphone permission
          </button>
          <div
            class="mt-2 text-teal-300"
            v-if="grantStatus && grantStatus.ok === 'pending'"
          >
            Asking for permission...
          </div>
          <div
            class="mt-2 text-green-300"
            v-else-if="grantStatus && grantStatus.ok"
          >
            Grant successful! Try using the extension by clicking on the
            microphone button.
          </div>
          <div
            class="mt-2 text-red-300"
            v-else-if="grantStatus && !grantStatus.ok"
          >
            Grant unsuccessful... {{grantStatus.message}}
          </div>
        </div>
      </div>

      <h2 class="text-2xl text-d7fc70 mt-6 mb-4">Language settings</h2>
      <p class="text-8b8685 mb-4">
        Enter a BCP 47 language tag, such as <em>en-US</em> or <em>en-GB</em>.
        The first language is the language that will be listened to when you
        click on the
        <span class="inline-block h-0 w-6 align-middle">
          <img
            src="./assets/icon.png"
            class="absolute w-6 h-6"
            style="transform: translateY(-50%)"
          />
        </span>
        Mic button. You can activate other languages via keyboard shortcuts.
      </p>

      <div class="flex items-baseline mb-4">
        <div class="w-1/3">
          <label
            class="block font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="first_language"
          >
            First language
          </label>
        </div>
        <div class="w-2/3">
          <input
            class="
              block
              w-full
              form-input
              bg-090807
              border-454443
              hover:border-656463
              shadow
              placeholder-8b8685
            "
            id="first_language"
            type="text"
            placeholder="Enter second language"
            v-model="store.settings.language1"
          />
        </div>
      </div>

      <div class="flex items-baseline mb-4">
        <div class="w-1/3">
          <label
            class="block font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="second_language"
          >
            Second language
          </label>
        </div>
        <div class="w-2/3">
          <input
            class="
              block
              w-full
              form-input
              bg-090807
              border-454443
              hover:border-656463
              shadow
              placeholder-8b8685
            "
            id="second_language"
            type="text"
            placeholder="Enter second language"
            v-model="store.settings.language2"
          />
        </div>
      </div>

      <SaveButton :changed="changed" :save="save" :store="store"></SaveButton>

      <h2 class="text-2xl text-d7fc70 mt-6 mb-4">Keyboard shortcuts</h2>
      <p class="text-8b8685 mb-4">
        <strong>Tip:</strong> Set these keyboard shortcuts to “Global” to use
        them outside Google Chrome.
      </p>

      <div class="flex items-center mb-4">
        <div class="w-1/3"></div>
        <div>
          <a
            @click="shortcuts"
            class="
              block
              shadow
              bg-blue-500
              text-white
              focus:shadow-outline focus:outline-none
              font-bold
              py-2
              px-4
              rounded
            "
          >
            Customize keyboard shortcuts
          </a>
        </div>
      </div>

      <h2 class="text-2xl text-d7fc70 mt-6 mb-4">Output settings</h2>

      <div class="flex items-baseline mb-4">
        <div class="w-1/3">
          <h3 class="block font-bold md:text-right mb-1 md:mb-0 pr-4">
            Overlay / Popup
          </h3>
        </div>
        <div class="w-2/3">
          <BooleanFlag
            :store="store"
            setting-key="outputPopup"
            title="Display an overlay or popup"
          >
            When this is turned on, an overlay will be displayed when you
            activate this extension inside a web page. Otherwise, a pop-up
            dialog is displayed.
          </BooleanFlag>

          <BooleanFlag
            :store="store"
            setting-key="outputPopupAutoFocus"
            title="Auto-focus popup"
          >
            If unchecked, the popup window may appear below other windows.
            Enabling this option ensures that the text being recognized is
            displayed, but can also be annoying.
          </BooleanFlag>
        </div>
      </div>

      <div class="flex items-baseline mb-4">
        <div class="w-1/3">
          <h3 class="block font-bold md:text-right mb-1 md:mb-0 pr-4">Sound</h3>
        </div>
        <div class="w-2/3">
          <BooleanFlag
            :store="store"
            setting-key="outputSound"
            title="Enable sound"
          >
            When this is turned on, a sound will be played when recognition is
            started, when recognition is stopped, and each time text is copied
            to the clipboard.
          </BooleanFlag>
        </div>
      </div>

      <div class="flex items-baseline mb-4">
        <div class="w-1/3">
          <h3 class="block font-bold md:text-right mb-1 md:mb-0 pr-4">
            Notification
          </h3>
        </div>
        <div class="w-2/3">
          <BooleanFlag
            :store="store"
            setting-key="outputNotificationTranscript"
            title="Show transcript notifications"
          >
            When this is turned on, a separate notification will be sent each
            time text is copied to the clipboard.
          </BooleanFlag>
        </div>
      </div>

      <div class="flex items-baseline mb-4">
        <div class="w-1/3">
          <h3 class="block font-bold md:text-right mb-1 md:mb-0 pr-4">
            Clipboard
          </h3>
        </div>
        <div class="w-2/3">
          <BooleanFlag
            :store="store"
            setting-key="outputClipboard"
            title="Copy to clipboard"
          >
            You can uncheck this… but isn't it why you installed this extension?
          </BooleanFlag>
        </div>
      </div>

      <SaveButton :changed="changed" :save="save" :store="store"></SaveButton>

      <p class="text-8b8685 mt-8">
        Source code available at
        <a
          href="https://github.com/dtinth/vxchrome"
          target="_blank"
          class="text-8b8685 underline"
          rel="noopener noreferrer"
          >github.com/dtinth/vxchrome</a
        >.<br />
        
        Migrated to Manifest V3 by 
        <a
          href="https://github.com/kappaflow"
          target="_blank"
          class="text-8b8685 underline"
          rel="noopener noreferrer"
          >KappaFlow</a>
          <br />
        <a
        href="https://destream.net/live/KappaFlow/donate"
        target="_blank"
        class="text-8b8685 underline"
        rel="noopener noreferrer"
        >buy me a coffee</a> or
        <a
          href="https://dt.in.th/go/coffee"
          target="_blank"
          class="text-8b8685 underline"
          rel="noopener noreferrer"
          >buy dtinth a coffee</a
        >, if you feel like doing it ;).
      </p>
    </div>
    <div class="fixed inset-x-0 bottom-0 px-8 bg-090807" v-show="changed">
      <div class="max-w-xl pt-4">
        <SaveButton :changed="changed" :save="save" :store="store">
          <div class="text-yellow-300 font-bold">Unsaved changes</div>
        </SaveButton>
      </div>
    </div>
  </div>
</template>
