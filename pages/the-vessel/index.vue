<template>
  <div id="the-vessel">
    <intro
      class="the-veseel--intro px-0 pt-0"
      v-bind:data="{
        heading: data.heading,
        image: data.image,
        description: data.description
      }"
      image-class="order-last px-6 px-md-0"
      description-class="text-justify text-sm-center"
    />

    <the-cabins v-bind:data="data.card_three_image" />

    <spesification v-bind:data="data.carousel_card" />

    <the-teams v-bind:data="data.teams" />

    <v-container class="sustainability py-0 px-6 px-md-0" tag="section">
      <base-card-text-image
        v-bind:data="data.card_text_image[0]"
        button-text="Learn More"
        static-image
        content-right
        reverse
      />
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
  TheCabins: () => import('@/components/TheCabinsTheVessel.vue'),
  Spesification: () => import('@/components/SpesificationTheVessel.vue'),
  TheTeams: () => import('@/components/TheTeamsTheVessel.vue')
}
export default {
  layout: 'main',

  components,

  async asyncData ({ $content }) {
    const data = await $content('pages/vessel').fetch();
    return { data }
  },

  mounted () {
    if (this.$data && this.$data.data.hero) {
      this.resetBreadcrumb();
      this.addHeros({ page_key: this.$route.name, data: this.$data.data.hero });
      this.addBreadcrumb ({
        text: 'the vessel',
        href: this.$route.path
      });
    }
  },

  // destroyed () {
  //   this.removeBreadcrumb('the vessel');
  // },

  methods: {
    addHeros ({ page_key, data }) {
      this.$store.commit('heros/add', { page_key, data });
    },
    addBreadcrumb ({ text, href }) {
      this.$store.commit('breadcrumbs/add', {
        text, href
      });
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

  ::v-deep section.the-veseel--intro {
      padding-bottom: 50px;
      .intro--head {
        @include poly-fluid-sizing ('margin-bottom', (375px:25px, 768px:29px, 1440px:30px));
      }
      .intro--paragraph {
        @media #{map-get($display-breakpoints, 'md-and-up')} {
          max-width: 795px;
          margin-bottom: 29px;
        }
        @media #{map-get($display-breakpoints, 'sm-only')} {
          max-width: 635px;
          margin-bottom: 51px;
        }
        @media #{map-get($display-breakpoints, 'xs-only')} {
          margin-bottom: 35px;
        }
      }
  }

  ::v-deep section.sustainability {
    @media #{map-get($display-breakpoints, ('xs-only'))} {
      margin-bottom: 47px !important;
    }
    @media #{map-get($display-breakpoints, 'md-and-up')} {
      margin-top: 90px !important;
      margin-bottom: 50px !important;
    }
  }
</style>