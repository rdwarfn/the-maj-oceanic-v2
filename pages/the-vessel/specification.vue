<template>
  <div id="spesification">
    <v-container tag="section" class="spesific--master px-6 px-md-0">
      <base-card-text-image
        v-bind:data="data.card_text_image[0]"
        static-image
      />
    </v-container>

    <deck-spesification
      v-bind:data="data.decks_spesification"
      static-image
    />

    <v-container class="pa-0">
      <base-tables />
    </v-container>
  </div>
</template>

<script>
const components = {
  BaseTabs: () => import('@/components/base/BaseTabs.vue'),
  BaseTables: () => import('@/components/base/BaseTables.vue'),
  BaseCardTextImage: () => import('@/components/base/BaseCardTextImage.vue'),
  DeckSpesification: () => import('@/components/DeckSpesification.vue')
}

export default {
  layout: 'main',

  meta: {
    breadcrumbs: [
      {
        href: '/',
        replace: true,
        text: 'Home'
      },
      {
        href: '/the-vessel',
        text: 'The Vessel'
      },
      {
        href: '/the-vessel/specification',
        disabled: true,
        text: 'Specification'
      }
    ]
  },

  name: 'specification',

  components,

  async asyncData ({ $content }) {
    const data = await $content ('pages/spesification').fetch();
    return { data }
  },

  mounted () {
    if (this.$data && this.$data.data.hero) {
      this.addHeros({ page_key: this.$route.name, data: this.$data.data.hero });
    }
  },

  methods: {
    addHeros ({ page_key, data }) {
      this.$store.commit('heros/add', { page_key, data });
    }
  }
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