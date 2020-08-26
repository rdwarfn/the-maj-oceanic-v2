<template>
  <v-app>
    <t-navigation-mobile v-bind:isIntersecting="isIntersecting">
      <template v-slot:button-nav-icon>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      </template>
    </t-navigation-mobile>

    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="false"
      class="hidden-md-and-up"
      style="z-index: 20"
      color="#FBF7F6"
      width="100vw"
      temporary
      app
    >
      <v-container grid-list-xs>
        <v-list>
          <v-list-item dense>
            <v-spacer />
            <v-list-item-avatar class="mx-auto" tile width="auto" min-height="67" height="auto">
              <v-img
                v-bind:src="require('~/assets/images/drawer-logo-tmo.png')"
                v-bind:lazy-src="require('~/assets/images/drawer-logo-tmo.png')"
                max-width="192"
              ></v-img>
            </v-list-item-avatar>
            <v-spacer />
            <v-list-item-action>
              <v-btn color="transparent" fab depressed @click.prevent="drawer = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
        <v-divider />
        <v-list-item dense>
          <v-list-item-content>
            <v-text-field
              prepend-icon="$search"
              label="SEARCH"
              clearable
              flat
            ></v-text-field>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list>
          <v-list-item-group color="primary">
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
          </v-list-item-group>

          <v-list-item>
            <v-list-item-action>
              <t-btn
                class="btn-l"
                v-bind:props="{
                  color: 'primary',
                  to: '/contact-us'
                }"
              >
                Inquire Now
              </t-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-container>
    </v-navigation-drawer>

    <t-navigation
      :is-intersecting="isIntersecting"
      :source-nav="navigation.data"
      :loading="false"
    />

      <!-- v-if="!routeNameContactUs" -->
    <t-hero-banner
      v-if="getHerosByRouteName && getHerosByRouteName.length"
      v-bind:data="getHerosByRouteName"
      static-image
    />

    <v-container v-if="getBreadcrumb.length > 1" class="px-sm-0">
      <v-breadcrumbs
        v-bind:items="getBreadcrumb"
        large v-show="getBreadcrumb.length > 1"
      >
        <template v-slot:item="{item}">
          <v-breadcrumbs-item
            nuxt
            v-bind:to="item.href"
            v-bind:disabled="item.disabled"
            class="text-uppercase"
          >
            {{ item.text }}
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
    </v-container>

    <v-main id="main"
      v-intersect="{
        handler: onIntersect,
        options: {
          rootMargin: '0px 0px -800px 0px'
        }
      }"
    >
      <nuxt />
    </v-main>
    <!-- <div id="mark">viewport intersection observer</div> -->

    <t-footer />
  </v-app>
</template>

<script>
import tNavigation from '@/components/navigations/index.vue';
import tNavigationMobile from '@/components/navigations/NavbarMobile.vue';
import tCarouselBanner from '@/components/containers/CarouselBanner.vue';
import tHeroBanner from '@/components/containers/HeroBanner.vue';
import tFooter from '@/components/containers/Footer.vue';
import tBtn from '@/components/base/Button.vue';

const getNavs = () => import('~/static/data/navs.json').then(v => v.default || v);

const components = {
  tNavigation,
  tNavigationMobile,
  tCarouselBanner,
  tHeroBanner,
  tFooter,
  tBtn,
}

export default {
  layout: 'empty',
  data () {
    return {
      selected_item: 1,
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
    }
  },

  components,

  async fetch () {
    const navs= await getNavs();
    this.navigation.data  = navs
    this.navigation.isLoaded = true
    console.log(navs)
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
      return this.$store.state.breadcrumbs.items
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
    },
    initial () {
      console.log(this.$route.name)
      this.$route.name === 'contact-us'
      ? this.showHero = false : null
    }
  }
}
</script>

<style lang="scss" scoped>
$primary: #208CB2;
$primary--disabled: #C7E2EC;

#mark{
  z-index: 20;
  width: 100%;
  position: fixed; bottom: 600px;
  font-size: 16pt;
  border-bottom: dashed 2px currentColor;
  text-shadow: 0 0 10px black;
}
#main {
  background: #FAFAFA !important;
}
::v-deep a.btn-l.primary {
  span.v-btn__content {
    color: #ffffff;
  }
}
::v-deep .v-navigation-drawer .v-list {
  padding-left: 45px !important;
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
    font-family: 'Verlag Bold', sans-serif !important;
    line-height: 22px !important;
    letter-spacing: 3px !important;
    text-transform: uppercase !important;

    @include poly-fluid-sizing ('font-size', (375px:13px, 768px:16px))
  }
}
::v-deep .v-app-bar.v-app-bar--fixed {
  z-index: 10 !important;
}
::v-deep .v-breadcrumbs {
  li {
    font-family: 'Verlag Bold', sans-serif !important;
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
