<template>
  <v-container tag="section" class="pa-0 d-flex flex-column">
    <v-skeleton-loader
      v-if="!data.heading"
      type="text@2"
      class="intro--head mb-6 mx-auto"
    >
    </v-skeleton-loader>
    <div v-else class="px-6 px-md-0">
      <h1 class="intro--head font-weight-bold text-center mx-auto mb-6 mb-sm-10" v-text="data.heading"
      />
    </div>

    <v-skeleton-loader
      v-if="!data.image"
      type="image@2"
      class="mx-auto mb-10"
      v-bind:class="imageClass"
    ></v-skeleton-loader>
    <base-large-image
      v-else
      class="px-sm-6 px-md-0"
      v-bind:class="imageClass ? imageClass : 'mb-8'"
      static-image
      :data="data.image"
    />

    <v-skeleton-loader
      v-if="!data.description"
      type="paragraph@3"
      max-width="70%"
      class="intro--paragraph text-center mx-auto"
    >
    </v-skeleton-loader>
    <div
      v-else
      class="intro--paragraph text-break px-6 px-sm-0 mx-auto"
      v-bind:class="descriptionClass ? descriptionClass : 'text-center'"
    >
      {{ data.description }}
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
::v-deep .intro {
  @media (min-width: 1204px) {
    height: 900px !important;
  }
  &--head {
    width: 100%;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    font-family: 'Domine', serif;
    @include poly-fluid-sizing ('font-size', (375px:22px, 768px:34px));
    @media #{map-get($display-breakpoints, 'sm-and-up')} {
      line-height: 41px !important;
    }
    @media #{map-get($display-breakpoints, 'xs-only')} {
      line-height: 32px !important;
    }
  }
  &--paragraph {
    @include poly-fluid-sizing('max-width', (768px:596px, 1204px:700px));
  }
}
</style>