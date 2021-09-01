<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant="false"
    class="hidden-lg-and-up"
    style="z-index: 20"
    color="#FBF7F6"
    width="100vw"
    temporary
    app
  >
    <v-list flat tile class="_img-logo--mobile text-center px-0">
      <v-list-item dense class="px-0">
        <v-row no-gutters class="flex-nowrap" align="center" justify="space-between">
          <v-spacer />
          <v-col sm="4">
            <v-list-item-avatar tile width="auto" min-height="67" height="auto" class="mr-0">
              <v-btn nuxt text tile depressed to="/">
                <v-img
                  :src="require('~/assets/images/svg/tmo_main_logo_black.svg?data')"
                  :lazy-src="require('~/assets/images/svg/tmo_main_logo_black.svg?data')"
                  width="192"
                  height="33.72"
                  class="mx-auto"
                />
              </v-btn>
            </v-list-item-avatar>
          </v-col>
          <v-spacer class="hidden-xs-only" />
          <v-col sm="auto">
            <v-list-item-action class="mx-0">
              <v-btn color="transparent" fab depressed @click.prevent="toggleDrawer">
                <v-icon color="rgba(0,0,0,0.54)">
                  {{ svgClose }}
                </v-icon>
              </v-btn>
            </v-list-item-action>
          </v-col>
        </v-row>
      </v-list-item>
    </v-list>

    <v-divider />

    <v-list-item class="px-0" dense>
      <v-list-item-content>
        <v-text-field
          class="search-mobile--drawer"
          prepend-inner-icon="$search"
          label="SEARCH"
          clearable
          flat
        />
      </v-list-item-content>
    </v-list-item>

    <v-divider />

    <v-list v-if="menu">
      <v-sheet class="wrapper" color="transparent">
        <template v-for="(item, key) in menu">
          <v-list-item
            v-if="!item.children.length"
            :key="key"
            class="_nav--item"
            nuxt
            :to="item.to"
            exact
            @click.prevent="toggleDrawer"
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-group v-else :key="key" class="_nav--item">
            <template #activator>
              <v-list-item-content>
                <v-btn
                  :ripple="false"
                  class="px-0"
                  text
                  nuxt
                  tile
                  :to="item.to"
                  exact
                  @click.prevent="toggleDrawer"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-btn>
              </v-list-item-content>
            </template>
            <template v-if="item.children.length">
              <v-list-item
                v-for="(child, k) in item.children"
                :key="k"
                nuxt
                :to="child.to"
                exact
                @click.prevent="toggleDrawer"
              >
                <template>
                  <v-list-item-action>
                    <v-icon x-small v-text="svgCheckboxMenu" />
                  </v-list-item-action>
                  <v-list-item-title> {{ child.title }} </v-list-item-title>
                </template>
              </v-list-item>
            </template>
          </v-list-group>
        </template>

        <v-list-item class="action-inquire">
          <v-list-item-action>
            <v-btn
              class="btn-l"
              tile
              depressed
              nuxt
              color="primary"
              to="/contact-us"
            >
              Inquire Now
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-sheet>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import {
  mdiClose,
  mdiCheckboxBlankCircleOutline,
  mdiChevronUp
} from '@mdi/js'
import { getNav } from '~/services/api'

export default {
  data () {
    return {
      svgClose: mdiClose,
      svgCheckboxMenu: mdiCheckboxBlankCircleOutline,
      svgChevTop: mdiChevronUp,
      menu: []
    }
  },

  computed: {
    drawer: {
      get () {
        return this.$store.state.drawer
      },
      set (v) {
        this.$store.commit('setDrawer', v)
      }
    }
  },

  mounted () {
    this.getNav()
      .then((ress) => {
        this.menu = ress
      })
  },

  methods: {
    toggleDrawer () {
      this.$store.commit('toggleDrawer')
    },

    getNav
  }
}
</script>

<style lang="scss" scoped>
._nav--item {
  .v-list-item__title {
    font-family: 'Montserrat', sans-serif !important;
    line-height: 22px !important;
    letter-spacing: 3px !important;
    text-transform: uppercase !important;
    font-weight: 600 !important;

    @include poly-fluid-sizing ('font-size', (375px:13px, 768px:16px))
  }
}
::v-deep .search-mobile--drawer.v-input:not(.v-input--is-focused) {
  .v-input__slot::before, .v-input__slot::after {
    // border-color: rgba(0, 0, 0, 0.12) !important;
    border-color: transparent !important;
  }
}
::v-deep .theme--light .v-input:not(.v-input--is-focused) {
  color:#C4C9D2 !important;
}
::v-deep .v-input__prepend-inner {
  padding-right: 15px !important;
}
::v-deep a.btn-l.primary {
  span.v-btn__content {
    color: #ffffff;
  }
}
::v-deep .v-navigation-drawer__content {
  padding-left: 25px !important;
  padding-right: 25px !important;
}
.v-navigation-drawer {
    .v-list:not(._img-logo--mobile) {
      ::v-deep .wrapper {
        .v-list-item:not(.action-inquire) {
          padding-left: 37px !important;
          .v-list-item__action {
            margin-right: 0 !important;
            margin-left: 27px !important;
          }
        }
      }
    }
}
</style>
