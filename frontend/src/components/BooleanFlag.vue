<script>
export default {
  props: ['store', 'settingKey', 'title'],

  data() {
    return {
      checked: this.getTargetValue(),
    };
  },

  computed: {
    targetValue() {
      return this.getTargetValue();
    },
  },

  methods: {
    getTargetValue() {
      return this.store.settings[this.settingKey] === 'on';
    },
    setTargetValue(flag) {
      this.store.settings[this.settingKey] = flag ? 'on' : 'off';
    },
  },

  watch: {
    checked(v) {
      if (this.getTargetValue() !== v) this.setTargetValue(v);
    },
    targetValue(v) {
      if (v !== this.checked) this.checked = v;
    },
  },

  mounted() {
  },
};
</script>

<template>
  <article>
    <label class="flex items-baseline">
      <input
        type="checkbox"
        class="form-checkbox self-center bg-090807 border-656463"
        v-model="checked"
      />
      <span class="ml-2">{{ title }}</span>
    </label>
    <span class="block ml-6 text-8b8685 italic mb-2">
      <slot></slot>
    </span>
  </article>
</template>
