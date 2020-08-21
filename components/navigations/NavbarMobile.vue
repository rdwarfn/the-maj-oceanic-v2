<template>
  <v-app-bar
    fixed app
    v-bind="$attrs"
    min-height="80"
    max-width="100vw"
    elevate-on-scroll
    class="hidden-md-and-up flex-nowrap"
  >
    <v-row no-gutters align="center" justify="space-between" class="mt-5 flex-nowrap">
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
      <slot name="button-nav-icon"></slot>
      <nuxt-link
        to="/"
        v-ripple
        draggable="false"
        class="text-center align-center rounded"
      >
        <img
          class="mx-auto _img--white"
          draggable="false"
          v-bind:src="require('~/assets/images/svg/tmo_main_logo_white.svg?data')"
          alt="~/assets/images/svg/tmo_main_logo_black.svg?data"
          width="156px"
          height="auto"
        />
        <img
          class="mx-auto _img--black"
          draggable="false"
          v-bind:src="require('~/assets/images/svg/tmo_main_logo_black.svg?data')"
          alt="~/assets/images/svg/tmo_main_logo_black.svg?data"
          width="156px"
          height="auto"
        />
        <div class="_img"></div>
      </nuxt-link>
      <nuxt-link v-ripple to="#" class="text-wrap _inquire _inquire--primary"
      >
      {{ $vuetify.breakpoint.xs ? 'inquire now' : 'book' }}
      </nuxt-link>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  inheritAttrs: false,

  name: 'NavbarMobile',

  props: {
    isDrawerOpen: {
      type: Boolean,
      default: false
    },
    isIntersecting: { type: Boolean }
  },

  data () {
    return {
      drawer: this.isDrawerOpen,
    }
  },

  mounted () {
    console.log(this.$vuetify.breakpoint.sm)
  }
}
</script>

<style lang="scss" scoped>
  $primary: #208CB2;
  $secondary: #232323;
  $cubic: cubic-bezier(0.175, 0.885, 0.32, 1.275);

  .v-app-bar {
    -webkit-transition:
      background-color 5s ease-out !important,
      display 5s ease-out !important,
      color 5s ease-out !important;
    -moz-transition:
      background-color 5s ease-out !important,
      display 5s ease-out !important,
      color 5s ease-out !important;
    transition:
      background-color 5s ease-out !important,
      display 5s ease-out !important,
      color 5s ease-out !important;

    ._img--white { display: none !important; }
    ._img--black { display: $secondary !important; }

    a._inquire {
      text-transform: uppercase !important;
      font-family: 'Verlag Bold', sans-serif !important;
      text-align: center !important;
      white-space: normal !important;
      @include poly-fluid-sizing('font-size', (367px:7px, 768px:13px));
      @include poly-fluid-sizing('width', (367px:56px, 599px:98px));
      letter-spacing: 2px !important;
      height: auto;
      padding: {
        top: 3px !important;
        left: 4px !important;
        right: 4px !important;
      }
      color: white !important;
    }

    &--is-scrolled {
      a._inquire {
        color: $secondary !important;
        @media (max-width: 599px) {
          color: white !important;
          background-color: $secondary !important;
          &:hover {
            color: $secondary !important;
            background-color: transparent !important;
            border: thin solid $secondary !important;
          }
        }
      }
    }

    &--hide-shadow {
      background-color: rgba(35, 35, 35, 0.3) !important;
      ._img--white { display: block !important; }
      ._img--black { display: none !important; }

      a._inquire {
        @media (max-width: 599px) {
          background-color: $primary !important;
          color: white !important;
          &:hover {
            background-color: transparent !important;
            border: thin solid $primary !important;
          }
        }
      }
    }
  }

</style>
