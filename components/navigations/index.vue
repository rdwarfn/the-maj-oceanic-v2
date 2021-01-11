<template>
  <v-layout
    class="__nav_bar align-self-center"
    v-bind:class="{
      animated: isIntersecting
    }"
    app
  >
    <client-only>
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
              <v-btn
                color="white"
                depressed text tile
                class="btn-s font-md-12"
              >
                the maj group
              </v-btn>
            </v-col>
          </v-row>
        </v-col>

        <v-col
          cols="4"
          md="3"
          class="text-center rounded py-2 px-3 mx-2"
          v-ripple
        >
          <nuxt-link class="mx-auto" to="/" replace>
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
              <v-btn
                to="#"
                text nuxt
                color="white"
                class="btn-s __btn font-md-12"
              >
                login
              </v-btn>
            </v-col>

            <v-col cols="auto">
              <v-btn
                to="/contact-us"
                color="primary"
                class="btn-s font-md-12"
                depressed tile nuxt
              >
                inquire now
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

    <!-- row list  -->

      <v-flex
        class="nav_row--list d-flex mx-auto static"
        :class="{
          animated: isIntersecting
        }"
      >
        <v-row
          no-gutters
          align="center"
          justify="space-around"
        >

          <navigation-menu :isIntersecting="!isIntersecting" />

          <!-- <v-col cols="auto" class="rounded mr-lg-10" v-if="isIntersecting">
            <v-row align="center">
              <v-col>
                <v-btn
                  to="#"
                  text x-small nuxt
                  class="px-0 font-md-12"
                >
                  login
                </v-btn>

              </v-col>

              <v-col cols="auto">
                <v-btn
                  class="btn-s ml-1 font-md-12"
                  depressed tile nuxt dark
                  to="/contact-us"
                >
                  Inquire Now
                </v-btn>
              </v-col>
            </v-row>
          </v-col> -->

          <v-col
            v-show="isIntersecting"
            cols="auto"
            v-bind:class="{
              intersec: !isIntersecting
            }">
            <v-btn
              text tile nuxt
              class="font-md-12">
              login
            </v-btn>
          </v-col>

          <v-col
            v-show="isIntersecting"
            cols="auto"
            v-bind:class="{
              intersec: !isIntersecting
            }">
            <v-btn
              class="btn-s btn--inquire font-md-12"
              to="/contact-us"
              depressed tile nuxt dark
            >
              Inquire Now
            </v-btn>
          </v-col>
        </v-row>
      </v-flex>
    </client-only>
  </v-layout>
</template>

<script>
import navigationMenu from './Menu.vue';
export default {
  props: {
    isIntersecting: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: true
    }
  },

  components: {
    navigationMenu
  },

  data () {
    return {
      search_input: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/scss/variables.scss';
$cubic: cubic-bezier(0.175, 0.885, 0.32, 1.275);
$primary: #208CB2;
$secondary: #232323;

@media (max-width: 1362px) {
  .font-md-12 {
    font-size: 12px !important;
  }
}

::v-deep .v-input {
  .v-input__slot {
    padding: 0 !important;
  }
  ::placeholder {
    font-family: 'Montserrat', sans-serif;
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
  display: none;
  @media #{map-get($display-breakpoints, 'lg-and-up')} {
    z-index: 10 !important;
    display: grid;
    position: fixed !important;
    align-items: flex-end;
    max-height: 192px;
    background: rgba(47, 46, 46, 0.4) !important;
    height: 30%;
    width: 100vw;
    z-index: 2;
    transition:
      transform .8s ease-in-out,
      box-shadow .8s ease-in-out;
    &.animated {
      transform: translateY(-115px); //1204
      box-shadow: 0px 20px 60px rgba(138, 149, 158, 0.2);
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
        // padding: 0 10rem;
        transition:
          background-color .8s ease-in-out,
          color .8s linear,
          height .8s linear,
          width .8s $cubic;
        &.animated {
          background-color: white;
          color: #232323;
          height: 78px;
          width: 100%;
          // padding: 0 48px !important;
          padding-left: 20px;
          // @include poly-fluid-sizing ('padding-left', (960px:20px, 1440px:48px));
          @include poly-fluid-sizing ('padding-right', (960px:20px, 1440px:48px));
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
    font-family: 'Montserrat', sans-serif;
    padding: 0 4px;
    font-size: 13px;
    font-weight: bold;
    text-transform: uppercase;
  }
}
</style>
