<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide>
    <swiper-slide>Slide 10</swiper-slide>
    <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
    <v-btn
      fab
      x-small
      absolute
      depressed
      class="button--left"
      color="white"
      slot="button-prev"
    >
      <v-icon color="primary">mdi-chevron-left</v-icon>
    </v-btn>
    <v-btn
      fab
      x-small
      depressed
      class="button--right"
      color="white"
      slot="button-next"
    >
      <v-icon color="primary">mdi-chevron-right</v-icon>
    </v-btn>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'swiper-example-pagination-custom',
    title: 'Custom pagination',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet(index, className) {
              return `<span class="${className} swiper-pagination-bullet-custom">${index + 1}</span>`
            }
          },
          navigation: {
            prevEl: '.button--left',
            nextEl: '.button--right',
            disabledClass: 'v-btn--disabled'
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './base.scss';
  $white: #fafafa;
  $text-color: #000000;

  ::v-deep .v-btn {
    bottom: 100px;
  }
  .swiper {
    ::v-deep .swiper-pagination-bullet-custom {
      $size: 20px;
      width: $size !important;
      height: $size !important;
      line-height: $size !important;
      text-align: center;
      color: $text-color;
      opacity: 0.7;
      background: rgba($text-color, 0.2);
      // transition: all $transition-time-normal;

      &:hover {
        opacity: 1;
      }

      &.swiper-pagination-bullet-active {
        opacity: 1;
        color: $white;
        background: #007aff;
      }

    }
  }
</style>
