<template>
  <div id="voyages">
    <VoyagesItem
      v-for="(item, index) in data.voyages_items" v-bind:heading-class="!index? 'heading-komodo' : null" class="voyages__item" v-bind:key="index" v-bind:data="item" />

    <section class="voyages__testimonal">
      <BaseTestimonal :data="data.testimonies" />
    </section>

    <v-container tag="section" class="container__carousel px-6 px-md-0">
      <BaseCarousel
        card-mobile-class="mt-2 transparent"
        :data="[...data.itinerary]"
        button-text="Rates & Schedule"
      />
    </v-container>
  </div>
</template>

<script>
import VoyagesItem from '~/components/voyages/VoyagesItem'
import BaseTestimonal from '~/components/base/BaseTestimonal.vue'
import BaseCarousel from '~/components/base/BaseCarousel.vue'

export default {
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
        text: 'Voyages'
      }
    ]
  },

  components: {
    VoyagesItem,
    BaseTestimonal,
    BaseCarousel
  },

  async asyncData ({ $axios }) {
    const data = await $axios.$get('/api/pages/voyages/')
    return { data }
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
      this.$store.commit('heros/add', {
        page_key, data
      })
    }
  },

  // head() {
  //   return {
  //     title: this.data.header && this.data.header.title || 'Voyages - The MAJ Oceanic',
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
  // }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/scss/variables.scss";

#voyages {
  @include poly-fluid-sizing ('padding-top', (375px:35px, 768px:39px, 1440px:51px));
  .voyages__testimonal {
    @media #{map-get($display-breakpoints, 'md-and-up')} {
      margin-top: 150px;
    }
    @include poly-fluid-sizing ('margin-bottom', (375px:100px, 1440px:150px));
  }
}

.heading-komodo {
  // margin-top: 40px;
  // @include poly-fluid-sizing ('margin-bottom', (375px:25px, 768px:40px));
  @include poly-fluid-sizing ('width', (375px:260px, 768px:642px, 1440px:766px));
}
.voyages__item {
  margin-bottom: 100px;
}
.container__carousel {
  @include poly-fluid-sizing ('margin-bottom', (375px:50px, 768px:75px, 1440px:111px));
}
</style>
