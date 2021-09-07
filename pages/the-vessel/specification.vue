<template>
  <div id="spesification">
    <v-container tag="section" class="spesific--master py-0 px-6 px-md-0">
      <BaseCardTextImage :data="item.deck_technical" />
    </v-container>

    <DeckSpesification :data="item.deck_previews" />

    <v-container class="pa-0">
      <BaseTables :data="item.table_spesification" />
    </v-container>
  </div>
</template>

<script>
import BaseTables from '~/components/base/BaseTables.vue'
import BaseCardTextImage from '~/components/base/BaseCardTextImage.vue'
import DeckSpesification from '~/components/DeckSpesification.vue'
import { addHero, metaDescription, metaTitle } from '~/mixins/Page'

export default {
  components: {
    BaseTables,
    BaseCardTextImage,
    DeckSpesification
  },

  mixins: [
    addHero,
    metaTitle,
    metaDescription
  ],

  layout: 'main',

  meta: {
    breadcrumbs: [
      {
        href: '/',
        text: 'Home',
        exact: true,
        replace: true
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
    const item = await $axios.$get('/api/pages/specification/')
    return {
      item
    }
  },

  /**
   * TODO:
   * add meta og:image & og:url
   */
  head () {
    return {
      title: this.metaTitle,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.metaTitle
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.metaDescription
        },
        {
          hid: 'description',
          name: 'description',
          content: this.metaDescription
        }
      ]
    }
  },

  mounted () {
    if (this.$data && this.$data.item.hero) {
      this.addHero({ page_key: this.$route.name, data: this.$data.item.hero })
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
