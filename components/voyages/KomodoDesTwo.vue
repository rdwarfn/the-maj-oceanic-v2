<template>
  <v-container tag="section" class="komodo--des-two__wrap py-0 px-6 px-md-0">
    <div class="text-h4 text-md-h3 text-center mb-10 mb-sm-5">{{ data.heading }}</div>
    <v-row no-gutters align="center" justify-sm="space-between" class="komodo--des-two_content">
      <v-col cols="12" sm="5" class="mb-8 mb-sm-0">
        <v-img
          :src="data.gallery[0].image"
          :lazy-src="data.gallery[0].image"
          class="komodo--des-two_image"
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
      <v-col cols="12" sm="5">
        <div class="text-body-1 text--primary text-center text-sm-left" v-html="data.description"></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    data: {
      heading: { type: String, required: true },
      image: { type: String, required: true },
      description: { type: String, required: true }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/styles/scss/variables.scss";
.komodo--des-two {
  @media #{map-get($display-breakpoints, 'xs-only')} {
    &__wrap {
      padding-bottom: 50px !important;
    }
    &_content {
      padding-bottom: 50px !important;
    }
    &_image {
      max-width: 300px !important;
      margin: 0 auto !important;
    }
  }

  @media #{map-get($display-breakpoints, 'sm-and-up')} {
    &_content {
      padding: 100px 0 !important;
    }
  }
}
</style>