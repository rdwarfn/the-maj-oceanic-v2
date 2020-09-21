<template>
  <div class="__carousel_text_img">
    <v-row
      justify="center"
      class="row align-center d-flex relative static"
      v-bind:class="!reverse ? 'flex-wrap' : 'flex-wrap-reverse reversed'"
    >
      <div class="col-sm-6 col-md-6 col-12">
        <client-only>
        <v-card
          v-if="Object.keys(dataActive).length"
          class="__carousel_text_img--card static"
          v-bind:class="cardClass"
          v-bind:rounded="false"
          v-bind:height="cardHeight"
          v-bind:width="cardWidth"
          v-bind:max-height="cardMaxHeight"
          v-bind:max-width="cardMaxWidth"
          flat
        >
          <v-card-subtitle
            v-if="dataActive.caption"
            class="text-h6 pb-0 static"
            :class="captionClass"
          >
            {{ dataActive.caption }}
          </v-card-subtitle>

          <v-card-title
            class="text-h4 text-md-h3 font-weight-bold text-truncate static"
            v-bind:class="headingClass"
            v-text="dataActive.heading"
          />

          <v-card-text class="text--primary static" :class="textClass">
            {{ dataActive.text }}

            <ul v-bind:class="listClass" v-if="dataActive.list">
              <li v-for="(i, index) in dataActive.list.split('\n')" :key="index">
                {{i}}
              </li>
            </ul>
          </v-card-text>

          <v-card-actions v-if="buttonText" :class="buttonClass">
            <v-btn
              class="btn-l"
              color="primary"
              tile depressed outlined :to="dataActive.to">
            {{buttonText}}
            </v-btn>
          </v-card-actions>
        </v-card>
        </client-only>
      </div>

      <div class="d-flex justify-end col-sm-6 col-md-6 col-12">
        <swiper
          ref="swiper"
          class="swiper"
          v-bind:options="swiperOption"
          style="max-width: 445px"
        >
          <swiper-slide
            v-for="item in data"
            v-bind:key="item.id"
          >
            <img
              :src="staticImage
                ? require(`~/assets/images/${item.image}`)
                : item.image"
              :alt="item.image"
              class="mx-auto"
              :class="cardImageClass"
            />
          </swiper-slide>
          <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
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
        </swiper>
      </div>
    </v-row>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
const components = {
  Swiper,
  SwiperSlide
}
export default {
  name: 'CarouselTextImage',

  props: {
    data: { type: Array },
    cardClass: { type: String },
    cardHeight: { type: [String, Number] },
    cardWidth: { type: [String, Number] },
    cardMaxWidth: { type: [String, Number] },
    cardMaxHeight: { type: [String, Number] },
    cardImageClass: { type: String },
    captionClass: { type: String },
    headingClass: { type: String },
    textClass: { type: String },
    listClass: { type: String },
    buttonProps: { type: Object },
    buttonClass: { type: String },
    buttonText: { type: String },
    staticImage: { type: Boolean },
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
      this.dataActive = this.store[val];
    }
  },

  computed: {
    swiper () {
      return this.$refs.swiper.$swiper;
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
  $white: #ffffff;

  .__carousel_text_img {
    &--card {
      ::v-deep .v-card__subtitle {
        color: $primary !important;
      }

      ul {
        padding-left: inherit !important;
        margin-top: 30px !important;
        li {
          margin-bottom: 11px !important;
        }
      }
    }

    ::v-deep a.v-btn {
      font-weight: bold !important;
      &.primary {
        color: white !important;
        caret-color: white !important;
        &:hover {
          color: $primary !important;
          caret-color: $primary !important;
          border: thin solid $primary !important;
          background-color: white !important;
        }
      }

      &--outlined {
        &.primary--text {
          &:hover {
            color: white !important;
            background-color: $primary !important;
            border-color: $primary !important;
          }
        }
      }
    }

    .swiper {
        padding-bottom: 30px !important;

        .swiper-pagination-bullets {
          bottom: -5px;
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
          top: 91% !important;
          @media (min-width: 960px) {
            display: flex !important;
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