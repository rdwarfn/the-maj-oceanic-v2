<template>
  <div id="voyages">
    <VoyagesItem
      v-for="(item, index) in data.voyages_items"
      :key="index"
      :heading-class="!index? 'heading-komodo' : null"
      class="voyages__item"
      :data="item"
    />

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
  components: {
    VoyagesItem,
    BaseTestimonal,
    BaseCarousel
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
        text: 'Voyages'
      }
    ]
  },

  async asyncData ({ $axios }) {
    const data = await $axios.$get('/api/pages/voyages/')
    return { data }
  },

  mounted () {
    this.$nextTick(() => {
      if (this.$data.data && this.$data.data.hero) {
        this.addHeros({ page_key: this.$route.name, data: this.$data.data.hero })
      }
    })
  },

  methods: {
    // eslint-disable-next-line camelcase
    addHeros ({ page_key, data }) {
      this.$store.commit('heros/add', {
        page_key, data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/utilities/_variables.scss';

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
