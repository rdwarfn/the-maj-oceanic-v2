<template>
  <v-container tag="section" class="pa-0 d-flex flex-column">
    <v-skeleton-loader type="text@2" class="intro--head" v-if="!data.heading">
    </v-skeleton-loader>
    <div v-else class="px-6 px-sm-0 intro--head font-weight-bold text-center mx-auto slide-y-transition-move" v-html="data.heading">
    </div>

    <base-large-image
      class="intro--image"
      v-bind:class="imageClass"
      static-image
      :data="data.image"
    />

    <v-skeleton-loader type="text@4" class="text-center" v-if="!data.description">
    </v-skeleton-loader>
    <div v-else class="intro--paragraph text-break px-6 px-sm-0 mx-auto" v-bind:class="descriptionClass ? descriptionClass : 'text-center'" v-html="data.description">
    </div>
  </v-container>
</template>

<script>
import baseLargeImage from '@/components/base/BaseLargeImage.vue';
export default {
  name: 'Intro',

  components: {
    baseLargeImage
  },

  props: {
    data: {
      heading: { type: String },
      image: { type: String },
      description: { type: String }
    },
    imageClass: { type: String },
    descriptionClass: { type: String }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/scss/variables.scss";
::v-deep .intro {
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
      max-width: 100% !important;
    }
  }
}
</style>