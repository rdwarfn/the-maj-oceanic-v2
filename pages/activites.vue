<template>
  <article id="activites">
    <v-container tag="section" class="mx-auto px-6 px-md-0 mb-15">
      <div class="intro--head font-weight-bold text-center mx-auto">
        {{ data.intro.heading }}
      </div>
      <p
        class="intro--paragraph text-center mx-auto"
        v-html="data.intro.description"
      />
    </v-container>

    <!-- watersports -->
    <template v-for="(item, index) in data.facilities">
      <activites-carousel
        :key="index"
        :data="item"
        :class="{
          'watersports-section': item.caption.includes('watersports'),
          'fitness_wellness-section': item.caption.includes('fitness & wellness'),
          'exploration-section': item.caption.includes('exploration')
        }"
      />
    </template>
    <!-- <activites-carousel
      :data="data.watersports"
      class="watersports-section"
    ></activites-carousel> -->
    <!-- end watersports -->

    <!-- fitness_wellness -->
    <!-- <activites-carousel
      :data="data.fitness_wellness"
      class="fitness_wellness-section"
    ></activites-carousel> -->
    <!-- end fitness_wellness -->

    <!-- exploration -->
    <!-- <activites-carousel
      :data="data.exploration"
      class="exploration-section"
    ></activites-carousel> -->
    <!-- end exploration -->

    <section class="activites__testimonal">
      <base-testimonal :data="data.testimonies" />
    </section>
  </article>
</template>

<script>
import activitesCarousel from '@/components/activites/Carousel.vue';
import baseTestimonal from '@/components/base/BaseTestimonal.vue';

const components = {
  activitesCarousel,
  baseTestimonal
};

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
        to: '/activites',
        text: 'Activites'
      }
    ]
  },

  // head() {
  //   return {
  //     title: this.data.header && this.data.header.title || 'Activites - The MAJ Oceanic',
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

  components,

  async asyncData ({ $axios }) {
    const data = await $axios.$get('/api/pages/activites/')
    return {
      data
    }
  },

  mounted () {
    if (this.$data && this.$data.data.hero) {
      this.addHeros({ page_key: this.$route.name, data: this.$data.data.hero });
    }
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
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/scss/variables.scss";
$primary: #208cb2;
$secondary: #EFE1DC;

.intro {
  &--head {
    width: 100%;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    font-family: 'Domine', serif;
    @include poly-fluid-sizing ('max-width', (768px:596px, 1440px:560px));
    @include poly-fluid-sizing ('font-size', (375px:20px, 768px:34px));
    @media #{map-get($display-breakpoints, 'sm-and-up')} {
      line-height: 41px !important;
    }
    @media #{map-get($display-breakpoints, 'xs-only')} {
      line-height: 32px !important;
      max-width: 100% !important;
    }
  }

  &--paragraph {
    margin-top: 40px;
    @include poly-fluid-sizing ('max-width', (768px:718px, 960px:800px))
  }
}

section.activites-container {
  @include poly-fluid-sizing ('margin-bottom', (768px:0px, 1440px:150px))
}
</style>