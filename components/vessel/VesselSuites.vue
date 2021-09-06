<template>
  <v-container tag="section" class="suites-and-staterooms px-0 text-center">
    <v-row no-gutters class="text-center">
      <v-col cols="12" class="pa-0">
        <div class="__caption text-h5 mb-3 px-6 px-md-0">
          {{ item.caption }}
        </div>
        <div class="__heading px-6 px-sm-0 px-6 px-md-0">
          {{ item.heading }}
        </div>

        <div :class="$style.wrap">
          <ClientOnly>
            <swiper ref="swiper" class="swiper container py-0 px-0 px-sm-6 px-md-0" :options="swiperOption">
              <template v-for="(content, index) in item.data">
                <swiper-slide :key="index">
                  <div class="text-center swiper__item">
                    <v-skeleton-loader v-if="!content.admiral.gallery" class="swiper__item--img" type="image" />
                    <v-img
                      v-else
                      :src="$store.state.storage + content.admiral.gallery[0].image"
                      :lazy-src="$store.state.storage + content.admiral.gallery[0].image"
                      class="swiper__item--img"
                    >
                      <template #placeholder>
                        <v-row class="fill-height ma-0" align="center" justify="center">
                          <v-progress-circular indeterminate color="grey lighten-5" />
                        </v-row>
                      </template>
                    </v-img>
                    <div class="hidden-xs-only">
                      <div class="swiper__item--heading font-weight-bold text-capitalize">
                        {{ content.admiral.caption }}
                      </div>
                      <div class="swiper__item--text">
                        <em>{{ content.admiral.sqm }} sqm</em>
                      </div>
                    </div>
                  </div>
                </swiper-slide>

                <swiper-slide :key="index + 1">
                  <div class="text-center swiper__item">
                    <v-skeleton-loader v-if="!content.commodore.gallery" class="swiper__item--img" type="image" />
                    <v-img
                      v-else
                      :src="$store.state.storage + content.commodore.gallery[0].image"
                      :lazy-src="$store.state.storage + content.commodore.gallery[0].image"
                      class="swiper__item--img"
                    >
                      <template #placeholder>
                        <v-row class="fill-height ma-0" align="center" justify="center">
                          <v-progress-circular indeterminate color="grey lighten-5" />
                        </v-row>
                      </template>
                    </v-img>
                    <div class="hidden-xs-only">
                      <div class="swiper__item--heading font-weight-bold text-capitalize">
                        {{ content.commodore.caption }}
                      </div>
                      <div class="swiper__item--text">
                        <em>{{ content.commodore.sqm }} sqm</em>
                      </div>
                    </div>
                  </div>
                </swiper-slide>

                <swiper-slide :key="index + 2">
                  <div class="text-center swiper__item">
                    <v-skeleton-loader v-if="!content.deluxe.gallery" class="swiper__item--img" type="image" />
                    <v-img
                      v-else
                      :src="$store.state.storage + content.deluxe.gallery[0].image"
                      :lazy-src="$store.state.storage + content.deluxe.gallery[0].image"
                      class="swiper__item--img"
                    >
                      <template #placeholder>
                        <v-row class="fill-height ma-0" align="center" justify="center">
                          <v-progress-circular indeterminate color="grey lighten-5" />
                        </v-row>
                      </template>
                    </v-img>
                    <div class="hidden-xs-only">
                      <div class="swiper__item--heading font-weight-bold text-capitalize">
                        {{ content.deluxe.caption }}
                      </div>
                      <div class="swiper__item--text">
                        <em>{{ content.deluxe.sqm }} sqm</em>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
              </template>

              <div slot="pagination" class="suites-pagination swiper-pagination-bullets hidden-sm-and-up" />
            </swiper>
          </ClientOnly>

          <div class="swiper__content">
            <div class="hidden-sm-and-up">
              <div class="swiper__item--heading font-weight-bold text-capitalize">
                {{ dataActive.caption }}
              </div>
              <em
                v-if="dataActive.sqm"
                class="swiper__item--text"
              >
                {{ dataActive.sqm }} sqm
              </em>
            </div>

            <v-btn
              tile
              depressed
              outlined
              color="primary"
              height="38"
              nuxt
              :to="item.to"
              class="swiper__item--button btn-l mx-auto"
            >
              suites and staterooms
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { mdiChevronRight, mdiChevronLeft } from '@mdi/js'
import BaseCardThree from '@/components/base/BaseCardThreeImage.vue'
import BaseCarouselThree from '@/components/base/BaseCarouselThree.vue'
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    BaseCarouselThree,
    // eslint-disable-next-line vue/no-unused-components
    BaseCardThree,
    Swiper,
    SwiperSlide
  },

  props: {
    data: {
      caption: { type: String },
      heading: { type: String },
      data: { type: Array }
    },
    item: {
      type: Object,
      required: true
    }
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
          el: '.suites-pagination',
          clickable: true,
          renderBullet (index, className) {
            return `<span title="${index + 1}" class="${className}"></span>`
          }
        },
        breakpoints: {
          600: {
            slidesPerView: 3,
            spaceBetween: 15,
            centeredSlides: false
          },
          960: {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: false
          }
        }
      }
    }
  },

  computed: {
    swiper () {
      return this.$refs.swiper.$swiper
    }
  },

  watch: {
    activeIndex (val) {
      if (!this.store && !this.store.length) { return }
      this.dataActive = this.store[val]
    }
  },

  mounted () {
    this.initStore()
  },

  methods: {
    initStore () {
      if (!this.item.data.length) { return }
      Object.entries(this.item.data[0]).forEach(([key, val]) => {
        this.store.push(val)
      })
      this.dataActive = this.store[0]
    },
    prev () {
      if (this.$refs.swiper.$swiper.isBeginning) { return }
      this.$refs.swiper.$swiper.slidePrev()
    },
    next () {
      if (this.$refs.swiper.$swiper.isEnd) { return }
      this.$refs.swiper.$swiper.slideNext()
    }
  }
}
</script>

<style lang="scss" module>
@import '~/assets/styles/scss/variables.scss';
.wrap {
  position: relative;
}
</style>

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
    font-family: 'Sentinel';
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
      position: absolute;
      bottom: 0 !important;
    }
    .swiper__content {
      position: absolute !important;
      left: 0;
      right: 0;
      bottom: 50px !important;
      z-index: 2 !important;

      > div {
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
