<template>
  <div id="voyages">
    <voyages-item v-for="(item, index) in data.voyages_items" v-bind:heading-class="!index? 'heading-komodo' : null" class="voyages__item" v-bind:key="index" v-bind:data="item" />

    <!-- <section class="voyages__testimonal">
      <base-testimonal :data="data.testimonal" static-image />
    </section> -->

    <v-container tag="section" class="container__carousel px-6 px-md-0">
      <base-carousel
        card-mobile-class="mt-2 transparent"
        v-bind:data="[...data.itineraries]"
        button-text="Rates & Schedule"
      />
    </v-container>
  </div>
</template>

<script>
const components = {
  voyagesItem: () => import('@/components/voyages/VoyagesItem'),
  baseCarousel: () => import('@/components/base/BaseCarousel.vue'),
  baseTestimonal: () => import('@/components/base/BaseTestimonal.vue')
}
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

  components,

  async asyncData ({ $content }) {
    const data = await $content('pages/voyages/index').fetch();
    return { data }
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
      this.$store.commit('heros/add', {
        page_key, data
      })
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
