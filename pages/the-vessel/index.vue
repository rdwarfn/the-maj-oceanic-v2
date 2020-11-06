<template>
  <div id="the-vessel">
    <template>
      <vessel-intro
        class="the-veseel--intro px-0"
        v-bind:data="data.intro"
        image-class="order-last px-6 px-md-0"
        description-class="text-center"
      ></vessel-intro>
    </template>

    <template>
      <div v-if="!data.suites_and_staterooms" class="text-center container">
        <v-skeleton-loader type="card" :loading="!data.suites_and_staterooms" />
      </div>
      <vessel-suites v-else v-bind:data="data.suites_and_staterooms"></vessel-suites>
    </template>

    <template>
      <div v-if="!data.the_decks" class="text-center container">
        <v-skeleton-loader type="card" :loading="!data.the_decks" />
      </div>
      <vessel-decks v-else v-bind:data="data.the_decks"></vessel-decks>
    </template>

    <template>
      <div v-if="!data.teams" class="text-center container">
        <v-skeleton-loader type="card" :loading="!data.teams" />
      </div>
      <vessel-teams v-else v-bind:data="data.teams"></vessel-teams>
    </template>

    <v-container class="sustainability py-0 px-6 px-md-0" tag="section">
      <template>
        <div v-if="!data.sustainability" class="text-center container">
          <v-skeleton-loader type="card" :loading="!data.sustainability" />
        </div>
        <vessel-sustainability
          v-else
          v-bind:data="data.sustainability"
          button-text="Learn More"
          content-right
          reverse
        ></vessel-sustainability>
      </template>
    </v-container>
  </div>
</template>

<script>
import _ from 'lodash';
import vesselIntro from '@/components/Intro.vue';
import vesselSuites from '@/components/vessel/VesselSuites';
import vesselDecks from '@/components/vessel/VesselDecks.vue';
import vesselTeams from '@/components/vessel/VesselTeams.vue';
import vesselSustainability from '@/components/base/BaseCardTextImage.vue';

const components = {
  vesselIntro,
  vesselSuites,
  vesselDecks,
  vesselTeams,
  vesselSustainability,
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

  head() {
    return {
      title: this.data.header.title && this.data.header.title || 'The MAJ Oceanic',
      meta: [
        _.assign({}, this.meta_primary),
        _.assign({}, this.meta_facebook),
        _.assign({}, this.meta_twitter)
      ]
    }
  },

  components,

  async asyncData ({ $content }) {
    const data = await $content('pages/vessel').fetch();
    console.log(data);
    return {
      data
    }
  },

  mounted () {
    if (this.$data && this.$data.data.hero) {
      this.addHeros({ page_key: this.$route.name, data: this.$data.data.hero });
    }
  },

  computed: {
    meta_primary() {
      return this.data.header && this.data.header.seo_meta_tag.meta_primary
    },
    meta_facebook() {
      return this.data.header && this.data.header.seo_meta_tag.meta_facebook
    },
    meta_twitter() {
      return this.data.header && this.data.header.seo_meta_tag.meta_twitter
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