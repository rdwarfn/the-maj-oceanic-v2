<template>
  <v-app>
    <NavbarMobile
      :is-intersecting="isIntersecting"
      :elevate-on-scroll="getHerosByRouteName != undefined"
    >
      <template #button-nav-icon>
        <v-app-bar-nav-icon @click.stop="toggleDrawer" />
      </template>
    </NavbarMobile>

    <NavbarDrawer />

    <Navbar :is-intersecting="isIntersecting" />

    <HeroBanner
      v-if="getHerosByRouteName"
      v-intersect="{ handler: heroIntersec, options: {
        rootMargin: '20px 0px -20px 0px',
        threshold: [0.5, 1.0]
      }}"
      :data="getHerosByRouteName"
    />

    <v-main
      id="main"
      v-intersect="{ handler: onIntersect, opacity: { threshold: threshold() } }"
      :class="{'pt-0': getHerosByRouteName}"
      :style="getHerosByRouteName ? 'padding-top: 0' : 'padding-top: 78px'"
    >
      <Breadcrumbs :class="!getHerosByRouteName ? 'py-0' : 'py-4 py-sm-6'" />

      <nuxt />

      <v-fab-transition>
        <v-btn
          v-show="showBtnScroll"
          :large="$vuetify.breakpoint.smAndUp"
          color="primary"
          bottom
          fixed
          right
          fab
          @click="$vuetify.goTo(scrollTarget, scrollOptions)"
        >
          <v-icon>{{ iconUp }}</v-icon>
        </v-btn>
      </v-fab-transition>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import { mdiChevronUp } from '@mdi/js'
import Navbar from '@/components/navigations/index.vue'
import NavbarDrawer from '@/components/navigations/NavbarDrawer.vue'
import NavbarMobile from '@/components/navigations/NavbarMobile.vue'
import HeroBanner from '@/components/containers/HeroBanner.vue'
import Footer from '@/components/containers/Footer.vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'

import { threshold } from '@/mixins/Functions'
export default {
  components: {
    Navbar,
    NavbarDrawer,
    NavbarMobile,
    HeroBanner,
    Footer,
    Breadcrumbs
  },

  mixins: [threshold],

  layout: 'empty',

  data () {
    return {
      isIntersecting: false,

      mini_variant: false,
      drawer: false,
      intersec: null,
      iconUp: mdiChevronUp,

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

::v-deep .v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: 0px 20px 60px rgba(138, 149, 158, 0.2);;
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
      color: #208CB2 !important;
    }
    & a.v-breadcrumbs__item--disabled {
      color: #C7E2EC !important;
    }
  }
}

::v-deep .v-main__wrap {
  background-color: #FAFAFA !important;;
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

#main {
  background: #fafafa !important;
}
</style>
