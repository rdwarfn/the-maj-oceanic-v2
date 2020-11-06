<template>
  <v-row no-gutters align="center" justify="space-between" class="swiper-komodo-mobile-1224">
    <v-col cols="12" sm="6" order-sm="12">
      <swiper v-if="data.mobile_images" ref="swiper" class="swiper" :options="swiperOptions">
        <swiper-slide v-for="(d, index) in data.mobile_images" :key="index">
          <v-img
            :src="d.image"
            :lazy-src="d.image"
            class="swiper-komodo-mobile-1224--image-mobile"
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
        </swiper-slide>
      </swiper>
      <v-skeleton-loader v-else :loading="!data.mobile_images" type="image">
      </v-skeleton-loader>
    </v-col>

    <v-col cols="12" sm="6">
      <v-container class="swiper-komodo-mobile-1224--content px-6 px-md-0 text-center text-sm-left">
        <div v-if="data.description" class="text--primary text-body-1" v-html="data.description"></div>
        <v-skeleton-loader v-else class="my-6 mx-6 mx-md-0" type="paragraph@2" loading></v-skeleton-loader>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
export default {
  components: { Swiper, SwiperSlide },

  props: {
    data: { Object, required: true },
    staticImage: { Boolean, default: true }
  },

  data() {
    return {
      swiperOptions: {
        lazy: true,
        slidesPerView: 'auto',
        spaceBetween: 25,
        centeredSlides: true,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/styles/scss/variables.scss";
.swiper-komodo-mobile-1224 {
  @media #{map-get($display-breakpoints, 'xs-only')} {
    padding-top: 27px !important;
  }

  &--image-mobile {
    @media #{map-get($display-breakpoints, 'xs-only')} {
      width: 100% !important;
      height: auto !important;
      max-width: 300px !important;
      max-height: 181px !important;
    }
  }

  &--content {
    @media #{map-get($display-breakpoints, 'xs-only')} {
      margin-top: 30px !important;
      margin-bottom: 35px !important;
    }
  }
}

::v-deep .swiper {
  .swiper-slide {
    @media #{map-get($display-breakpoints, 'xs-only')} {
      width: 300px !important;
    }
  }
}
</style>
