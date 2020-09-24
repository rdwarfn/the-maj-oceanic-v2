<template>
  <v-container tag="section" class="the-decks mx-auto px-6 px-md-0">
    <base-carousel
      v-bind:data="data"
      card-class="__carousel_card"
      button-class="px-0"
      button-text="discover"
      heading-class="mb-1"
      text-class="mb-3 pr-lg-6"
      card-mobile-class="__carousel_card transparent"
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
  .the-decks {
    @media #{map-get($display-breakpoints, 'xs-only')} {
      padding-top: 50px;
      padding-bottom: 50px;
      ::v-deep .v-card.hidden-sm-and-up {
        position: absolute !important;
        bottom: 32px !important;
      }

      ::v-deep .__carousel .swiper {
        padding-bottom: 320px !important;
      }
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
    // @include poly-fluid-sizing('padding-top', (375px:39px, 768px:25px, 1204px:73px));
    // @include poly-fluid-sizing('padding-bottom', (375px:33px, 768px:32px, 1204px: 73px));
    // @include poly-fluid-sizing('width', (375px:323px, 600px:352px, 1204px: 445px));
    // @include poly-fluid-sizing('height', (375px:482px, 600px:347px, 1204px: 445px));
    @media #{map-get($display-breakpoints, 'xs-only')} {
      &.v-card.hidden-sm-and-up {
        bottom: 70px !important;
        padding-bottom: 0 !important;
        min-height: 202px !important;
        .v-card__text {
          padding-top: 0 !important;
        }
      }
    }
    @media #{map-get($display-breakpoints, 'sm-only')} {
      width: 352px !important;
      min-height: 347px !important;
      padding-top: 25px !important;
    }
    @media #{map-get($display-breakpoints, 'md-and-up')} {
      width: 445px !important;
      min-height: 445px !important;
      padding-top: 73px !important;
    }
  }
</style>
