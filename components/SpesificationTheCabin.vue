<template>
  <v-container class="suites-and-staterooms px-0 px-sm-6 px-md-0" v-bind:class="{reversed: reverse}">
    <center class="hidden-sm-and-up">
      <slot name="icon"></slot>
    </center>
    <div class="data--caption text-h6 text-center hidden-sm-and-up"> {{dataActive.caption}} </div>
    <div class="data--heading px-6 px-md-0 font-weight-bold text-center hidden-sm-and-up" v-html="dataActive.heading"></div>
    <swiper ref="swiper" class="swiper" v-bind:class="{reversed: reverse}" v-bind:options="swiperOptions">
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
      <div v-if="data && data.length > 1" class="hidden-xs-only swiper-pagination swiper-pagination-bullets"  v-bind:class="{reversed: reverse}" slot="pagination"></div>
      <template v-if="data && data.length > 1">
        <v-btn depressed fab absolute x-small class="button--left swiper-button-prev" v-bind:class="{reversed: reverse}" color="white" slot="button-prev">
          <v-icon color="primary">{{iconLeft}}</v-icon>
        </v-btn>

        <v-btn depressed fab absolute x-small class="button--right swiper-button-next" v-bind:class="{reversed: reverse}" color="white" slot="button-next">
          <v-icon color="primary">{{iconRight}}</v-icon>
        </v-btn>
      </template>
    </swiper>
    <v-card class="data--card" v-bind:class="{reversed: reverse}" flat tile>
      <div class="hidden-xs-only">
        <slot name="icon"></slot>
        <v-card-subtitle class="pa-0 text-h6 data--caption"> {{dataActive.caption}} </v-card-subtitle>
        <v-card-title class="pa-0 ml-lg-0 font-weight-bold data--heading" v-html="dataActive.heading"></v-card-title>
      </div>
      <p class="text--primary align-center px-6 px-sm-0 text-center text-sm-left">{{dataActive.text}}</p>
    </v-card>
  </v-container>
</template>

<script>
import BaseCarousel from '@/components/base/BaseCarousel.vue';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
export default {
  props: {
    data: { type: Array },
    staticImage: { type: Boolean, default: true },
    reverse: { type: Boolean },
    noWrap: { type: Boolean }
  },

  data () {
    return {
      iconLeft: mdiChevronLeft,
      iconRight: mdiChevronRight,
      store: [],
      activeIndex: null,
      dataActive: {},
      swiperOptions: {
        lazy: true,
        followFinger: false,
        slidesPerView: 1,
        initialSlide: 0,
        spaceBetween: 25,
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
          320: {
            slidesPerView: 1,
            spaceBetween: 25,
            centeredSlides: true,
            followFinger: true
          },
          375: {
            slidesPerView: 'auto',
            spaceBetween: 25,
            centeredSlides: true,
            followFinger: true
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 25,
          }
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
@import "@/assets/styles/scss/variables.scss";
$primary:#208CB2;
$size: 12px;
$secondary: #4E5E79;
$transition-time-normal: .5s;
$white: #ffffff;

.text-h6 {
  color: $primary !important;
}

::v-deep .swiper-pagination-bullet-active {
  background: #208CB2 !important;
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

  @media #{map-get($display-breakpoints, 'xs-only')} {
    background: #fafafa !important;
    padding-top: 55px !important;
    padding-bottom: 61px !important;

    .data--caption { margin-top: 35px !important }
    .data--heading {
      margin-top: 12px !important;
      margin-bottom: 40px !important;
    }
    .data--card {
      top: 0 !important;
      padding: 0 !important;
      height: auto !important;
    }
  }

  @media #{map-get($display-breakpoints, 'sm-only')} {
    padding-top: 75px !important;
    padding-bottom: 75px !important;

    .data--caption { margin-top: 25px !important }
    .data--heading {
      margin-top: 15px !important;
      margin-bottom: 35px !important;
    }
    .data--card { top: 125px !important }
  }

  @media #{map-get($display-breakpoints, 'md-and-up')} {
    padding-top: 50px !important;
    padding-bottom: 50px !important;

    .data--caption { margin-top: 30px !important }
    .data--heading {
      margin-top: 12px !important;
      margin-bottom: 36px !important;
    }
    .data--card { top: 100px !important }
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
      box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.03) !important;
      border-radius: 2px !important;
      @media #{map-get($display-breakpoints, 'xs-only')} {
        background: transparent !important;
        width: 100%;
      }
      @include poly-fluid-sizing ('width', (768px:352px, 1440px:445px));
      @include poly-fluid-sizing ('height', (768px:347px, 1440px:445px));
      @include poly-fluid-sizing ('padding-left', (768px:25px, 1440px:50px));
      @include poly-fluid-sizing ('padding-right', (768px:23px, 1440px:50px));
      @include poly-fluid-sizing ('padding-top', (768px:25px, 1440px:30px));
    }
    &--card:not(.reversed) {
      @media #{map-get($display-breakpoints, ('sm-and-up'))} {
        position: absolute;
        z-index: 2;
        right: auto;
        @include poly-fluid-sizing ('left', (600px:220px, 768px:390px, 1440px:665px));
      }
    }
    &--card.reversed {
      @media #{map-get($display-breakpoints, ('sm-and-up'))} {
        position: absolute;
        z-index: 2;
        left: auto;
        @include poly-fluid-sizing ('right', (600px:220px, 768px:390px, 1440px:665px));
      }
    }
  }
}


