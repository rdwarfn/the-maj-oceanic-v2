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
      color="#EFE1DC"
      width="80vw"
      temporary
      app
    >
      <v-list>
        <v-list-item dense>
          <!-- <v-row no-gutters align="center" justify="space-between"> -->
            <v-spacer />
            <!-- <v-col cols="8" class="text-center"> -->
              <v-list-item-avatar class="mx-auto" tile width="50%" min-height="67" height="auto">
                <v-img
                  v-bind:src="require('~/assets/images/drawer-logo-tmo.png')"
                  v-bind:lazy-src="require('~/assets/images/drawer-logo-tmo.png')"
                ></v-img>
              </v-list-item-avatar>
              <v-spacer />
            <!-- </v-col> -->
            <!-- <v-col cols="2" class="text-center"> -->
              <v-list-item-action>
                <v-btn color="transparent" fab depressed @click.prevent="drawer = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-list-item-action>
            <!-- </v-col> -->
          <!-- </v-row> -->
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
      <v-list nav shaped>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(item, i) in navigation.data"
            v-bind:key="i"
            v-on:click.prevent="drawer = false"
            v-bind:to="item.to"
            color="primary"
            selectable
            exact
            ripple
          >
            <!-- <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action> -->
            <v-list-item-content class="_nav--item">
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

        <!-- <v-list-group
          no-action
          sub-group
          value="true"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-group> -->
      </v-list>
    </v-navigation-drawer>

    <t-navigation
      :is-intersecting="isIntersecting"
      :source-nav="navigation.data"
      :loading="false"
    />

    <t-carousel-banner
      :data="getHerosByRouteName"
      static-image
    ></t-carousel-banner>

    <v-container class="px-sm-0">
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
          rootMargin: '0px 0px -600px 0px'
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
      selected_item: 1,
      isIntersecting: false,
      mini_variant: false,
      drawer: false,
      navigation: {
        data: [],
        isLoaded: false
      },
      isLoadedHeros: false,
      intersec: null
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
    },
    showIntersec () {
      return JSON.stringify(this.intersec)
    }
  },

  methods: {
    onIntersect: function (entries, observer) {
      this.isIntersecting = entries[0].isIntersecting;
      this.intersec = entries[0]
    }
  }
}
</script>

<style lang="scss" scoped>
$primary: #208CB2;
$primary--disabled: #C7E2EC;

#mark{
  width: 100%;
  position: fixed; bottom: 600px;
  font-size: 16pt;
  border-bottom: dashed 2px currentColor;
  text-shadow: 0 0 10px black;
}
._nav--item {
  .v-list-item__title {
    font-family: 'Verlag Bold', sans-serif !important;
    font-size: 16px !important;
    line-height: 22px !important;
    letter-spacing: 3px !important;
    text-transform: uppercase !important;
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
</style>
