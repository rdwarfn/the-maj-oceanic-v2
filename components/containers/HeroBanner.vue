<template>
  <div>
    <v-skeleton-loader
      type="image"
      class="_hero--img"
      :loading="loading"
      transition="slide-y-reverse-transition"
    >
      <template>
        <v-sheet class="hero-wrapper text-center" style="relative">
          <template v-if="data.video">
            <template>
              <div class="video-player-box mx-auto hidden-xs-only"
                :playsinline="true"
                v-video-player:player="{
                  ...playerOptions,
                  sources: [...data.video]
                }"
                @play="onPlayerPlay($event)"
                @waiting="onPlayerWaiting($event)"
                @canplay="onPlayerCanplay($event)"
                @canplaythrough="onPlayerCanplaythrough($event)"
              >
              </div>
              <div class="_head--text font-weight-bold text-sm-h2 text-md-h1 text-center hidden-xs-only" v-html="data.text">
              </div>
            </template>

            <template>
              <v-img
                v-bind:src="staticImage ? require('~/assets/images/' + data.image) : data.image"
                :lazy-src="staticImage ? require('~/assets/images/' + data.image) : data.image"
                class="_hero--img justify-center hidden hidden-sm-and-up"
                transition="fade-transition"
              >
                <v-row no-gutters align="center" justify="center" class="fill-height">
                  <v-spacer />
                  <div class="_head--text font-weight-bold text-break text-sm-h2 text-md-h1 text-center hidden-sm-and-up" v-html="data.text">
                  </div>
                  <v-spacer/>
                </v-row>
              </v-img>
            </template>
          </template>

          <v-img
            v-else
            v-bind:src="staticImage ? require('~/assets/images/' + data.image) : data.image"
            :lazy-src="staticImage ? require('~/assets/images/' + data.image) : data.image"
            class="_hero--img justify-center"
          >
            <!-- :aspect-ratio="16/9" -->
            <v-row no-gutters align="center" justify="center" class="fill-height">
              <v-spacer />
              <div class="_head--text font-weight-bold text-break text-sm-h2 text-md-h1 text-center" v-html="data.text">
              </div>
              <v-spacer/>
            </v-row>
          </v-img>
        </v-sheet>
      </template>
    </v-skeleton-loader>
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
        // autoplay: true,
        control: false,
        // controls: false,
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
      if (!this.data)
        return
      setTimeout(() => {
        this.loading = false
      }, 500)
    },
    onPlayerPlay(player) {
      // console.log('player play!', player)
      this.$nextTick(() => {
        player.controls(false)
      });
    },
    onPlayerWaiting(player) {
      // console.log('player Waiting!', player)
    },
    onPlayerCanplay (player) {
      this.$nextTick(() => {
        player.play().then(() => {
          console.log("can autoplay");
        })
        .catch(() => {
          console.warn('can not autoplay');
        })
      });
    },
    onPlayerCanplaythrough(player) {
      // console.log('player Canplaythrough!', player)
      // player.play().then(() => {
      //   player.controls(false);
      // });
    },
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

    // .video-js .vjs-big-play-button {
    //   top: 50% !important;
    //   left: 40%;
    // }
    .video-js .vjs-big-play-button {
      @include poly-fluid-sizing ('top', (376px:311px, 768px:149.5px, 1440px:324px));
      left: 50%;
      // bottom: 20px;
      transform: translate(-50%, 0);
      border-radius: 50%;
      width: 48px !important;
      height: 48px !important;
      border-color: transparent !important;
      z-index: 2;
    }

    .video-js .vjs-play-control:before {
      top:20% !important;
      content: '\f101';
      font-size: 48px;
    }
  }

  .hero-wrapper {
    position: relative !important;
    @include poly-fluid-sizing ('max-height', (376px:670px, 768px:347px, 1440px:700px));
  }
</style>