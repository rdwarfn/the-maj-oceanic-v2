<template>
  <v-sheet class="deck-spesification text-center">
    <v-row
      no-gutters
      align="center"
      justify="center"
      class="container mx-auto py-0 px-6 px-md-0"
    >
      <v-col
        cols="12"
        class="pb-0"
      >
        <div class="deck-spesification--item-heading">
          {{ dataActive.name }}
        </div>
      </v-col>
      <v-col cols="12">
        <div class="deck-spesification--item-paragraph">
          {{ dataActive.description }}
        </div>
      </v-col>
    </v-row>

    <swiper
      ref="swiper"
      class="swiper"
      :options="swiperOptions"
    >
      <swiper-slide
        v-for="(item, index) in data"
        :key="index"
      >
        <v-img
          :src="$store.state.storage + item.image"
          :lazy-src="$store.state.storage + item.image"
          class="hidden-xs-only deck-spesification--item-img mx-auto"
        >
          <template #placeholder>
            <v-row
              align="center"
              justify="center"
              class="fill-height ma-0"
            >
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              />
            </v-row>
          </template>
        </v-img>

        <v-img
          :src="$store.state.storage + item.mobile_image"
          :lazy-src="$store.state.storage + item.mobile_image"
          class="hidden-sm-and-up mx-auto"
          max-width="150"
          height="auto"
        >
          <template #placeholder>
            <v-row
              align="center"
              justify="center"
              class="fill-height ma-0"
            >
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              />
            </v-row>
          </template>
        </v-img>
      </swiper-slide>
      <div
        slot="pagination"
        class="swiper-pagination swiper-pagination-bullets"
      />
    </swiper>

    <div class="navigation container hidden-xs-only">
      <v-btn
        depressed
        absolute
        fab
        x-small
        class="button--left"
        color="primary"
        @click="prev"
      >
        <v-icon color="white">
          {{ icon.left }}
        </v-icon>
      </v-btn>
      <v-btn
        depressed
        absolute
        fab
        x-small
        class="button--right"
        color="primary"
        @click="next"
      >
        <v-icon color="white">
          {{ icon.right }}
        </v-icon>
      </v-btn>
    </div>
  </v-sheet>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { mdiChevronRight, mdiChevronLeft } from '@mdi/js'
export default {

  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    data: { type: Array }
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
          renderBullet (index, className) {
            return `<span title="${index + 1}" class="${className} swiper-pagination-bullet-custom"></span>`
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
    this.init()
  },

  methods: {
    init () {
      this.$nextTick(() => {
        if (!this.data.length) { return }
        this.store = this.data
        this.dataActive = this.data[this.swiper.activeIndex]
      })
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

<style lang="scss" scoped>
@import '@/assets/styles/scss/variables.scss';
$primary:#208CB2;
$size: 12px;
$secondary: #4E5E79;
$white: #ffffff;

@media #{map-get($display-breakpoints, ('md-and-up'))} {
  .button--left {
    top: 50%;
    right: auto;
    left: 62px;
  }
  .button--right {
    top: 50%;
    left: auto;
    right: 62px;
  }
}

@media #{map-get($display-breakpoints, ('sm-only'))} {
  .button--left, .button--right {
    top: 50%;
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
  @include poly-fluid-sizing ('padding-top', (375px:35px, 768px:50px, 1440px:100px));
  @include poly-fluid-sizing ('padding-bottom', (375px:50px, 1440px:100px));
  position: relative !important;
  &--item {
    &-heading {
      @include poly-fluid-sizing ('font-size', (768px:22px,1440px:34px));
      font-family: 'Domine', serif;
      font-weight: 600;
    }

    &-paragraph {
      @include poly-fluid-sizing ('margin-top', (378px:18px, 768px:15px, 960px:25px));
      @media #{map-get($display-breakpoints, 'sm-only')} {
        margin-bottom: 30px;
      }
      @media #{map-get($display-breakpoints, 'md-and-up')} {
        margin-bottom: 59.11px;
      }
      text-align: start !important;
    }

    &-img {
      @include poly-fluid-sizing ('width', (375px:326px, 768px:596px, 1440px:900px));
      // @include poly-fluid-sizing ('max-height', (375px:73.78, 768px:133.94px, 1440px:202.49px));
    }
    &-svg {
      height: 185px;
    }
  }
}

::v-deep .swiper {
  @media #{map-get($display-breakpoints, ('sm-only'))} {
    width: 88%;
  }
  @include poly-fluid-sizing ('padding-bottom', (375px:32.61px, 768px:56.53px, 1440px:148.4px));

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
