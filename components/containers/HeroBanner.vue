<template>
  <div>
    <v-skeleton-loader
      boilerplate
      type="image"
      class="_hero--img"
      max-height="100%"
      transition="scale-transition"
    >
      <template>
        <v-sheet class="hero-wrapper text-center" style="relative">
          <v-sheet class="video-player-box mx-auto hidden-xs-only"
            v-video-player:player="{
              ...playerOptions,
              sources: [{
                type: 'video/mp4',
                src: data.video
              }]
            }"
          >
          </v-sheet>
          <div class="_head--text text-sm-h2 text-md-h1 text-center" v-html="data.text">
          </div>
          <v-img
            v-bind:src="staticImage ? require('~/assets/images/' + data.image) : data.image"
            :lazy-src="staticImage ? require('~/assets/images/' + data.image) : data.image"
            class="_hero--img justify-center hidden-sm-and-up"
            transition="fade-transition"
          >
            <!-- :aspect-ratio="16/9" -->
            <v-row no-gutters align="center" justify="center" class="fill-height">
              <v-spacer />
              <div class="_head--text text-break text-sm-h2 text-md-h1 text-center" v-html="data.text">
              </div>
              <v-spacer/>
            </v-row>
          </v-img>
        </v-sheet>
      </template>
    </v-skeleton-loader>
    <!-- <swiper
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
            <div class="_head--text text-break text-sm-h2 text-md-h1 text-center" v-html="item.text">
            </div>
            <v-spacer/>
          </v-row>
        </v-img>
      </swiper-slide>
    </swiper> -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

const components = {Swiper, SwiperSlide};
export default {
  name: 'HeroBanner',

  props: {
    data: {type: [Array, Object]},
    staticImage: {type: Boolean}
  },

  components,

  data () {
    return {
      loading: true,
      swiperOptions: {
        lazy: true,
        slidesPerView: 1,
      },
      // videojs options
      playerOptions: {
        language: 'en',
        autoplay: true,
        control: false,
        controls: false,
        loop: true,
        muted: true,
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
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
  ._head--text {
    color: #FFFFFF !important;
    position: absolute;
    white-space: pre-line !important;
    width: 100%;
    left: 50%;
    // bottom: 20px;
    transform: translate(-50%, 0);
    @include poly-fluid-sizing ('top', (375px:301px, 768px:174.02px, 1440px:350px));
    font-family: "Domine", serif !important;
    @media (max-width: 600px) {
      font-size: 24px !important;
    }
  }
  ::v-deep ._hero--img {
    width: 100vw;
    @include poly-fluid-sizing ('height', (375px:670px, 768px:347px, 1440px:700px));

    .v-skeleton-loader__image {
      @include poly-fluid-sizing ('height', (375px:670px, 768px:347px, 1440px:700px));
    }
  }
  ::v-deep .video-player-box {
    position: relative !important;
    object-position: center !important;
    object-fit: cover !important;
    .video-js, .vjs-tech {
      object-fit: cover !important;
      width: 100vw !important;
      @include poly-fluid-sizing ('height', (376px:670px, 768px:347px, 1440px:700px));
    }
  }

  .hero-wrapper {
    position: relative !important;
    @include poly-fluid-sizing ('max-height', (376px:670px, 768px:347px, 1440px:700px));
  }
</style>