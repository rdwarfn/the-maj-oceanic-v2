<template>
  <v-row no-gutters align="center" justify="space-around">
    <template v-for="data in NavList">
      <v-col
        v-ripple
        class="rounded"
        v-if="data.id < 3"
        :key="data.id"
      >
        <nuxt-link
          :title="data.title"
          :to="data.to"
          class="__link_appbar"
          v-text="data.title"
        />
      </v-col>
    </template>

    <v-col
      v-if="!isIntersecting"
      class="text-center rounded py-1 px-3 mx-2 static"
      :class="$style.place_self_center"
      style=""
      v-ripple
    >
      <nuxt-link class="mx-auto d-flex" to="/">
        <v-img
          :lazy-src="require('~/assets/images/svg/tmo_main_logo_black.svg?data')"
          :src="require('~/assets/images/svg/tmo_main_logo_black.svg?data')"
          max-width="186"
          max-height="33"
          :aspect-ratio="16/9"
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

    <template v-for="data in NavList">
      <v-col
        v-ripple
        class="rounded"
        v-if="data.id >= 3"
        :key="data.id"
      >
        <nuxt-link
          :title="data.title"
          :to="data.to"
          class="__link_appbar"
          v-text="data.title"
        />
      </v-col>
    </template>

    <v-col
      v-ripple
      class="rounded mr-2"
      v-if="!isIntersecting"
    >
      <nuxt-link
        title="Login"
        :to="'#'"
        class="__link_appbar"
      >
        login
      </nuxt-link>
    </v-col>
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
      type: Array,
      default: function () { return [] }
    }
  },

  methods: {
    isLG: function () {
      return this.$vuetify.breakpoint.lg
    }
  }
}
</script>

<style lang="scss" scoped>
  .__link_appbar {
    font-family: 'Verlag Bold', sans-serif;
    padding: 0 4px;
    font-size: 13px;
    font-weight: bold;
    text-transform: uppercase;
    white-space: nowrap !important;
  }
</style>

<style module src="@/assets/styles/css/_utilities.module.css" />