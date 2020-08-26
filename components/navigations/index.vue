<template>
  <v-layout
    class="__nav_bar align-self-center static"
    v-bind:class="{
      animated: isIntersecting
    }"
    app
  >
    <v-row
      no-gutters
      align="center"
      justify="space-between"
      class="nav_row mx-auto static"
      v-bind:class="[{
          animated: isIntersecting
        }
      ]"
    >
      <v-col cols="4">
        <v-row
          no-gutters
          align="end"
          justify="start"
        >
            <v-col cols="4" class="mr-md-3">
              <v-skeleton-loader
                type="image"
                width="102"
                height="36"
                :loading="loading"
              >
              <form style="max-width: 150px">
                <v-container class="px-0 py-0">
                  <v-text-field
                    background-color="transparent"
                    class="text-uppercase"
                    label="search"
                    placeholder="SEARCH"
                    prepend-icon="$search"
                    v-model="search_input"
                    hide-details
                    dark dense clearable flat single-line solo
                  >
                  </v-text-field>
                </v-container>
              </form>
            </v-skeleton-loader>
          </v-col>

          <v-col cols="auto">
            <v-tooltip bottom>
              <template v-slot:activator="{on, attrs}">
                <v-btn
                  to="/#"
                  v-bind="attrs"
                  v-on="on"
                  color="white"
                  depressed text tile
                  class="btn-s font-md-12"
                >
                  the maj group
                </v-btn>
              </template>
              <span>The Maj Group</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-col>

      <v-col
        cols="4"
        md="3"
        class="text-center rounded py-2 px-3 mx-2"
        v-ripple
      >
        <nuxt-link class="mx-auto" to="/">
          <v-img
            :lazy-src="require('~/assets/images/svg/tmo_main_logo_white.svg?data')"
            :src="require('~/assets/images/svg/tmo_main_logo_white.svg?data')"
            max-width="319"
            max-height="56"
            class="mx-auto"
          >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
          </v-img>
        </nuxt-link>
      </v-col>

      <v-col cols="3" offset="1">
        <v-row
          no-gutters
          align="end"
          justify="space-around"
        >
          <v-col cols="auto">
            <v-tooltip bottom>
              <template v-slot:activator="{on, attrs}">
                <v-btn
                  to="#"
                  v-bind="attrs"
                  v-on="on"
                  text nuxt
                  color="white"
                  class="btn-s __btn font-md-12"
                >
                  login
                </v-btn>
              </template>
              <span>Login</span>
            </v-tooltip>
          </v-col>

          <v-col cols="auto">
            <v-tooltip bottom>
              <template v-slot:activator="{on, attrs}">
                <v-btn
                  to="/contact-us"
                  v-bind="attrs"
                  v-on="on"
                  color="primary"
                  class="btn-s font-md-12"
                  depressed tile nuxt
                >
                  inquire now
                </v-btn>
              </template>
              <span>Inquire Now</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

  <!-- row list  -->

    <v-flex
      class="nav_row--list d-flex mx-auto static"
      :class="[$style.place_items_center, {
        animated: isIntersecting
      }]"
    >
      <v-row
        no-gutters
        align="center"
        justify="space-around"
      >

        <t-navigation-menu
          :isIntersecting="!isIntersecting"
          :nav-list="sourceNav"
        />

        <v-col cols="auto" class="rounded mr-8 mr-lg-10" v-if="isIntersecting">
          <v-tooltip bottom>
            <template v-slot:activator="{on, attrs}">
              <v-btn
                v-bind="attrs"
                v-on="on"
                to="#"
                text x-small nuxt
                class="px-0 font-md-12"
              >
                login
              </v-btn>
            </template>
            <span>Login</span>
          </v-tooltip>
        </v-col>

        <v-col cols="auto" v-if="isIntersecting">
          <v-tooltip bottom>
            <template v-slot:activator="{on, attrs}">
              <v-btn
                v-bind="attrs"
                v-on="on"
                class="btn-s font-md-12"
                depressed tile nuxt dark
                to="/contact-us"
              >
                Inquire Now
              </v-btn>
            </template>
            <span>Inquire Now</span>
          </v-tooltip>
        </v-col>
      </v-row>
    </v-flex>
  </v-layout>
