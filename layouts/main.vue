<template>
  <v-app>
    <tNavigationMobile>
      <template v-slot:button-nav-icon>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      </template>
    </tNavigationMobile>
    <v-navigation-drawer
      title="navigation drawer"
      v-model="drawer"
      :mini-variant="false"
      class="hidden-md-and-up"
      style="z-index: 20"
      color="#EFE1DC"
      temporary
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in navigation.data"
          :key="i"
          v-on:click.prevent="drawer = false"
          :to="item.to"
          router
          exact
        >
          <!-- <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action> -->
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <tNavigation
      :is-intersecting="isIntersecting"
      :source-nav="navigation.data"
      :loading="false"
    />

    <t-carousel-banner
      :data="getHerosByRouteName"
      static-image
    ></t-carousel-banner>

    <v-container class="px-0">
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

    <v-main
      v-intersect="{
        handler: onIntersect,
        options: {
          rootMargin: '-150px 0px'
        }
      }"
    >
      <nuxt />
    </v-main>

    <t-footer />
  </v-app>
</template>

<script>
import tNavigation from '@/components/navigations/index.vue';
import tNavigationMobile from '@/components/navigations/NavbarMobile.vue';
import tCarouselBanner from '@/components/containers/CarouselBanner.vue';
import tFooter from '@/components/containers/Footer.vue';

const components = {
  tNavigation,
  tNavigationMobile,
  tCarouselBanner,
  tFooter,
}

export default {
  data () {
    return {
      isIntersecting: false,
      mini_variant: false,
      drawer: false,
      navigation: {
        data: [],
        isLoaded: false
      },
      isLoadedHeros: false
    }
  },

  components,

  async fetch () {
    this.navigation.data = await this.$content('navs').fetch();
    this.navigation.isLoaded = true;
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
    routeName () {
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
$primary: #208CB2;
$primary--disabled: #C7E2EC;
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
</style>
