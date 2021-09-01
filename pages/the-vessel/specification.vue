<template>
  <div id="spesification">
    <v-container tag="section" class="spesific--master py-0 px-6 px-md-0">
      <BaseCardTextImage
        :data="data.deck_technical"
        static-image
      />
    </v-container>

    <DeckSpesification :data="data.deck_previews" />

    <v-container class="pa-0">
      <BaseTables :data="data.table_spesification" />
    </v-container>
  </div>
</template>

<script>
import BaseTables from '~/components/base/BaseTables.vue'
import BaseCardTextImage from '~/components/base/BaseCardTextImage.vue'
import DeckSpesification from '~/components/DeckSpesification.vue'

export default {
  components: {
    BaseTables,
    BaseCardTextImage,
    DeckSpesification
  },

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

  async asyncData ({ $axios }) {
    const data = await $axios.$get('/api/pages/specification/')
    return {
      data
    }
  },

  mounted () {
    if (this.$data && this.$data.data.hero) {
      this.addHeros({ page_key: this.$route.name, data: this.$data.data.hero })
    }
  },

  methods: {
    // eslint-disable-next-line camelcase
    addHeros ({ page_key, data }) {
      this.$store.commit('heros/add', { page_key, data })
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
