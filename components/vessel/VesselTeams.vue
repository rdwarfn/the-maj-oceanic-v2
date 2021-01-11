<template>
  <v-container tag="section" class="px-0 px-sm-6 px-md-0 the-teams">
    <div class="__caption text-no-wrap text-center text-h5 mb-3 px-6 px-sm-0">{{ data.caption }}</div>
    <div class="__heading text-center px-6 px-sm-0">{{ data.heading }}</div>
    <swiper ref="swiper" class="swiper" v-bind:options="swiperOption">
      <swiper-slide v-for="item in data.data" v-bind:key="item.id">
        <div class="text-center swiper__item">
          <v-skeleton-loader
            v-if="!item.image"
            class="swiper__item--img"
            type="image"
          ></v-skeleton-loader>
          <v-img
            v-bind:src="item.image"
            v-bind:lazy-src="item.image"
            class="swiper__item--img"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <div v-if="item.name" class="swiper__item--heading font-weight-bold hidden-xs-only" style="font-family: Domine">{{ item.name }}</div>
          <div v-if="item.title" class="swiper__item--text hidden-xs-only">{{ item.title }}</div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="mx-auto text-center hidden-sm-and-up">
      <div v-if="dataActive.heading" class="swiper__item--heading font-weight-bold">{{ dataActive.name }}</div>
      <div v-if="dataActive.title" class="swiper__item--text">{{ dataActive.title }}</div>
    </div>
    <v-btn depressed absolute fab x-small class="button--left hidden-xs-only" color="primary" @click="prev">
      <v-icon color="white">{{ icon.left }}</v-icon>
    </v-btn>
    <v-btn depressed absolute fab x-small class="button--right hidden-xs-only" color="primary" @click="next">
      <v-icon color="white">{{ icon.right }}</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import { mdiChevronRight, mdiChevronLeft } from '@mdi/js';
import BaseCarouselThree from '@/components/base/BaseCarouselThree.vue';
export default {
  props: {
    data: {
      caption: { type: String },
      heading: { type: String },
      data: { type: Array }
    }
  },

  components: {
    BaseCarouselThree,
    Swiper,
    SwiperSlide
  },

  data () {
    return {
      store: [],
      dataActive: {},
      activeIndex: 0,
      icon: {
        left: mdiChevronLeft,
        right: mdiChevronRight
      },
      swiperOption: {
        lazy: true,
        initialSlide: 0,
        slidesPerView: 'auto',
        spaceBetween: 25,
        centeredSlides: true,
        on: {
          slideChange: () => {
            this.activeIndex = this.swiper.activeIndex
          }
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet(index, className) {
            return `<span title="${index+1}" class="${className}"></span>`
          }
        },
        breakpoints: {
          600: {
            slidesPerView: 3,
            spaceBetween: 15,
            initialSlide: 0,
            centeredSlides: false
          },
          960: {
            slidesPerView: 3,
            spaceBetween: 30,
            initialSlide: 0,
            centeredSlides: false
          }
        }
      }
    }
  },

  mounted () {
    this.initStore();
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
    initStore () {
      if (!this.data.data.length) return
      this.store = this.data.data;
      this.dataActive = this.data.data[0];
    },
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
  @import "@/assets/styles/scss/variables.scss";
  $primary: #208cb2;
  $secondary: #EFE1DC;

  .the-teams {
    position: relative !important;
    padding-top: 50px !important;
    .__caption {
      color: $primary !important;
    }
    .__heading {
      font-family: 'Domine', serif !important;
      font-weight: 600;
      line-height: 41px;
      @include poly-fluid-sizing ('font-size', (375px:20px, 768px:34px));
      @include poly-fluid-sizing ('margin-bottom', (375px:35px, 768px:40px, 1440px:85px));
    }
    .swiper__item--heading {
      line-height: 28px !important;
      @include poly-fluid-sizing ('font-size', (375px:22px, 768px:18px, 960px:22px));
      @include poly-fluid-sizing ('margin-top', (375px:30px, 768px:20px, 960px:35px));
      margin-bottom: 5.5px;
    }
    @media #{map-get($display-breakpoints, 'xs-only')} {
      padding-bottom: 61px !important;
      .swiper-slide {
        width: 100% !important;
        max-width: 300px !important;
      }
      .swiper-pagination-bullets {
        bottom: 0 !important;
      }
      .swiper__item--img {
        max-width: 300px !important;
        max-height: 300px !important;
      }
    }
    @media #{map-get($display-breakpoints, ('sm-only'))} {
      padding-bottom: 24px !important;
      .button--left, .button--right {
        top: 254.5px;
      }
      .button--left {
        left: 24px;
      }
      .button--right {
        right: 24px;
      }
      .swiper-container {
        max-width: 625px !important;
      }
      .swiper__item--text {
        line-height: 21px !important;
        font-size: 14px !important;
      }
    }
    @media #{map-get($display-breakpoints, ('md-and-up'))} {
      padding-bottom: 55px !important;
      .swiper__item--img {
        width: 350px !important;
        height: 350px !important;
      }
      .button--left, .button--right {
        top: 380px;
      }
      .button--left {
        right: auto;
        left: -62px;
      }
      .button--right {
        left: auto;
        right: -62px;
      }
    }
  }
</style>
