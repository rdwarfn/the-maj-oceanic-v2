<template>
  <div id="the-vessel">
    <vessel-intro
      class="the-veseel--intro px-0"
      :data="data.intro"
      image-class="order-last px-6 px-md-0"
      description-class="text-center"
    />

    <div v-if="!data.suites_and_staterooms" class="text-center container">
      <v-skeleton-loader type="card" :loading="!data.suites_and_staterooms" />
    </div>
    <vessel-suites v-else :data="data.suites_and_staterooms" />

    <div v-if="!data.the_decks" class="text-center container">
      <v-skeleton-loader type="card" :loading="!data.the_decks" />
    </div>
    <vessel-decks v-else :data="data.the_decks" />

    <div v-if="!data.teams" class="text-center container">
      <v-skeleton-loader type="card" :loading="!data.teams" />
    </div>
    <vessel-teams v-else :data="data.teams" />

    <v-container class="sustainability py-0 px-6 px-md-0" tag="section">
      <div v-if="!data.sustainability" class="text-center container">
        <v-skeleton-loader type="card" :loading="!data.sustainability" />
      </div>
      <vessel-sustainability
        v-else
        :data="data.sustainability"
        button-text="Learn More"
        content-right
        reverse
      />
    </v-container>
  </div>
</template>

<script>
import _ from 'lodash'
import vesselIntro from '@/components/Intro.vue'
import vesselSuites from '@/components/vessel/VesselSuites'
import vesselDecks from '@/components/vessel/VesselDecks.vue'
import vesselTeams from '@/components/vessel/VesselTeams.vue'
import vesselSustainability from '@/components/base/BaseCardTextImage.vue'

const components = {
  vesselIntro,
  vesselSuites,
  vesselDecks,
  vesselTeams,
  vesselSustainability
}
export default {

  // head() {
  //   return {
  //     title: this.data.header && this.data.header.title || 'The Vessel - The MAJ Oceanic',
  //     meta: [
  //       // meta primary
  //       {
  //         hid: this.meta_primary.title.hid,
  //         name: this.meta_primary.title.name,
  //         content: this.meta_primary.title.content
  //       },
  //       {
  //         hid: this.meta_primary.description.hid,
  //         name: this.meta_primary.description.name,
  //         content: this.meta_primary.description.content
  //       },
  //       {
  //         hid: this.meta_primary.keywords.hid,
  //         name: this.meta_primary.keywords.name,
  //         content: this.meta_primary.keywords.content
  //       },
  //       // meta faceboook
  //       {
  //         hid: 'article:publisher',
  //         name: 'article:publisher',
  //         property: 'article:publisher',
  //         content: 'https://www.facebook.com/themajoceanic/',
  //       },
  //       {
  //         hid: 'article:modified_time',
  //         property: 'article:modified_time',
  //         content: this.data.updatedAt
  //       },
  //       {
  //         hid: this.meta_facebook.url.hid,
  //         name: this.meta_facebook.url.name,
  //         property: this.meta_facebook.url.property,
  //         content: this.meta_facebook.url.content
  //       },
  //       {
  //         hid: this.meta_facebook.title.hid,
  //         name: this.meta_facebook.title.name,
  //         property: this.meta_facebook.title.property,
  //         content: this.meta_facebook.title.content
  //       },
  //       {
  //         hid: this.meta_facebook.description.hid,
  //         name: this.meta_facebook.description.name,
  //         property: this.meta_facebook.description.property,
  //         content: this.meta_facebook.description.content
  //       },
  //       {
  //         hid: this.meta_facebook.image.hid,
  //         name: this.meta_facebook.image.name,
  //         property: this.meta_facebook.image.property,
  //         content: this.meta_facebook.image.content
  //       },
  //       // meta twitter
  //       {
  //         hid: 'twitter:card',
  //         name: 'twitter:card',
  //         property: 'twitter:card',
  //         content: 'summary_large_image'
  //       },
  //       {
  //         hid: 'twitter:creator',
  //         name: 'twitter:creator',
  //         property: 'twitter:creator',
  //         content: '@themajoceanic'
  //       },
  //       {
  //         hid: 'twitter:site',
  //         name: 'twitter:site',
  //         property: 'twitter:site',
  //         content: '@themajoceanic'
  //       },
  //       {
  //         hid: this.meta_twitter.url.hid,
  //         name: this.meta_twitter.url.name,
  //         property: this.meta_twitter.url.property,
  //         content: this.meta_twitter.url.content
  //       },
  //       {
  //         hid: this.meta_twitter.title.hid,
  //         name: this.meta_twitter.title.name,
  //         property: this.meta_twitter.title.property,
  //         content: this.meta_twitter.title.content
  //       },
  //       {
  //         hid: this.meta_twitter.description.hid,
  //         name: this.meta_twitter.description.name,
  //         property: this.meta_twitter.description.property,
  //         content: this.meta_twitter.description.content
  //       },
  //       {
  //         hid: this.meta_twitter.image.hid,
  //         name: this.meta_twitter.image.name,
  //         property: this.meta_twitter.image.property,
  //         content: this.meta_twitter.image.content
  //       }
  //     ],
  //   }
  // },

  components,
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

  async asyncData ({ $axios }) {
    const data = await $axios.$get('/api/pages/the-vessel/')
    _.reverse(data.teams.data)
    return {
      data
    }
  },

  computed: {
    meta_primary () {
      return this.data.header && this.data.header.seo_meta_tag.meta_primary
    },
    meta_facebook () {
      return this.data.header && this.data.header.seo_meta_tag.meta_facebook
    },
    meta_twitter () {
      return this.data.header && this.data.header.seo_meta_tag.meta_twitter
    }
  },

  mounted () {
    if (this.$data && this.$data.data.hero) {
      this.addHeros({ page_key: this.$route.name, data: this.$data.data.hero })
    }
  },

  methods: {
    // eslint-disable-next-line
    addHeros ({ page_key, data }) {
      this.$store.commit('heros/add', { page_key, data })
    },
    ready (event) {
      this.player = event.target
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
