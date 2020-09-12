<template>
  <v-sheet
    class="__carousel align-center px-0 mx-auto"
    v-bind:class="!reverse ? 'flex-wrap' : 'flex-wrap-reverse reversed'"
    max-width="1440"
    color="transparent"
  >
    <v-card-subtitle class="hidden-sm-and-up text-h6 text-center pb-0">
      {{ dataActive.caption }}
    </v-card-subtitle>
    <v-card-title class="hidden-sm-and-up mb-4">
      <div class="text-h4 text-break text-center mx-auto">
        {{ dataActive.heading }}
      </div>
    </v-card-title>
    <swiper
      ref="swiper"
      class="swiper"
      v-bind:options="swiperOption"
    >
      <swiper-slide
        v-for="item in data"
        v-bind:key="item.id"
      >
        <v-card flat tile hover color="transparent" max-width="auto">
          <!-- <v-card-subtitle class="hidden-sm-and-up text-h6 text-center pb-0">
            {{ item.caption }}
          </v-card-subtitle>
          <v-card-title class="hidden-sm-and-up mb-4">
            <div class="text-h4 mx-auto">
              {{ item.heading }}
            </div>
          </v-card-title> -->
          <template>
            <v-skeleton-loader
              v-if="!item.image"
              class="__carousel--img mx-auto mx-sm-0"
              type="image"
            ></v-skeleton-loader>
            <v-img
              v-else mx-auto
              :src="staticImage
                ? require(`~/assets/images/${item.image}`)
                : item.image"
              :lazy-src="staticImage
                ? require(`~/assets/images/${item.image}`)
                : item.image"
              class="__carousel--img mx-auto mx-sm-0"
              :class="cardImageClass"
            />
          </template>
        </v-card>
        <client-only>
          <v-card
            flat tile
            class="hidden-sm-and-up mx-auto pb-13"
            v-bind:class="cardMobileClass ? cardMobileClass : '_card--relative'"
          >
            <v-card-text class="px-0 pt-5" v-bind:class="cardTextMobileClass ? cardTextMobileClass : 'text-center'">
              <p class="text--primary px-5">{{ item.text }}</p>
            </v-card-text>
            <v-card-actions class="pa-0 mt-4">
              <t-button
                class="btn-l mx-auto"
                v-bind:props="{
                  color: 'primary',
                  outlined: true,
                  to: item.to,
                  ...buttonProps
                }"
                v-text="buttonText"
              />
            </v-card-actions>
          </v-card>
        </client-only>
      </swiper-slide>
      <div v-if="data && data.length > 1" class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
      <template v-if="data && data.length > 1">
        <v-btn
          fab
          absolute
          x-small
          class="button--left swiper-button-prev"
          color="white"
          slot="button-prev"
        >
          <v-icon color="primary">mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn
          fab
          absolute
          x-small
          class="button--right swiper-button-next"
          color="white"
          slot="button-next"
        >
          <v-icon color="primary">mdi-chevron-right</v-icon>
        </v-btn>
      </template>
    </swiper>

    <client-only>
      <v-card
        v-if="Object.keys(dataActive).length"
        class="__carousel--card hidden-xs-only"
        v-bind:class="cardClass"
        v-bind:rounded="false"
        v-bind:height="cardHeight"
        v-bind:width="cardWidth"
        v-bind:max-height="cardMaxHeight"
        flat tile
      >
        <slot v-if="!isXs" name="image-extra"></slot>
        <v-card-subtitle
          v-if="dataActive.caption"
          class="text-h6 __txt_primary px-0 pb-0"
          :class="captionClass"
        >
          {{ dataActive.caption }}
        </v-card-subtitle>

        <v-card-title
          class="text-h4 text-no-wrap mb-3 px-0"
          :class="headingClass"
        >
          {{ dataActive.heading }}
        </v-card-title>

        <v-card-text
          class="text--primary d-block px-0"
          :class="textClass"
        >
          {{ dataActive.text }}

          <ul class="__carousel--card-list" v-if="dataActive.list">
            <li v-for="(i, index) in dataActive.list.split('\n')" :key="index">
              {{i}}
            </li>
          </ul>
        </v-card-text>

        <v-card-actions v-if="buttonText" v-bind:class="buttonClass" class="px-0 mt-4">
          <t-button
            class="btn-l"
            v-bind:props="{
              color: 'primary',
              outlined: true,
              to: dataActive.to,
              ...buttonProps
            }"
            v-text="buttonText"
          />
        </v-card-actions>
      </v-card>
    </client-only>
  </v-sheet>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import tButton from '@/components/base/BaseButton.vue';
