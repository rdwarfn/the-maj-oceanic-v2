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
          align="center"
          justify="start"
        >
            <v-col cols="4" class="mr-md-3">
            <v-skeleton-loader
              type="image"
              width="102"
              height="36"
              :loading="loading"
            >
            <form style="max-width: 150px" title="Search">
              <v-container class="px-0 py-0">
                <v-text-field
                  background-color="transparent"
                  class="text-uppercase"
                  label="search"
                  placeholder="SEARCH"
                  prepend-icon="$search"
                  v-model="search_input"
                  dark
                  dense
                  clearable
                  flat
                  single-line
                  solo
                  style="max-height: 32px"
                >
                </v-text-field>
              </v-container>
            </form>
          </v-skeleton-loader>
          </v-col>

          <v-col cols="auto">
          <v-skeleton-loader
            class="mt-2"
            type="text"
            min-width="123"
            :loading="loading"
          >
            <v-btn
              title="The Maj Group"
              class="btn-s"
              dark
              depressed
              text
            >
              the maj group
            </v-btn>
          </v-skeleton-loader>
          </v-col>
        </v-row>
      </v-col>

      <v-col
        cols="4"
        md="3"
        class="text-center rounded py-2 px-3 mx-2"
        v-ripple
      >
      <v-skeleton-loader
        type="image"
        max-height="52"
        max-width="350"
        :loading="loading"
      >
        <nuxt-link class="mx-auto" to="/" title="The Maj Oceanic">
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
      </v-skeleton-loader>
      </v-col>

      <v-col cols="3" offset="1">
        <v-row
          no-gutters
          align="center"
          justify="space-around"
        >
          <v-col cols="auto">
          <v-skeleton-loader
            type="button"
            :loading="loading"
          >
            <v-btn
              title="Login"
              class="btn-s"
              dark
              text
            >
              login
            </v-btn>
          </v-skeleton-loader>
          </v-col>

          <v-col cols="auto">
            <v-skeleton-loader
              type="image"
              width="137"
              height="36"
              :loading="loading"
            >
            <v-btn
              title="Iquire Now"
              class="btn-s __btn_inquire"
              dark
              depressed
              tile
              outlined
            >
              inquire now
            </v-btn>
            </v-skeleton-loader>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

  <!-- row list  -->
  <component
    v-bind:is="'div'"
  >
    <v-row
      v-if="loading"
      align="center"
      justify="center"
      style="align-self: flex-end !important"
    >
      <v-skeleton-loader
        :loading="loading"
        type="divider"
        width="90%"
        class="px-3"
      >
      </v-skeleton-loader>
      <v-skeleton-loader
        :loading="loading"
        :types="{'table-row': 'table-cell@5'}"
        type="table-row"
        width="100%"
        max-width="80%"
        class="px-5"
      ></v-skeleton-loader>
    </v-row>

    <v-flex
      v-else
      class="nav_row--list d-flex mx-auto px-3 static"
      :class="[$style.place_items_center, {
        animated: isIntersecting
      }]"
    >
      <v-row
        no-gutters
        align="center"
        justify="space-around"
      >
        <v-col cols="auto"
          v-if="isIntersecting"
        >
          <form class="__form_appbar_second" title="Search">
            <v-container class="pr-0">
              <v-text-field
                prepend-icon="$search"
                title="Search"
                class="__input_nav_bar my-auto"
                color="black"
                label="Search"
                placeholder="SEARCH"
                v-model="search_input"
                background-color="transparent"
                solo
                flat
                clearable
                single-line
              >
              </v-text-field>
            </v-container>
          </form>
        </v-col>

        <v-col class="text-center">
          <div>
            <t-navigation-menu
              :isIntersecting="!isIntersecting"
              :nav-list="sourceNav"
            />
          </div>
        </v-col>

        <v-col cols="auto" v-if="isIntersecting">
          <v-btn
            title="Book Now"
            class="btn-s"
            depressed
            tile
            outlined
          >
            book now
          </v-btn>
        </v-col>
      </v-row>
    </v-flex>
  </component>
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
      type: Array,
      default: () => []
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
  },

  computed: {
    listCount () {
      return this.sourceNav.length
    }
  }
}
</script>

<style lang="scss">
  .v-input__slot {
    padding: 0 !important;
  }

  input::placeholder {
    font-family: 'Verlag Bold', sans-serif;
    font-size: 13px;
    font-weight: bold;
    opacity: 1;
    letter-spacing: 2px !important;
    text-transform: uppercase !important;
  }
</style>

<style lang="scss" scoped>
$cubic: cubic-bezier(0.175, 0.885, 0.32, 1.275);
.__nav_bar {
  z-index: 10 !important;
  @media (min-width: 0px) and (max-width: 959px) {
    display: none;
  }

  @media (min-width: 960px) {
    display: grid;
    align-items: flex-end;
    max-height: 325px;
    min-height: 100px;
    background-color: rgba(47, 46, 46, 0.35) !important;
    height: 30%;
    position: fixed;
    width: 100vw;
    z-index: 2;
    transition:
      transform .8s ease-in-out,
      box-shadow .8s ease-in-out;
    &.animated {
      transform: translateY(-60%);
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
        transition:
          background-color .8s ease-in-out,
          color .8s linear,
          display .1s linear,
          position .8s linear,
          height .8s linear,
          width .8s $cubic;
        &.animated {
          background-color: white;
          color: #232323;
          height: 100px;
          width: 100%;
        }
      }
    }

    .__btn_inquire {
      transition: background-color .3s ease-in-out;
      &:hover {
        border-color: transparent;
        background-color: #208CB2;
      }
    }
  }

  .__input_nav_bar {
    place-self: center;
    max-height: 42px !important;
    text-transform: uppercase;
  }

  .__form_appbar_second {
    max-width: 125px;
    @media (min-width: 1264px) {
      max-width: 140px !important;
    }
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
