<template>
  <button type="button" class="btn btn-primary" @click="nextStep()" :class="styles">
    {{ title }}
  </button>
</template>

<script>
export default {
  props: ['title', 'styles'],
  methods: {
    nextStep() {
      this.$emit('call-submit');
    },
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
