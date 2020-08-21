<template>
  <v-app-bar
    class="hidden-md-and-up"
    elevate-on-scroll
    fixed app
    min-height="80"
    max-width="100vw"
  >
    <v-row no-gutters align="center" justify="space-between" class="mt-5">
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
      <slot name="button-nav-icon"></slot>
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
      <v-btn
        depressed
        small tile text
        nuxt to="#"
      >book</v-btn>
    </v-row>
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
