<template>
  <div>
    <template
      v-for="(data, index) of store"
      :class="sectionPading"
    >
    <template name="intro">
      <v-container class="my-sm-16 intro" tag="section" v-bind:key="index">
        <tHeading
          class="mx-auto"
          heading-justify="center"
          heading-class="text-center"
          text-class="text-center"
          :loading="$fetchState.pending"
          :data="{
            heading: data.heading,
            text: data.text,
            list: data.list
          }"
          style="max-width: 560px"
        />
        <tLargeImage
          class="mt-3"
          static-image
          :data="data.image"
        />
      </v-container>
    </template>

    <template name="the vessel">
      <v-container class="px-0 my-sm-16 overflow-visible" tag="section" v-bind:key="index">
        <tCarousel
          card-class="__hm_carousel_card"
          :data="data.carousel_card"
          button-class="pl-4"
          button-text="discover"
          heading-class="pt-0 mb-1"
          text-class="mb-3 pr-lg-6"
          static-image
        >
          <template v-slot:image-extra>
            <div class="__img_stamp_brown">
              <v-img
                :lazy-src="require('~/assets/images/tmo_stamp_brown.png')"
                :src="require('~/assets/images/tmo_stamp_brown.png')"
                max-width="183"
              >
              </v-img>
            </div>
          </template>
        </tCarousel>
      </v-container>
    </template>

    <template name="voyages">
      <v-container class="my-sm-16" tag="section" v-bind:key="index">
        <div
          class="mx-auto text-center mb-5"
          style="width: 65.765765766%"
        >
          <v-row align="center" justify="center">
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
        <tTabs
          button-text="learn more"
          :data="data.tabs.data"
          static-image
        />
      </v-container>
    </template>

    <template name="dining">
      <v-container class="my-sm-16" tag="section" v-bind:key="index">
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
    </template>

    <template name="occasions">
      <v-container class="my-sm-16" tag="section" v-bind:key="index">
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
    </template>

    <template name="destination">
      <t-divider data="The Destinations" v-bind:key="index" />

      <v-container class="my-sm-16" tag="section" v-bind:key="index">
        <t-card-text-image
          v-bind:data="data.card_text_image_small[0]"
          v-bind:button-props="{
            text: true,
            width: 'auto'
          }"
          button-text="read more"
          button-class="justify-start"
          static-image
        />
      </v-container>

      <v-container class="my-sm-16" tag="section" v-bind:key="index">
        <t-card-text-image
          v-bind:data="data.card_text_image_small[1]"
          v-bind:button-props="{
            text: true,
            width: 'auto'
          }"
          button-text="read more"
          button-class="justify-end"
          content-right
          reverse
          static-image
        />
      </v-container>

      <v-row align="center" justify="center" class="mt-5 mt-sm-8 mt-md-10 mt-lg-14" v-bind:key="index">
        <t-button
          class="btn-l"
          v-text="'read more stories'"
          :props="{
            outlined: true,
            tile: true,
            color: 'primary',
            width: 'auto',
            to: '#'
          }"
        />
      </v-row>
    </template>
    </template>
  </div>
</template>

<script>
const getHome = () => import('~/static/data/home.json').then(m => m.default || m);
const components = {
  tHeading: () => import('@/components/base/Heading.vue'),
  tCarousel: () => import('@/components/base/Carousel.vue'),
  tLargeImage: () => import('@/components/base/LargeImage.vue'),
  tCardTextImage: () => import('@/components/base/CardTextImage.vue'),
  tTabs: () => import('@/components/base/Tabs.vue'),
  tDivider: () => import('@/components/Divider.vue'),
  tButton: () => import('@/components/base/Button.vue')
}

export default {
  layout: 'main',

  data () {
    return {
      store: {},
      style: 'border: 2px solid blue;'
    }
  },

  components,

  async fetch () {
    const data = await getHome();
    this.store = data;
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

    @media (min-width: 768px) {
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
    @media (min-width: 768px) {
      padding: 35px 13px 36px !important;
      top: 0 !important;
      right: 0;
      z-index: 5;
      max-width: 47.135416667%;
    }

    @media (min-width: 960px) {
      padding: 35px 13px 36px !important;
      top: 0 !important;
      right: 0;
      z-index: 5;
      max-width: 40.09009009%;
    }

    @media (min-width: 1264px) {
      padding: 38px 34px 62px !important;
      // top: -450px !important;
      top: 0 !important;
      right: 0;
      z-index: 5;
    }

    @media (min-width: 1904px) {
      // top: -600px !important;
      top: 0 !important;
      place-self: start !important;
    }
  }
</style>

<style module src="~/assets/styles/css/_utilities.module.css" />
