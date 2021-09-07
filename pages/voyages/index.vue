<template>
  <div id="voyages">
    <VoyagesItem
      v-for="(d, i) in item.voyages_items"
      :key="i"
      :heading-class="!i? 'heading-komodo' : null"
      class="voyages__item"
      :data="d"
    />

    <section class="voyages__testimonal">
      <BaseTestimonal :data="item.testimonies" />
    </section>

    <v-container tag="section" class="container__carousel px-6 px-md-0">
      <BaseCarousel
        card-mobile-class="mt-2 transparent"
        :data="[...item.itinerary]"
        button-text="Rates & Schedule"
      />
    </v-container>
  </div>
</template>

<script>
import VoyagesItem from '~/components/voyages/VoyagesItem'
import BaseTestimonal from '~/components/base/BaseTestimonal.vue'
import BaseCarousel from '~/components/base/BaseCarousel.vue'
import { addHero, metaDescription, metaTitle } from '~/mixins/Page'

export default {
  components: {
    VoyagesItem,
    BaseTestimonal,
    BaseCarousel
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
        to: '/voyages',
        text: 'Voyages'
      }
    ]
  },

  async asyncData ({ $axios }) {
    const item = await $axios.$get('/api/pages/voyages/')
    return { item }
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
    if (this.$data && this.$data.item.hero) {
      this.addHero({ page_key: this.$route.name, data: this.$data.item.hero })
    }
  }
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
