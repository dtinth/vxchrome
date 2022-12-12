import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createBaseVNode, r as renderSlot, n as normalizeClass, t as toDisplayString, w as withDirectives, v as vModelCheckbox, b as createTextVNode, d as createCommentVNode, e as vModelText, f as createVNode, g as withCtx, h as vShow, i as createStaticVNode, j as resolveComponent, k as createApp } from "./_plugin-vue_export-helper.f81eb3d3.js";
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  const links = document.getElementsByTagName("link");
  return Promise.all(deps.map((dep) => {
    dep = assetsURL(dep);
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    const isBaseRelative = !!importerUrl;
    if (isBaseRelative) {
      for (let i = links.length - 1; i >= 0; i--) {
        const link2 = links[i];
        if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
          return;
        }
      }
    } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule());
};
const style = "";
const _sfc_main$2 = {
  props: ["store", "changed", "save"],
  mounted() {
  }
};
const _hoisted_1$2 = { class: "flex items-center mb-4" };
const _hoisted_2$2 = { class: "w-1/3" };
const _hoisted_3$2 = { class: "ml-4" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    createBaseVNode("div", _hoisted_2$2, [
      renderSlot(_ctx.$slots, "default")
    ]),
    createBaseVNode("div", null, [
      createBaseVNode("button", {
        onClick: _cache[0] || (_cache[0] = (...args) => $props.save && $props.save(...args)),
        class: normalizeClass(["shadow text-090807 focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded", [$props.changed ? "bg-d7fc70" : "bg-8b8685"]]),
        type: "button"
      }, " Save ", 2)
    ]),
    createBaseVNode("div", _hoisted_3$2, toDisplayString($props.store.status), 1)
  ]);
}
const SaveButton = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = {
  props: ["store", "settingKey", "title"],
  data() {
    return {
      checked: this.getTargetValue()
    };
  },
  computed: {
    targetValue() {
      return this.getTargetValue();
    }
  },
  methods: {
    getTargetValue() {
      return this.store.settings[this.settingKey] === "on";
    },
    setTargetValue(flag) {
      this.store.settings[this.settingKey] = flag ? "on" : "off";
    }
  },
  watch: {
    checked(v) {
      if (this.getTargetValue() !== v)
        this.setTargetValue(v);
    },
    targetValue(v) {
      if (v !== this.checked)
        this.checked = v;
    }
  },
  mounted() {
  }
};
const _hoisted_1$1 = { class: "flex items-baseline" };
const _hoisted_2$1 = { class: "ml-2" };
const _hoisted_3$1 = { class: "block ml-6 text-8b8685 italic mb-2" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("article", null, [
    createBaseVNode("label", _hoisted_1$1, [
      withDirectives(createBaseVNode("input", {
        type: "checkbox",
        class: "form-checkbox self-center bg-090807 border-656463",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.checked = $event)
      }, null, 512), [
        [vModelCheckbox, $data.checked]
      ]),
      createBaseVNode("span", _hoisted_2$1, toDisplayString($props.title), 1)
    ]),
    createBaseVNode("span", _hoisted_3$1, [
      renderSlot(_ctx.$slots, "default")
    ])
  ]);
}
const BooleanFlag = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const defaultSettings = {
  language1: "en",
  language2: "th",
  outputPopup: "off",
  outputPopupAutoFocus: "on",
  outputSound: "on",
  outputNotificationTranscript: "on",
  outputClipboard: "on"
};
const VXDefaultSettings = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  defaultSettings
}, Symbol.toStringTag, { value: "Module" }));
const _imports_0 = "/assets/icon.92bcf271.png";
const _sfc_main = {
  props: ["_settings"],
  components: {
    SaveButton,
    BooleanFlag
  },
  data() {
    return {
      store: {
        savedSettings: JSON.parse(JSON.stringify(this._settings)),
        settings: this._settings,
        defaultSettings,
        status: ""
      },
      grantStatus: null,
      source: null
    };
  },
  mounted() {
    if (location.search.match(/err=not-allowed/)) {
      this.source = "not-allowed-err";
    }
    if (location.search.match(/err=audio-capture/)) {
      this.source = "audio-capture-err";
    }
  },
  methods: {
    shortcuts() {
      chrome.tabs.create({
        url: "chrome://extensions/shortcuts"
      });
    },
    async grantMic() {
      this.grantStatus = { ok: "pending" };
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
    save() {
      const newSettings = JSON.parse(JSON.stringify(this.store.settings));
      chrome.storage.sync.set(newSettings, () => {
        this.store.savedSettings = newSettings;
        this.store.status = "All changes saved";
      });
    }
  },
  computed: {
    changed() {
      return JSON.stringify(this.store.settings) !== JSON.stringify(this.store.savedSettings);
    }
  },
  watch: {
    changed() {
      if (this.store.status)
        this.store.status = "";
    }
  }
};
const _hoisted_1 = { key: 0 };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h1", { class: "text-8b8685 text-4xl" }, "vx options", -1);
const _hoisted_3 = { class: "max-w-xl" };
const _hoisted_4 = {
  key: 0,
  class: "mb-4 text-xl bg-yellow-900 rounded p-4 text-white border border-yellow-400"
};
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("strong", { class: "text-bbeeff" }, "Hey there!", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("h2", { class: "text-2xl text-d7fc70 mt-6 mb-4" }, "Microphone permission", -1);
const _hoisted_7 = {
  key: 1,
  class: "mb-4 text-xl bg-yellow-900 rounded p-4 text-white border border-yellow-400"
};
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("strong", { class: "text-bbeeff" }, "Hey there!", -1);
const _hoisted_9 = { class: "flex items-center mb-4" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "w-1/3 flex-none" }, null, -1);
const _hoisted_11 = {
  key: 0,
  class: "mt-2 text-teal-300"
};
const _hoisted_12 = {
  key: 1,
  class: "mt-2 text-green-300"
};
const _hoisted_13 = {
  key: 2,
  class: "mt-2 text-red-300"
};
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("h2", { class: "text-2xl text-d7fc70 mt-6 mb-4" }, "Language settings", -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("p", { class: "text-8b8685 mb-4" }, [
  /* @__PURE__ */ createTextVNode(" Enter a BCP 47 language tag, such as "),
  /* @__PURE__ */ createBaseVNode("em", null, "en-US"),
  /* @__PURE__ */ createTextVNode(" or "),
  /* @__PURE__ */ createBaseVNode("em", null, "en-GB"),
  /* @__PURE__ */ createTextVNode(". The first language is the language that will be listened to when you click on the "),
  /* @__PURE__ */ createBaseVNode("span", { class: "inline-block h-0 w-6 align-middle" }, [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_0,
      class: "absolute w-6 h-6",
      style: { "transform": "translateY(-50%)" }
    })
  ]),
  /* @__PURE__ */ createTextVNode(" Mic button. You can activate other languages via keyboard shortcuts. ")
], -1);
const _hoisted_16 = { class: "flex items-baseline mb-4" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("div", { class: "w-1/3" }, [
  /* @__PURE__ */ createBaseVNode("label", {
    class: "block font-bold md:text-right mb-1 md:mb-0 pr-4",
    for: "first_language"
  }, " First language ")
], -1);
const _hoisted_18 = { class: "w-2/3" };
const _hoisted_19 = { class: "flex items-baseline mb-4" };
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("div", { class: "w-1/3" }, [
  /* @__PURE__ */ createBaseVNode("label", {
    class: "block font-bold md:text-right mb-1 md:mb-0 pr-4",
    for: "second_language"
  }, " Second language ")
], -1);
const _hoisted_21 = { class: "w-2/3" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("h2", { class: "text-2xl text-d7fc70 mt-6 mb-4" }, "Keyboard shortcuts", -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("p", { class: "text-8b8685 mb-4" }, [
  /* @__PURE__ */ createBaseVNode("strong", null, "Tip:"),
  /* @__PURE__ */ createTextVNode(" Set these keyboard shortcuts to \u201CGlobal\u201D to use them outside Google Chrome. ")
], -1);
const _hoisted_24 = { class: "flex items-center mb-4" };
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("div", { class: "w-1/3" }, null, -1);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("h2", { class: "text-2xl text-d7fc70 mt-6 mb-4" }, "Output settings", -1);
const _hoisted_27 = { class: "flex items-baseline mb-4" };
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("div", { class: "w-1/3" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "block font-bold md:text-right mb-1 md:mb-0 pr-4" }, " Overlay / Popup ")
], -1);
const _hoisted_29 = { class: "w-2/3" };
const _hoisted_30 = { class: "flex items-baseline mb-4" };
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("div", { class: "w-1/3" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "block font-bold md:text-right mb-1 md:mb-0 pr-4" }, "Sound")
], -1);
const _hoisted_32 = { class: "w-2/3" };
const _hoisted_33 = { class: "flex items-baseline mb-4" };
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("div", { class: "w-1/3" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "block font-bold md:text-right mb-1 md:mb-0 pr-4" }, " Notification ")
], -1);
const _hoisted_35 = { class: "w-2/3" };
const _hoisted_36 = { class: "flex items-baseline mb-4" };
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("div", { class: "w-1/3" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "block font-bold md:text-right mb-1 md:mb-0 pr-4" }, " Clipboard ")
], -1);
const _hoisted_38 = { class: "w-2/3" };
const _hoisted_39 = /* @__PURE__ */ createStaticVNode('<p class="text-8b8685 mt-8"> Source code available at <a href="https://github.com/dtinth/vxchrome" target="_blank" class="text-8b8685 underline" rel="noopener noreferrer">github.com/dtinth/vxchrome</a>.<br> Migrated to Manifest V3 by <a href="https://github.com/kappaflow" target="_blank" class="text-8b8685 underline" rel="noopener noreferrer">KappaFlow</a><br><a href="https://destream.net/live/KappaFlow/donate" target="_blank" class="text-8b8685 underline" rel="noopener noreferrer">buy me a coffee</a> or <a href="https://dt.in.th/go/coffee" target="_blank" class="text-8b8685 underline" rel="noopener noreferrer">buy dtinth a coffee</a>, if you feel like doing it ;). </p>', 1);
const _hoisted_40 = { class: "fixed inset-x-0 bottom-0 px-8 bg-090807" };
const _hoisted_41 = { class: "max-w-xl pt-4" };
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("div", { class: "text-yellow-300 font-bold" }, "Unsaved changes", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SaveButton = resolveComponent("SaveButton");
  const _component_BooleanFlag = resolveComponent("BooleanFlag");
  return $data.store ? (openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    createBaseVNode("div", _hoisted_3, [
      $data.source === "audio-capture-err" ? (openBlock(), createElementBlock("div", _hoisted_4, [
        _hoisted_5,
        createTextVNode(" It seems like Google Chrome did not detect any microphone on your machine. Make make sure your device has been set up properly! ")
      ])) : createCommentVNode("", true),
      _hoisted_6,
      $data.source === "not-allowed-err" ? (openBlock(), createElementBlock("div", _hoisted_7, [
        _hoisted_8,
        createTextVNode(" It seems like you need to grant vx access to the microphone first. Just click the button below... ")
      ])) : createCommentVNode("", true),
      createBaseVNode("div", _hoisted_9, [
        _hoisted_10,
        createBaseVNode("div", null, [
          createBaseVNode("button", {
            onClick: _cache[0] || (_cache[0] = (...args) => $options.grantMic && $options.grantMic(...args)),
            type: "button",
            class: "block shadow bg-blue-500 text-white focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded"
          }, " Grant microphone permission "),
          $data.grantStatus && $data.grantStatus.ok === "pending" ? (openBlock(), createElementBlock("div", _hoisted_11, " Asking for permission... ")) : $data.grantStatus && $data.grantStatus.ok ? (openBlock(), createElementBlock("div", _hoisted_12, " Grant successful! Try using the extension by clicking on the microphone button. ")) : $data.grantStatus && !$data.grantStatus.ok ? (openBlock(), createElementBlock("div", _hoisted_13, " Grant unsuccessful... " + toDisplayString($data.grantStatus.message), 1)) : createCommentVNode("", true)
        ])
      ]),
      _hoisted_14,
      _hoisted_15,
      createBaseVNode("div", _hoisted_16, [
        _hoisted_17,
        createBaseVNode("div", _hoisted_18, [
          withDirectives(createBaseVNode("input", {
            class: "block w-full form-input bg-090807 border-454443 hover:border-656463 shadow placeholder-8b8685",
            id: "first_language",
            type: "text",
            placeholder: "Enter second language",
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.store.settings.language1 = $event)
          }, null, 512), [
            [vModelText, $data.store.settings.language1]
          ])
        ])
      ]),
      createBaseVNode("div", _hoisted_19, [
        _hoisted_20,
        createBaseVNode("div", _hoisted_21, [
          withDirectives(createBaseVNode("input", {
            class: "block w-full form-input bg-090807 border-454443 hover:border-656463 shadow placeholder-8b8685",
            id: "second_language",
            type: "text",
            placeholder: "Enter second language",
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.store.settings.language2 = $event)
          }, null, 512), [
            [vModelText, $data.store.settings.language2]
          ])
        ])
      ]),
      createVNode(_component_SaveButton, {
        changed: $options.changed,
        save: $options.save,
        store: $data.store
      }, null, 8, ["changed", "save", "store"]),
      _hoisted_22,
      _hoisted_23,
      createBaseVNode("div", _hoisted_24, [
        _hoisted_25,
        createBaseVNode("div", null, [
          createBaseVNode("a", {
            onClick: _cache[3] || (_cache[3] = (...args) => $options.shortcuts && $options.shortcuts(...args)),
            class: "block shadow bg-blue-500 text-white focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded"
          }, " Customize keyboard shortcuts ")
        ])
      ]),
      _hoisted_26,
      createBaseVNode("div", _hoisted_27, [
        _hoisted_28,
        createBaseVNode("div", _hoisted_29, [
          createVNode(_component_BooleanFlag, {
            store: $data.store,
            "setting-key": "outputPopup",
            title: "Display an overlay or popup"
          }, {
            default: withCtx(() => [
              createTextVNode(" When this is turned on, an overlay will be displayed when you activate this extension inside a web page. Otherwise, a pop-up dialog is displayed. ")
            ]),
            _: 1
          }, 8, ["store"]),
          createVNode(_component_BooleanFlag, {
            store: $data.store,
            "setting-key": "outputPopupAutoFocus",
            title: "Auto-focus popup"
          }, {
            default: withCtx(() => [
              createTextVNode(" If unchecked, the popup window may appear below other windows. Enabling this option ensures that the text being recognized is displayed, but can also be annoying. ")
            ]),
            _: 1
          }, 8, ["store"])
        ])
      ]),
      createBaseVNode("div", _hoisted_30, [
        _hoisted_31,
        createBaseVNode("div", _hoisted_32, [
          createVNode(_component_BooleanFlag, {
            store: $data.store,
            "setting-key": "outputSound",
            title: "Enable sound"
          }, {
            default: withCtx(() => [
              createTextVNode(" When this is turned on, a sound will be played when recognition is started, when recognition is stopped, and each time text is copied to the clipboard. ")
            ]),
            _: 1
          }, 8, ["store"])
        ])
      ]),
      createBaseVNode("div", _hoisted_33, [
        _hoisted_34,
        createBaseVNode("div", _hoisted_35, [
          createVNode(_component_BooleanFlag, {
            store: $data.store,
            "setting-key": "outputNotificationTranscript",
            title: "Show transcript notifications"
          }, {
            default: withCtx(() => [
              createTextVNode(" When this is turned on, a separate notification will be sent each time text is copied to the clipboard. ")
            ]),
            _: 1
          }, 8, ["store"])
        ])
      ]),
      createBaseVNode("div", _hoisted_36, [
        _hoisted_37,
        createBaseVNode("div", _hoisted_38, [
          createVNode(_component_BooleanFlag, {
            store: $data.store,
            "setting-key": "outputClipboard",
            title: "Copy to clipboard"
          }, {
            default: withCtx(() => [
              createTextVNode(" You can uncheck this\u2026 but isn't it why you installed this extension? ")
            ]),
            _: 1
          }, 8, ["store"])
        ])
      ]),
      createVNode(_component_SaveButton, {
        changed: $options.changed,
        save: $options.save,
        store: $data.store
      }, null, 8, ["changed", "save", "store"]),
      _hoisted_39
    ]),
    withDirectives(createBaseVNode("div", _hoisted_40, [
      createBaseVNode("div", _hoisted_41, [
        createVNode(_component_SaveButton, {
          changed: $options.changed,
          save: $options.save,
          store: $data.store
        }, {
          default: withCtx(() => [
            _hoisted_42
          ]),
          _: 1
        }, 8, ["changed", "save", "store"])
      ])
    ], 512), [
      [vShow, $options.changed]
    ])
  ])) : createCommentVNode("", true);
}
const Options = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
__vitePreload(() => Promise.resolve().then(() => VXDefaultSettings), true ? void 0 : void 0).then(({ defaultSettings: defaultSettings2 }) => {
  chrome.storage.sync.get(defaultSettings2, (_settings) => {
    createApp(Options, { _settings }).mount("#options");
  });
});
