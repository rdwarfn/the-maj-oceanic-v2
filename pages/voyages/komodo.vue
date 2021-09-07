<template>
  <div id="voyages-komodo">
    <!-- section des 1 -->
    <KomodoDesOne
      v-if="item.destinations[0]"
      :data="item.destinations[0]"
    />
    <!-- section des 2 -->
    <KomodoDesTwo
      v-if="item.destinations[1]"
      :data="item.destinations[1]"
    />
    <!-- section des 3 -->
    <v-sheet
      v-if="item.destinations[2]"
      color="transparent"
      tag="section"
      class="voyages-komodo--des3-mobile__wrap hidden-sm-and-up"
    >
      <SwiperKomodoMobile :data="item.destinations[2]" />
    </v-sheet>

    <KomodoDesThree
      v-if="item.destinations[2]"
      class="hidden-xs-only"
      :data="item.destinations[2]"
    />
    <!-- section des 4 -->
    <KomodoDesFour
      v-if="item.destinations[3]"
      :data="item.destinations[3]"
    />
  </div>
</template>

<script>
import SwiperKomodoMobile from '~/components/voyages/CarouselKomodoMobile.vue'
import KomodoDesOne from '~/components/voyages/KomodoDesOne.vue'
import KomodoDesTwo from '~/components/voyages/KomodoDesTwo.vue'
import KomodoDesThree from '~/components/voyages/KomodoDesThree.vue'
import KomodoDesFour from '~/components/voyages/KomodoDesFour.vue'
import { addHero, metaDescription, metaTitle } from '~/mixins/Page'

export default {
  components: {
    SwiperKomodoMobile,
    KomodoDesOne,
    KomodoDesTwo,
    KomodoDesThree,
    KomodoDesFour
  },

  mixins: [
    addHero,
    metaTitle,
    metaDescription
  ],

  layout: 'main',

  async asyncData ({ $axios }) {
    const item = await $axios.$get('/api/pages/voyages-komodo')

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
    if (this.$data.item && this.$data.item.hero) {
      this.addHero({ page_key: this.$route.name, data: this.$data.item.hero })
    }
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
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/scss/variables.scss";
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
