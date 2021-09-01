<template>
  <div id="voyages-komodo">
    <!-- section des 1 -->
    <KomodoDesOne
      v-if="data.destinations[0]"
      :data="data.destinations[0]"
    />
    <!-- section des 2 -->
    <KomodoDesTwo
      v-if="data.destinations[1]"
      :data="data.destinations[1]"
    />
    <!-- section des 3 -->
    <v-sheet
      v-if="data.destinations[2]"
      color="transparent"
      tag="section"
      class="voyages-komodo--des3-mobile__wrap hidden-sm-and-up">
      <SwiperKomodoMobile :data="data.destinations[2]" />
    </v-sheet>

    <KomodoDesThree
      v-if="data.destinations[2]"
      class="hidden-xs-only"
      :data="data.destinations[2]"
    />
    <!-- section des 4 -->
    <KomodoDesFour
      v-if="data.destinations[3]"
      :data="data.destinations[3]"
    />
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

  async asyncData({ $axios }) {
    const data = await $axios.$get('/api/pages/voyages-komodo')

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

  // head() {
  //   return {
  //     title: this.data.header && this.data.header.title,
  //     meta: [
  //       // meta primary
  //       {
  //         hid: this.meta_primary.title.hid,
  //         name: this.meta_primary.title.name,
  //         content: this.meta_primary.title.content
  //       },
  //       {
  //         hid: this.meta_primary.description.hid,
  //         name: this.meta_primary.description.name,
  //         content: this.meta_primary.description.content
  //       },
  //       {
  //         hid: this.meta_primary.keywords.hid,
  //         name: this.meta_primary.keywords.name,
  //         content: this.meta_primary.keywords.content
  //       },
  //       // meta faceboook
  //       {
  //         hid: 'article:publisher',
  //         name: 'article:publisher',
  //         property: 'article:publisher',
  //         content: 'https://www.facebook.com/themajoceanic/',
  //       },
  //       {
  //         hid: 'article:modified_time',
  //         property: 'article:modified_time',
  //         content: this.data.updatedAt
  //       },
  //       {
  //         hid: this.meta_facebook.url.hid,
  //         name: this.meta_facebook.url.name,
  //         property: this.meta_facebook.url.property,
  //         content: this.meta_facebook.url.content
  //       },
  //       {
  //         hid: this.meta_facebook.title.hid,
  //         name: this.meta_facebook.title.name,
  //         property: this.meta_facebook.title.property,
  //         content: this.meta_facebook.title.content
  //       },
  //       {
  //         hid: this.meta_facebook.description.hid,
  //         name: this.meta_facebook.description.name,
  //         property: this.meta_facebook.description.property,
  //         content: this.meta_facebook.description.content
  //       },
  //       {
  //         hid: this.meta_facebook.image.hid,
  //         name: this.meta_facebook.image.name,
  //         property: this.meta_facebook.image.property,
  //         content: this.meta_facebook.image.content
  //       },
  //       // meta twitter
  //       {
  //         hid: 'twitter:card',
  //         name: 'twitter:card',
  //         property: 'twitter:card',
  //         content: 'summary_large_image'
  //       },
  //       {
  //         hid: 'twitter:creator',
  //         name: 'twitter:creator',
  //         property: 'twitter:creator',
  //         content: '@themajoceanic'
  //       },
  //       {
  //         hid: 'twitter:site',
  //         name: 'twitter:site',
  //         property: 'twitter:site',
  //         content: '@themajoceanic'
  //       },
  //       {
  //         hid: this.meta_twitter.url.hid,
  //         name: this.meta_twitter.url.name,
  //         property: this.meta_twitter.url.property,
  //         content: this.meta_twitter.url.content
  //       },
  //       {
  //         hid: this.meta_twitter.title.hid,
  //         name: this.meta_twitter.title.name,
  //         property: this.meta_twitter.title.property,
  //         content: this.meta_twitter.title.content
  //       },
  //       {
  //         hid: this.meta_twitter.description.hid,
  //         name: this.meta_twitter.description.name,
  //         property: this.meta_twitter.description.property,
  //         content: this.meta_twitter.description.content
  //       },
  //       {
  //         hid: this.meta_twitter.image.hid,
  //         name: this.meta_twitter.image.name,
  //         property: this.meta_twitter.image.property,
  //         content: this.meta_twitter.image.content
  //       }
  //     ],
  //   }
  // },
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