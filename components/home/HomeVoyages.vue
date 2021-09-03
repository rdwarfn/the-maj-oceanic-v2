<template>
  <v-sheet class="voyages" tag="section">
    <v-container class="py-0 px-6 px-md-0">
      <v-row align="center" justify="center" class="voyages--headline mx-auto text-center mb-10">
        <div
          class="text-h4 text-sm-h3 mb-8"
          v-text="data.heading"
        />
        <div v-html="data.description" />
      </v-row>
      <BaseTabs
        button-text="learn more"
        :data="data.tabs_data"
        class="hidden-xs-only"
      />

      <v-sheet color="transparent" class="hidden-sm-and-up" style="position: relative;">
        <v-row class="tabs-mobile--container container mx-auto px-0">
          <v-btn depressed x-small class="button--left" color="transparent" @click="prev">
            <v-icon color="black">
              {{ icon.left }}
            </v-icon>
          </v-btn>
          <div class="tabs-mobile--label text-uppercase text-center mx-auto">
            {{ dataActive.name }}
          </div>
          <v-btn depressed x-small class="button--right" color="transparent" @click="next">
            <v-icon color="black">
              {{ icon.right }}
            </v-icon>
          </v-btn>
        </v-row>
        <swiper ref="swiper" class="swiper" :options="swiperOption">
          <swiper-slide v-for="(item, index) in data.tabs_data" :key="index">
            <v-skeleton-loader
              v-if="!item.image"
              class="tabs-mobile--image"
              type="image"
            />
            <v-img
              :src="$store.state.storage + item.image"
              :lazy-src="$store.state.storage + item.image"
              class="tabs-mobile--image"
            />
          </swiper-slide>
        </swiper>

        <div class="tabs-mobile--content text-center">
          <div class="tabs-mobile--heading">
            {{ dataActive && dataActive.heading }}
          </div>
          <div class="tabs-mobile--text">
            {{ dataActive && dataActive.description }}
          </div>
          <v-btn
            tile
            nuxt
            outlined
            :to="dataActive && dataActive.to"
            class="tabs-mobile--btn btn-l"
            color="primary"
          >
            learn more
          </v-btn>
        </div>
      </v-sheet>
    </v-container>
  </v-sheet>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
import BaseTabs from '@/components/base/BaseTabs.vue'

export default {
  components: {
    BaseTabs,
    Swiper,
    SwiperSlide
  },

  props: {
    data: {
      name: { type: String },
      description: { type: String },
      tabs_data: { type: Array }
    }
  },

  data () {
    return {
      store: [],
      dataActive: {},
      activeIndex: 0,
      icon: {
        left: mdiChevronLeft,
        right: mdiChevronRight
      },
      swiperOption: {
        lazy: true,
        slidesPerView: 1,
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
    this.initStore()
  },

  methods: {
    initStore () {
      if (!this.data.tabs_data.length) { return }
      this.store = this.data.tabs_data
      this.dataActive = this.data.tabs_data[0]
    },
    prev () {
      if (this.swiper.isBeginning) { return }
      this.swiper.slidePrev()
    },
    next () {
      if (this.swiper.isEnd) { return }
      this.swiper.slideNext()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/scss/variables.scss';
.voyages {
  background-color: #EFE1DC !important;
  padding-top: 50px;
  @include poly-fluid-sizing ('padding-bottom', (375px:50px, 1440px:100px));

  &--headline {
    @media #{map-get($display-breakpoints, 'md-and-down')} {
      width: auto !important;
    }
    @media #{map-get($display-breakpoints, 'md-and-up')} {
      width: 714px !important;
    }
  }
}
::v-deep .v-tabs-items {
  .theme--light.v-card {
    background-color: transparent !important;
  }
}
.tabs-mobile {
  &--container {
    padding-top: 25px !important;
    padding-bottom: 25px !important;
    margin-bottom: 15px !important;
  }
  &--label {
    letter-spacing: 3px !important;
    font-weight: 600;
    font-size: 12px !important;
    font-family: 'Montserrat', sans-serif !important;
  }
  &--image {
    @include poly-fluid-sizing ('max-height', (375px:181px, 768px:347px, 1440px:350px));

    ::v-deep .v-image__image {
      background-position: center top !important;
    }
  }
  &--content {
    margin-top: 39px !important;
  }
  &--heading {
    font-family: 'Domine', sans-serif !important;
    font-size: 22px !important;
    font-weight: 600 !important;
    margin-bottom: 30px !important;
    letter-spacing: normal !important;
  }
  &--text {
    font-family: 'PT Sans', sans-serif !important;
    font-size: 16px !important;
    line-height: 21px !important;
  }
  &--btn {
    margin-top: 50px !important;
  }
}
</style>
