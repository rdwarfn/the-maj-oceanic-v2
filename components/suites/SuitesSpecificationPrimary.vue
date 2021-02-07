<template>
  <v-container
    class="suites-and-staterooms px-0 px-sm-6 px-md-0"
    :class="{reversed: reverse}"
  >
    <center class="hidden-sm-and-up">
      <slot name="icon" />
    </center>
    <div class="data--caption text-h6 text-center hidden-sm-and-up">
      {{ data.caption }}
    </div>
    <div
      class="data--heading px-6 px-md-0 font-weight-bold text-center hidden-sm-and-up"
      v-html="data.heading"
    />
    <div class="data--sqm hidden-sm-and-up">
      <em class="data--sqm-em">{{ data.sqm }} sqm</em>
    </div>
    <swiper
      ref="swiper"
      class="swiper"
      :class="{reversed: reverse}"
      :options="swiperOptions"
    >
      <swiper-slide
        v-for="(item, index) in data.gallery"
        :key="index"
      >
        <v-img
          :src="$store.state.storage + item.image"
          :lazy-src="$store.state.storage + item.image"
          class="image--item"
        />
      </swiper-slide>
      <div
        v-if="data && data.gallery.length > 1"
        slot="pagination"
        class="hidden-xs-only swiper-pagination swiper-pagination-bullets"
        :class="{reversed: reverse}"
      />
      <template v-if="data && data.gallery.length > 1">
        <v-btn
          slot="button-prev"
          depressed
          fab
          absolute
          x-small
          class="button--left swiper-button-prev"
          :class="{reversed: reverse}"
          color="white"
        >
          <v-icon color="primary">
            {{ iconLeft }}
          </v-icon>
        </v-btn>

        <v-btn
          slot="button-next"
          depressed
          fab
          absolute
          x-small
          class="button--right swiper-button-next"
          :class="{reversed: reverse}"
          color="white"
        >
          <v-icon color="primary">
            {{ iconRight }}
          </v-icon>
        </v-btn>
      </template>
    </swiper>
    <v-card
      class="data--card"
      :class="{reversed: reverse}"
      flat
      tile
    >
      <div class="hidden-xs-only">
        <slot name="icon" />
        <v-card-subtitle class="pa-0 text-h6 data--caption">
          {{ data.caption }}
        </v-card-subtitle>
        <v-card-title
          class="pa-0 ml-lg-0 font-weight-bold data--heading"
          v-html="data.heading"
        />
        <div class="data--sqm">
          <em class="data--sqm-em">{{ data.sqm }} sqm</em>
        </div>
      </div>
      <div
        class="text--primary align-center px-6 px-sm-0 text-center text-sm-left"
        v-html="data.description"
      />
    </v-card>
  </v-container>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
export default {

  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    data: { type: Object },
    reverse: { type: Boolean },
    noWrap: { type: Boolean }
  },

  data () {
    return {
      iconLeft: mdiChevronLeft,
      iconRight: mdiChevronRight,
      swiperOptions: {
        lazy: true,
        effect: 'fade',
        slidesPerView: 1,
        initialSlide: 0,
        spaceBetween: 25,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet (index, className) {
            return `<span title="${index + 1}" class="${className} swiper-pagination-bullet-custom"></span>`
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
            spaceBetween: 25
          }
        }
      }
    }
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
      margin-bottom: 10px;
    }
    .data--sqm {
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
      margin-bottom: 10px;
    }
    .data--sqm {
      margin-bottom: 10px !important;
    }
    .data--card { top: 125px !important }
  }

  @media #{map-get($display-breakpoints, 'md-and-up')} {
    padding-top: 50px !important;
    padding-bottom: 50px !important;

    .data--caption { margin-top: 30px !important }
    .data--heading {
      margin-top: 12px !important;
      margin-bottom: 10px;
    }
    .data--sqm {
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
      @include poly-fluid-sizing ('min-height', (768px:347px, 1440px:445px));
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
  // @media #{map-get($display-breakpoints, 'md-and-up')} {
  //   max-width: 730px;
  // }
  // @media #{map-get($display-breakpoints, 'sm-only')} {
  //   max-width: 414px;
  // }
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
