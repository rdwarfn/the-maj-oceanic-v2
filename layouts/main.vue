<template>
  <v-app>
    <tmo-navigation-mobile
      :is-intersecting="isIntersecting"
      :elevate-on-scroll="getHerosByRouteName != undefined"
      :class="{
        'v-app-bar--is-scrolled': !getHerosByRouteName
      }"
    >
      <template #button-nav-icon>
        <v-app-bar-nav-icon @click.stop="toggleDrawer" />
      </template>
    </tmo-navigation-mobile>

    <navigation-drawer />

    <tmo-navigation :is-intersecting="isIntersecting" :loading="false" />

    <!-- v-if="!routeNameContactUs" -->
    <tmo-hero-banner
      v-if="getHerosByRouteName"
      v-intersect.quiet="{
        handler: heroIntersec,
        options: { rootMargin: '0px', threshold: [0.5, 1.0] }
      }"
      :data="getHerosByRouteName"
    />

    <v-main
      id="main"
      v-intersect="{
        handler: onIntersect,
        options: {
          rootMargin: '0px 0px -600px 0px'
        }
      }"
      :class="{'pt-0': getHerosByRouteName}"
      :style="getHerosByRouteName ? 'padding-top: 0' : 'padding-top: 78px'"
    >
      <breadcrumbs :class="!getHerosByRouteName ? 'py-0' : 'py-4 py-sm-6'" />
      <nuxt />
      <v-fab-transition>
        <v-btn
          v-show="showBtnScroll"
          fab
          fixed
          bottom
          right
          :large="$vuetify.breakpoint.smAndUp"
          color="primary"
          @click="$vuetify.goTo(scrollTarget, scrollOptions)"
        >
          <v-icon>{{ svgChevTop }}</v-icon>
        </v-btn>
      </v-fab-transition>
    </v-main>
    <!-- <div id="mark">viewport intersection observer</div> -->
    <tmo-footer />
  </v-app>
</template>

<script>
import { mdiClose, mdiCheckboxBlankCircleOutline, mdiChevronUp } from '@mdi/js'
import tmoNavigation from '@/components/navigations/index.vue'
import navigationDrawer from '@/components/navigations/NavbarDrawer.vue'
import tmoNavigationMobile from '@/components/navigations/NavbarMobile.vue'
import tmoHeroBanner from '@/components/containers/HeroBanner.vue'
import tmoFooter from '@/components/containers/Footer.vue'
import tmoBtn from '@/components/base/BaseButton.vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'

const components = {
  navigationDrawer,
  tmoNavigation,
  tmoNavigationMobile,
  tmoHeroBanner,
  tmoFooter,
  tmoBtn,
  Breadcrumbs
}

export default {

  components,
  layout: 'empty',
  data () {
    return {
      isIntersecting: false,
      mini_variant: false,
      drawer: false,
      intersec: null,
      showHero: true,
      svgClose: mdiClose,
      svgCheckboxMenu: mdiCheckboxBlankCircleOutline,
      svgChevTop: mdiChevronUp,

      showBtnScroll: false,
      scrollTarget: 0,
      scrollOptions: {
        duration: 300,
        offset: 0,
        easing: 'easeInOutCubic'
      }
    }
  },

  computed: {
    getHerosByRouteName () {
      const res = this.$store.state.heros.list.find(v => v.page_key === this.$route.name)
      return res && res.data
    },
    getBreadcrumb () {
      return this.$store.state.breadcrumbs
    },
    listenIntersecting () {
      return this.isIntersecting
    },
    computedRoute () {
      return JSON.stringify(this.$route)
    }
  },

  methods: {
    onIntersect (entries, observer) {
      this.isIntersecting = entries[0].isIntersecting
    },
    heroIntersec (entries, observer) {
      this.showBtnScroll = !entries[0].isIntersecting
    },
    toggleDrawer () {
      this.$store.commit('toggleDrawer')
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
::v-deep .v-list-item__action {
  .v-btn--contained {
    .v-btn__content {
      color: white !important;
    }
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