</template>

<script>
import tNavigationMenu from './Menu.vue';
export default {
  name: 'Navigation',

  props: {
    isIntersecting: {
      type: Boolean,
      default: false
    },
    sourceNav: {
      type: [Array, Object]
    },
    loading: {
      type: Boolean,
      default: true
    }
  },

  components: {
    tNavigationMenu
  },

  data () {
    return {
      search_input: ''
    }
  }
}
</script>

<style lang="scss" scoped>
$cubic: cubic-bezier(0.175, 0.885, 0.32, 1.275);
$primary: #208CB2;
$secondary: #232323;

@media (max-width: 1264px) {
  .font-md-12 {
    font-size: 12px !important;
  }
}

::v-deep .v-input {
  .v-input__slot {
    padding: 0 !important;
  }
  ::placeholder {
    font-family: 'Verlag Bold', sans-serif;
    font-size: 13px;
    font-weight: bold;
    opacity: 1 !important;
    letter-spacing: 2px !important;
    text-transform: uppercase !important;

    @media (max-width: 1264px) {
      font-size: 12px !important;
    }
  }

  &.theme--dark {
    ::placeholder {
      color: #FFFFFF !important;
    }
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: #FFFFFF  !important;
    }
    ::-ms-input-placeholder { /* Microsoft Edge */
      color: #FFFFFF ;
    }
  }

  &.theme--light {
    ::placeholder {
      color: #232323 !important;
    }
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: #232323 !important;
    }
    ::-ms-input-placeholder { /* Microsoft Edge */
      color: #232323 !important;
    }
  }
}

::v-deep a.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined):not(.primary) {
  background-color: $secondary !important;
  color: #ffffff !important;
}

::v-deep a.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined).primary {
  color: #ffffff !important;
}


.__nav_bar {
  z-index: 10 !important;
  @media (min-width: 0px) and (max-width: 959px) {
    display: none;
  }

  @media (min-width: 960px) {
    display: grid;
    position: fixed !important;
    align-items: flex-end;
    max-height: 192px;
    min-height: 100px;
    background-color: rgba(47, 46, 46, 0.35) !important;
    height: 30%;
    width: 100vw;
    z-index: 2;
    transition:
      transform .8s ease-in-out,
      box-shadow .8s ease-in-out;
    &.animated {
      // transform: translateY(-60%); //1280
      transform: translateY(-50%); //1204
      @media (min-width: 1440px) {
        transform: translateY(-58%) !important;
      }
      box-shadow:
        0 3px 5px -1px rgba(0,0,0,.2),
        0 6px 10px 0 rgba(0,0,0,.14),
        0 1px 18px 0 rgba(0,0,0,.12) !important;
    }

    .nav_row {
      margin-top: 2rem;
      place-self: baseline;
      opacity: 1;
      width: 90%;
      transform: scale(1);
      transition:
        opacity .3s ease-in-out,
        transform 1s ease-in-out;
      &.animated {
        opacity: 0;
        transform: scale(0.9, 0.9);
      }

      &--list {
        align-self: flex-end !important;
        justify-self: center;
        width: 90%;
        background-color: transparent;
        border-top: 1px solid white;
        color: white;
        height: 44px;
        top: unset;
        padding: 0 10rem;
        transition:
          background-color .8s ease-in-out,
          color .8s linear,
          height .8s linear,
          width .8s $cubic;
        &.animated {
          background-color: white;
          color: #232323;
          height: 100px;
          width: 100%;
          padding: 0 48px !important;
        }
      }
    }

    a.__btn {
      transition:
        color .3s ease-out,
        background-color .3s ease-out,
        border .3s ease-out;
      &:hover {
        border-color: transparent;
        background-color: $primary !important;
      }

      &--inquire {
        &:hover {
          background-color: $primary !important;
        }
      }
    }
  }

  .__input_nav_bar {
    place-self: center;
    max-height: 42px !important;
    text-transform: uppercase;
  }

  .__link_appbar {
    font-family: 'Verlag Bold', sans-serif;
    padding: 0 4px;
    font-size: 13px;
    font-weight: bold;
    text-transform: uppercase;
  }
}
</style>

<style module src="~/assets/styles/css/_utilities.module.css" />
