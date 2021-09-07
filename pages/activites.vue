<template>
  <article id="activites">
    <v-container tag="section" class="mx-auto px-6 px-md-0 mb-15">
      <div class="intro--head font-weight-bold text-center mx-auto">
        {{ item.intro.heading }}
      </div>
      <p
        class="intro--paragraph text-center mx-auto"
        v-html="item.intro.description"
      />
    </v-container>

    <!-- watersports -->
    <template v-for="(d, i) in item.facilities">
      <Carousel
        :key="i"
        :data="d"
        :class="{
          'watersports-section': d.caption.includes('watersports'),
          'fitness_wellness-section': d.caption.includes('fitness & wellness'),
          'exploration-section': d.caption.includes('exploration')
        }"
      />
    </template>
    <!-- <Carousel
      :data="item.watersports"
      class="watersports-section"
    ></Carousel> -->
    <!-- end watersports -->

    <!-- fitness_wellness -->
    <!-- <Carousel
      :data="item.fitness_wellness"
      class="fitness_wellness-section"
    ></Carousel> -->
    <!-- end fitness_wellness -->

    <!-- exploration -->
    <!-- <Carousel
      :data="item.exploration"
      class="exploration-section"
    ></Carousel> -->
    <!-- end exploration -->

    <section class="activites__testimonal">
      <BaseTestimonal :data="item.testimonies" />
    </section>
  </article>
</template>

<script>
import Carousel from '~/components/activites/Carousel.vue'
import BaseTestimonal from '~/components/base/BaseTestimonal.vue'
import { addHero, metaDescription, metaTitle } from '~/mixins/Page'

export default {
  components: {
    Carousel,
    BaseTestimonal
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
        to: '/activites',
        text: 'Activites'
      }
    ]
  },

  async asyncData ({ $axios }) {
    const item = await $axios.$get('/api/pages/activites/')
    return {
      item
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
