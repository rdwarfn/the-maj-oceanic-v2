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
        // meta primary
        {
          hid: this.meta_primary.title.hid,
          name: this.meta_primary.title.name,
          content: this.meta_primary.title.content
        },
        {
          hid: this.meta_primary.description.hid,
          name: this.meta_primary.description.name,
          content: this.meta_primary.description.content
        },
        {
          hid: this.meta_primary.keywords.hid,
          name: this.meta_primary.keywords.name,
          content: this.meta_primary.keywords.content
        },
        // meta faceboook
        {
          hid: 'article:publisher',
          name: 'article:publisher',
          property: 'article:publisher',
          content: 'https://www.facebook.com/themajoceanic/',
        },
        {
          hid: 'article:modified_time',
          property: 'article:modified_time',
          content: this.data.updatedAt
        },
        {
          hid: this.meta_facebook.url.hid,
          name: this.meta_facebook.url.name,
          property: this.meta_facebook.url.property,
          content: this.meta_facebook.url.content
        },
        {
          hid: this.meta_facebook.title.hid,
          name: this.meta_facebook.title.name,
          property: this.meta_facebook.title.property,
          content: this.meta_facebook.title.content
        },
        {
          hid: this.meta_facebook.description.hid,
          name: this.meta_facebook.description.name,
          property: this.meta_facebook.description.property,
          content: this.meta_facebook.description.content
        },
        {
          hid: this.meta_facebook.image.hid,
          name: this.meta_facebook.image.name,
          property: this.meta_facebook.image.property,
          content: this.meta_facebook.image.content
        },
        // meta twitter
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          property: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          hid: 'twitter:creator',
          name: 'twitter:creator',
          property: 'twitter:creator',
          content: '@themajoceanic'
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          property: 'twitter:site',
          content: '@themajoceanic'
        },
        {
          hid: this.meta_twitter.url.hid,
          name: this.meta_twitter.url.name,
          property: this.meta_twitter.url.property,
          content: this.meta_twitter.url.content
        },
        {
          hid: this.meta_twitter.title.hid,
          name: this.meta_twitter.title.name,
          property: this.meta_twitter.title.property,
          content: this.meta_twitter.title.content
        },
        {
          hid: this.meta_twitter.description.hid,
          name: this.meta_twitter.description.name,
          property: this.meta_twitter.description.property,
          content: this.meta_twitter.description.content
        },
        {
          hid: this.meta_twitter.image.hid,
          name: this.meta_twitter.image.name,
          property: this.meta_twitter.image.property,
          content: this.meta_twitter.image.content
        }
      ],
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