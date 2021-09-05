<template>
  <div id="the-vessel">
    <Intro
      v-if="items.intro"
      :data="items.intro"
      class="the-veseel--intro px-0"
      image-class="order-last px-6 px-md-0"
      description-class="text-center"
    />

    <VesselSuites
      v-if="items.suites_and_staterooms"
      :data="items.suites_and_staterooms"
    />

    <VesselDecks
      v-if="items.the_decks"
      :data="items.the_decks"
    />

    <VesselTeams
      v-if="items.teams"
      :data="items.teams"
    />

    <v-container class="sustainability py-0 px-6 px-md-0" tag="section">
      <BaseCardTextImage
        v-if="items.sustainability"
        :data="items.sustainability"
        button-text="Learn More"
        content-right
        reverse
      />
    </v-container>
  </div>
</template>

<script>
import _ from 'lodash'
import Intro from '@/components/Intro.vue'
import VesselSuites from '@/components/vessel/VesselSuites'
import VesselDecks from '@/components/vessel/VesselDecks.vue'
import VesselTeams from '@/components/vessel/VesselTeams.vue'
import BaseCardTextImage from '@/components/base/BaseCardTextImage.vue'

export default {

  components: {
    Intro,
    VesselSuites,
    VesselDecks,
    VesselTeams,
    BaseCardTextImage
  },
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
    const items = await $axios.$get('/api/pages/the-vessel/')
    _.reverse(items.teams.data)
    return {
      items
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
    if (this.$data && this.$data.items.hero) {
      this.addHeros({ page_key: this.$route.name, data: this.$data.items.hero })
    }
  },

  methods: {
    // eslint-disable-next-line camelcase
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
@import '~/assets/styles/utilities/_variables.scss';

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
