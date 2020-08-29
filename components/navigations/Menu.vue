<template>
  <v-row no-gutters align="center" justify="space-around">
    <template v-for="data in NavList">
      <v-col cols="auto"
        class="text-center"
        :class="[
          'rounded',
          !isIntersecting && data.id < 3 ? 'mr-5 mr-lg-10' : ''
        ]"
        v-if="data.id < 4"
        :key="data.id"
      >
        <v-menu
          background-color="transparent"
          bottom right
          transition="slide-x-transition"
          open-on-hover
          v-bind:close-on-click="false"
          v-bind:close-on-content-click="false"
          offset-y
          auto
          tile
          v-bind:rounded="false"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind:to="data.to"
              v-bind="attrs"
              v-on="{on}"
              text x-small
              v-bind:dark="isIntersecting"
              class="px-0 font-md-12"
            >
              {{ data.title }}
            </v-btn>
          </template>
          <v-list
            v-if="data.items.length"
            flat subheader dense tile
            min-width="190"
            color="transparent"
            auto
            v-bind:dark="isIntersecting"
          >
            <v-list-item
              v-for="(item, index) in data.items"
              v-bind:key="index"
              v-bind:to="item.to"
              v-bind:disabled="item.disabled"
              dense nuxt tile
            >
              <v-list-item-title class="text-uppercase font-weight-bold font-md-12">
                {{ item.title }}
              </v-list-item-title>
            </v-list-item>
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
      <nuxt-link draggable="false" class="mx-auto" to="/" replace>
        <img
          class="mx-auto mr-7 _img--black"
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
        <v-menu bottom offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind:to="data.to"
              v-bind="attrs"
              v-on="{on}"
              text x-small
              v-bind:dark="isIntersecting"
              class="px-0 font-md-12"
            >
              {{ data.title }}
            </v-btn>
          </template>
          <v-list
            v-if="data.items.length"
            flat subheader dense tile
            min-width="190"
            color="transparent"
            auto
            v-bind:dark="isIntersecting"
          >
            <v-list-item
              v-for="(item, index) in data.items"
              v-bind:key="index"
              v-bind:to="item.to"
              v-bind:disabled="item.disabled"
              dense nuxt tile
            >
              <v-list-item-title class="text-uppercase font-weight-bold font-md-12">
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
  }
}
</script>

<style lang="scss" scoped>
  ._img--black {
    min-width: 170.19px !important;
    max-width: 170.19px !important;
  }
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