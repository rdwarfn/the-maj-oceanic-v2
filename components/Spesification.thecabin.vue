<template>
  <v-container class="the-cabin--spesification px-sm-6 px-md-0 pa-0">
    <!-- <div> -->
      <center class="hidden-sm-and-up">
        <slot name="icon">
          <v-img
            v-bind:width="iconSize"
            v-bind:height="iconSize"
            v-bind:src="iconZhengHe"
            v-bind:lazy-src="iconZhengHe"></v-img>
        </slot>
      </center>
      <div class="data--caption text-h5 text-center hidden-sm-and-up"> {{dataActive.caption}} </div>
      <div class="data--heading font-weight-bold text-center hidden-sm-and-up"> {{dataActive.heading}} </div>
      <swiper ref="swiper" class="swiper" v-bind:options="swiperOptions">
        <swiper-slide v-for="(item, index) in data" v-bind:key="index">
          <v-img
            v-bind:src="staticImage
              ? require('~/assets/images/' + item.image)
              : item.image"
            v-bind:lazy-src="staticImage
            ? require('~/assets/images/' + item.image)
            : item.image"
            class="image--item"></v-img>
        </swiper-slide>
      </swiper>
      <v-card class="data--card" flat ripple tile>
        <div class="hidden-xs-only d-flex flex-row flex-md-column">
          <slot name="icon">
            <img
              class="hidden-xs-only"
              v-bind:width="iconSize"
              v-bind:height="iconSize"
              v-bind:src="iconZhengHe" />
          </slot>
          <v-card-subtitle class="hidden-md-and-down px-0 pb-0 mb-1 text-h5 data--caption"> {{dataActive.caption}} </v-card-subtitle>
          <v-card-title class="px-0 hidden-xs-only ml-3 ml-md-0 font-weight-bold data--heading"> {{dataActive.heading}} </v-card-title>
        </div>
        <v-card-text class="text--primary align-center text-body-1 text-break px-6 px-sm-0 text-center text-sm-left">
          {{dataActive.text}}
        </v-card-text>
      </v-card>
    <!-- </div> -->
  </v-container>
</template>

<script>
import BaseCarousel from '@/components/base/BaseCarousel.vue';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import iconZhengHe from '@/assets/images/tmg-icon-zheng-he.png';
export default {
  props: {
    data: { type: Array },
    staticImage: { type: Boolean, default: true }
  },

  data () {
    return {
      iconSize: 70,
      iconZhengHe: iconZhengHe,
      store: [],
      activeIndex: null,
      dataActive: {},
      swiperOptions: {
        lazy: true,
        slidesPerView: 1,
        initialSlide: 0,
        on: {
          init: (args) => {
            console.log(args)
          },
          slideChange: () => {
            this.activeIndex = this.swiper.activeIndex
          }
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet(index, className) {
            return `<span title="${index+1}" class="${className} swiper-pagination-bullet-custom"></span>`
          }
        },
        navigation: {
          prevEl: '.button--left',
          nextEl: '.button--right'
        },
        breakpoints: {
          375: {
            slidesPerView: 'auto',
            spaceBetween: 25,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 25,
          },
          // 1440: {
          //   slidesPerView: 1,
          //   centeredSlides: true,
          //   spaceBetween: 25,
          //   width: 730,
          //   height: 445
          // }
        }
      }
    }
  },

  mounted () {
    this.init();
  },

  watch: {
    activeIndex: function (val) {
      if (!this.store && !this.store.length) return
      this.dataActive = this.store[val];
    }
  },

  computed: {
    swiper () {
      return this.$refs.swiper.$swiper;
    }
  },

  methods: {
    init () {
      this.$nextTick(() => {
        if (!this.data.length) { return }
        this.store = this.data;
        this.dataActive = this.data[this.swiper.activeIndex];
      })
    }
  },

  components: {
    BaseCarousel,
    Swiper,
    SwiperSlide
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/scss/variables.scss";
$primary: #208CB2;

.text-h5 {
  color: $primary !important;
}

.the-cabin--spesification {
  border: 1px solid black;
  @include poly-fluid-sizing ('min-height', (375px:675px, 768px:545px, 1440px:595px));
  position: relative;
  place-items: center;
  .data {
    &--caption {
      margin-top: 14px;
      &:not(.hidden-md-and-down) {
        margin-top: 35px;
        margin-bottom: 12px;
      }
    }
    &--heading {
      @include poly-fluid-sizing ('font-size', (375px:20px,768px:22px));
      -webkit-hyphens: auto;
      -ms-hyphens: auto;
      hyphens: auto;
      font-family: "Domine", serif;
      @media #{map-get($display-breakpoints, ('md-and-up'))} {
        margin-bottom: 20px !important;
      }
      &:not(.hidden-xs-only) {
        margin-bottom: 39px !important;
      }
    }
    &--card {
      height: auto;
      box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.03) !important;
      border-radius: 2px !important;
      @media #{map-get($display-breakpoints, 'xs-only')} {
        width: 100%;
      }
      @include poly-fluid-sizing ('width', (768px:352px, 1440px:445px));
      @include poly-fluid-sizing ('height', (768px:347px, 1440px:445px));
      @include poly-fluid-sizing ('padding-left', (768px:25px, 1440px:50px));
      @include poly-fluid-sizing ('padding-right', (768px:25px, 1440px:50px));
      @include poly-fluid-sizing ('padding-top', (768px:25px, 1440px:27px));
      @media #{map-get($display-breakpoints, ('sm-and-up'))} {
        top: 50px;
        right: 0;
        left: auto;
        position: absolute;
        z-index: 2;
      }
    }
  }
}

.swiper {
  // height: 300px;
  // width: 100%;
  .swiper-slide {
    // @include poly-fluid-sizing ('max-width', (375px:300px, 768px:412px, 144px:730px));
    // @include poly-fluid-sizing ('max-heigh', (375px:181px, 768px:347px, 144px:445px));
    display: flex;
    align-items: center;
    text-align: center;
    font-weight: bold;

    @media #{map-get($display-breakpoints, ('xs-only'))} {
      max-width: 300px;
      max-height: 181px;
      justify-content: center;
    }

    .image--item {
      // width: 100%;
      // height: 100%;
      @include poly-fluid-sizing ('max-width', (375px:300px, 768px:412px, 1440px:730px));
      @include poly-fluid-sizing ('height', (375px:181px, 768px:347px, 1440px:445px));
    }
  }
}
</style>