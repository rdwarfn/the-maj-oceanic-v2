<template>
  <v-flex class="__card-three static">
    <v-row no-gutters>
      <t-heading
        class="mx-auto"
        caption-justify="center"
        caption-class="text-center"
        heading-justify="center"
        heading-class="text-center"
        v-bind:data="{
          caption: data.caption,
          heading: data.heading,
        }"
      />
    </v-row>
    <v-row justify="center" class="mt-16">
      <template
        v-for="(item, index) in data.data"
      >
        <v-col
          cols="12"
          sm="4"
          md="4"
          v-bind:key="index"
          class="text-center"
        >
          <v-card
            :loading="loading"
            flat
          >
            <v-img
              v-ripple
              class="__card-three--img mx-auto"
              v-bind:src="staticImage
                ? require(`~/assets/images/${item.image}`) : item.image"
              v-bind:lazy-src="staticImage
                ? require(`~/assets/images/${item.image}`) : item.image"
            ></v-img>
            <v-card-actions class="text-center">
              <v-btn
                text nuxt depressed tile
                v-bind:to="item.to"
                class="__card-three--heading font-weight-medium text-capitalize mx-auto text-h4 text--primary"
              >
                {{ item.heading }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <!-- <div
          v-bind:key="index"
          class="mx-auto static"
          :class="'divide--'+(index+1)" v-if="isXs"
        /> -->
      </template>
    </v-row>
  </v-flex>
</template>

<script>
import tHeading from '@/components/base/Heading.vue';
export default {
  name: 'CardThreeImage',

  props: {
    "data": {
      type: Object
    },
    "static-image": {
      type: Boolean
    }
  },

  data () {
    return {
      loading: true,
    }
  },

  mounted () {
    setTimeout(() => {
      this.loading = false
    }, 2500)
  },

  components: {
    tHeading
  },

  computed: {
    isXs() {
      return this.$vuetify.breakpoint.xs
    }
  }
}
</script>

<style lang="scss" scoped>
  $primary: #208cb2;
  $secondary: #EFE1DC;
  ::v-deep .text-h5 {
    color: $primary !important;
  }
  .__card-three {
    ::v-deep &.divide {
      &--1 {
        margin-top: 24px !important;
        margin-bottom: 32px !important;
        background: $secondary !important;
        width: 90vw !important;
        height: 3px !important;
        @media (min-width: 600px) {
          margin-top: 0 !important;
          margin-bottom: 0 !important;
        }
      }
      &--2 {
        margin-top: 32px !important;
        margin-bottom: 32px !important;
        background: $secondary;
        width: 90vw !important;
        height: 3px !important;
        @media (min-width: 600px) {
          margin-top: 0 !important;
          margin-bottom: 0 !important;
        }
      }
      &--3 {
        margin-top: 32px !important;
        @media (min-width: 600px) {
          margin-top: 0 !important;
          margin-bottom: 0 !important;
        }
      }
    }

    &--img {
      @include poly-fluid-sizing('max-width', (768px:233px, 1204px:350px));
    }

    &--heading {
      display: inline-block;
      margin-top: 24px !important;
    }
  }
</style>