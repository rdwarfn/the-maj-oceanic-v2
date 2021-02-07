<template>
  <v-container
    tag="section"
    class="px-6 px-md-0"
  >
    <div
      v-if="data.caption"
      class="hidden-sm-and-up text-h5 text-center"
    >
      {{ data.caption }}
    </div>
    <base-large-image
      :data="$store.state.storage + data.image"
    />
    <div
      :class="headingClass"
      class="heading mx-auto text-h4 text-sm-h3 text-center"
      v-html="data.heading"
    />
    <div
      class="text mx-auto text-center"
      v-html="data.description"
    />
    <div class="text-center">
      <v-btn
        class="mx-auto"
        width="143"
        height="38"
        color="primary"
        outlined
        nuxt
        tile
        :to="data.to"
      >
        read more
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import BaseLargeImage from '@/components/base/BaseLargeImage.vue'
export default {

  components: {
    BaseLargeImage
  },
  props: {
    data: {
      caption: { type: String },
      image: { type: String },
      heading: { type: String },
      description: { type: String }
    },

    headingClass: { type: String }
  }
}
</script>

<style lang="scss" scoped>
.heading {
  margin-top: 40px;
  @include poly-fluid-sizing ('margin-bottom', (375px:25px, 768px:40px));
}
.text {
  margin-bottom: 50px;
  @media #{map-get($display-breakpoints, 'xs-only')} {
    font-size: 15px !important;
    width: 100% !important;
  }
  @include poly-fluid-sizing ('width', (678px:616px, 1440px:766px));
}
</style>
