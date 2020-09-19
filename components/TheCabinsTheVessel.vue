<template>
  <v-container tag="section" class="__the-cabins px-0 text-center" v-bind:class="containerClass">
    <v-sheet color="transparent" class="px-sm-6 px-md-0 hidden-xs-only">
      <base-card-three
        class="mt-auto"
        v-bind:data="data"
        static-image
      />
      <v-btn
        class="btn-l mt-8 px-7" height="38"
        color="primary" outlined depressed tile to="/the-vessel/the-cabin"
      >suites and staterooms</v-btn>
    </v-sheet>
    <v-row no-gutters class="__the-cabins text-center hidden-sm-and-up">
      <v-col cols="12" class="pa-0">
        <div class="__caption text-h5 mb-3">
          {{ data.caption }}
        </div>
        <div class="__heading px-6 px-sm-0">
          {{ data.heading }}
        </div>
        <base-carousel-three
          v-bind:data="data.data"
          button-text="suites and staterooms"
          button-class="mt-7 mb-3"
          pagination-class="hidden-sm-and-up"
          static-image
          :buttonProps="{
            outlined: true,
            color: 'primary',
          }"
        />
      </v-col>
    </v-row>
  </v-container>
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
    },
    containerClass: { type: String }
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
  @include poly-fluid-sizing ('margin-bottom', (375px:36.5px, 768px:40px, 1440px:36.5px));
}
.__the-cabins {
  place-items: center;
  @include poly-fluid-sizing ('height', (375px:700px, 768px:579px, 1440px:748px));
}
</style>
