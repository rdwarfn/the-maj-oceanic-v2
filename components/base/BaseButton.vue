<template>
  <v-btn
    nuxt tile depressed dark
    v-bind="props"
    height="38"
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: 'Button',

  props: {
    props: Object
  },

  inheritAttrs: false
}
</script>

<style lang="scss" scoped>
  .v-btn {
    min-width: 132px !important;
  }

  a .v-btn--outlined, .primary--text {
    &:hover {
      color: #ffffff !important;
      background-color: #208cb2 !important;
      border-color: #208cb2 !important;
    }
  }

</style>
