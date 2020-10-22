<template>
  <div id="voyages-komodo">
    <v-progress-circular v-if="$fetchState.pending" indeterminate color="primary" class="mt-16 ma-auto"></v-progress-circular>
    <template v-else>
      <!-- section des 1 -->
      <komodo-des-one :data="data.des_1" static-image />
      <!-- end section des 1 -->

      <!-- section des 2 -->
      <komodo-des-two :data="data.des_2" static-image />
      <!-- end section des 2 -->

      <!-- section des 3 -->
      <v-sheet color="transparent" tag="section" class="voyages-komodo--des3-mobile__wrap hidden-sm-and-up">
        <swiper-komodo-mobile :data="data.des_3" />
      </v-sheet>

      <komodo-des-three class="hidden-xs-only" :data="data.des_3" static-image />
      <!-- end section des 3 -->
    </template>
  </div>
</template>

<script>
import _ from 'lodash';
import SwiperKomodoMobile from '@/components/voyages/CarouselKomodoMobile.vue';
import KomodoDesOne from '@/components/voyages/KomodoDesOne.vue';
import KomodoDesTwo from '@/components/voyages/KomodoDesTwo.vue';
import KomodoDesThree from '@/components/voyages/KomodoDesThree.vue';
import KomodoDesFour from '@/components/voyages/KomodoDesFour.vue';

export default {
  layout: 'main',

  components: {
    SwiperKomodoMobile,
    KomodoDesOne,
    KomodoDesTwo,
    KomodoDesThree,
    KomodoDesFour
  },

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

  props: {
    staticImage: { type: Boolean, default: true }
  },

  data() {
    return  {
      data: {}
    }
  },

  async fetch() {
    const response = await this.$content(`pages/voyages/spice-islands`).fetch();
    this.data = _.assign({}, response);
  },

  watch: {
    data (val) {
      this.addHeros({ page_key: this.$route.name, data: this.data.hero });
    }
  },

  methods: {
    addHeros ({ page_key, data }) {
      this.$store.commit('heros/add', { page_key, data });
    }
  }
}
</script>
