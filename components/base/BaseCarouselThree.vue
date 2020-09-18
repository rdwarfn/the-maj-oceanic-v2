<template>
  <v-container class="px-0 __carousel-three">
    <!-- <div> -->
      <swiper
        ref="swiper"
        class="swiper"
        v-bind:options="swiperOption"
      >
        <swiper-slide
          v-for="item in data"
          v-bind:key="item.id"
        >
          <div class="text-center __carousel-three--item">
            <v-skeleton-loader
              v-if="!item.image"
              type="image"
              class="__carousel-three--item-img"
            ></v-skeleton-loader>
            <v-img
              v-bind:src="staticImage
                ? require(`~/assets/images/${item.image}`)
                : item.image"
              v-bind:lazy-src="staticImage
                ? require(`~/assets/images/${item.image}`)
                : item.image"
              class="__carousel-three--item-img swiper-zoom-target"
            ></v-img>
            <h1 v-if="item.heading" class="__carousel-three--item-heading mx-auto" v-bind:class="headingClass">
              {{item.heading}}
            </h1>
            <p v-if="item[textData]" v-bind:class="textClass">
              {{item[textData]}}
            </p>
            <t-button
              v-if="buttonText"
              v-bind:class="buttonClass"
              v-text="buttonText"
              v-bind:props="{
                to: item.to,
                ...buttonProps
              }"
            />
          </div>
        </swiper-slide>
        <div v-if="!hidePagination" class="swiper-pagination swiper-pagination-bullets hidden-md-and-down" slot="pagination"></div>
      </swiper>
      <div class="navigation container hidden-md-and-down">
        <v-btn depressed absolute fab x-small class="button--left" color="primary" @click="prev">
          <v-icon color="white"> {{icon.left}} </v-icon>
        </v-btn>
        <v-btn depressed absolute fab x-small class="button--right" color="primary" @click="next">
          <v-icon color="white"> {{icon.right}} </v-icon>
        </v-btn>
      </div>
    <!-- </div> -->
  </v-container>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import tButton from '@/components/base/BaseButton.vue';
import { mdiChevronRight, mdiChevronLeft } from '@mdi/js';
const components = {
  Swiper,
  SwiperSlide,
  tButton
}
export default {
  name: 'CarouselThree',

  components,

  props: {
    headingClass: { type: String },
    textClass: { type: String } ,
    textData: { type: String, default: 'text' },
    buttonText: { type: String },
    buttonClass: { type: String },
    buttonProps: { type: Object },
    data: {
      type: Array
    },
    staticImage: {
      type: Boolean
    },
    hidePagination: { type: Boolean, default: false }
  },

  data () {
    return {
      icon: {
        left: mdiChevronLeft,
        right: mdiChevronRight
      },
      isEnd: false,
      swiperOption: {
        lazy: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet(index, className) {
            return `<span title="${index+1}" class="${className} swiper-pagination-bullet-custom"></span>`
          }
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 'auto',
            spaceBetween: 10,
            centeredSlides: true,
            initialSlide: 1,
          },
          // when window width is >= 480px
          600: {
            slidesPerView: 3,
            spaceBetween: 15
          }
        }
      }
    }
  },

  methods: {
    prev () {
      if (this.$refs.swiper.$swiper.isBeginning) { return }
      this.$refs.swiper.$swiper.slidePrev();
    },
    next () {
      if (this.$refs.swiper.$swiper.isEnd) { return }
      this.$refs.swiper.$swiper.slideNext();
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~assets/styles/scss/variables.scss';
  $primary:#208CB2;
  $size: 12px;
  $secondary: #4E5E79;
  $white: #ffffff;

  ::v-deep .v-skeleton-loader__image {
    @include poly-fluid-sizing ('max-width', (375px:300px, 768px:233px, 1204px:350px));
    @include poly-fluid-sizing ('height', (375px:300px, 768px:197px, 1204px:350px));
  }

  @media #{map-get($display-breakpoints, ('md-and-up'))} {
    .button--left {
      top: 40%;
      right: auto;
      left: -62px;
    }
    .button--right {
      top: 40%;
      left: auto;
      right: -62px;
    }
  }
  @media #{map-get($display-breakpoints, ('sm-only'))} {
    .button--left, .button--right {
      top: 30%;
    }
    .button--left {
      left: 24px;
    }
    .button--right {
      right: 24px;
    }
  }

  .__carousel-three {
    position: relative !important;
    &--item {
      &-heading {
        @include poly-fluid-sizing('max-width', (600px:233px, 1204px:350px));
        @include poly-fluid-sizing ('font-size', (768px:18px,1440px:22px));
        margin-top: 24px !important;
        font-family: 'Domine', serif;
        font-weight: 600;
      }

      &-img {
        @media #{map-get($display-breakpoints, 'xs-only')} {
          height: 300px !important;
        }
      }
    }
  }

  ::v-deep .swiper {
    @media #{map-get($display-breakpoints, ('sm-only'))} {
      width: 88%;
    }
    padding-bottom: 50px !important;

    &-slide-active { z-index: 3 !important; }
    &-slide {
      @media #{map-get($display-breakpoints, 'xs-only')} {
        width: 300px !important;
      }
    }
    .swiper-pagination-bullets {
      bottom: -5px;
    }
    .swiper-pagination-bullet-custom {
      width: $size !important;
      height: $size !important;
      line-height: $size !important;
      text-align: center;
      color: $secondary;
      opacity: 0.25;
      background: $secondary;

      &:hover {
        opacity: 1;
      }

      &.swiper-pagination-bullet-active {
        opacity: 1;
        color: $white;
        background: $primary;
      }
    }

    ::v-deep .v-btn {
      &:hover {
        background-color: $white !important;
        border-color: $white !important;
        .v-icon {
          color: $primary !important;
          caret-color: $primary !important;
        }
      }
    }

    ::v-deep a.v-btn {
      font-weight: bold !important;
      &.primary {
        color: white !important;
        caret-color: white !important;
        &:hover {
          color: $primary !important;
          caret-color: $primary !important;
          border: thin solid $primary !important;
          background-color: white !important;
        }
      }

      &--outlined {
        &.primary--text {
          &:hover {
            color: white !important;
            background-color: $primary !important;
            border-color: $primary !important;
          }
        }
      }
    }
  }
</style>