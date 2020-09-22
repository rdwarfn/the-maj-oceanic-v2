<template>
  <v-app>
    <tmo-navigation-mobile
      v-bind:isIntersecting="isIntersecting"
      v-bind:elevate-on-scroll="getHerosByRouteName != undefined"
      v-bind:class="{
        'v-app-bar--is-scrolled': !getHerosByRouteName
      }"
    >
      <template v-slot:button-nav-icon>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      </template>
    </tmo-navigation-mobile>

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
      <v-list flat tile class="_img-logo--mobile text-center">
        <v-list-item dense>
          <v-row no-gutters class="flex-nowrap" align="center" justify="space-between">
          <v-spacer />
          <v-col sm="4">
          <v-list-item-avatar tile width="auto" min-height="67" height="auto" class="mr-0">
            <v-btn
              nuxt text tile depressed
              to="/"
            >
              <v-img
                v-bind:src="require('~/assets/images/svg/tmo_main_logo_black.svg?data')"
                v-bind:lazy-src="require('~/assets/images/svg/tmo_main_logo_black.svg?data')"
                width="192"
                height="33.72"
                class="mx-auto"
              ></v-img>
            </v-btn>
          </v-list-item-avatar>
          </v-col>
          <v-col sm="4">
          <v-list-item-action class="mx-0">
            <v-btn color="transparent" fab depressed @click.prevent="drawer = false">
              <v-icon>{{svgClose}}</v-icon>
            </v-btn>
          </v-list-item-action>
          </v-col>
          </v-row>
        </v-list-item>
      </v-list>
      <v-divider />
      <v-list-item class="pl-0" dense>
        <v-list-item-content>
          <v-text-field
            prepend-inner-icon="$search"
            label="SEARCH"
            clearable
            flat
          ></v-text-field>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <v-list>
        <v-sheet class="wrapper" color="transparent">
          <template v-for="(item, key) in navigation.data">
            <v-list-item
              class="_nav--item"
              v-bind:key="key"
              v-if="!item.children.length"
              nuxt v-bind:to="item.to"
              v-on:click.prevent="drawer = false">
              <v-list-item-content>
                <v-list-item-title>{{item.title}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-group class="_nav--item" v-else :key="key">
              <template #activator>
                <v-list-item-content>
                  <v-btn v-on:click.prevent="drawer = false" :ripple="false" class="px-0" text nuxt tile v-bind:to="item.to">
                    <v-list-item-title>{{item.title}}</v-list-item-title>
                  </v-btn>
                </v-list-item-content>
              </template>
              <template v-if="item.children.length">
                <v-list-item
                  v-for="(child, k) in item.children"
                  v-bind:key="k"
                  v-on:click.prevent="drawer = false"
                  nuxt v-bind:to="child.to">
                    <template>
                      <v-list-item-action>
                        <v-icon x-small v-text="svgCheckboxMenu"></v-icon>
                      </v-list-item-action>
                      <v-list-item-title> {{child.title}} </v-list-item-title>
                    </template>
                </v-list-item>
              </template>
            </v-list-group>
          </template>
        <!-- <v-list-item-group color="primary">
          <v-list-item
            v-for="(data, i) in navigation.data"
            v-bind:key="i"
            v-on:click.prevent="drawer = false"
            v-bind:to="data.to"
            color="primary"
            selectable
            exact
            ripple
          >
            <v-list-item-content class="_nav--item">
              <v-list-item-title v-text="data.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group> -->

        <v-list-item class="action-inquire">
          <v-list-item-action>
            <tmo-btn
              class="btn-l"
              v-bind:props="{
                color: 'primary',
                to: '/contact-us'
              }"
            >
              Inquire Now
            </tmo-btn>
          </v-list-item-action>
        </v-list-item>
        </v-sheet>
      </v-list>
    </v-navigation-drawer>

    <tmo-navigation
      :is-intersecting="isIntersecting"
      :source-nav="navigation.data"
      :loading="false"
    />

      <!-- v-if="!routeNameContactUs" -->
    <tmo-hero-banner
      v-if="getHerosByRouteName"
      v-bind:data="getHerosByRouteName"
      static-image
    />

    <v-main id="main"
      v-intersect="{
        handler: onIntersect,
        options: {
          rootMargin: '0px 0px -600px 0px'
        }
      }"
      v-bind:class="{'pt-0': getHerosByRouteName}"
      :style="getHerosByRouteName ? 'padding-top: 0' : 'padding-top: 78px'"
    >
      <breadcrumbs :class="!getHerosByRouteName ? 'py-0' : 'py-4 py-sm-6'" />
      <nuxt />
    </v-main>
    <!-- <div id="mark">viewport intersection observer</div> -->
    <tmo-footer />
  </v-app>
