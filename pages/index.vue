<template>
  <div>
    <v-container
      class="px-0 pb-10"
      tag="section"
    >
      <v-skeleton-loader
        v-if="loading"
        type="text@2"
        class="intro--head mb-6 mx-auto"
      >
      </v-skeleton-loader>
      <div v-else class="px-6 px-md-0">
        <h1
          class="intro--head text-break text-h4 text-sm-h3 font-weight-medium text-center mx-auto mb-6 mb-sm-10"
          v-text="data.heading"
        />
      </div>

      <v-skeleton-loader
        v-if="loading"
        type="image@2"
        class="mx-auto"
      ></v-skeleton-loader>
      <tLargeImage
        v-else
        class="px-sm-6 px-md-0"
        static-image
        :data="data.image"
      />

      <v-skeleton-loader
        v-if="loading"
        type="paragraph@3"
        max-width="70%"
        class="intro--paragraph text-center mx-auto mt-10"
      ></v-skeleton-loader>
      <p v-else class="intro--paragraph px-6 px-sm-0 mt-8 mx-auto text-center">
        {{ data.description }}
      </p>
    </v-container>

    <v-container class="the-vessel pt-10 pb-13 px-6 px-md-0" tag="section">
      <t-carousel
        :data="data.carousel_card"
        button-text="discover"
        static-image
      >
      </t-carousel>
    </v-container>

    <!-- Voyages -->
    <v-sheet class="voyages">
      <v-container class="py-0 px-6 px-md-0" tag="section">
        <v-row align="center" justify="center" class="voyages--headline mx-auto text-center mb-10">
          <div
            class="text-h4 text-sm-h3 mb-8"
            v-text="data.tabs.heading"
          />
          <p>
            {{ data.tabs.text }}
          </p>
        </v-row>
        <t-tabs
          button-text="learn more"
          v-bind:data="data.tabs.data"
          static-image
        >
        </t-tabs>
      </v-container>
    </v-sheet>

    <v-container class="dining px-6 px-md-0" tag="section">
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

    <v-container class="occasions px-6 px-md-0" tag="section">
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

  components,

  head () {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: JSON.stringify(this.data.description)
        }
      ]
    }
  },

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
  @import '@/assets/styles/scss/variables.scss';
  $primary: #208cb2;

  ::v-deep .intro {
    @media (min-width: 1204px) {
      height: 900px !important;
    }
    &--head {
      width: 100%;
      -webkit-hyphens: auto;
      -ms-hyphens: auto;
      hyphens: auto;
      @include poly-fluid-sizing ('max-width', (375px:310px, 768px:596px, 1440px:570px));
      @media #{map-get($display-breakpoints, 'sm-and-up')} {
        line-height: 41px !important;
      }
      @media #{map-get($display-breakpoints, 'xs-only')} {
        line-height: 32px !important;
      }
    }
    &--paragraph {
      white-space: pre-line !important;
      @include poly-fluid-sizing('max-width', (768px:596px, 1204px:644px));
    }
  }

  ::v-deep .voyages {
    background-color: #EFE1DC !important;
    @include poly-fluid-sizing ('margin-top', (375px:0px, 768px:75px, 1440px:58px));
    padding-top: 50px;
    @include poly-fluid-sizing ('padding-bottom', (375px:50px, 1440px:100px));

    &--headline {
      @media #{map-get($display-breakpoints, 'md-and-down')} {
        width: auto !important;
      }
      @media #{map-get($display-breakpoints, 'md-and-up')} {
        width: 714px !important;
      }
    }
  }

  ::v-deep .dining, ::v-deep .occasions {
    padding-top: 50px;
    padding-bottom: 50px;
    ._card-img-class {
      margin: 0 auto;
      @include poly-fluid-sizing ('max-width', (374px:325px, 768px:367px, 1440px:570px));
      @include poly-fluid-sizing ('height', (374px:181px, 768px:350px))
    }
  }

  ::v-deep .dining {
    @media (min-width: 960px) {
      margin-top: 100px !important;
    }
  }

  ::v-deep .occasions {
    @media #{map-get($display-breakpoints, 'md-and-down')} {
      margin-bottom: 50px !important;
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
</style>

<style module src="~/assets/styles/css/_utilities.module.css"></style>
