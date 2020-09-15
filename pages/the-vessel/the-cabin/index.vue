<template>
  <div id="the-cabin">
    <v-container tag="section" class="mx-auto px-6 px-md-0">
      <div class="intro--head font-weight-bold text-center">
        {{data.heading}}
      </div>
      <p class="intro--paragraph text-center"> {{data.description}} </p>
    </v-container>

    <spesification v-bind:data="data.spesification[0].data" />

    <!-- <div v-for="(data, index) in store" v-bind:key="index">
      <v-container tag="section" class="mb-16 px-7 px-sm-4 px-md-0 px-lg-0">
        <tCarousel
          class="__carousel"
          card-class="__carousel_card pl-md-3"
          v-bind:data="data.carousel_card"
          button-class="pl-4"
          button-text="discover"
          heading-class="pt-0 mb-1"
          text-class="mb-3 pr-lg-6"
          static-image
        >
        </tCarousel>
      </v-container>

      <v-row class="container mx-auto my-sm-16 px-7 px-sm-4 px-md-0 px-lg-0" align="center" justify="center">
        <tmg-icon-divider />
      </v-row>

      <v-container tag="section" class="my-16 px-7 px-sm-4 px-md-0 px-lg-0">
        <t-carousel-text-image
          static-image
          v-bind:data="data.carousel_text_image"
          button-text="discover"
          :button-props="{
            outlined: true
          }"
        />
      </v-container>

      <section class="mt-16 container--fluid __oceanic--secondary">
        <v-container class="px-7 px-sm-4 px-md-0 px-lg-0">
          <t-heading
            class="mb-10"
            caption-justify="center"
            caption-class="__text-primary"
            heading-justify="center"
            v-bind:data="{
              caption: data.carousel_three_image.caption,
              heading: data.carousel_three_image.heading
            }"
          />
          <t-carousel-three
            v-bind:data="data.carousel_three_image.data"
            v-bind:buttonProps="{
              outlined: true,
              color: 'primary'
            }"
            button-text="discover more"
            button-class="btn-l mx-auto"
            static-image
          />
        </v-container>
      </section>
    </div> -->
  </div>
</template>

<script>
import TmgIconDivider from '@/assets/images/svg/divider_tmg.svg?inline';
const components = {
  TmgIconDivider,
  // tHeading: () => import('@/components/base/BaseHeading.vue'),
  // tLargeImage: () => import('@/components/base/BaseLargeImage.vue'),
  // tCardTextImage: () => import('@/components/base/BaseCardTextImage.vue'),
  // tCarouselTextImage: () => import('@/components/base/BaseCarouselTextImage.vue'),
  // tCarouselThree: () => import('@/components/base/BaseCarouselThree.vue'),
  Spesification: () => import('@/components/Spesification.thecabin.vue')
}
export default {
  layout: 'main',

  components,

  name: 'the-cabin',

  async asyncData ({ $content }) {
    const data = await $content ('pages/the-cabins/index').fetch();
    return { data }
  },

  mounted () {
    console.log(this.$data.data)
    if (this.$data && this.$data.data.hero) {
      this.addHeros({ page_key: this.$route.name, data: this.$data.data.hero });
      this.addBreadcrumb ({
        text: 'the cabin',
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
$primary: #208cb2;
$secondary: #EFE1DC;

.intro {
  &--head {
    width: 100%;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    font-family: 'Domine', serif;
    @include poly-fluid-sizing ('font-size', (375px:20px, 768px:34px));
    @media #{map-get($display-breakpoints, 'sm-and-up')} {
      line-height: 41px !important;
    }
    @media #{map-get($display-breakpoints, 'xs-only')} {
      line-height: 32px !important;
    }
  }

  &--paragraph {
    margin-top: 40px;
  }
}

::v-deep .__oceanic--secondary {
  background: $secondary !important;
  @include poly-fluid-sizing('padding-top', (375px:39px, 600px:80px, 960px:110px));
  @include poly-fluid-sizing('padding-bottom', (375px:39px, 600px:80px, 960px:110px));
}

::v-deep .__text-primary {
  color: $primary !important;
}
::v-deep .__carousel {
  @media (min-width: 600px) {
    margin-bottom: 150px !important;
  }
}
::v-deep .__carousel_card {
  top: 40px !important;
  @include poly-fluid-sizing('padding-top', (375px:39px, 768px:26px, 1204px:34px));
  @include poly-fluid-sizing('padding-bottom', (375px:33px, 768px:34px, 1204px: 69px));
  @include poly-fluid-sizing('width', (375px:323px, 600px:362px, 1204px: 445px));
}
</style>