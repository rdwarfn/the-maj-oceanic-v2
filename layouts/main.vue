<template>
  <v-app>
    <v-navigation-drawer
      title="navigation drawer"
      v-model="drawer"
      :mini-variant="false"
      class="hidden-md-and-up"
      clipped
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in drawer_store"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
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

    <tNavigationMobile>
      <template v-slot:button-nav-icon>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      </template>
    </tNavigationMobile>

    <t-carousel-banner
      :data="carouselBanner.data"
      :loading="false"
      static-image
    ></t-carousel-banner>

    <main
      class="justify-center py-10 clearfix"
      style="border: 1px solid black"
      v-intersect="{
        handler: onIntersect,
        options: {
          rootMargin: '-150px 0px'
        }
      }"
    >
      <nuxt />
    </main>

    <!-- <t-footer /> -->
  </v-app>
</template>

<script>
import tNavigation from '@/components/navigations/index.vue';
import tCarouselBanner from '@/components/containers/CarouselBanner.vue';
import tNavigationMobile from '@/components/navigations/NavbarMobile.vue';
import tFooter from '@/components/containers/Footer.vue';

const getNavs = () =>
  import('~/static/data/navs.json')
  .then(m => m.default || m);
const getCrslBnr = () =>
  import('~/static/data/carousel_banner.json')
  .then(m => m.default || m);

export default {
  components: {
    tNavigation,
    tNavigationMobile,
    tFooter,
    tCarouselBanner,
  },

  data () {
    return {
      isIntersecting: false,
      mini_variant: false,
      drawer: false,
      drawer_store: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      navigation: {
        data: [],
        isLoaded: false
      },
      carouselBanner: {
        data: [],
        isLoaded: false
      }
    }
  },

  async fetch () {
      this.navigation.data = await getNavs();
      this.carouselBanner.data = await getCrslBnr();
      this.navigation.isLoaded = true;
      this.carouselBanner.isLoaded = true;
  },

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  },

  computed: {
    getNav () {
      return this.navigation.data;
    }
  },

  methods: {
    onIntersect: function (entries, observer) {
      this.isIntersecting = entries[0].isIntersecting;
    }
  }
}
</script>

<style scoped>
.clearfix:after{
  content:".";
  display:block;
  height:0;
  clear:both;
  visibility:hidden;
}

::v-deep .v-app-bar.v-app-bar--fixed {
  z-index: 10 !important;
}
</style>
