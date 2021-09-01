<template>
  <v-sheet
    class="__carousel align-center px-0 mx-auto"
    :class="!reverse ? 'flex-wrap' : 'flex-wrap-reverse reversed'"
    max-width="1440"
    color="transparent"
  >
    <v-card-subtitle class="hidden-sm-and-up text-h6 text-center pb-0">
      {{ dataActive.caption }}
    </v-card-subtitle>
    <v-card-title class="hidden-sm-and-up mb-4 px-0">
      <v-btn depressed x-small class="button--left" color="transparent" @click="prev">
        <v-icon color="black"> {{icon.left}} </v-icon>
      </v-btn>
      <div class="text-h4 text-break mx-auto text-center">
        {{ dataActive.heading }}
      </div>
      <v-btn depressed x-small class="button--right" color="transparent" @click="next">
        <v-icon color="black"> {{icon.right}} </v-icon>
      </v-btn>
    </v-card-title>
    <!-- <client-only> -->
    <swiper
      ref="swiper"
      class="swiper"
      :options="swiperOption"
    >
      <swiper-slide
        v-for="item in data"
        :key="item.id"
      >
        <template>
          <v-img
            v-if="item.image"
            mx-auto
            :src="$store.state.storage + item.image"
            :lazy-src="$store.state.storage + item.image"
            class="__carousel--img mx-auto mx-sm-0"
            :class="cardImageClass"
          >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-row>
          </template>
          </v-img>
        </template>
      </swiper-slide>
    </swiper>
    <v-card flat tile class="hidden-sm-and-up mx-auto pb-8" :class="cardMobileClass ? cardMobileClass : '_card--relative'">
      <v-card-text class="text--primary px-0 pt-5" :class="cardTextMobileClass ? cardTextMobileClass : 'text-center'" v-html="dataActive[returnTextData]" />
      <v-card-actions v-if="buttonText" class="pa-0 mt-4">
        <v-btn
          class="btn-l mx-auto"
          color="primary"
          tile depressed outlined :to="dataActive.to"
          height="38"
          min-width="132"
        >{{buttonText}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-sheet>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
const components = {
  Swiper,
  SwiperSlide
}

export default {
  props: {
    data: { type: Array },
    maxHeight: { type: String},
    cardClass: { type: String },
    cardHeight: { type: String },
    cardWidth: { type: String },
    cardMaxHeight: { type: String },
    cardImageClass: { type: String },
    captionClass: { type: String },
    cardMobileClass: { type: String },
    cardTextMobileClass: { type: String },
    headingClass: { type: String },
    textClass: { type: String },
    returnTextData: { type: String, default: 'text' },
    buttonClass: { type: String },
    buttonText: { type: String },
    buttonProps: { type: Object },
    reverse: { type: Boolean }
  },

  components,

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
        slidesPerView: 1,
        spaceBetween: 25,
        on: {
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
      if (!this.data.length) return
      this.store = this.data;
      this.dataActive = this.data[0];
    },
    prev () {
      if (this.swiper.isBeginning) { return }
      this.swiper.slidePrev();
    },
    next () {
      if (this.swiper.isEnd) { return }
      this.swiper.slideNext();
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/styles/scss/variables.scss";
  $primary:#208CB2;
  $size: 10px;
  $secondary: #C4C4C4;
  $transition-time-normal: .5s;
  $white: #ffffff;

  ._card--relative {
    @media #{map-get($display-breakpoints, 'xs-only')} {
      max-width: 290px !important;
      height: 320px !important;
    }
    @media only screen and (max-width: 374px) {
      max-width: 90% !important;
    }
    position: relative !important;
    top: -25px !important;
    z-index: 3 !important;
  }

  ::v-deep {
    .v-card__subtitle {
      color: $primary !important;
      font-weight: bold !important;
    }

    .v-card__text {
      p {
        font-size: 15px !important;
      }
    }
  }

  .__txt_primary {
    color: $primary !important;
  }

  .__carousel {
    width: auto;
    position: relative;

    &--card {
      display: inline-block !important;
      z-index: 10 !important;
      box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.03) !important;
      border-radius: 2px;
      // @include poly-fluid-sizing ('height', (375px:320px));
      @include poly-fluid-sizing ('padding-top', (375px:20px, 768px:25px));
      @include poly-fluid-sizing ('padding-bottom', (375px:50px, 768px:32px));
      @include poly-fluid-sizing ('padding-left', (375px:19px, 768px:25px));
      @include poly-fluid-sizing ('padding-right', (375px:19px, 768px:25px));

        // @include poly-fluid-sizing ('left', (600px:220px, 768px:390px, 1440px:665px));
      // right: auto;
      // top: 10% !important;
      // margin: {
      //   // top: 40px !important;
      //   right: auto !important;
      //   left: auto !important;
      //   bottom: 0 !important;
      // }
      // position: absolute;
    }

    &--img {
      width: 100%;
      @include poly-fluid-sizing ('max-width', (374px:325px, 768px:412px));
      @include poly-fluid-sizing ('height', (375px:181px, 768px:347px));
    }

    .swiper {
      padding-bottom: 30px !important;
      .swiper-zoom-container {
        height: 664px !important;
        justify-content: flex-start;
      }
      .swiper-pagination-bullets {
        bottom: -5px;
        width: 100%;

        @media (min-width: 600px) {
          max-width: 71.354166667%;
        }

        @media (min-width: 960px) {
          max-width: 65.765765766%;
        }
      }
      ::v-deep .swiper-pagination-bullet-custom {
        width: $size !important;
        height: $size !important;
        line-height: $size !important;
        text-align: center;
        color: $secondary;
        opacity: 1;
        background: $secondary;

        &:hover {
          opacity: 1;
          background: $primary !important;
        }

        &.swiper-pagination-bullet-active {
          opacity: 1;
          color: $white;
          background: $primary;
        }
      }
    }
  }
</style>