<template>
  <v-container tag="section" class="px-6 px-md-0 mx-auto komodo--des-four__wrap">
    <v-row no-gutters align="center" justify-sm="space-between">
      <v-col cols="12" sm="5">
        <v-img
          :src="data.image"
          :lazy-src="data.image"
          class="komodo--des-four_image"
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
        <div class="komodo--des-four_text text--primary text--primary text-body-1" v-html="data.description"></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    data: {
      image: { type: String, required: true },
      description: { type: String, required: true }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/styles/scss/variables.scss";
.komodo--des-four {
  @media #{map-get($display-breakpoints, 'xs-only')} {
    &__wrap {
      margin: 35px auto 50px !important;
    }
    &_image {
      max-width: 300px !important;
      margin: 0 auto !important;
    }
    &_text {
      text-align: center !important;
      padding-top: 30px !important;
    }
  }

  @media #{map-get($display-breakpoints, 'sm-and-up')} {
    &__wrap {
      padding: 100px auto !important;
      margin-bottom: 50px !important;
    }
  }
}
</style>