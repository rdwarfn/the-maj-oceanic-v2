<template>
  <div id="voyages-komodo">
    <template>
      <!-- section des 1 -->
      <komodo-des-one :data="data.des_1" />
      <!-- end section des 1 -->

      <!-- section des 2 -->
      <komodo-des-two :data="data.des_2" />
      <!-- end section des 2 -->

      <!-- section des 3 -->
      <v-sheet color="transparent" tag="section" class="voyages-komodo--des3-mobile__wrap hidden-sm-and-up">
        <swiper-komodo-mobile :data="data.des_3" />
      </v-sheet>

      <komodo-des-three class="hidden-xs-only" :data="data.des_3" />
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

  async asyncData({ $content }) {
    const data = await $content(`pages/voyages/spice-islands`).fetch();

    return {
      data
    }
  },

  mounted () {
    this.$nextTick(() => {
      if (this.$data.data && this.$data.data.hero) {
        this.addHeros({ page_key: this.$route.name, data: this.$data.data.hero });
      }
    })
  },

  methods: {
    addHeros ({ page_key, data }) {
      this.$store.commit('heros/add', { page_key, data });
    }
  }
}
</script>
