<template>
  <div id="voyages-komodo">
    <!-- section des 1 -->
    <komodo-des-one :data="data.destinations[0]" />
    <!-- end section des 1 -->

    <!-- section des 2 -->
    <komodo-des-two :data="data.destinations[1]" />
    <!-- end section des 2 -->

    <!-- section des 3 -->
    <v-sheet color="transparent" tag="section" class="voyages-komodo--des3-mobile__wrap hidden-sm-and-up">
      <swiper-komodo-mobile :data="data.destinations[2]" />
    </v-sheet>

    <komodo-des-three class="hidden-xs-only" :data="data.destinations[2]" />
    <!-- end section des 3 -->
  </div>
</template>

<script>
import SwiperKomodoMobile from '@/components/voyages/CarouselKomodoMobile.vue'
import KomodoDesOne from '@/components/voyages/KomodoDesOne.vue'
import KomodoDesTwo from '@/components/voyages/KomodoDesTwo.vue'
import KomodoDesThree from '@/components/voyages/KomodoDesThree.vue'

export default {

  components: {
    SwiperKomodoMobile,
    KomodoDesOne,
    KomodoDesTwo,
    KomodoDesThree
  },
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

  async asyncData ({ $axios }) {
    const data = await $axios.$get('/api/pages/voyages-spice-islands/')
    return {
      data
    }
  },

  computed: {
    meta_primary () {
      return this.data.header && this.data.header.seo_meta_tag.meta_primary
    },
    meta_facebook () {
      return this.data.header && this.data.header.seo_meta_tag.meta_facebook
    },
    meta_twitter () {
      return this.data.header && this.data.header.seo_meta_tag.meta_twitter
    }
  },

  mounted () {
    this.$nextTick(() => {
      if (this.$data.data && this.$data.data.hero) {
        this.addHeros({ page_key: this.$route.name, data: this.$data.data.hero })
      }
    })
  },

  methods: {
    // eslint-disable-next-line
    addHeros ({ page_key, data }) {
      this.$store.commit('heros/add', { page_key, data })
    }
  }
}
</script>
