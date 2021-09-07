<template>
  <div id="the-vessel">
    <Intro
      v-if="item.intro"
      :data="item.intro"
      class="the-veseel--intro px-0"
      image-class="order-last px-6 px-md-0"
      description-class="text-center"
    />

    <VesselSuites
      v-if="item.suites_and_staterooms"
      :data="item.suites_and_staterooms"
      :item="item.suites_and_staterooms"
    />

    <VesselDecks
      v-if="item.the_decks"
      :data="item.the_decks"
    />

    <VesselTeams
      v-if="item.teams"
      :data="item.teams"
    />

    <v-container class="sustainability py-0 px-6 px-md-0" tag="section">
      <BaseCardTextImage
        v-if="item.sustainability"
        :data="item.sustainability"
        button-text="Learn More"
        content-right
        reverse
      />
    </v-container>
  </div>
</template>

<script>
import _ from 'lodash'
import { addHero, metaTitle, metaDescription } from '~/mixins/Page'
import Intro from '~/components/Intro.vue'
import VesselSuites from '~/components/vessel/VesselSuites'
import VesselDecks from '~/components/vessel/VesselDecks.vue'
import VesselTeams from '~/components/vessel/VesselTeams.vue'
import BaseCardTextImage from '~/components/base/BaseCardTextImage.vue'

export default {
  components: {
    Intro,
    VesselSuites,
    VesselDecks,
    VesselTeams,
    BaseCardTextImage
  },

  mixins: [
    addHero,
    metaTitle,
    metaDescription
  ],

  layout: 'main',

  meta: {
    breadcrumbs: [
      {
        to: '/',
        text: 'Home',
        exact: true,
        replace: true
      },
      {
        to: '/the-vessel',
        text: 'The Vessel'
      }
    ]
  },

  async asyncData ({ $axios }) {
    const item = await $axios.$get('/api/pages/the-vessel/')
    _.reverse(item.teams.data)
    return {
      item
    }
  },

  /**
   * TODO:
   * add meta og:image & og:url
   */
  head () {
    return {
      title: this.metaTitle,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.metaTitle
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.metaDescription
        },
        {
          hid: 'description',
          name: 'description',
          content: this.metaDescription
        }
      ]
    }
  },

  mounted () {
    if (this.$data && this.$data.item.hero) {
      this.addHero({ page_key: this.$route.name, data: this.$data.item.hero })
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
