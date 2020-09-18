<template>
  <div class="voyages">
    <template v-for="(item, index) in data.voyages">
      <voyages-item v-bind:heading-class="!index? 'heading-komodo' : null" class="voyages__item" v-bind:key="index" v-bind:data="item" />
    </template>

    <v-container tag="section" class="container__carousel px-6 px-md-0">
      <base-carousel
        card-mobile-class="mt-2 transparent"
        v-bind:data="data.carousel_card"
        button-text="Rates & Schedule"
        v-bind:button-props="{
          class: 'px-6'
        }"
        static-image
      />
    </v-container>
  </div>
</template>

<script>
const components = {
  VoyagesItem: () => import('@/components/VoyagesItem.vue'),
  BaseCarousel: () => import('@/components/base/BaseCarousel.vue')
}
export default {
  layout: 'main',

  components,

  async asyncData ({ $content }) {
    const data = await $content('pages/voyages').fetch();
    return { data }
  },

  mounted () {
    this.resetBreadcrumb();
    this.$nextTick(() => {
      if (this.$data.data && this.$data.data.hero) {
        this.addHeros({ page_key: this.$route.name, data: this.$data.data.hero })
        this.addBreadcrumb ({
          text: 'voyages',
          href: this.$route.path
        })
      }
    })
  },

  // destroyed () {
  //   this.removeBreadcrumb('voyages');
  // },

  methods: {
    addHeros ({ page_key, data }) {
      this.$store.commit('heros/add', {
        page_key, data
      })
    },
    addBreadcrumb ({ text, href }) {
      this.$store.commit('breadcrumbs/add', {
        text, href
      })
    },
    // removeBreadcrumb(params) {
    //   const callback = (args) => args.text === params;
    //   this.$store.commit('breadcrumbs/remove', callback);
    // },
    resetBreadcrumb () {
      this.$store.commit ('breadcrumbs/reset');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/scss/variables.scss";
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
