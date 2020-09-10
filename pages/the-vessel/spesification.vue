<template>
  <h1 v-if="$fetchState.pending">loading...</h1>
  <div v-else>
    <v-container class="mb-16 px-7 px-sm-4 px-md-0 px-lg-0" tag="section">
      <t-heading
        class="mx-auto"
        heading-justify="center"
        heading-class="text-center"
        text-class="text-center"
        v-bind:data="{
          heading: data.heading,
          text: data.text,
        }"
        style="max-width: 560px"
      />
      <t-large-image
        class="mt-3"
        static-image
        v-bind:data="data.image"
      />
    </v-container>

    <v-container class="mb-16 __bg--secondary" fluid>
      <v-container class="px-4 px-md-0 px-lg-0">
        <t-tabs
          v-bind:data="data.tabs.data"
          static-image
        >
          <template v-slot:default="{dataTab}">
            <client-only>
              <v-card max-height="389" color="transparent" flat>
                <v-img
                  v-bind:src="require('~/assets/images/'+ dataTab.image)"
                  v-bind:lazy-src="require('~/assets/images/'+ dataTab.image)"
                  class="transparent mx-auto mt-15"
                  max-height="224"
                  contain
                ></v-img>
                <v-card-text
                  class="text--primary mt-10"
                  v-text="dataTab.text"
                />
              </v-card>
            </client-only>
          </template>
        </t-tabs>
      </v-container>
    </v-container>

    <v-container>
      <t-tables />
    </v-container>
  </div>
</template>

<script>
const getSpesification = () => import('~/static/data/spesification.json').then(m => m.default || m);

const components = {
  tHeading: () => import('@/components/base/BaseHeading.vue'),
  tLargeImage: () => import('@/components/base/BaseLargeImage.vue'),
  tTabs: () => import('@/components/base/BaseTabs.vue'),
  tTables: () => import('@/components/base/BaseTables.vue')
}

export default {
  layout: 'main',

  name: 'Spesification',

  components,

  data () {
    return {
      data: {},
    }
  },

  async fetch () {
    const data = await getSpesification();
    this.data = data;
  },
}
</script>

<style lang="scss" scoped>
  $primary: #208cb2;
  $secondary: #EFE1DC;

  .__tab {
    min-height: 527px !important;
  }

  .__bg--secondary {
    background: $secondary !important;
  }

  ::v-deep .__bg--transparent {
    background: transparent !important;
  }

  // ::v-deep .__tabs--img {
    // @include poly-fluid-sizing('max-width', (375px:323px, 600px:580px, 1024px: 800px, 1440px: 920px));
  // }
</style>