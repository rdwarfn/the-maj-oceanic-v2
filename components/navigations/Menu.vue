<template>
  <v-row
    justify="space-around"
    class="flex-nowrap"
    align="center"
    no-gutters
  >
    <template v-for="(data, idx) in menu">
      <v-col cols="auto"
        class="text-center"
        v-if="idx < 4"
        :key="idx"
      >
        <v-menu
          background-color="transparent"
          close-on-click
          bottom offset-y open-on-hover
          tile v-bind:rounded="false"
          auto min-width="190">

          <template #activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
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
            v-if="data.children.length"
            v-bind:dark="isIntersecting"
            class="py-0"
          >

            <template v-for="(item, index) in data.children">
              <v-list-item
                :to="item.to"
                :key="index"
                :exact="item.exact"
                :disabled="item.disabled"
                dense nuxt tile style="letter-spacing: 2px"
              >
                <v-list-item-title class="text-center text-uppercase font-weight-bold font-md-12">
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item>

              <v-divider
                v-if="index !== data.children.length -1"
                :key="index + '-divider'"
                class="mx-3"
              />
            </template>
          </v-list>
        </v-menu>
      </v-col>
    </template>

    <v-spacer v-show="!isIntersecting" />

    <v-col
      v-show="!isIntersecting"
      cols="auto"
      class="text-center ml-lg-n16"
      :class="{ intersec: !isIntersecting }"
    >
      <v-btn
          class="mx-auto"
          to="/"
          replace
          text
          tile
          nuxt>
        <img
          class="mx-auto _img--black"
          draggable="false"
          :src="require('~/assets/images/svg/tmo_main_logo_black.svg?data')"
          alt="~/assets/images/svg/tmo_main_logo_black.svg?data"
          width="auto"
          height="auto"
        />
      </v-btn>
    </v-col>

    <v-spacer v-show="!isIntersecting" />

    <template v-for="(data, idx) in menu">
      <v-col cols="auto"
        v-if="idx >= 4"
        :key="idx"
        class="text-center"
      >
        <v-row
          no-gutters
          align="center"
        >
          <v-col cols="auto">
            <v-menu
              background-color="transparent"
              close-on-click
              :rounded="false"
              open-on-hover
              min-width="190"
              offset-y
              bottom
              tile
              auto
            >
              <template #activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="{on}"
                  :to="data.to"
                  :dark="isIntersecting"
                  class="font-md-12"
                  text
                  tile
                  nuxt
                >
                  {{ data.title }}
                </v-btn>
              </template>

              <v-list
                v-if="data.children.length"
                :dark="isIntersecting"
                color="transparent"
                min-width="190"
                subheader
                dense
                flat
                tile
                auto
              >
                <template v-for="(item, index) in data.children">
                  <v-list-item
                    :to="item.to"
                    :key="index"
                    :exact="item.exact"
                    :disabled="item.disabled"
                    style="letter-spacing: 2px"
                    dense
                    nuxt
                    tile
                  >
                    <v-list-item-title class="text-uppercase font-weight-bold font-md-12">
                      {{ item.title }}
                    </v-list-item-title>
                  </v-list-item>

                  <v-divider inset :key="index" />
                </template>
              </v-list>
            </v-menu>
          </v-col>
        </v-row>
      </v-col>
    </template>
  </v-row>
</template>

<script>
import { getNav } from '~/services/api' 

export default {
  props: {
    isIntersecting: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      menu: []
    }
  },

  mounted () {
    this.getNav()
      .then(ress => {
        this.menu = ress
      })
  },

  methods: {
    getNav
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
  .v-menu__content {
    box-shadow: unset !important;
    transform: translateX(-25px) !important;
  }
  ::v-deep .v-list {
    &.theme--dark {
      margin-top: 4px !important;
      background: rgba(47, 46, 46, 0.6) !important;
    }
    &.theme--light {
      margin-top: 20px !important;
      background: rgba(212, 212, 212, 0.6) !important;
    }
  }
  ::v-deep .v-list-item__title, .v-list-group__items {
    font-family: 'Montserrat', sans-serif !important;
    font-weight: 600 !important;
    font-size: 13px !important;
  }
  @media (max-width: 1362px) {
    .font-md-12 {
      font-size: 12px !important;
    }
  }
  ::v-deep ._img--main-center {
    width: 300px !important; height: auto !important;
  }
</style>