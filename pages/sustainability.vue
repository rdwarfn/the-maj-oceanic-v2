<template>
  <div v-if="$fetchState.pending" class="text-h4" v-text="'loading'" />
  <div v-else class="px-7 px-sm-4 px-md-0 px-lg-0">
    <v-container class="mb-16" tag="section">
      <t-heading
        class="mx-auto"
        heading-justify="center"
        heading-class="text-center"
        text-class="text-center"
        v-bind:data="{
          heading: data.heading,
          text: data.text
        }"
      />
      <t-large-image
        class="mt-3"
        static-image
        v-bind:data="data.image"
      />
    </v-container>

    <v-container class="my-16" tag="section">
      <t-card-text-img
        static-image
        v-bind:data="data.carousel_text_image[0]"
      />
    </v-container>

    <v-container class="my-16" tag="section">
      <t-card-text-img
        static-image
        reverse
        v-bind:data="data.carousel_text_image[1]"
      />
    </v-container>
  </div>
</template>

<script>
const getSustainability = () => import('~/static/data/sustainability.json').then(m => m.default || m);

const components = {
  tHeading: () => import('@/components/base/BaseHeading.vue'),
  tLargeImage: () => import('@/components/base/BaseLargeImage.vue'),
  tCardTextImg: () => import('@/components/base/BaseCardTextImage.vue'),
}

export default {
  layout: 'main',

  name: 'Sustainability',

  components,

  data () {
    return {
      data: {}
    }
  },

  async fetch () {
    const data = await getSustainability();
    this.data = data;
  },
}
</script>

<style lang="scss" scoped>
</style>
