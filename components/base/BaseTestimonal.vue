<template>
  <v-sheet class="testimonal" color="#EFE1DC">
    <v-container class="py-0 px-6 px-md-0 mx-auto text-center" style="position: relative">
      <!-- mobile -->
      <template>
        <div class="hidden-sm-and-up">
          <swiper ref="swiperMobile" class="swiper" :options="swiperOptionsMobile">
            <swiper-slide v-for="(obj, index) in data" :key="index" class="text-center">
              <img
                :src="staticImage? require(`@/assets/images/${obj.image}`) : obj.image"
                class="testimonal--img"
              />
            </swiper-slide>
            <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
          </swiper>
        </div>

        <div class="testimonal--content-mobile mr-6 mr-sm-0 hidden-sm-and-up">
          <template>
            <v-skeleton-loader v-if="!dataActive.description" class="mb-8" loading type="paragraph"></v-skeleton-loader>
            <div v-else class="testimonal--description text--primary" v-html="dataActive.description"></div>
          </template>

          <template>
            <v-skeleton-loader v-if="!dataActive.name" loading type="text"></v-skeleton-loader>
            <strong v-else>
              {{ dataActive.name }}
            </strong>
          </template>

          <template>
            <v-skeleton-loader v-if="!dataActive.ig_username" loading type="text"></v-skeleton-loader>
            <a v-else :href="dataActive.ig_link" target="blank">
              <div class="font-weight-medium">({{ dataActive.ig_username }})</div>
            </a>
          </template>
        </div>
      </template>
      <!-- end mobile -->

      <!-- desktop -->
      <template>
        <v-row no-gutters class="testimonal--content-desktop hidden-xs-only" align="center" justify="space-between">
          <v-col cols="12" sm="6" md="auto">
            <swiper ref="swiper" class="swiper" :options="swiperOptions">
              <swiper-slide v-for="(obj, index) in data" :key="index">
                <v-img
                  :src="staticImage? require(`@/assets/images/${obj.image}`) : obj.image"
                  :lazy-src="staticImage? require(`@/assets/images/${obj.image}`) : obj.image"
                  class="testimonal--img"
                ></v-img>
              </swiper-slide>
              <div class="swiper-pagination swiper-pagination-bullets hidden-md-and-up" slot="pagination"></div>
            </swiper>
          </v-col>

          <v-col cols="12" sm="5">
            <template>
              <v-skeleton-loader v-if="!dataActive.description" class="mb-8" loading type="paragraph"></v-skeleton-loader>
              <div v-else class="testimonal--description text--primary" v-html="dataActive.description"></div>
            </template>

            <template>
              <v-skeleton-loader v-if="!dataActive.name && !dataActive.ig_link" loading type="text@2"></v-skeleton-loader>
              <a v-else :href="dataActive.ig_link" target="blank">
                <strong>{{ dataActive.name }}</strong>
                <span class="font-weight-medium">({{ dataActive.ig_username }})</span>
              </a>
            </template>
          </v-col>
        </v-row>
      </template>
      <!-- end desktop -->

      <v-btn
        fab
        x-small
        absolute
        depressed
        color="primary"
        class="hidden-sm-and-down button--left"
        @click.prevent="slidePrev"
        style="z-index: 4; cursor: pointer"
      >
        <v-icon color="white"> {{icon.left}} </v-icon>
      </v-btn>

      <v-btn
        fab
        x-small
        absolute
        depressed
        color="primary"
        class="hidden-sm-and-down button--right"
        @click.prevent="slideNext"
        style="z-index: 4; cursor: pointer"
      >
        <v-icon color="white"> {{icon.right}} </v-icon>
      </v-btn>
    </v-container>
  </v-sheet>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import { mdiChevronRight, mdiChevronLeft } from '@mdi/js';
import _ from 'lodash';
export default {
  components: { Swiper, SwiperSlide },

  props: {
    staticImage: { type: Boolean, default: true },
    data: { type: Array, required: true }
  },

  data () {
    return {
      activeIndex: 0,
      dataActive: {},
      store: [],
      icon: {
        left: mdiChevronLeft,
        right: mdiChevronRight
      },

      swiperOptions: {
        lazy: true,
        initialSlide: 0,
        effect: 'fade',
        slidesPerView: 1,
        on: {
          slideChange: () => {
            this.activeIndex = this.swiper.activeIndex
            this.dataActive = _.assign({}, this.store[this.swiper.activeIndex])
          }
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet(index, className) {
            return `<span title="${index+1}" class="${className}"></span>`
          }
        },
      },
      swiperOptionsMobile: {
        lazy: true,
        initialSlide: 0,
        slidesPerView: 1,
        spaceBetween: 25,
        on: {
          slideChange: () => {
            this.activeIndex = this.swiperMobile.activeIndex
            this.dataActive = _.assign({}, this.store[this.swiperMobile.activeIndex])
          }
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet(index, className) {
            return `<span title="${index+1}" class="${className}"></span>`
          }
        },
      }
    }
  },

  created () {
    this.init();
  },

  computed: {
    swiper () { return this.$refs.swiper.$swiper },
    swiperMobile () { return this.$refs.swiperMobile.$swiper }
  },

  methods: {
    init () {
      this.$nextTick(() => {
        if (!this.data.length) { return }
        this.store = this.data;
        this.dataActive =  _.assign({}, _.first(this.data));
      })
    },

    slidePrev (e) { this.swiper && this.swiper.slidePrev() },
    slideNext (e) { this.swiper && this.swiper.slideNext() }
  },
}
</script>

<style lang="scss" scoped>
@import "~assets/styles/scss/variables.scss";
.testimonal {
  position: relative !important;
  padding: 50px 0 !important;

  &--img {
    width: 100%;
    @include poly-fluid-sizing ('max-width', (375px:324px, 1440px:410px));
  }
  &--content-mobile {
    position: absolute !important;
    padding-top: 40px !important;
    bottom: 40px !important;
    z-index: 4 !important;
  }
  &--content-desktop {
    @media #{map-get($display-breakpoints, 'md-and-up')} {
      margin: 0 auto !important;
      max-width: 790px !important;
    }
  }
  &--description {
    @media #{map-get($display-breakpoints, 'xs-only')} {
      margin-bottom: 30px !important;
    }

    @media #{map-get($display-breakpoints, 'sm-and-up')} {
      margin-bottom: 83px !important;
    }
  }
}

::v-deep .swiper-container {
  // z-index: 4 !important;
  @include poly-fluid-sizing ('max-width', (375px:324px, 1440px:410px));

  .swiper-pagination-bullets { bottom: 0 !important }
  .swiper-pagination-bullet {
    width: 10px !important;
    height: 10px !important;
    background: #C4C4C4 !important;
    opacity: 1 !important;
    &-active { background: #208CB2 !important }
  }

  @media #{map-get($display-breakpoints, 'sm-and-up')} {
    padding-bottom: 50px !important;
  }
  @media #{map-get($display-breakpoints, 'xs-only')} {
    padding-bottom: 257px !important;
  }
}

.cols-content {
  margin-bottom: 100px !important;
}

@media #{map-get($display-breakpoints, ('sm-and-up'))} {
  .button--left {
    top: 50%;
    right: auto;
    left: 0px;
  }
  .button--right {
    top: 50%;
    left: auto;
    right: 0px;
  }
}
</style>