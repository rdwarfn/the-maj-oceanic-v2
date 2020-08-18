<template>
  <v-btn
    nuxt
    tile
    depressed
    v-bind="props"
  ></v-btn>
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
