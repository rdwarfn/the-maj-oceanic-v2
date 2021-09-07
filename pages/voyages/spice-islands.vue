<template>
  <div id="voyages-komodo">
    <!-- section des 1 -->
    <KomodoDesOne :data="item.destinations[0]" />
    <!-- end section des 1 -->

    <!-- section des 2 -->
    <KomodoDesTwo :data="item.destinations[1]" />
    <!-- end section des 2 -->

    <!-- section des 3 -->
    <v-sheet color="transparent" tag="section" class="voyages-komodo--des3-mobile__wrap hidden-sm-and-up">
      <SwiperKomodoMobile :data="item.destinations[2]" />
    </v-sheet>

    <KomodoDesThree class="hidden-xs-only" :data="item.destinations[2]" />
    <!-- end section des 3 -->
  </div>
</template>

<script>
import SwiperKomodoMobile from '@/components/voyages/CarouselKomodoMobile.vue'
import KomodoDesOne from '@/components/voyages/KomodoDesOne.vue'
import KomodoDesTwo from '@/components/voyages/KomodoDesTwo.vue'
import KomodoDesThree from '@/components/voyages/KomodoDesThree.vue'
import KomodoDesFour from '@/components/voyages/KomodoDesFour.vue'
import { addHero, metaDescription, metaTitle } from '~/mixins/Page'

export default {
  components: {
    SwiperKomodoMobile,
    KomodoDesOne,
    KomodoDesTwo,
    KomodoDesThree,
    // eslint-disable-next-line vue/no-unused-components
    KomodoDesFour
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
        to: '/',
        replace: true,
        text: 'Home'
      },
      {
        to: '/voyages',
        exact: true,
        text: 'Voyages'
      },
      {
        to: '/voyages/spice-islands',
        text: 'Spice Islands'
      }
    ]
  },

  async asyncData ({ $axios }) {
    const item = await $axios.$get('/api/pages/voyages-spice-islands/')
    return {
      item
    }
  },

  mounted () {
    if (this.$data.item && this.$data.item.hero) {
      this.addHero({ page_key: this.$route.name, data: this.$data.item.hero })
    }
  }
}
</script>