::v-deep .swiper-container-horizontal > .swiper-pagination-bullets.reversed {
  left: auto !important;
  right: 0px !important;
}

.swiper-container:not(.reversed) {
  margin-left: 0 !important;
}
.swiper-container.reversed {
  margin-right: 0 !important;
}

.swiper {
  // height: 300px;
  // width: 100%;
  @media #{map-get($display-breakpoints, 'md-and-up')} {
    max-width: 730px;
  }
  @media #{map-get($display-breakpoints, 'sm-only')} {
    max-width: 414px;
  }
  padding-bottom: 30px !important;
  .swiper-pagination-bullets {
    bottom: -5px;
    width: 100%;

    @include poly-fluid-sizing ('max-width', (375px:300px, 600px:414px, 768px:412px, 1440px:730px));
  }
  &:not(.reversed) {
    .swiper-slide {
      justify-content: flex-start;
      @media #{map-get($display-breakpoints, ('xs-only'))} {
        // max-width: 300px;
        // max-height: 181px;
        justify-content: center;
      }
    }
  }

  &.reversed {
    .swiper-slide {
      justify-content: flex-end;
      @media #{map-get($display-breakpoints, ('xs-only'))} {
        // max-width: 300px;
        // max-height: 181px;
        justify-content: center;
      }
    }
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    text-align: center;
    font-weight: bold;
    @media (min-width: 375px) and (max-width: 414px) {
      max-width: 300px;
      max-height: 181px;
    }

    .image--item {
      // width: 100%;
      // height: 100%;
      @include poly-fluid-sizing ('max-width', (375px:300px, 600px:414px, 768px:412px, 1440px:730px));
      @include poly-fluid-sizing ('height', (375px:181px, 600px:349px, 768px:347px, 1440px:445px));
    }
  }
}

.button--left, .button--right {
  display: none !important;
  top: auto !important;
  bottom: 39px !important;
  @media (min-width: 600px) {
    display: inline-block !important;
  }
}

.swiper-button-next, .swiper-button-prev {
  opacity: 1 !important;
  &::after {
    content: none !important;
  }
}

.swiper-button-prev:not(.reversed), .swiper-container-rtl .swiper-button-next {
  left: 12px !important;
  right: auto;
}

.swiper-button-prev.reversed, .swiper-container-rtl .swiper-button-next {
  right: 52px !important;
  left: auto;
}

.swiper-button-next:not(.reversed), .swiper-container-rtl .swiper-button-prev {
  left: 52px !important;
  right: auto;
}

.swiper-button-next.reversed, .swiper-container-rtl .swiper-button-prev {
  right: 12px !important;
  left: auto;
}

</style>