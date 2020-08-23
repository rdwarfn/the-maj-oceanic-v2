<template>
  <v-row no-gutters align="center" justify="space-around">
    <template v-for="data in NavList">
      <v-col cols="auto"
        :class="[
          'rounded',
          !isIntersecting && data.id < 3 ? 'mr-5 mr-lg-10' : ''
        ]"
        v-if="data.id < 4"
        :key="data.id"
      >
        <v-menu
          bottom right
          transition="slide-x-transition"
          open-on-hover
          v-bind:close-on-click="false"
          v-bind:close-on-content-click="false"
          tile
        >
          <template v-slot:activator="{ on: menu, attrs }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on: tooltip }">
                <v-btn
                  v-if="data.items.length"
                  v-bind="attrs"
                  v-on="{ ...tooltip, ...menu }"
                  text x-small
                  v-bind:dark="isIntersecting"
                  class="px-0 font-md-12"
                >
                  {{ data.title }}
                </v-btn>
                <v-btn
                  v-else
                  to="#"
                  v-bind="attrs"
                  v-on="{ ...tooltip, ...menu}"
                  text x-small
                  v-bind:dark="isIntersecting"
                  class="px-0 font-md-12"
                >
                  {{ data.title }}
                </v-btn>
              </template>
              <span>{{ data.title }}</span>
            </v-tooltip>
          </template>
          <v-list
            v-if="data.items.length"
            flat subheader dense tile
            max-width="150"
          >
            <v-list-group no-action value="true">
              <template v-slot:activator>
                <v-list-item-content>
                  <v-tooltip bottom>
                    <template v-slot:activator="{on, attrs}">
                      <v-list-item-title
                        v-bind="attrs"
                        v-on="on"
                        class="text-uppercase text-no-wrap font-md-12"
                      >
                        <nuxt-link v-bind:to="data.to">{{ data.title }}</nuxt-link>
                      </v-list-item-title>
                    </template>
                    <span class="text-capitalize">{{ data.title }}</span>
                  </v-tooltip>
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="(item, index) in data.items"
                v-bind:key="index"
                v-bind:to="item.to"
                dense nuxt
              >
                <v-tooltip bottom>
                  <template v-slot:activator="{on, attrs}">
                    <v-list-item-title
                      v-bind="attrs"
                      v-on="on"
                      class="text-uppercase font-md-12"
                    >
                      {{ item.title }}
                    </v-list-item-title>
                  </template>
                  <span class="text-capitalize">{{ item.title }}</span>
                </v-tooltip>
              </v-list-item>
            </v-list-group>
          </v-list>
        </v-menu>
      </v-col>
    </template>
    <v-spacer v-if="!isIntersecting" />
    <v-col
      v-if="!isIntersecting"
      class="text-center rounded py-1 px-2"
      v-ripple
    >
      <nuxt-link draggable="false" class="mx-auto" to="/">
        <!-- <v-img
          :lazy-src="require('~/assets/images/svg/tmo_main_logo_black.svg?data')"
          :src="require('~/assets/images/svg/tmo_main_logo_black.svg?data')"
          class="mx-auto"
          max-width="200"
          max-height="auto"
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
        </v-img> -->

        <img
          class="mx-auto _img--black"
          draggable="false"
          v-bind:src="require('~/assets/images/svg/tmo_main_logo_black.svg?data')"
          alt="~/assets/images/svg/tmo_main_logo_black.svg?data"
          width="auto"
          height="auto"
        />
      </nuxt-link>
    </v-col>
    <v-spacer v-if="!isIntersecting" />
    <template v-for="data in NavList">
      <v-col cols="auto"
        v-if="data.id >= 4"
        v-bind:key="data.id"
        v-bind:class="[
          'text-center',
          !isIntersecting && data.id == 4 ? 'mr-5 mr-lg-10' : ''
        ]"
      >
        <v-menu bottom>
          <template v-slot:activator="{ on: menu, attrs }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on: tooltip }">
                <v-btn
                  v-if="data.items.length"
                  v-bind="attrs"
                  v-on="{ ...tooltip, ...menu }"
                  text x-small
                  v-bind:dark="isIntersecting"
                  class="px-0 font-md-12"
                >
                  {{ data.title }}
                </v-btn>
                <v-btn
                  v-else
                  to="#"
                  v-bind="attrs"
                  v-on="{ ...tooltip, ...menu}"
                  text x-small
                  v-bind:dark="isIntersecting"
                  class="px-0 font-md-12"
                >
                  {{ data.title }}
                </v-btn>
              </template>
              <span>{{ data.title }}</span>
            </v-tooltip>
          </template>
          <v-list v-if="data.items.length">
            <v-list-item
              v-for="(item, index) in data.items"
              v-bind:key="index"
            >
              <v-list-item-title>
                {{ item.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </template>
  </v-row>
</template>

<script>

export default {
  name: 'Menu',

  props: {
    'is-intersecting': {
      type: Boolean,
      default: false
    },
    NavList: {
      type: [Array, Object],
      default: function () { return [] }
    }
  },

  methods: {
    isLG: function () {
      return this.$vuetify.breakpoint.lg
    },
  }
}
</script>

<style lang="scss" scoped>
  ::v-deep .v-list-group--no-action > .v-list-group__items > .v-list-item{
    padding-left: 30px !important;
  }
  ::v-deep .v-list-item__title, .v-list-group__items {
    a {
      font-family: 'Verlag Bold', sans-serif !important;
      font-weight: 600 !important;
    }
  }
  @media (max-width: 1264px) {
    .font-md-12 {
      font-size: 12px !important;
    }
  }
  ::v-deep ._img--main-center {
    width: 300px !important; height: auto !important;
  }
</style>

<style module src="@/assets/styles/css/_utilities.module.css" />