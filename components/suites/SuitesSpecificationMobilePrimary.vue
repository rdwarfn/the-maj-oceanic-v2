<template>
  <v-container class="suites-and-staterooms px-0 px-sm-6 px-md-0 hidden-sm-and-up" v-bind:class="{reversed: reverse}">
    <center>
      <slot name="icon"></slot>
    </center>
    <div class="data--caption text-h6 text-center"> {{data.caption}} </div>
    <div class="data--heading px-6 px-md-0 font-weight-bold text-center" v-html="data.heading"></div>
    <div class="data--sqm text-center">
      <em class="data--sqm-em">{{ data.sqm }} sqm</em>
    </div>
    <swiper ref="swiper" class="swiper" v-bind:class="{reversed: reverse}" v-bind:options="swiperOptions">
      <swiper-slide v-for="(item, index) in data.gallery" v-bind:key="index">
        <v-img
          v-bind:src="item.image"
          v-bind:lazy-src="item.image"
          class="image--item"></v-img>
      </swiper-slide>
    </swiper>
    <v-card class="data--card" color="transparent" v-bind:class="{reversed: reverse}" flat tile>
      <div class="text--primary align-center px-6 px-sm-0 text-center text-sm-left" v-html="data.description"></div>
    </v-card>
  </v-container>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
export default {
  props: {
    data: { type: Object },
    reverse: { type: Boolean }
  },

  data () {
    return {
      swiperOptions: {
        lazy: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        initialSlide: 0,
        spaceBetween: 25
      }
    }
  },

  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/scss/variables.scss";
$primary:#208CB2;

.text-h6 {
  color: $primary !important;
}

::v-deep .v-card__text {
  font-weight: 300 !important;
  font-size: 16px !important;
  line-height: 21px !important;
  letter-spacing: normal !important;
}

.suites-and-staterooms {
  position: relative !important;
  // border: 1px solid black;
  // @include poly-fluid-sizing ('min-height', (375px:675px, 768px:545px, 1440px:595px));
  background: #fafafa !important;
  padding-top: 55px !important;
  padding-bottom: 61px !important;

  .data--caption { margin-top: 35px !important }
  .data--heading {
    margin-top: 12px !important;
    margin-bottom: 10px;
  }
  .data--sqm {
    margin-bottom: 40px !important;
  }
  .data--card {
    top: 0 !important;
    padding: 25px !important;
    height: auto !important;
  }

  .data {
    &--heading {
      @include poly-fluid-sizing ('font-size', (375px:20px,768px:22px));
      white-space: nowrap !important;
      font-family: "Domine", serif;
      line-height: 28px;
      letter-spacing: normal;
    }
    &--card {
      height: auto;
      border-radius: 2px !important;
      width: 100%;
    }
  }
}

.swiper {
  .swiper-slide {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    @include poly-fluid-sizing ('max-width', (375px:300px, 600px:414px));
    .image--item {
      // width: 100%;
      // height: 100%;
      @include poly-fluid-sizing ('max-width', (375px:300px, 600px:414px));
      @include poly-fluid-sizing ('height', (375px:181px, 600px:349px));
    }
  }
}
</style>