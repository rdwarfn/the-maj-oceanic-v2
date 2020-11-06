<template>
  <div id="spesification">
    <v-container tag="section" class="spesific--master py-0 px-6 px-md-0">
      <base-card-text-image
        v-bind:data="data.decks_technical_detail"
        static-image
      />
    </v-container>

    <deck-spesification v-bind:data="data.deck_previews" />

    <v-container class="pa-0">
      <base-tables :data="data.table_specification" />
    </v-container>
  </div>
</template>

<script>
const components = {
  baseTabs: () => import('@/components/base/BaseTabs.vue'),
  baseTables: () => import('@/components/base/BaseTables.vue'),
  baseCardTextImage: () => import('@/components/base/BaseCardTextImage.vue'),
  deckSpesification: () => import('@/components/DeckSpesification.vue')
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

  head() {
    return {
      title: this.data.header && this.data.header.title || 'Specification - The MAJ Oceanic',
      meta: [
        _.assign({}, this.meta_primary),
        _.assign({}, this.meta_facebook),
        _.assign({}, this.meta_twitter)
      ]
    }
  },

  components,

  async asyncData ({ $content }) {
    const data = await $content ('pages/specification').fetch();

    return {
      data
    }
  },

  mounted () {
    if (this.$data && this.$data.data.hero) {
      this.addHeros({ page_key: this.$route.name, data: this.$data.data.hero });
    }
  },

  computed: {
    meta_primary() {
      return this.data.header && this.data.header.seo_meta_tag.meta_primary
    },
    meta_facebook() {
      return this.data.header && this.data.header.seo_meta_tag.meta_facebook
    },
    meta_twitter() {
      return this.data.header && this.data.header.seo_meta_tag.meta_twitter
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

  #spesification {
    @include poly-fluid-sizing ('padding-top', (375px:35px, 768px:39px, 1440px:51px));
  }

  ::v-deep .card-text-image {
    padding-top: 0 !important;
  }
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