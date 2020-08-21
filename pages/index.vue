<template>
  <div>
    <v-skeleton-loader
      v-if="!data"
      :loading="!data"
      type="article"
    >
    </v-skeleton-loader>
    <v-container
      v-else
      class="mb-sm-16 intro static"
      v-bind:class="sectionPading"
      tag="section"
    >
      <t-heading
        class="mx-auto mt-16"
        heading-justify="center"
        heading-class="text-center"
        text-class="text-center"
        :data="{
          heading: data.heading,
          text: data.text
        }"
        style="max-width: 560px"
      />
      <tLargeImage
        class="mt-3"
        static-image
        :data="data.image"
      />
    </v-container>

    <v-container
      class="px-0 my-sm-16 overflow-visible static"
      v-bind:class="sectionPading"
      tag="section"
    >
      <t-carousel
        card-class="__hm_carousel_card"
        :data="data.carousel_card"
        button-class="pl-4"
        button-text="discover"
        heading-class="pt-0 mb-1"
        text-class="mb-3 pr-lg-6"
        static-image
      >
        <!-- <template v-slot:image-extra>
          <div class="__img_stamp_brown">
            <v-img
              :lazy-src="require('~/assets/images/tmo_stamp_brown.png')"
              :src="require('~/assets/images/tmo_stamp_brown.png')"
              max-width="183"
            >
            </v-img>
          </div>
        </template> -->
      </t-carousel>
    </v-container>

    <v-sheet color="#EFE1DC" class="py-6">
      <v-container
        class="my-sm-16 static"
        v-bind:class="sectionPading"
        tag="section"
      >
        <client-only>
          <div
            class="mx-auto text-center mb-5"
            style="width: 65.765765766%"
          >
            <v-row align="center" justify="center" style="">
              <v-tooltip bottom>
                <template v-slot:activator="{on, attrs}">
                <div
                  class="text-h4 text-sm-h3"
                  v-bind="attrs"
                  v-on="on"
                  v-text="data.tabs.heading"
                />
                </template>
                <span v-text="data.tabs.heading" />
              </v-tooltip>
              <p class="mt-8 mt-md-3 mt-sm-5">
                {{ data.tabs.text }}
              </p>
            </v-row>
          </div>
        </client-only>
        <t-tabs
          button-text="learn more"
          v-bind:data="data.tabs.data"
          static-image
        />
      </v-container>
    </v-sheet>

    <v-container
      class="my-sm-16 static"
      v-bind:class="sectionPading"
      tag="section"
    >
      <t-card-text-image
        v-bind:data="data.card_text_image[0]"
        v-bind:button-props="{
          outlined: true
        }"
        button-text="learn more"
        button-class="btn-l"
        content-right
        static-image
        reverse
      />
    </v-container>

    <v-container
      class="my-sm-16 static"
      v-bind:class="sectionPading"
      tag="section"
    >
      <t-card-text-image
        :data="data.card_text_image[1]"
        v-bind:button-props="{
          outlined: true
        }"
        button-text="learn more"
        button-class="btn-l"
        static-image
      />
    </v-container>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
const components = {
  tCarouselBanner: () => import('@/components/containers/CarouselBanner.vue'),
  tHeading: () => import('@/components/base/Heading.vue'),
  tCarousel: () => import('@/components/base/Carousel.vue'),
  tLargeImage: () => import('@/components/base/LargeImage.vue'),
  tCardTextImage: () => import('@/components/base/CardTextImage.vue'),
  tTabs: () => import('@/components/base/Tabs.vue'),
  tDivider: () => import('@/components/Divider.vue'),
  tButton: () => import('@/components/base/Button.vue')
}
// home
export default {
  layout: 'main',

  name: 'home',

  components,

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

  section.intro {
    @media (min-width: 1204px) {
      height: 900px !important;
    }
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

  ::v-deep a.v-btn {
    font-weight: bold !important;
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

  ::v-deep .__hm_carousel_card {
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
</style>

<style module src="~/assets/styles/css/_utilities.module.css"></style>
