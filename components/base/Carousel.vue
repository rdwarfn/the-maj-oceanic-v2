<template>
  <div
    class="__carousel align-center d-flex relative static"
    :class="!reverse ? 'flex-wrap' : 'flex-wrap-reverse reversed'"
  >
    <!-- <client-only> -->
    <swiper
      ref="swiper"
      class="swiper"
      v-bind:options="swiperOption"
    >
      <swiper-slide
        v-for="item in data"
        v-bind:key="item.id"
      >
        <img
          :src="staticImage
            ? require(`~/assets/images/${item.image}`)
            : item.image"
          :srcset="staticImage
            ? require(`~/assets/images/${item.image}`)
            : item.image"
          :alt="item.image"
          class="__carousel--img static"
          :class="cardImageClass"
        />
          <!-- :width="getWidthImg" -->
        <!-- <v-img
          v-bind:src="staticImage
            ? require(`~/assets/images/${item.image}`)
            : item.image"
          v-bind:lazy-src="staticImage
            ? require(`~/assets/images/${item.image}`)
            : item.image"
          v-bind:aspect-ratio="16/9"
          class="__carousel--img"
        ></v-img> -->
          <!-- v-bind:max-width="getWidthImg" -->
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
      <v-btn
        fab
        x-small
        class="button--left"
        color="white"
        slot="button-prev"
      >
        <v-icon color="primary">mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn
        fab
        x-small
        class="button--right"
        color="white"
        slot="button-next"
      >
        <v-icon color="primary">mdi-chevron-right</v-icon>
      </v-btn>
    </swiper>
    <!-- </client-only> -->

    <client-only>
    <v-card
      elevation="3"
      v-if="Object.keys(dataActive).length"
      class="__carousel--card static"
      v-bind:class="cardClass"
      v-bind:rounded="false"
      v-bind:height="cardHeight"
      v-bind:width="cardWidth"
      v-bind:max-height="cardMaxHeight"
    >
      <slot v-if="!isXs" name="image-extra"></slot>
      <v-tooltip right>
      <template v-slot:activator="{on, attrs}">

        <v-card-subtitle
          v-if="dataActive.caption"
          v-bind="attrs"
          v-on="on"
          class="text-h6 __txt_primary static"
          :class="captionClass"
        >
          {{ dataActive.caption }}
        </v-card-subtitle>

      </template>
      <span>{{ dataActive.caption }}</span>
      </v-tooltip>

      <v-tooltip right>
      <template v-slot:activator="{on, attrs}">

        <v-card-title
          v-bind="attrs"
          v-on="on"
          class="text-h4 text-md-h3 font-weight-bold text-truncate static"
          :class="headingClass"
        >
          {{ dataActive.heading }}
        </v-card-title>

      </template>
      <span>{{ dataActive.heading }}</span>
      </v-tooltip>

      <v-card-text
        class="__txt_base static"
        :class="textClass"
      >
        {{ dataActive.text }}

        <ul class="__carousel--card-list" v-if="dataActive.list">
          <li v-for="(i, index) in dataActive.list.split('\n')" :key="index">
            {{i}}
          </li>
        </ul>
      </v-card-text>

      <v-card-actions :class="buttonClass">
        <v-hover
          v-slot:default="{hover}"
        >
          <v-btn
            v-bind:outlined="!hover"
            color="primary"
            class="btn-l"
            elevation="0"
            nuxt
          >
            {{ buttonText }}
          </v-btn>
        </v-hover>
      </v-card-actions>
    </v-card>
    </client-only>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
const components = {
  Swiper,
  SwiperSlide
}

export default {
  name: 'Carousel',

  props: {
    data: {
      type: Array
    },
    staticImage: {
      type: Boolean,
      default: false
    },
    maxHeight: {
      type: String,
      default: '446'
    },
    cardClass: {
      type: String
    },
    cardHeight: {
      type: String,
    },
    cardWidth: {
      type: String
    },
    cardMaxHeight: {
      type: String
    },
    cardImageClass: {
      type: String
    },
    captionClass: {
      type: String
    },
    headingClass: {
      type: String
    },
    textClass: {
      type: String
    },
    buttonClass: {
      type: String
    },
    buttonText: {
      type: String
    },
    reverse: {
      type: Boolean,
      default: false
    }
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

    getWidthImg () {
      switch (this.$vuetify.breakpoint.name) {
        case "xs": return '100%';
        case "sm": return '71.354166667%';
        case "md": return '65.765765766%';
        case "lg": return '65.765765766%';
        default: return '65.765765766%';
      }
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

  .relative {
    position: relative;
  }
  .__txt_primary {
    color: $primary !important;
  }
  .whitespace-pre-line {
    white-space: pre-line;
  }
  .whtspc_nowrp {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .__txt_base {
    color: rgba(0, 0, 0, 1) !important;
  }

  .__carousel {
    margin: {
      top: auto !important;
      bottom: auto !important;
    }
    @media (min-width: 767px) {
      margin-bottom: 50px !important;
    }

    &--card {
      width: 100%;
      padding: 10px 6px 18px;
      z-index: 2;
      top: 10% !important;
      right: 0;
      margin: {
        top: 40px !important;
        bottom: 0 !important;
      }

      .reversed & {
        margin: {
          top: 0 !important;
          bottom: 40px !important;
        }
      }

      @media (min-width: 768px)  {
        margin: {
          top: 0 !important;
          bottom: 0 !important;
        }
        position: absolute;
      };

      @media (min-width: 960px) {
        margin: {
          top: 0 !important;
          bottom: 0 !important;
        }
        position: absolute;
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
      height: auto;

      @media (min-width: 768px) {
        max-width: 71.354166667%;
      }

      @media (min-width: 960px) {
        max-width: 65.765765766%;
      }
    }

    .swiper {
      .button--left, .button--right {
        display: none !important;
        @media (min-width: 768px) {
          display: inline-block !important;
        }
      }
      .swiper-zoom-container {
        height: 664px !important;
        justify-content: flex-start;
      }
      .swiper-pagination-bullets {
        bottom: 0px;
        width: 100%;

        @media (min-width: 768px) {
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
        bottom: 50px;
        z-index: 4;

        &.button--left {
          left: 24px;
        }

        &.button--right {
          left: 48px;
        }

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
    }
  }
</style>