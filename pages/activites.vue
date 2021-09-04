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

    <template v-for="(item, index) in data.facilities">
      <Carousel
        :key="index"
        :data="item"
        :class="{
          'watersports-section': item.caption.includes('watersports'),
          'fitness_wellness-section': item.caption.includes('fitness & wellness'),
          'exploration-section': item.caption.includes('exploration')
        }"
      />
    </template>

    <section class="activites__testimonal">
      <BaseTestimonal :data="data.testimonies" />
    </section>
  </article>
</template>

<script>
import Carousel from '@/components/activites/Carousel.vue'
import BaseTestimonal from '@/components/base/BaseTestimonal.vue'

export default {
  components: {
    Carousel,
    BaseTestimonal
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
        to: '/activites',
        text: 'Activites'
      }
    ]
  },

  async asyncData ({ $axios }) {
    const data = await $axios.$get('/api/pages/activites/')
    return {
      data
    }
  },

  mounted () {
    if (this.$data && this.$data.data.hero) {
      this.addHeros({ page_key: this.$route.name, data: this.$data.data.hero })
    }
  },

  methods: {
    // eslint-disable-next-line camelcase
    addHeros ({ page_key, data }) {
      this.$store.commit('heros/add', { page_key, data })
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
