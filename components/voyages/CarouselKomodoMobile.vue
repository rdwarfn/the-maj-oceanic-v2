<template>
  <v-row no-gutters align="center" justify="space-between" class="swiper-komodo-mobile-1224">
    <v-col cols="12" sm="6" order-sm="12">
      <swiper v-if="data.gallery.length" ref="swiper" class="swiper" :options="swiperOptions">
        <swiper-slide v-for="(d, index) in data.gallery" :key="index">
          <v-img
            :src="$store.state.storage + d.mobile_image"
            :lazy-src="$store.state.storage + d.mobile_image"
            class="swiper-komodo-mobile-1224--image-mobile"
          >
            <template #placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular indeterminate color="grey lighten-5" />
              </v-row>
            </template>
          </v-img>
        </swiper-slide>
      </swiper>
      <v-skeleton-loader v-else :loading="!data.gallery.length" type="image" />
    </v-col>

    <v-col cols="12" sm="6">
      <v-container class="swiper-komodo-mobile-1224--content px-6 px-md-0 text-center text-sm-left">
        <div v-if="data.description" class="text--primary text-body-1" v-html="data.description" />
        <v-skeleton-loader v-else class="my-6 mx-6 mx-md-0" type="paragraph@2" loading />
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  components: { Swiper, SwiperSlide },

  props: {
    data: { Object, required: true },
    staticImage: { Boolean, default: true }
  },

  data () {
    return {
      swiperOptions: {
        lazy: true,
        slidesPerView: 'auto',
        spaceBetween: 25,
        centeredSlides: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/utilities/_variables.scss';

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
