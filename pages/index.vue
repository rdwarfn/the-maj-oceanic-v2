<template>
  <div>
    <v-container
      class="mb-12 mb-sm-16 intro static"
      v-bind:class="sectionPading"
      tag="section"
    >
      <v-skeleton-loader
        v-if="loading"
        type="text@2"
        class="intro--head mb-6 mx-auto"
      >
      </v-skeleton-loader>
      <div
        v-else
        class="intro--head text-h4 text-md-h3 font-weight-medium text-center mx-auto mb-6 mb-sm-10"
        v-text="data.heading"
      />

      <v-skeleton-loader
        v-if="loading"
        type="image@2"
        class="mx-auto"
      ></v-skeleton-loader>
      <tLargeImage
        v-else
        static-image
        :data="data.image"
      />

      <v-skeleton-loader
        v-if="loading"
        type="paragraph@3"
        max-width="70%"
        class="text-center mx-auto mt-10 intro--paragraph"
      ></v-skeleton-loader>
      <div v-else class="intro--paragraph">
        <p class="text-sm-center">
          {{ data.paragraph }}
        </p>
      </div>
    </v-container>

    <!-- <v-container v-if="loading">
      <tSkeletonCarousel
      ></tSkeletonCarousel>
    </v-container> -->
      <!-- v-else -->
    <v-container
      class="px-0 my-12 my-sm-16 static"
      v-bind:class="sectionPading"
      tag="section"
    >
      <t-carousel
        class="_carousel"
        card-class="_carousel--card"
        :data="data.carousel_card"
        button-class="pl-4"
        button-text="discover"
        heading-class="pt-0 mb-1"
        text-class="mb-3 pr-lg-6"
        static-image
      >
      </t-carousel>
    </v-container>

    <!-- Voyages -->
    <v-sheet color="#EFE1DC" class="pt-10 pb-6 mt-12 my-sm-16">
      <v-container
        class="voyages static"
        v-bind:class="sectionPading"
        tag="section"
      >
        <client-only>
        <!-- style="width: 65.765765766%" -->
        <v-row align="center" justify="center" class="voyages--headline mx-auto text-center mb-10">
          <v-tooltip bottom>
            <template v-slot:activator="{on, attrs}">
            <div
              class="text-h4 text-sm-h3 mb-8"
              v-bind="attrs"
              v-on="on"
              v-text="data.tabs.heading"
            />
            </template>
            <span v-text="data.tabs.heading" />
          </v-tooltip>
          <p>
            {{ data.tabs.text }}
          </p>
        </v-row>
        </client-only>
        <t-tabs
          button-text="learn more"
          v-bind:data="data.tabs.data"
          static-image
        >
        </t-tabs>
      </v-container>
    </v-sheet>

    <v-container
      class="pb-7 py-sm-16 static"
      v-bind:class="sectionPading"
      tag="section"
    >
      <t-card-text-image
        v-bind:data="data.card_text_image[0]"
        v-bind:button-props="{
          outlined: true
        }"
        card-img-class="_card-img-class"
        button-text="learn more"
        button-class="btn-l"
        content-right
        static-image
        reverse
      />
    </v-container>

    <v-container
      class="pb-5 py-sm-16 static"
      v-bind:class="sectionPading"
      tag="section"
    >
      <t-card-text-image
        v-bind:data="data.card_text_image[1]"
        v-bind:button-props="{
          outlined: true
        }"
        card-img-class="_card-img-class"
        button-text="learn more"
        button-class="btn-l"
        static-image
      />
    </v-container>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import tSkeletonCarousel from '@/components/skeletons/SkeletonCarousel.vue';

