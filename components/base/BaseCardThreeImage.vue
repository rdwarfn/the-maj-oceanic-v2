<template>
  <v-flex class="__card-three">
    <v-row no-gutters class="mb-6">
      <v-col>
        <div class="__card-three--caption text-h5">
          {{ data.caption }}
        </div>
        <div class="__card-three--heading text-capitalize">
          {{ data.heading }}
        </div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <template
        v-for="(item, index) in data.data"
      >
        <v-col
          cols="12"
          sm="4"
          md="4"
          v-bind:key="index"
          class="text-center __card-three--col"
        >
          <v-card color="transparent" tile flat>
            <v-img
              class="__card-three--img mx-auto"
              v-bind:src="staticImage
                ? require(`~/assets/images/${item.image}`) : item.image"
              v-bind:lazy-src="staticImage
                ? require(`~/assets/images/${item.image}`) : item.image"
                width="100%"
            ></v-img>
            <v-card-actions class="text-center">
              <nuxt-link
                v-ripple
                draggable="false"
                v-bind:to="item.to"
                class="__card-three--heading px-3 py-2 text-break text-capitalize mx-auto text-h4 text--primary"
              >
                {{ item.heading }}
              </nuxt-link>
            </v-card-actions>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </v-flex>
</template>

<script>
import tHeading from '@/components/base/BaseHeading.vue';
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

  ::v-deep .__card-three {
    &--heading {
      font-family: 'Domine', serif !important;
      font-weight: 600;
      line-height: 41px;
      @include poly-fluid-sizing ('font-size', (375px:22px, 768px:34px));
    }
    &--col {
      @include poly-fluid-sizing ('padding-right', (375px:12.5px, 768px:8px, 1440px:15px));
      @include poly-fluid-sizing ('padding-left', (375px:12.5px, 768px:8px, 1440px:15px));
    }
    &.divide {
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
      margin-top: 24px !important;
    }
  }
</style>