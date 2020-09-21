<template>
  <v-container class="__spesification mx-auto px-6 px-md-0">
    <base-carousel
      v-bind:data="data"
      card-class="__carousel_card"
      button-class="px-0"
      button-text="discover"
      heading-class="mb-1"
      text-class="mb-3 pr-lg-6"
      card-mobile-class="mt-2 transparent"
      card-text-mobile-class="text-justify"
      static-image
    >
    </base-carousel>
  </v-container>
</template>

<script>
import BaseCarousel from '@/components/base/BaseCarousel.vue';
export default {
  components: {
    BaseCarousel
  },

  props: {
    data: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/scss/variables.scss";
  .__spesification {
    @media #{map-get($display-breakpoints, 'xs-only')} {
      padding-top: 50px;
      padding-bottom: 50px;
    }
    @media #{map-get($display-breakpoints, 'sm-only')} {
      padding-top: 75px;
      padding-bottom: 80px;
    }
    @media #{map-get($display-breakpoints, 'md-and-up')} {
      padding-top: 40px;
      padding-bottom: 55px;
    }
  }

  ::v-deep .v-card__text {
    p {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }
  ::v-deep .__carousel_card {
    margin: 0 auto;
    @include poly-fluid-sizing('padding-top', (375px:39px, 768px:25px, 1204px:73px));
    @include poly-fluid-sizing('padding-bottom', (375px:33px, 768px:32px, 1204px: 73px));
    @include poly-fluid-sizing('width', (375px:323px, 600px:362px, 1204px: 445px));
    // @include poly-fluid-sizing('height', (375px:482px, 600px:498px, 1204px: 525px));
  }
</style>
