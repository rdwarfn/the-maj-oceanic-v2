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

      <!-- section des 4 -->
      <komodo-des-four v-if="data.des_4" :data="data.des_4" />
      <!-- end section des 4 -->
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
        to: '/voyages/komodo',
        text: 'Komodo'
      }
    ]
  },

  props: {
    staticImage: { type: Boolean, default: true }
  },

  async asyncData({ $content }) {
    const data = await $content(`pages/voyages/komodo`).fetch();

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

<style lang="scss" scoped>
@import "~assets/styles/scss/variables.scss";
// ::v-deep .voyages-komodo {

//   &--des3 {
//     @media #{map-get($display-breakpoints, 'sm-and-up')} {
//       &__wrap {
//         padding: 100px 0 !important;
//       }
//     }
//   }

//   &--des4 {
//     @media #{map-get($display-breakpoints, 'xs-only')} {
//       &__wrap {
//         margin: 35px auto 50px !important;
//       }
//       &_image {
//         max-width: 300px !important;
//         margin: 0 auto !important;
//       }
//       &_text {
//         text-align: center !important;
//         padding-top: 30px !important;
//       }
//     }

//     @media #{map-get($display-breakpoints, 'sm-and-up')} {
//       &__wrap {
//         padding: 100px auto !important;
//         margin-bottom: 50px !important;
//       }
//     }
//   }
// }
</style>