<template>
  <component v-bind:is="'div'">
    <v-skeleton-loader
      v-if="data ? loading : true"
      type="image"
      class="_hero--img"
      max-height="100%"
    ></v-skeleton-loader>
    <swiper
      v-else
      class="swiper"
      v-bind:options="swiperOptions"
    >
      <swiper-slide v-for="(item, index) in data" v-bind:key="index">
        <v-img
          v-bind:src="staticImage ? require('~/assets/images/' + item.image) : item.image"
          :lazy-src="staticImage ? require('~/assets/images/' + item.image) : item.image"
          class="_hero--img justify-center"
          transition="fade-transition"
          :aspect-ratio="16/9"
        >
          <v-row no-gutters align="center" justify="center" class="fill-height">
            <v-spacer />
            <div class="_head--text text-sm-h2 text-md-h1 text-center">
              {{ item.text }}
            </div>
            <v-spacer/>
          </v-row>
        </v-img>
      </swiper-slide>
    </swiper>
  </component>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
const components = {Swiper, SwiperSlide};
export default {
  name: 'HeroBanner',

  props: {
    data: {type: Array},
    staticImage: {type: Boolean}
  },

  components,

  data () {
    return {
      loading: true,
      swiperOptions: {
        effect: 'cube',
        grabCursor: true,
        lazy: true,
        slidesPerView: 1,
      }
    }
  },

  created () {
    this.setLoad();
  },

  methods: {
    setLoad () {
      setTimeout(() => {
        this.loading = false
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
  ._head--text {
    color: #FFFFFF !important;
    position: relative !important;
    white-space: pre-line !important;
    width: auto;
    font-family: "Sentinel Semibold", serif !important;
    @media (max-width: 600px) {
      font-size: 24px !important;
    }
  }
  ::v-deep ._hero--img {
    width: 100vw;
    @include poly-fluid-sizing ('height', (376px:670px, 768px:347px, 1440px:700px));

    .v-skeleton-loader__image {
      @include poly-fluid-sizing ('height', (376px:670px, 768px:347px, 1440px:700px));
    }
  }
</style>