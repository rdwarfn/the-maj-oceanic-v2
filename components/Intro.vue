<template>
  <v-container
    tag="section"
    class="pa-0 d-flex flex-column"
  >
    <v-skeleton-loader
      v-if="!data.heading"
      type="text@2"
      class="intro--head"
    />
    <div
      v-else
      class="px-6 px-sm-0 intro--head font-weight-bold text-center mx-auto slide-y-transition-move"
      v-html="data.heading"
    />

    <base-large-image
      v-if="data.image"
      class="intro--image"
      :class="imageClass"
      :data="$store.state.storage + data.image"
    />

    <v-skeleton-loader
      v-if="!data.description"
      type="text@4"
      class="text-center"
    />
    <div
      v-else
      class="intro--paragraph text-break px-6 px-sm-0 mx-auto"
      :class="descriptionClass ? descriptionClass : 'text-center'"
      v-html="data.description"
    />
    <client-only>
      <v-container
        v-if="data.youtube_id"
        class="mx-auto pa-0"
      >
        <youtube
          class="d-flex justify-center"
          :video-id="data.youtube_id"
          :player-vars="{ autoplay: 1 }"
          @ready="ready"
        />
      </v-container>
    </client-only>
  </v-container>
</template>

<script>
import baseLargeImage from '@/components/base/BaseLargeImage.vue'
export default {
  name: 'Intro',

  components: {
    baseLargeImage
  },

  props: {
    data: {
      id_youtube: { type: String },
      heading: { type: String },
      image: { type: String },
      description: { type: String }
    },
    imageClass: { type: String },
    descriptionClass: { type: String }
  },

  computed: {
    youtubeWidth () {
      switch (this.$vuetify.breakpoint.name) {
        case 'sm': return 768
        case 'md': return 966
        case 'lg': return 966
        case 'xl': return 966
        default: return '100%'
      }
      // return 375
    },
    youtubeHeight () {
      switch (this.$vuetify.breakpoint.name) {
        case 'sm': return 432
        case 'md': return 543
        case 'lg': return 543
        case 'xl': return 543
        default: return 210
      }
      // return 210.933
    }
  },

  methods: {
    ready (event) {
      this.player = event.target
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/scss/variables.scss";
#youtube-player-1 {
  margin: 0 auto;
}
::v-deep .intro {
  &--head {
    width: 100%;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    font-family: 'Domine', serif;
    @include poly-fluid-sizing ('font-size', (375px:20px, 768px:34px));
    @media #{map-get($display-breakpoints, 'sm-and-up')} {
      line-height: 41px !important;
    }
    @media #{map-get($display-breakpoints, 'xs-only')} {
      line-height: 32px !important;
      max-width: 100% !important;
    }
  }
}
</style>
