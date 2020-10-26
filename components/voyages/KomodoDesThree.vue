<template>
  <v-container class="px-6 px-md-0 komodo--des-three__wrap">
    <v-row no-gutters align="center" justify="space-between">
      <v-col cols="6" sm="5">
        <div v-if="data.description" class="text--primary text-body-1" v-html="data.description"></div>
        <v-skeleton-loader v-else class="my-6 mx-6 mx-md-0" type="paragraph@2" loading></v-skeleton-loader>
      </v-col>

      <v-col cols="6">
        <v-row align="center">
          <v-col :cols="!index ? 12 : 6" v-for="(d, index) in data.images" :key="index">
            <v-img
              :src="d.image"
              :lazy-src="d.image"
              class="komodo--des-three_image"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    data: {
      images: { type: Array },
      mobile_images: { type: Array },
      description: { type: String, required: true }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/styles/scss/variables.scss";
.komodo--des-three__wrap {
  @media #{map-get($display-breakpoints, 'sm-and-up')} {
    padding: 100px 0 !important;
    // &__wrap {
    // }
  }
}

.voyages-komodo {
  &--des3 {
    @media #{map-get($display-breakpoints, 'sm-and-up')} {
      &__wrap {
        padding: 100px 0 !important;
      }
    }
  }
}
</style>