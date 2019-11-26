<template>
  <q-banner :class="bgColor" dense inline-actions class="list-header-rounded text-white text-center">
    <span class="text-weight-bold text-center text-subtitle1"><slot></slot></span>
  </q-banner>
</template>

<script>
export default {
  props: ["bgColor"]
};
</script>

<style lang="scss" scoped>
  .list-header-rounded {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
</style>