<template>
  <div :class="sectionPading">
    <div v-for="(data, index) in store" :key="index">
      <v-container tag="section" class="mb-16">
        <tHeading
          class="mx-auto"
          heading-justify="center"
          heading-class="text-center"
          text-justify="center"
          text-class="text-center"
          v-bind:data="{
            heading: data.heading,
            text: data.text,
            list: data.list
          }"
        />
          <tLargeImage
            class="mt-8"
            static-image
            :data="data.image"
          />
      </v-container>

      <v-container tag="section" class="my-16">
        <tCardThree
          v-bind:data="data.card_three_image"
          static-image
        />
      </v-container>

      <v-container tag="section" class="my-16">
        <tCarousel
          class="__carousel"
          v-bind:data="data.carousel_card"
          card-class="__carousel_card"
          button-class="pl-4"
          button-text="discover"
          heading-class="pt-0 mb-1"
          text-class="mb-3 pr-lg-6"
          static-image
        >
        </tCarousel>
      </v-container>

      <v-container tag="section" class="my-16">
        <tCarouselThree
          v-bind:data="data.carousel_three"
          static-image
        />
      </v-container>

      <v-container tag="section" class="my-16">
        <t-card-text-image
          :data="data.card_text_image[0]"
          v-bind:button-props="{
            outlined: true
          }"
          card-content-class=""
          v-bind:img-aspect-ratio="null"
          button-text="learn more"
          button-class="btn-l"
          card-img-class="__card_text_img--img"
          static-image
          reverse
        />
      </v-container>
    </div>
  </div>
</template>

<script>
const getTheVessel = () => import('~/static/data/the-vessel.json').then(m => m.default || m);
const components = {
  tHeading: () => import('@/components/base/Heading.vue'),
  tLargeImage: () => import('@/components/base/LargeImage.vue'),
  tCardThree: () => import('@/components/base/CardThreeImage.vue'),
  tCarousel: () => import('@/components/base/Carousel.vue'),
  tCarouselThree: () => import('@/components/base/CarouselThree.vue'),
  tCardTextImage: () => import('@/components/base/CardTextImage.vue'),
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
    const data = await getTheVessel();
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
  ::v-deep .__carousel {
    @media (min-width: 600px) {
      margin-bottom: 150px !important;
    }
  }
  ::v-deep .__carousel_card {
    margin: 0 auto;
    @include poly-fluid-sizing('padding-top', (375px:39px, 768px:26px, 1204px:34px));
    // @include poly-fluid-sizing('padding-left', (375px:17px, 768px:22px, 1204px:34px));
    @include poly-fluid-sizing('padding-bottom', (375px:33px, 768px:34px, 1204px: 69px));
    @include poly-fluid-sizing('width', (375px:323px, 600px:362px, 1204px: 445px));
    // @include poly-fluid-sizing('height', (375px:482px, 600px:498px, 1204px: 525px));
  }
  ::v-deep .__card_text_img--img {
    @include poly-fluid-sizing('max-width', (375px:325px, 600px:356px, 1204px:445px));
    @include poly-fluid-sizing('max-height', (375px:345px, 600px:700px, 1204px:716px));
  }
</style>