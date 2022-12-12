<script>
export default {
  props: ['store', 'changed', 'save'],

  mounted() {
  },
};
</script>

<template>
  <div class="flex items-center mb-4">
    <div class="w-1/3"><slot></slot></div>
    <div>
      <button
        @click="save"
        class="
          shadow
          text-090807
          focus:shadow-outline focus:outline-none
          font-bold
          py-2
          px-4
          rounded
        "
        :class="[changed ? 'bg-d7fc70' : 'bg-8b8685']"
        type="button"
      >
        Save
      </button>
    </div>
    <div class="ml-4">
      {{ store.status }}
    </div>
  </div>
</template>
