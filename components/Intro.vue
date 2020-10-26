<template>
  <v-container tag="section" class="pa-0 d-flex flex-column">
    <v-skeleton-loader type="text@2" class="intro--head" v-if="!data.heading">
    </v-skeleton-loader>
    <div v-else class="px-6 px-sm-0 intro--head font-weight-bold text-center mx-auto slide-y-transition-move" v-html="data.heading">
    </div>

    <base-large-image
      v-if="data.image"
      class="intro--image"
      v-bind:class="imageClass"
      :data="data.image"
    />

    <v-skeleton-loader type="text@4" class="text-center" v-if="!data.description">
    </v-skeleton-loader>
    <div v-else class="intro--paragraph text-break px-6 px-sm-0 mx-auto" v-bind:class="descriptionClass ? descriptionClass : 'text-center'" v-html="data.description">
    </div>
    <client-only>
      <v-container class="mx-auto pa-0" v-if="data.youtube_id">
        <youtube
          class="d-flex justify-center"
          :video-id="data.youtube_id"
          :player-vars="{ autoplay: 1 }"
          @ready="ready"
          @playing="playing"
        ></youtube>
      </v-container>
    </client-only>
  </v-container>
</template>

<script>
import baseLargeImage from '@/components/base/BaseLargeImage.vue';
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

  methods: {
    ready (event) {
      this.player = event.target
    },
    playing (event) {
      console.log(event)
    }
  },

  computed: {
    youtubeWidth () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '100%'
        case 'sm': return 768
        case 'md': return 966
        case 'lg': return 966
        case 'xl': return 966
      }
      // return 375
    },
    youtubeHeight () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 210
        case 'sm': return 432
        case 'md': return 543
        case 'lg': return 543
        case 'xl': return 543
      }
      // return 210.933
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