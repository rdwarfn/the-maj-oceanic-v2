<template>
  <div v-if="$fetchState.pending" class="text-h4" v-text="'test'" />
  <div v-else class="px-7 px-sm-4 px-md-0 px-lg-0">
    <v-container class="mb-16" tag="section">
      <!-- <t-heading
        da
      /> -->
      <!-- <v-btn small class="text-button">Test</v-btn> -->
    </v-container>
  </div>
</template>

<script>
const getVoyages = () => import('~/static/data/sustainability.json').then(m => m.default || m);

const components = {
  tHeading: () => import('@/components/base/Heading.vue'),
  tLargeImage: () => import('@/components/base/LargeImage.vue'),
  tCardTextImg: () => import('@/components/base/CardTextImage.vue'),
}

export default {
  layout: 'main',

  name: 'Voyages',

  components,

  data () {
    return {
      data: {}
    }
  },

  async fetch () {
    const data = await getVoyages();
    this.data = data;
  }
}
</script>

<style>
</style>
