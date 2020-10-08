<template>
  <div id="the-vessel">
    <intro
      class="the-veseel--intro px-0"
      v-bind:data="{
        heading: data.heading,
        id_youtube: 'Hm2KQirCJoU',
        description: data.description
      }"
      image-class="order-last px-6 px-md-0"
      description-class="text-center"
    />

    <!-- <client-only>
      <youtube video-id="Hm2KQirCJoU" @ready="ready"></youtube>
    </client-only> -->


    <the-cabins v-bind:data="data.card_three_image" />

    <spesification v-bind:data="data.carousel_card" />

    <the-teams v-bind:data="data.teams" />

    <v-container class="sustainability py-0 px-6 px-md-0" tag="section">
      <base-card-text-image
        v-bind:data="data.card_text_image[0]"
        button-text="Learn More"
        static-image
        content-right
        reverse
      />
    </v-container>
  </div>
</template>

<script>
// import { getIdFromURL } from 'vue-youtube-embed';
const components = {
  Intro: () => import('@/components/Intro.vue'),
  TheCabins: () => import('@/components/TheCabinsTheVessel.vue'),
  Spesification: () => import('@/components/SpesificationTheVessel.vue'),
  TheTeams: () => import('@/components/TheTeamsTheVessel.vue'),
  BaseCardTextImage: () => import('@/components/base/BaseCardTextImage.vue'),
}
export default {
  layout: 'main',

  meta: {
    breadcrumbs: [
      {
        to: '/',
        replace: true,
        text: 'Home'
      },
      {
        to: '/the-vessel',
        text: 'The Vessel'
      }
    ]
  },

  components,

  async asyncData ({ $content }) {
    const data = await $content('pages/vessel').fetch();
    return { data }
  },

  mounted () {
    if (this.$data && this.$data.data.hero) {
      this.addHeros({ page_key: this.$route.name, data: this.$data.data.hero });
    }
  },

  methods: {
    addHeros ({ page_key, data }) {
      this.$store.commit('heros/add', { page_key, data });
    },
    ready (event) {
      this.player = event.target
    },
    playing (event) {
      console.log(event)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/scss/variables.scss";

  #the-vessel {
    @include poly-fluid-sizing ('padding-top', (375px:35px, 768px:39px, 1440px:51px));
  }

  ::v-deep section.the-veseel--intro {
      @media #{map-get($display-breakpoints, 'md-and-up')} {
        margin-bottom: 100px !important;
        padding-bottom: 50px !important;
      }
      @media #{map-get($display-breakpoints, 'sm-and-down')} {
        padding-bottom: 50px !important;
      }
      .intro--head {
        @include poly-fluid-sizing ('margin-bottom', (375px:25px, 768px:29px, 1440px:30px));
      }
      .intro--paragraph {
        @media #{map-get($display-breakpoints, 'md-and-up')} {
          max-width: 795px;
          margin-bottom: 29px;
        }
        @media #{map-get($display-breakpoints, 'sm-only')} {
          max-width: 635px;
          margin-bottom: 51px;
        }
        @media #{map-get($display-breakpoints, 'xs-only')} {
          margin-bottom: 35px;
        }
      }
  }

  ::v-deep section.the-decks {
    @media #{map-get($display-breakpoints, 'md-and-up')} {
      margin-bottom: 90px !important;
    }
  }

  ::v-deep section.sustainability {
    @media #{map-get($display-breakpoints, ('xs-only'))} {
      margin-bottom: 47px !important;
    }
    @media #{map-get($display-breakpoints, 'md-and-up')} {
      margin-top: 90px !important;
      margin-bottom: 50px !important;
    }
  }
</style>