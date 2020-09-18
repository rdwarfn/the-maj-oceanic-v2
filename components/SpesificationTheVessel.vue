<template>
  <v-sheet color="#fafafa" tag="section" class="__spesification d-flex align-center">
    <v-container class="mx-auto px-6 px-md-0">
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
  </v-sheet>
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
.__spesification {
  @include poly-fluid-sizing ('height', (375px:680px, 768px:545px, 1440px:595px));
  @include poly-fluid-sizing ('margin-top', (375px:40px, 768px:75px, 1440px:90px));
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
