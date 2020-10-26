<template>
  <v-container tag="section" class="suites-and-staterooms px-0 text-center">
    <v-row no-gutters class="text-center">
      <v-col cols="12" class="pa-0">
        <div class="__caption text-h5 mb-3 px-6 px-md-0">{{ data.caption }}</div>
        <div class="__heading px-6 px-sm-0 px-6 px-md-0">{{ data.heading }}</div>

        <swiper ref="swiper" class="swiper container py-0 px-0 px-sm-6 px-md-0" v-bind:options="swiperOption">
          <swiper-slide v-for="(item, index) in data.data" v-bind:key="index">
            <div class="text-center swiper__item">
              <v-skeleton-loader class="swiper__item--img" type="image" v-if="!item.image"></v-skeleton-loader>
              <v-img
                v-else
                v-bind:src="staticImage
                  ? require(`~/assets/images/${item.image}`)
                  : item.image"
                v-bind:lazy-src="staticImage
                  ? require(`~/assets/images/${item.image}`)
                  : item.image"
                class="swiper__item--img"
              >
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              <div class="hidden-xs-only">
                <div class="swiper__item--heading font-weight-bold">{{item.heading}}</div>
                <div v-if="item.description" class="swiper__item--text" v-html="item.description"></div>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination swiper-pagination-bullets hidden-sm-and-up" slot="pagination"></div>
        </swiper>

        <div class="swiper__content">
          <div class="swiper__item--heading hidden-sm-and-up font-weight-bold">{{dataActive.heading}}</div>
          <div v-if="dataActive.description" class="swiper__item--text hidden-sm-and-up" v-html="dataActive.description"></div>
          <v-btn
            tile
            depressed
            outlined
            color="primary"
            height="38"
            nuxt
            :to="data.to"
            class="swiper__item--button btn-l mx-auto">suites and staterooms</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import { mdiChevronRight, mdiChevronLeft } from '@mdi/js';
import BaseCardThree from '@/components/base/BaseCardThreeImage.vue';
import BaseCarouselThree from '@/components/base/BaseCarouselThree.vue';
export default {
  components: {
    BaseCarouselThree,
    BaseCardThree,
    Swiper, SwiperSlide,
  },

  props: {
    data: {
      caption: { type: String },
      heading: { type: String },
      data: { type: Array }
    },
    staticImage: { type: Boolean, default: false }
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
      isEnd: false,
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

  computed: {
    swiper () {
      return this.$refs.swiper.$swiper;
    }
  },

  watch: {
    activeIndex: function (val) {
      if (!this.store && !this.store.length) return
      this.dataActive = this.store[val];
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
$pagination-size: 10px;
$primary: #208cb2;
$secondary: #EFE1DC;

::v-deep .v-btn--outlined {
  &:hover {
    color: white !important;
    background-color: $primary !important;
    border-color: $primary !important;
  }
}
::v-deep .swiper-pagination-bullet {
  width: $pagination-size;
  height: $pagination-size;
  background: #C4C4C4;
  opacity: 1;
  &:hover { background: $primary }
}
::v-deep .swiper-pagination-bullet-active {
  background: $primary;
}

.suites-and-staterooms {
  position: relative !important;
   .__caption {
    color: $primary !important;
  }
  .__heading {
    font-family: 'Domine', serif !important;
    font-weight: 600;
    line-height: 41px;
    @include poly-fluid-sizing ('font-size', (375px:20px, 768px:34px));
    @include poly-fluid-sizing ('margin-bottom', (375px:36.5px, 768px:40px, 1440px:36.5px));
  }
  .swiper__item--heading {
    @include poly-fluid-sizing ('font-size', (768px:18px, 960px:22px));
    @include poly-fluid-sizing ('margin-top', (375px:30px, 768px:20px, 960px:35px));
    margin-bottom: 5.5px;
  }
  @media #{map-get($display-breakpoints, 'xs-only')} {
    padding-top: 50px !important;
    padding-bottom: 50px !important;
    .swiper {
      padding-bottom: 230px !important;
    }
    .swiper-slide {
      width: 300px !important;
    }
    .swiper-pagination-bullets {
      bottom: 0 !important;
    }
    .swiper__content {
      left: 50%;
      transform: translateX(-50%);
      position: absolute !important;
      bottom: 125px !important;
      z-index: 2 !important;

      .swiper__item--text {
        margin-bottom: 30px;
      }
    }
    .swiper__item--img {
      width: 300px !important;
      height: 300px !important;
    }
  }
  @media #{map-get($display-breakpoints, 'sm-only')} {
    padding-bottom: 50px;
    padding-top: 9px;
  }
  @media #{map-get($display-breakpoints, 'sm-and-up')} {
    .swiper__item--button {
      margin-top: 50px;
    }
  }
  @media #{map-get($display-breakpoints, 'md-and-up')} {
    padding-top: 50px;
    padding-bottom: 50px;
  }
}
</style>