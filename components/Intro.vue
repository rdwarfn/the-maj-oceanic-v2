<template>
  <v-container tag="section">
    <v-skeleton-loader
      v-if="loading"
      type="text@2"
      class="intro--head mb-6 mx-auto"
    >
    </v-skeleton-loader>
    <div v-else class="px-6 px-md-0">
      <h1
        class="intro--head text-center mx-auto mb-6 mb-sm-10"
        v-text="data.heading"
      />
    </div>

    <v-skeleton-loader
      v-if="loading"
      type="image@2"
      class="mx-auto"
    ></v-skeleton-loader>
    <base-large-image
      v-else
      class="px-sm-6 px-md-0"
      static-image
      :data="data.image"
    />

    <v-skeleton-loader
      type="paragraph@3"
      max-width="70%"
      class="intro--paragraph text-center mx-auto mt-10"
    >
      <p class="intro--paragraph px-6 px-sm-0 mt-8 mx-auto text-center">
        {{ data.description }}
      </p>
    </v-skeleton-loader>
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
    loading: { type: Boolean, default: false }
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
    max-width: 700px;
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
    white-space: pre-line !important;
    @include poly-fluid-sizing('max-width', (768px:596px, 1204px:700px));
  }
}
</style>