const components = {
  Swiper,
  SwiperSlide,
  tButton
}

export default {
  name: 'Carousel',

  props: {
    data: { type: Array },
    staticImage: { type: Boolean, default: false },
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
      swiperOption: {
        lazy: true,
        slidesPerView: 1,
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
        },
        navigation: {
          prevEl: '.button--left',
          nextEl: '.button--right'
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
    },

    isXs () {
      return this.$vuetify.breakpoint.xs;
    },

    debug () {
      return this.$vuetify.breakpoint.name;
    }
  },

  methods: {
    initStore () {
      if (!this.data.length) return
      this.store = this.data;
      this.dataActive = this.data[0];
    }
  }
}
</script>

<style lang="scss" scoped>
  $primary:#208CB2;
  $size: 12px;
  $secondary: #4E5E79;
  $transition-time-normal: .5s;
  $white: #ffffff;

  ._card--relative {
    width: 90%;
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
        font-size: 16px !important;
      }
    }
  }

  .__txt_primary {
    color: $primary !important;
  }

  .__carousel {
    width: auto;
    position: relative;
    height: 100%;
    z-index: 1;
    transition-property: transform;
    margin: {
      top: auto !important;
      bottom: auto !important;
    }

    &--card {
      @include poly-fluid-sizing ('width', (375px:290px, 1440px:445px));
      // @include poly-fluid-sizing ('height', (375px:320px, 1440px:445px));
      @include poly-fluid-sizing ('padding-top', (375px:20px, 768px:25px, 1440px:73px));
      @include poly-fluid-sizing ('padding-bottom', (375px:50px, 768px:32px, 1440px:73px));
      @include poly-fluid-sizing ('padding-left', (375px:20px, 768px:25px, 1440px:50px));
      @include poly-fluid-sizing ('padding-right', (375px:20px, 768px:25px, 1440px:50px));
      display: inline-block !important;
      z-index: 10 !important;
      top: 10% !important;
      right: auto;
      @include poly-fluid-sizing ('left', (374px:260px, 768px:347px, 1440px:665px));
      margin: {
        // top: 40px !important;
        right: auto !important;
        left: auto !important;
        bottom: 0 !important;
      }
      position: absolute;

      .reversed & {
        margin: {
          top: 0 !important;
          right: auto !important;
          left: auto !important;
          bottom: 40px !important;
        }
      }

      @media (min-width: 600px)  {
        margin: {
          top: 0 !important;
          right: 0 !important;
          left: 0 !important;
          bottom: 0 !important;
        }
      };

      @media (min-width: 960px) {
        margin: {
          top: 0 !important;
          right: 0 !important;
          left: 0 !important;
          bottom: 0 !important;
        }
      }

      &-list {
        padding-left: inherit !important;
        margin-top: 30px !important;
        li {
          margin-bottom: 11px !important;
        }
      }
    }

    &--img {
      width: 100%;

      @include poly-fluid-sizing ('max-width', (374px:325px, 768px:412px, 1440px:730px));
      @include poly-fluid-sizing ('height', (375px:181px, 768px:350.9px, 1440px:445px));
      // @media (min-width: 1441px) {
      //   max-width: 0%;
      // };
      ::v-deep .v-skeleton-loader__image {
        @include poly-fluid-sizing ('max-width', (374px:325px, 768px:412px, 1440px:730px));
        @include poly-fluid-sizing ('height', (375px:181px, 768px:350.9px, 1440px:445px));
      }
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
          background-color: $primary !important;
          border-color: $primary !important;
          .v-icon {
            color: $white !important;
            caret-color: $white !important;
          }
        }

        &.swiper-button-disabled {
          box-shadow: none;
          pointer-events: none;
          color: rgba(0,0,0,.26) !important;
          background-color: #E0E0E0 !important;
          .v-icon {
            color: rgba(0,0,0,.26) !important;
            background-color: transparent !important;
          }
        }
      }

      .button--left, .button--right {
        display: none !important;
        top: 80% !important;
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

      .swiper-button-prev, .swiper-container-rtl .swiper-button-next {
        left: 24px !important;
        right: auto;
      }

      .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
        left: 80px !important;
        right: auto;
      }
    }
  }
</style>