</template>

<script>
import { mdiClose, mdiCheckboxBlankCircleOutline } from '@mdi/js';
import tmoNavigation from '@/components/navigations/index.vue';
import tmoNavigationMobile from '@/components/navigations/NavbarMobile.vue';
import tmoHeroBanner from '@/components/containers/HeroBanner.vue';
import tmoFooter from '@/components/containers/Footer.vue';
import tmoBtn from '@/components/base/BaseButton.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';

const getNavs = () => import('~/static/data/navs.json').then(v => v.default || v);

const components = {
  tmoNavigation,
  tmoNavigationMobile,
  tmoHeroBanner,
  tmoFooter,
  tmoBtn,
  Breadcrumbs
}

export default {
  layout: 'empty',
  data () {
    return {
      isIntersecting: false,
      mini_variant: false,
      drawer: false,
      navigation: {
        data: [],
        isLoaded: false
      },
      isLoadedHeros: false,
      intersec: null,
      showHero: true,
      svgClose: mdiClose,
      svgCheckboxMenu: mdiCheckboxBlankCircleOutline
    }
  },

  components,

  async fetch () {
    const navs = await getNavs();
    this.navigation.data = navs
    this.navigation.isLoaded = true
  },

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    });
  },

  computed: {
    getHerosByRouteName () {
      const res = this.$store.state.heros.list.find(v => v.page_key === this.$route.name)
      this.isLoadedHeros = true;
      return res && res.data
    },
    getBreadcrumb () {
      return this.$store.state.breadcrumbs
    },
    listenIntersecting () {
      return this.isIntersecting;
    },
    computedRoute () {
      return JSON.stringify(this.$route)
    }
  },

  methods: {
    onIntersect: function (entries, observer) {
      this.isIntersecting = entries[0].isIntersecting;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/styles/scss/variables.scss";
$primary: #208CB2;
$primary--disabled: #C7E2EC;

::v-deep .v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: 0px 20px 60px rgba(138, 149, 158, 0.2);;
}

#mark{
  z-index: 20;
  width: 100%;
  position: fixed; bottom: 600px;
  font-size: 16pt;
  border-bottom: dashed 2px currentColor;
  text-shadow: 0 0 10px black;
}
#main {
  background: #fafafa !important;
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
::v-deep .v-navigation-drawer .v-list:not(._img-logo--mobile) .wrapper {
  .v-list-item:not(.action-inquire) {
    padding-left: 37px !important;
    .v-list-item__action {
      margin-right: 11px !important;
      margin-left: 15px;
    }
  }
}
::v-deep .v-list-item__action {
  .v-btn--contained {
    .v-btn__content {
      color: white !important;
    }
  }
}
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
::v-deep .v-app-bar.v-app-bar--fixed {
  z-index: 10 !important;
}
::v-deep .v-breadcrumbs {
  li {
    font-family: 'Montserrat', sans-serif !important;
    font-weight: bold !important;
    line-height: 22px !important;
    font-size: 14px !important;
    letter-spacing: 2px !important;

    & a.v-breadcrumbs__item {
      color: $primary !important;
    }
    & a.v-breadcrumbs__item--disabled {
      color: $primary--disabled !important;
    }
  }
}
.v-app-bar {
  &--hide-shadow {
    .v-btn__content .v-icon, .mdi-menu {
      color: #FFFFFF !important;
    }
  }

  &--is-scrolled {
    .v-btn__content .v-icon, .mdi-menu {
      color: #232323 !important;
    }
  }
}
::v-deep .v-main__wrap {
  background-color: #FAFAFA !important;;
}
</style>
