<template>
  <v-app-bar
    z-in
    class="hidden-md-and-up"
    clipped-left
    fixed
    elevate-on-scroll
    app
  >
    <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
    <slot name="button-nav-icon"></slot>
    <v-spacer />
    <nuxt-link
      to="/"
      class="text-center align-center"
      v-ripple
    >
      <img
        src="~/assets/images/svg/tmo_main_logo_black.svg?data"
        :alt="require('~/assets/images/svg/tmo_main_logo_black.svg?data')"
        class="mx-auto"
        width="156px"
        height="auto"
      />
    </nuxt-link>
    <v-spacer />
    <v-btn text>book</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavbarMobile',

  props: {
    isDrawerOpen: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      drawer: this.isDrawerOpen,
    }
  }
}
</script>
