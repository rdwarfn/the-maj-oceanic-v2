<template>
  <v-container class="suites-and-staterooms px-0 px-sm-6 px-md-0 hidden-sm-and-up" :class="{reversed: reverse}">
    <center>
      <slot name="icon" />
    </center>

    <div class="data--caption text-h6 text-center">
      {{ dataActive.caption }}
    </div>

    <div class="data--heading px-6 px-md-0 font-weight-bold text-center" v-html="dataActive.heading" />

    <div class="data--sqm text-center">
      <em class="data--sqm-em">{{ dataActive.sqm }} sqm</em>
    </div>

    <swiper ref="swiper" class="swiper" :class="{reversed: reverse}" :options="swiperOptions">
      <swiper-slide v-for="(item, index) in data" :key="index">
        <v-img
          :src="$store.state.storage + item.image"
          :lazy-src="$store.state.storage + item.image"
          class="image--item"
        />
      </swiper-slide>
    </swiper>

    <v-card class="data--card" color="transparent" :class="{reversed: reverse}" flat tile>
      <p class="text--primary align-center px-6 px-sm-0 text-center text-sm-left">
        {{ dataActive.text }}
      </p>
    </v-card>
  </v-container>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    Swiper,
    SwiperSlide
  },

  props: {
    data: { type: Array },
    staticImage: { type: Boolean, default: true },
    reverse: { type: Boolean }
  },

  data () {
    return {
      store: [],
      activeIndex: null,
      dataActive: {},
      swiperOptions: {
        lazy: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        initialSlide: 0,
        spaceBetween: 25,
        on: {
          slideChange: () => {
            this.activeIndex = this.swiper.activeIndex
          }
        }
      }
    }
  },

  computed: {
    swiper () {
      return this.$refs.swiper && this.$refs.swiper.$swiper
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
        this.dataActive = this.data[0]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/utilities/_variables.scss';

.text-h6 {
  color: $primary !important;
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
    padding: 25px !important;
    height: auto !important;
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
      border-radius: 2px !important;
      width: 100%;
    }
  }
}

.swiper {
  .swiper-slide {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    @include poly-fluid-sizing ('max-width', (375px:300px, 600px:414px));
    .image--item {
      // width: 100%;
      // height: 100%;
      @include poly-fluid-sizing ('max-width', (375px:300px, 600px:414px));
      @include poly-fluid-sizing ('height', (375px:181px, 600px:349px));
    }
  }
}
</style>
