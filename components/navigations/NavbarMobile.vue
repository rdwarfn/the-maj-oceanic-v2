<template>
  <v-app-bar
    fixed
    app
    v-bind="$attrs"
    max-width="100vw"
    class="hidden-lg-and-up flex-nowrap"
    hide-on-scroll
  >
    <v-row
      no-gutters
      align="center"
      justify="space-between"
      class="flex-nowrap"
    >
      <v-col>
        <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
        <slot name="button-nav-icon" />
      </v-col>
      <v-col class="text-center align-self-start">
        <v-btn
          v-ripple
          to="/"
          :draggable="false"
          class="text-center align-center"
          depressed
          text
          nuxt
        >
          <img
            class="mx-auto _img--white"
            :draggable="false"
            :src="require('~/assets/images/svg/tmo_main_logo_white.svg?data')"
            alt="~/assets/images/svg/tmo_main_logo_black.svg?data"
            width="156px"
            height="auto"
          >
          <img
            class="mx-auto _img--black"
            :draggable="false"
            :src="require('~/assets/images/svg/tmo_main_logo_black.svg?data')"
            alt="~/assets/images/svg/tmo_main_logo_black.svg?data"
            width="156px"
            height="auto"
          >
        </v-btn>
      </v-col>
      <v-col class="text-center">
        <v-btn
          class="_inquire--primary-black"
          color="primary"
          tile
          depressed
          dark
          @click="() => $router.push({ path: '/contact-us'})"
        >
          inquire
        </v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    isDrawerOpen: {
      type: Boolean,
      default: false
    },
    isIntersecting: { type: Boolean }
  },

  data () {
    return {
      drawer: this.isDrawerOpen
    }
  }
}
</script>

<style lang="scss" scoped>
  $primary: #208CB2;
  $secondary: #232323;
  $cubic: cubic-bezier(0.175, 0.885, 0.32, 1.275);

  ::v-deep .v-btn:not(.v-btn--round).v-size--default {
    &._inquire--primary-black {
      letter-spacing: 2px;
      @include poly-fluid-sizing ('width', (375px:59px, 768px:133px));
      @include poly-fluid-sizing ('height', (375px:22px, 768px:30px));
      @include poly-fluid-sizing ('font-size', (375px:8px, 768px:13px));
      @include poly-fluid-sizing ('font-size', (375px:8px, 768px:13px));
    }
  }

  .v-app-bar {
    -webkit-transition:
      background-color .8s ease-out,
      display .8s ease-out,
      color .8s ease-out !important;
    -moz-transition:
      background-color .8s ease-out,
      display .8s ease-out,
      color .8s ease-out !important;
    transition:
      background-color .8s ease-out,
      display .8s ease-out,
      color .8s ease-out !important;

    ._img--white { display: none !important; }
    ._img--black { display: $secondary !important; }

    a._inquire {
      text-transform: uppercase !important;
      font-family: 'Montserrat', sans-serif !important;
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
      background-color: #ffffff !important;
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

      ._inquire--primary-black {
        background-color: $secondary !important;
        border-color: $secondary !important;
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
