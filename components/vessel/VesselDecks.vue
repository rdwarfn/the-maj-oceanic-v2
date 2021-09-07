<template>
  <v-container tag="section" class="the-decks mx-auto px-6 px-md-0">
    <BaseCarouselMobile
      v-if="isxs"
      class="hidden-sm-and-up"
      :data="data"
      card-class="__carousel_card"
      button-class="px-0"
      button-text="discover"
      heading-class="mb-1"
      text-class="mb-3 pr-lg-6"
      card-mobile-class="__carousel_card transparent"
      return-text-data="description"
    />
    <!-- card-text-mobile-class="text-justify" -->
    <BaseCarousel
      v-else
      class="hidden-xs-only"
      :data="data"
      card-class="__carousel_card"
      button-class="px-0"
      button-text="discover"
      heading-class="mb-1"
      text-class="mb-3 pr-lg-6"
      card-text-mobile-class="text-justify"
      return-text-data="description"
    />
  </v-container>
</template>

<script>
import BaseCarousel from '@/components/base/BaseCarousel.vue'
import BaseCarouselMobile from '@/components/base/BaseCarouselMobile.vue'
export default {
  components: {
    BaseCarousel,
    BaseCarouselMobile
  },

  props: {
    data: {
      type: Array
    }
  },

  computed: {
    isxs () {
      return this.$vuetify.breakpoint.xs
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
    @media #{map-get($display-breakpoints, 'xs-only')} {
      z-index: 2;
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
