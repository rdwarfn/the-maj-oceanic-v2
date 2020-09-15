<template>
  <v-container tag="section" class="__the-cabins px-sm-6 px-md-0 text-center" v-if="isSMAndUp">
    <base-card-three
      class="mt-auto"
      v-bind:data="data"
      static-image
    />
    <v-btn
      class="mt-8 hidden-sm-and-down"
      color="primary"
      outlined
      depressed
      tile
    >suites and staterooms</v-btn>
  </v-container>
  <v-row no-gutters tag="section" class="__the-cabins text-center" v-else>
    <v-col cols="12" class="pa-0">
      <div class="__caption text-h5 mb-3">
        {{ data.caption }}
      </div>
      <div class="__heading text-capitalize">
        {{ data.heading }}
      </div>
      <base-carousel-three
        v-bind:data="data.data"
        static-image
      />
      <v-btn
        class="mt-8"
        color="primary"
        outlined
        depressed
        tile
      >suites and staterooms</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import BaseCardThree from '@/components/base/BaseCardThreeImage.vue';
import BaseCarouselThree from '@/components/base/BaseCarouselThree.vue';
export default {
  components: {
    BaseCarouselThree,
    BaseCardThree,
  },

  props: {
    data: {
      caption: { type: String },
      heading: { type: String },
      data: { type: Array }
    }
  },

  computed: {
    isSMAndUp () {
      return this.$vuetify.breakpoint.smAndUp
    }
  }
}
</script>

<style lang="scss" scoped>
$primary: #208cb2;
$secondary: #EFE1DC;
::v-deep .__caption {
  color: $primary !important;
}
.__heading {
  font-family: 'Domine', serif !important;
  font-weight: 600;
  line-height: 41px;
  @include poly-fluid-sizing ('font-size', (375px:22px, 768px:34px));
}
.__the-cabins {
  place-items: center;
  @include poly-fluid-sizing ('height', (375px:660px, 768px:450px, 1440px:748px));
}
</style>
