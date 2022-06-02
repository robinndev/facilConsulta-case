<template>
  <div class="progress-number">
    <div class="progress" :class="estilo">
      <div
        class="progress-bar bg-success"
        role="progressbar"
        style="width: 50%"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    <h4 class="number-bar">{{ number }}</h4>
  </div>
</template>

<script>
export default {
  props: ['estilo', 'number'],
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
