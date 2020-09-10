<template>
  <v-flex class="__carousel-three">
    <swiper
      ref="swiper"
      class="swiper"
      v-bind:options="swiperOption"
    >
      <swiper-slide
        v-for="item in data"
        v-bind:key="item.id"
      >
        <div class="d-flex flex-column text-center">
          <v-img
            v-bind:src="staticImage
              ? require(`~/assets/images/${item.image}`)
              : item.image"
            v-bind:lazy-src="staticImage
              ? require(`~/assets/images/${item.image}`)
              : item.image"
            class="__carousel-three--img"
          ></v-img>
          <tHeading
            class="__carousel-three--head"
            :heading-class="headingClass"
            heading-justify="center"
            text-justify="center"
            :data="item"
          />
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
      <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
      <v-btn
        absolute
        fab
        x-small
        class="button--left swiper-button-prev"
        slot="button-prev"
        color="primary"
      >
        <v-icon color="white">mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn
        absolute
        fab
        x-small
        class="button--left swiper-button-next"
        color="primary"
        slot="button-next"
      >
      <v-icon color="white">mdi-chevron-right</v-icon>
      </v-btn>
    </swiper>
  </v-flex>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import tHeading from '@/components/base/BaseHeading.vue';
import tButton from '@/components/base/BaseButton.vue';
const components = {
  Swiper,
  SwiperSlide,
  tHeading,
  tButton
}
export default {
  name: 'CarouselThree',

  components,

  props: {
    headingClass: { type: String },
    buttonText: { type: String },
    buttonClass: { type: String },
    buttonProps: { type: Object },
    data: {
      type: Array
    },
    staticImage: {
      type: Boolean
    },
  },

  data () {
    return {
      swiperOption: {
        lazy: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet(index, className) {
            return `<span title="${index+1}" class="${className} swiper-pagination-bullet-custom"></span>`
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        600: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  $primary:#208CB2;
  $size: 12px;
  $secondary: #4E5E79;
  $white: #ffffff;

  .__carousel-three {
    &--head {
      margin-top: 24px !important;
      @include poly-fluid-sizing('max-width', (600px:233px, 1204px:350px));
    }

    &--img {
      margin-left: auto;
      margin-right: auto;
      // @include poly-fluid-sizing('max-width', (320px:325px, 600px:233px, 960px:350px));
    }
  }

  .swiper {
    padding-bottom: 30px !important;
    .button--left, .button--right {
      display: none !important;
      top: 35%;
      @media (min-width: 600px) {
        display: flex !important;
        z-index: 10 !important;
      }
    }

    .swiper-pagination-bullets {
      bottom: -5px;
    }
    ::v-deep .swiper-pagination-bullet-custom {
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

    .swiper-button-next, .swiper-button-prev {
      opacity: 1 !important;
      &::after {
        content: none;
      }
    }
  }
</style>