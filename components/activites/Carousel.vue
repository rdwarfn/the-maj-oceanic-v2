<template>
  <v-container tag="section" class="activites-container px-0 px-sm-6 px-md-0" style="position: relative">
    <div class="activites-caption-mobile hidden-sm-and-up text-h5 text-center">{{ data.caption }}</div>
    <div class="activites-heading-mobile hidden-sm-and-up font-weight-bold text-h4 text-center">{{ data.heading }}</div>
    <swiper
      ref="swiper"
      class="swiper activites-swiper-mobile hidden-sm-and-up"
      :options="swiperMobileOptions"
    >
      <swiper-slide v-for="(item, index2) in data.gallery" :key="index2">
        <template>
          <v-img
            :src="item.image"
            :lazy-src="item.image"
            class="activites-image"
          >
            <template #placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5" />
              </v-row>
            </template>
          </v-img>
        </template>
      </swiper-slide>
    </swiper>

    <div
      class="activites-description-mobile hidden-sm-and-up px-6 px-md-0 text-center"
      v-html="data.description"
    >
    </div>


    <div class="hidden-xs-only">
      <swiper
        ref="swiper"
        class="swiper activites-swiper"
        :options="swiperOptions"
        :dir="data.reverse ? 'rtl' : 'ltr'"
      >
        <swiper-slide v-for="(item, index2) in data.gallery" :key="index2">
          <template>
            <v-img
              :src="item.image"
              :lazy-src="item.image"
              class="activites-image"
            >
              <template #placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5" />
                </v-row>
              </template>
            </v-img>
          </template>
        </swiper-slide>
        <div class="swiper-pagination activites-pagination" :class="{reversed: data.reverse}" slot="pagination"></div>
      </swiper>
      <v-card flat rounded class="activites-card" :class="{reversed: data.reverse}">
        <div class="text-h6 activites-caption">{{ data.caption }}</div>
        <div class="activites-heading font-weight-bold text-h4">
          {{ data.heading }}
        </div>
        <div v-html="data.description"></div>
      </v-card>
      <v-row no-gutters align="center" justify="space-between" class="activites-actions" :class="{reversed: data.reverse}">
        <v-col cols="auto">
          <v-btn depressed fab x-small @click.prevent="prev">
            <v-icon color="primary">{{ icon.prev }}</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn depressed fab x-small @click.prevent="next">
            <v-icon color="primary">{{ icon.next }}</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </div>

  </v-container>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
export default {
  components: { Swiper, SwiperSlide },
  props: {
    data: { type: Object, required: true },
    reverse: { type: Boolean, default: false }
  },

  data () {
    return {
      swiperOptions: {
        lazy: true,
        shortSwipes: false,
        effect: 'fade',
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet(index, className) {
            return `<span class="${className}"></span>`
          }
        }
      },
      swiperMobileOptions: {
        lazy: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 25,
      },

      icon: {
        prev: mdiChevronLeft,
        next: mdiChevronRight
      }
    }
  },

  computed: {
    swiper () { return this.$refs.swiper.$swiper }
  },

  methods: {
    prev () {
      if (this.swiper.isBeginning) { return }
      this.swiper.slidePrev();
    },

    next () {
      if (this.swiper.isEnd) { return }
      this.swiper.slideNext();
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/scss/variables.scss";
.activites {
  &-container {
    @media #{map-get($display-breakpoints, 'xs-only')} {
      padding-top: 38px !important;
      padding-bottom: 89px !important;
    }
    @media #{map-get($display-breakpoints, 'sm-only')} {
      padding-top: 75px !important;
      padding-bottom: 75px !important;
    }
    @media #{map-get($display-breakpoints, 'md-and-up')} {
      padding-top: 50px !important;
      padding-bottom: 50px !important;
    }
  }
  &-caption {
    color: #208CB2 !important;
    margin-bottom: 15px !important;
    &-mobile {
      color: #208CB2 !important;
      @media #{map-get($display-breakpoints, 'xs-only')} {
        margin-bottom: 12px !important;
      }
    }
  }
  &-heading {
    margin-bottom: 30px !important;
    &-mobile {
      @media #{map-get($display-breakpoints, 'xs-only')} {
        margin-bottom: 43px !important;
      }
    }
  }
  &-description-mobile {
    @media #{map-get($display-breakpoints, 'xs-only')} {
      margin-top: 30px !important;
    }
  }

  &-card {
    $size: 445px;
    position: absolute !important;
    top: 100px !important;
    z-index: 3 !important;
    left: auto !important;
    right: 0 !important;
    &.v-card--flat {
      box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.03) !important;
    }
    @media #{map-get($display-breakpoints, 'xs-only')} {
      display: hidden !important;
    }
    @media #{map-get($display-breakpoints, 'sm-only')} {
      right: 24px !important;
      width: 352px !important;
      min-height: 347px !important;
      padding: {
        top: 25px !important;
        left: 25px !important;
        right: 25px !important;
        bottom: 32px !important;
      }
    }
    @media #{map-get($display-breakpoints, 'md-and-up')} {
      padding: {
        top: 85px !important;
        left: 50px !important;
        right: 50px !important;
      };
      width: $size !important;
      height: $size !important;
    }
    &.reversed {
      left: 0 !important;
      right: auto !important;
      @media #{map-get($display-breakpoints, 'sm-only')} {
        left: 24px !important;
      }
    }
  }

  &-actions {
    z-index: 3 !important;
    position: absolute !important;
    width: 80px !important;
    bottom: 110px !important;
    left: 15px !important;
    right: auto !important;
    &.reversed {
      left: auto !important;
      right: 15px !important;
      @media #{map-get($display-breakpoints, 'sm-only')} {
        right: 38px !important;
      }
    }
    @media #{map-get($display-breakpoints, 'xs-only')} {
      display: hidden !important;
    }
    @media #{map-get($display-breakpoints, 'sm-only')} {
      left: 38px !important;
      bottom: 136px !important;
    }
  }
}
::v-deep .swiper {
  &.swiper-container {
    @media #{map-get($display-breakpoints, 'sm-and-up')} {
      padding-bottom: 45px !important;
    }
  }
  .swiper-slide {
    @media #{map-get($display-breakpoints, 'xs-only')} {
      width: 300px !important;
    }

    .activites-image {
      @media #{map-get($display-breakpoints, 'sm-only')} {
        max-width: 412px !important;
        height: 347px !important;
      }

      @media #{map-get($display-breakpoints, 'md-and-up')} {
        max-width: 730px !important;
        max-height: 445px !important;
      }
    }
  }
  .activites-pagination {
    &.swiper-pagination-bullets {
      bottom: 0 !important;
      &.reversed {
        left: auto !important;
        right: 0 !important;
      }
      @media #{map-get($display-breakpoints, 'sm-only')} {
          width: 412px !important;
        }

      @media #{map-get($display-breakpoints, 'md-and-up')} {
        width: 730px !important;
      }

      .swiper-pagination-bullet {
        width: 10px !important;
        height: 10px !important;
        opacity: 1 !important;
        background: #C4C4C4 !important;
        &.swiper-pagination-bullet-active {
          background: #208CB2 !important;
        }
      }
    }
    // .swiper-pagination-bullet {

    // }
  }
}
</style>