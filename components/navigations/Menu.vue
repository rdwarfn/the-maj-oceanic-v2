<template>
  <v-row no-gutters align="center" justify="space-around" class="flex-nowrap">
    <template v-for="data in NavList">
      <v-col cols="auto"
        class="text-center"
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
              <!-- v-bind:to="data.to" -->
            <v-btn
              v-bind="attrs"
              v-on="{on}"
              v-bind:to="data.to"
              text tile nuxt
              draggable="false"
              v-bind:dark="isIntersecting"
              class="btn-s font-md-12"
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

    <v-spacer v-show="!isIntersecting" />

    <v-col
      v-show="!isIntersecting"
      cols="auto"
      class="text-center ml-lg-n16"
      v-bind:class="{
        intersec: !isIntersecting
      }"
    >
      <v-btn
          class="mx-auto"
          to="/"
          text tile nuxt replace>
        <img
          class="mx-auto _img--black"
          draggable="false"
          v-bind:src="require('~/assets/images/svg/tmo_main_logo_black.svg?data')"
          alt="~/assets/images/svg/tmo_main_logo_black.svg?data"
          width="auto"
          height="auto"
        />
      </v-btn>
    </v-col>
    <v-spacer v-show="!isIntersecting" />
    <template v-for="data in NavList">
      <v-col cols="auto"
        v-if="data.id >= 4"
        v-bind:key="data.id"
        v-bind:class="[
          'text-center',
        ]"
      >
        <v-row no-gutters align="center">
          <v-col cols="auto">
            <v-menu bottom offset-y>
              <template v-slot:activator="{ on, attrs }">
                  <!-- v-bind:to="data.to" -->
                <v-btn
                  v-bind="attrs"
                  v-on="{on}"
                  v-bind:to="data.to"
                  text tile nuxt
                  v-bind:dark="isIntersecting"
                  class="font-md-12">
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
                  v-bind:to="item.to"
                  v-for="(item, index) in data.items"
                  v-bind:key="index"
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

          <v-col
            v-show="!isIntersecting"
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
            v-show="!isIntersecting"
            cols="auto"
            v-bind:class="{
              intersec: !isIntersecting
            }">
            <v-btn
              class="btn-s btn--inquire ml-1 font-md-12"
              to="/contact-us"
              depressed tile nuxt dark
            >
              Inquire Now
            </v-btn>
          </v-col>
        </v-row>
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
    goTo (path, query=null, replace=false) {
      const ctx = Object.prototype.toString(path);
      console.log(path)
      if (ctx === '[object Object]') {
        const dest = Object.assign(path, query);
        this.$router.push(dest)
        return null;
      } else if (replace) {
        this.$router.replace(path)
      }
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped>
  $cubic: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  ::v-deep.v-btn:not(.v-btn--round).v-size--default.btn--inquire {
    @include poly-fluid-sizing ('max-width', (960px:120px, 1440px:141px));
  }
  ._img--black {
    min-width: 170.19px !important;
    max-width: 170.19px !important;
    // @include poly-fluid-sizing ('margin-left', (960px:2px, ))
  }
  ::v-deep .v-list-group--no-action > .v-list-group__items > .v-list-item{
    padding-left: 30px !important;
  }
  ::v-deep .v-list-item__title, .v-list-group__items {
    a {
      font-family: 'Montserrat', sans-serif !important;
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