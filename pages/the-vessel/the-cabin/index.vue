<template>
  <div>
    <div v-for="(data, index) in store" v-bind:key="index">
      <v-container tag="section" class="mb-16 px-7 px-sm-4 px-md-0 px-lg-0">
        <tCarousel
          class="__carousel"
          card-class="__carousel_card pl-md-3"
          v-bind:data="data.carousel_card"
          button-class="pl-4"
          button-text="discover"
          heading-class="pt-0 mb-1"
          text-class="mb-3 pr-lg-6"
          static-image
        >
        </tCarousel>
      </v-container>

      <v-row class="container mx-auto my-sm-16 px-7 px-sm-4 px-md-0 px-lg-0" align="center" justify="center">
        <tmg-icon-divider />
      </v-row>

      <v-container tag="section" class="my-16 px-7 px-sm-4 px-md-0 px-lg-0">
        <t-carousel-text-image
          static-image
          v-bind:data="data.carousel_text_image"
          button-text="discover"
          :button-props="{
            outlined: true
          }"
        />
      </v-container>

      <section class="mt-16 container--fluid __oceanic--secondary">
        <v-container class="px-7 px-sm-4 px-md-0 px-lg-0">
          <t-heading
            class="mb-10"
            caption-justify="center"
            caption-class="__text-primary"
            heading-justify="center"
            v-bind:data="{
              caption: data.carousel_three_image.caption,
              heading: data.carousel_three_image.heading
            }"
          />
          <t-carousel-three
            v-bind:data="data.carousel_three_image.data"
            v-bind:buttonProps="{
              outlined: true,
              color: 'primary'
            }"
            button-text="discover more"
            button-class="btn-l mx-auto"
            static-image
          />
        </v-container>
      </section>
    </div>
  </div>
</template>

<script>
const getTheCabins = () => import('~/static/data/the-cabins.json').then(m => m.default || m);
import TmgIconDivider from '@/assets/images/svg/divider_tmg.svg?inline';
const components = {
  TmgIconDivider,
  tHeading: () => import('@/components/base/Heading.vue'),
  tLargeImage: () => import('@/components/base/LargeImage.vue'),
  tCardTextImage: () => import('@/components/base/CardTextImage.vue'),
  tCarouselTextImage: () => import('@/components/base/CarouselTextImage.vue'),
  tCarouselThree: () => import('@/components/base/CarouselThree.vue'),
}
export default {
  layout: 'main',

  components,

  data () {
    return {
      store: [],
    }
  },

  async fetch () {
    const data = await getTheCabins();
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
  }
}
</script>

<style lang="scss" scoped>
$primary: #208cb2;
$secondary: #EFE1DC;

::v-deep .__oceanic--secondary {
  background: $secondary !important;
  @include poly-fluid-sizing('padding-top', (375px:39px, 600px:80px, 960px:110px));
  @include poly-fluid-sizing('padding-bottom', (375px:39px, 600px:80px, 960px:110px));
}

::v-deep .__text-primary {
  color: $primary !important;
}
::v-deep .__carousel {
  @media (min-width: 600px) {
    margin-bottom: 150px !important;
  }
}
::v-deep .__carousel_card {
  top: 40px !important;
  @include poly-fluid-sizing('padding-top', (375px:39px, 768px:26px, 1204px:34px));
  @include poly-fluid-sizing('padding-bottom', (375px:33px, 768px:34px, 1204px: 69px));
  @include poly-fluid-sizing('width', (375px:323px, 600px:362px, 1204px: 445px));
}
</style>