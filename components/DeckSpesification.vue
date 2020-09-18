<template>
  <v-sheet class="deck-spesification text-center">
    <v-row align="center" justify="center" class="px-6 px-md-0">
      <v-col cols="12" class="pb-0">
        <div class="deck-spesification--item-heading">
          {{dataActive.name}}
        </div>
      </v-col>
      <v-col>
        <div class="deck-spesification--item-paragraph">
          {{dataActive.text}}
        </div>
      </v-col>
    </v-row>

    <swiper ref="swiper" class="swiper static" v-bind:options="swiperOptions">
      <swiper-slide v-for="(item, index) in data" v-bind:key="index">
        <v-img
          v-bind:src="staticImage
            ? require('~/assets/images/' + item.image)
            : item.image"
          v-bind:lazy-src="staticImage
          ? require('~/assets/images/' + item.image)
          : item.image"
          class="deck-spesification--item-img mx-auto"></v-img>
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
    </swiper>

    <div class="navigation container">
      <v-btn depressed absolute fab x-small class="button--left" color="primary" @click="prev">
        <v-icon color="white"> {{icon.left}} </v-icon>
      </v-btn>
      <v-btn depressed absolute fab x-small class="button--right" color="primary" @click="next">
        <v-icon color="white"> {{icon.right}} </v-icon>
      </v-btn>
    </div>
  </v-sheet>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import { mdiChevronRight, mdiChevronLeft } from '@mdi/js';
export default {
  props: {
    staticImage: { type: Boolean },
    data: { type: Array }
  },

  components: {
    Swiper,
    SwiperSlide
  },

  data () {
    return {
      store: [],
      activeIndex: null,
      dataActive: {},
      icon: {
        left: mdiChevronLeft,
        right: mdiChevronRight
      },
      swiperOptions: {
        lazy: true,
        slidesPerView: 1,
        initialSlide: 0,
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
    },
    prev () {
      if (this.$refs.swiper.$swiper.isBeginning) { return }
      this.$refs.swiper.$swiper.slidePrev();
    },
    next () {
      if (this.$refs.swiper.$swiper.isEnd) { return }
      this.$refs.swiper.$swiper.slideNext();
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/scss/variables.scss';
$primary:#208CB2;
$size: 12px;
$secondary: #4E5E79;
$white: #ffffff;

@media #{map-get($display-breakpoints, ('md-and-up'))} {
  .button--left {
    top: 40%;
    right: auto;
    left: -62px;
  }
  .button--right {
    top: 40%;
    left: auto;
    right: -62px;
  }
}

@media #{map-get($display-breakpoints, ('sm-only'))} {
  .button--left, .button--right {
    top: 30%;
  }
  .button--left {
    left: 24px;
  }
  .button--right {
    right: 24px;
  }
}

.deck-spesification {
  background-color: #EFE1DC !important;
  @include poly-fluid-sizing ('height', (375px:327px, 768px:431px, 1264px:700px));
  position: relative !important;
  &--item {
    &-heading {
      @include poly-fluid-sizing ('font-size', (768px:18px,1440px:22px));
      margin-top: 24px !important;
      font-family: 'Domine', serif;
      font-weight: 600;
    }

    &-paragraph {
      @include poly-fluid-sizing ('margin-bottom', (378px:47px, 768px:40px, 1264px:69.11px));
    }

    &-img {
      @include poly-fluid-sizing ('width', (375px:296.93px, 768px:542.84px, 1440px:819.73px));
      @include poly-fluid-sizing ('max-height', (375px:73.78, 768px:133.94px, 1440px:202.49px));
    }
  }
}

::v-deep .swiper {
  @media #{map-get($display-breakpoints, ('sm-only'))} {
    width: 88%;
  }
  padding-bottom: 50px !important;

  &-slide-active { z-index: 3 !important; }
  &-slide {
    // display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .swiper-pagination-bullets {
    bottom: -5px;
  }
  .swiper-pagination-bullet-custom {
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
      background-color: $white !important;
      border-color: $white !important;
      .v-icon {
        color: $primary !important;
        caret-color: $primary !important;
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
}
</style>