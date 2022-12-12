import { _ as _export_sfc, c as createElementBlock, a as createBaseVNode, t as toDisplayString, d as createCommentVNode, o as openBlock, k as createApp } from "./_plugin-vue_export-helper.f81eb3d3.js";
const _sfc_main = {
  props: ["_settings", "_state"],
  data() {
    return {
      state: {
        status: "idle",
        interimTranscript: "",
        finalTranscript: ""
      },
      oldState: null,
      settings: this._settings,
      language: this._state.language
    };
  },
  watch: {
    state: {
      deep: true,
      handler(newState) {
        this.notificationOutputModule(newState, this.oldState);
        this.soundOutputModule(newState, this.oldState);
        this.oldState = JSON.parse(JSON.stringify(newState));
      }
    }
  },
  methods: {
    openOptions() {
      if (chrome.runtime.openOptionsPage) {
        chrome.runtime.openOptionsPage();
      } else {
        window.open(chrome.runtime.getURL("options.html"));
      }
    },
    requestPopUpClose() {
      chrome.storage.local.set({ "isWindowActive": false });
    },
    stateListener() {
      chrome.storage.onChanged.addListener((changes, namespace) => {
        chrome.storage.local.get(null, (state) => {
          if (!state.isWindowActive) {
            window.close();
          }
          this.language = state.language;
        });
        chrome.storage.sync.get(null, (settings) => {
          this.settings = settings;
        });
      });
    },
    pageListener() {
      addEventListener("beforeunload", (event) => {
        this.requestPopUpClose();
      });
      document.querySelector("#open-options-button").addEventListener("click", this.openOptions);
    },
    notificationOutputModule(newState, oldState) {
      if (this.settings.outputNotificationTranscript !== "on")
        return;
      const transcript = oldState === null ? newState.finalTranscript : oldState.finalTranscript;
      const nextTranscript = newState.finalTranscript;
      if (nextTranscript !== transcript) {
        if (nextTranscript) {
          chrome.notifications.create({
            type: "basic",
            title: "Copied to clipboard",
            message: nextTranscript,
            silent: true,
            iconUrl: "icon.png",
            requireInteraction: false
          });
        }
      }
    },
    soundOutputModule(newState, oldState) {
      if (this.settings.outputSound !== "on")
        return;
      let toneGenerator = null;
      const status = oldState === null ? newState.status : oldState.status;
      const transcript = oldState === null ? newState.finalTranscript : oldState.finalTranscript;
      const nextStatus = newState.status;
      if (status !== nextStatus) {
        onStatusUpdate(status);
      }
      const nextTranscript = newState.finalTranscript;
      if (nextTranscript !== transcript) {
        if (nextTranscript) {
          tone(5, 0);
          tone(10, 1);
          tone(15, 2);
        }
      }
      function getToneGenerator() {
        if (toneGenerator) {
          return toneGenerator;
        }
        var ac = new AudioContext();
        let nextToneTime = 0;
        function emitTone(f, s) {
          const d = s * 0.05;
          const t = Math.max(ac.currentTime + d, nextToneTime);
          nextToneTime = t + 0.05;
          const osc = ac.createOscillator();
          const gain = ac.createGain();
          osc.frequency.value = 220 * Math.pow(2, f / 12);
          osc.connect(gain);
          gain.gain.setValueAtTime(0.5, t);
          gain.gain.linearRampToValueAtTime(0, t + 0.07);
          gain.connect(ac.destination);
          osc.start(t);
          osc.stop(t + 0.1);
        }
        toneGenerator = { emitTone };
        return toneGenerator;
      }
      function tone(f, s) {
        getToneGenerator().emitTone(f, s);
      }
      function onStatusUpdate(status2) {
        if (status2 === "starting") {
          tone(0, 0);
        }
        if (status2 === "listening") {
          tone(5, 0);
          tone(10, 1);
        }
        if (status2 === "error") {
          tone(15, 0);
          tone(12, 1);
          tone(9, 2);
        }
        if (status2 === "ended") {
          tone(15, 0);
          tone(8, 1);
          tone(1, 2);
        }
      }
    },
    clipBoardTextCopy(text) {
      let copyFrom = document.createElement("textarea");
      copyFrom.textContent = text;
      document.body.appendChild(copyFrom);
      copyFrom.select();
      document.execCommand("copy");
      copyFrom.blur();
      document.body.removeChild(copyFrom);
    },
    resultHandler(interimTranscript, finalTranscript) {
      if (finalTranscript)
        this.log(finalTranscript.trim());
      if (this.settings.outputClipboard === "on") {
        if (finalTranscript) {
          this.clipBoardTextCopy(finalTranscript.trim());
        }
      }
    },
    start(recognition) {
      this.state.status = "starting";
      this.state.interimTranscript = "";
      this.state.finalTranscript = "";
      this.log("Start listening for " + this.language);
      recognition.lang = this.language;
      recognition.start();
    },
    onstart() {
      this.state.status = "listening";
      this.log("Ready to listen");
    },
    onerror(event) {
      this.state.status = "error";
      if (event.error === "no-speech") {
        this.log("Closed: No speech");
        return;
      }
      const logError = (message) => {
        this.log("Error: " + message);
      };
      if (event.error === "audio-capture") {
        logError("No microphone was found.");
        chrome.tabs.create({
          url: chrome.runtime.getURL("options.html") + "?err=audio-capture"
        });
      }
      if (event.error === "not-allowed") {
        logError("Permission to use microphone is blocked.");
        chrome.tabs.create({
          url: chrome.runtime.getURL("options.html") + "?err=not-allowed"
        });
      }
    },
    onend() {
      this.state.status = "ended";
      this.log("Ended");
      this.requestPopUpClose();
    },
    onresult(event) {
      var finalTranscript = "";
      var interimTranscript = "";
      for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }
      this.state.finalTranscript = finalTranscript;
      this.state.interimTranscript = interimTranscript;
      this.resultHandler(interimTranscript, finalTranscript);
    },
    log(fmt, ...args) {
      console.log(`[VX] ${fmt}`, ...args);
    }
  },
  created() {
    this.stateListener();
  },
  mounted() {
    this.pageListener();
    if (location.search === "?full") {
      document.documentElement.classList.add("full");
    }
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.onstart = this.onstart;
    recognition.onend = this.onend;
    recognition.onresult = this.onresult;
    recognition.onerror = this.onerror;
    this.start(recognition);
  }
};
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { id: "vxchrome" };
const _hoisted_3 = ["state-status", "state-final"];
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", { class: "initial" }, ">>>\xA0", -1);
const _hoisted_5 = { class: "final" };
const _hoisted_6 = { class: "interim" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return $data.state ? (openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", {
        class: "box",
        "state-status": $data.state.status,
        "state-final": $data.state.finalTranscript ? "true" : "false"
      }, [
        _hoisted_4,
        createBaseVNode("span", _hoisted_5, toDisplayString($data.state.finalTranscript), 1),
        createBaseVNode("span", _hoisted_6, toDisplayString($data.state.interimTranscript), 1)
      ], 8, _hoisted_3)
    ])
  ])) : createCommentVNode("", true);
}
const Popup = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
chrome.storage.sync.get(null, (_settings) => {
  chrome.storage.local.get(null, (_state) => {
    createApp(Popup, { _settings, _state }).mount("#popup");
  });
});
