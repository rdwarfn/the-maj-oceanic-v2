<template>
  <div id="the-vessel">
    <intro
      class="mb-16"
      v-bind:data="{
        heading: data.heading,
        image: data.image,
        description: data.description
      }"
      image-class="order-last mt-8 px-6 px-md-0"
      description-class="text-justify text-sm-center"
    />

    <the-cabins
      v-bind:data="data.card_three_image"
    />

    <spesification
      v-bind:data="data.carousel_card"
    />

    <the-teams
      v-bind:data="data.teams"
    />

    <v-container class="sustainability d-flex flex-column justify-center px-6 px-md-0" tag="section">
      <div>
        <base-card-text-image
          v-bind:data="data.card_text_image[0]"
          v-bind:button-props="{
            outlined: true
          }"
          button-text="Learn More"
          static-image
          reverse
        />
      </div>
    </v-container>
  </div>
</template>

<script>
const components = {
  BaseCardThree: () => import('@/components/base/BaseCardThreeImage.vue'),
  BaseCarousel: () => import('@/components/base/BaseCarousel.vue'),
  BaseCarouselThree: () => import('@/components/base/BaseCarouselThree.vue'),
  BaseCardTextImage: () => import('@/components/base/BaseCardTextImage.vue'),
  Intro: () => import('@/components/Intro.vue'),
  TheCabins: () => import('@/components/TheCabins.thevessel.vue'),
  Spesification: () => import('@/components/Spesification.thevessel.vue'),
  TheTeams: () => import('@/components/TheTeams.thevessel.vue')
}
export default {
  layout: 'main',

  name: 'the-vessel',

  components,

  async asyncData ({ $content }) {
    const data = await $content('pages/vessel').fetch();
    return { data }
  },

  mounted () {
    if (this.$data && this.$data.data.hero) {
      this.addHeros({ page_key: this.$route.name, data: this.$data.data.hero });
      this.addBreadcrumb ({
        text: 'the vessel',
        href: this.$route.path
      });
    }
  },

  destroyed () {
    this.removeBreadcrumb('the vessel');
  },

  computed: {
    sectionPading () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'px-7';
        case 'sm': return 'px-4';
        default: break;
      }
    },
  },

  methods: {
    addHeros ({ page_key, data }) {
      this.$store.commit('heros/add', { page_key, data });
    },
    addBreadcrumb ({ text, href }) {
      this.$store.commit('breadcrumbs/add', {
        text, href
      });
    },
    removeBreadcrumb(params) {
      const callback = (args) => args.text === params;
      this.$store.commit('breadcrumbs/remove', callback);
    }
  }
}
</script>

<style lang="scss" scoped>
  ::v-deep .__carousel {
    @media (min-width: 600px) {
      margin-bottom: 150px !important;
    }
  }
  ::v-deep .__carousel_card {
    margin: 0 auto;
    @include poly-fluid-sizing('padding-top', (375px:39px, 768px:26px, 1204px:34px));
    // @include poly-fluid-sizing('padding-left', (375px:17px, 768px:22px, 1204px:34px));
    @include poly-fluid-sizing('padding-bottom', (375px:33px, 768px:34px, 1204px: 69px));
    @include poly-fluid-sizing('width', (375px:323px, 600px:362px, 1204px: 445px));
    // @include poly-fluid-sizing('height', (375px:482px, 600px:498px, 1204px: 525px));
  }
  ::v-deep .__card_text_img--img {
    @include poly-fluid-sizing('max-width', (375px:325px, 600px:356px, 1204px:445px));
    @include poly-fluid-sizing('max-height', (375px:345px, 600px:700px, 1204px:716px));
  }

  .sustainability {
    @include poly-fluid-sizing ('min-height', (375px:667px, 768px:450px));
  }
</style>