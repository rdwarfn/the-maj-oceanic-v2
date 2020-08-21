<template>
  <div>
    <v-container class="mb-sm-16 intro" tag="section">
      <t-heading
        class="mx-auto"
        heading-justify="center"
        heading-class="text-center"
        text-class="text-center"
        v-bind:data="{
          heading: data.heading,
          text: data.paragraph
        }"
        style="max-width: 560px"
      />
      <tLargeImage
        class="mt-3"
        static-image
        :data="data.image"
      />
    </v-container>

    <v-container class="mt-sm-16" tag="section">
      <t-card-text-image
        :data="data.card_text_image[0]"
        static-image
        reverse
      />
    </v-container>

    <v-row no-gutters align="start" justify="end" style="position: relative; border: 1px solid black">
      <v-img
        v-bind:src="require('~/assets/images/dining-meat-croped.jpg')"
        v-bind:lazy-src="require('~/assets/images/dining-meat-croped.jpg')"
        max-width="400"
      ></v-img>
    </v-row>

    <v-container class="px-0 my-sm-16 overflow-visible" tag="section">
      <t-carousel
        card-class="__carousel_card"
        :data="data.carousel_card"
        heading-class="pt-0 mb-1"
        text-class="mb-3 pr-lg-6"
        static-image
      >
      </t-carousel>
    </v-container>
  </div>
</template>

<script>
const components = {
  tHeading: () => import('@/components/base/Heading.vue'),
  tLargeImage: () => import('@/components/base/LargeImage.vue'),
  tCardTextImage: () => import('@/components/base/CardTextImage.vue'),
}
export default {
  layout: 'main',

  name: 'Dining',

  components,

  async asyncData ({ $content }) {
    const data = await $content('pages/dining').fetch();
    return { data }
  },

  mounted () {
    this.addCarouselBanner(this.$data.data);
  },


  computed: {
    cb () {
      return this.$store.state.carousel_banner
    }
  },

  methods: {
    addCarouselBanner (payload) {
      const isExist = this.cb.find(d => d.page_key === this.$route.name);
      if (!isExist){
        this.$store.dispatch('addBanner', {
          page_key: this.$route.name,
          data: payload.carousel_banner
        });
      }
      console.log(isExist)
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .__carousel_card {
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