const components = {
  tCarouselBanner: () => import('@/components/containers/CarouselBanner.vue'),
  tHeading: () => import('@/components/base/Heading.vue'),
  tCarousel: () => import('@/components/base/Carousel.vue'),
  tLargeImage: () => import('@/components/base/LargeImage.vue'),
  tCardTextImage: () => import('@/components/base/CardTextImage.vue'),
  tTabs: () => import('@/components/base/Tabs.vue'),
  tDivider: () => import('@/components/Divider.vue'),
  tButton: () => import('@/components/base/Button.vue'),

  tSkeletonCarousel
}
// home
export default {
  layout: 'main',

  name: 'home',

  components,

  data () {
    return {
      loading: false
    }
  },

  async asyncData ({ $content }) {
    const data = await $content('pages/home').fetch();
    return { data }
  },

  mounted () {
    if (this.$data.data && this.$data.data.carousel_banner) {
      this.addHeros({ page_key: this.$route.name, data: this.$data.data.carousel_banner })
      this.addBreadcrumb ({
        text: 'home',
        href: this.$route.path
      })
    }
  },

  computed: {
    sectionPading () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'px-7';
        case 'sm': return 'px-4';
        default: break;
      }
    },

    carouselHeight () {
      const v = this.$vuetify.breakpoint.width;
      if (!v) return
      let height = v <= 768 ? '100%' : '581px';
      return height
    },

    heros () {
      return this.$store.state.heros;
    }
  },

  methods: {
    addHeros ({ page_key, data }) {
      this.$store.commit('heros/add', {
        page_key, data
      })
    },
    addBreadcrumb ({ text, href }) {
      this.$store.commit('breadcrumbs/add', {
        text, href
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  $primary: #208cb2;

  .intro {
    @media (min-width: 1204px) {
      height: 900px !important;
    }

    &--head {
      @media (max-width: 600px) {
        width: 100% !important;
      }
      @include poly-fluid-sizing('width', (768px:596px, 1204px: 560px))
    }

    &--paragraph {
      p {
        white-space: pre-line !important;
      }
    }
  }

  ::v-deep .voyages {
    &--headline {
      @media (max-width: 768px) {
        width: auto !important;
      }
      @media (min-width: 769px) {
        width: 720px !important;
      }
    }
  }

  ::v-deep ._card-img-class {
    margin: 0 auto;
    @include poly-fluid-sizing ('max-width', (374px:325px, 768px:367px, 1440px:570px));
    @include poly-fluid-sizing ('height', (374px:181px, 768px:350px))
  }

  section.the-vessel {
    @media (min-width: 1204px) {
      height: 662px !important;
    }
  }

  ::v-deep .v-tabs-items {
    .theme--light.v-card {
      background-color: transparent !important;
    }
  }

  a.v-btn {
    &--outlined {
      &.primary--text {
        &:hover {
          color: white !important;
          background-color: $primary !important;
          border-color: $primary !important;
        }
      }
    }
  }

  .__img_stamp_brown {
    display: none;

    @media (min-width: 600px) {
      display: inline-block;
      position: absolute;
      top: -3.532rem;
      right: 0;
      z-index: 3;
    }

    @media (min-width: 960px) {
      display: inline-block;
      position: absolute;
      top: -3rem;
      right: 0;
      z-index: 3;
    }
  }

  ::v-deep ._carousel {
    // @include poly-fluid-sizing('margin-bottom', (600px))

    &--card {
      // @include poly-fluid-sizing ('padding-top', (600px:35px, ))
      // @include poly-fluid-sizing('padding', (600px:35px 13px 36px, 1204px:38px 50px 73px));
      @media (min-width: 600px) {
        padding: 35px 13px 36px !important;
        top: 10% !important;
        right: 0;
        z-index: 5;
        max-width: 47.135416667%;
      }

      @media (min-width: 960px) {
        padding: 35px 13px 36px !important;
        top: 15% !important;
        right: 0;
        z-index: 5;
        max-width: 40.09009009%;
      }

      @media (min-width: 1264px) {
        padding: 38px 34px 62px !important;
        // top: -450px !important;
        top: 15% !important;
        right: 0;
        z-index: 5;
      }
    }
  }
</style>

<style module src="~/assets/styles/css/_utilities.module.css"></style>
