<template>
  <div id="home">
    <template>
      <home-intro
        class="home--intro"
        v-bind:data="data.intro"
      ></home-intro>
    </template>

    <v-container class="home--the-vessel px-6 px-md-0" tag="section">
      <template>
        <div v-if="!data.the_vessel" class="text-center">
          <v-skeleton-loader type="image" :loading="!data.the_vessel" />
        </div>
        <home-vessel
          v-else
          :data="[...data.the_vessel]"
          button-text="discover"
        ></home-vessel>
      </template>
    </v-container>

    <template>
      <div v-if="!data.voyages" class="text-center container">
        <v-skeleton-loader type="card" :loading="!data.voyages" />
      </div>
      <home-voyages v-else v-bind:data="data.voyages" />
    </template>

    <v-container class="home--dining px-6 px-md-0 py-0" tag="section">
      <template>
        <div v-if="!data.dining" class="text-center">
          <v-skeleton-loader type="card" :loading="!data.dining" />
        </div>
        <home-dining-occasions
          v-else
          v-bind:data="data.dining"
          button-text="learn more"
          content-right
          reverse
        ></home-dining-occasions>
      </template>
    </v-container>

    <v-container class="home--occasions px-6 px-md-0 py-0" tag="section">
      <template>
        <div v-if="!data.occasions" class="text-center">
          <v-skeleton-loader type="card" :loading="!data.occasions" />
        </div>
        <home-dining-occasions
          v-else
          v-bind:data="data.occasions"
          button-text="learn more"
        ></home-dining-occasions>
      </template>
    </v-container>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import homeIntro from '@/components/Intro.vue';
import homeVessel from '@/components/base/BaseCarousel.vue';
import homeDiningOccasions from '@/components/base/BaseCardTextImage.vue'
import homeVoyages from '@/components/home/HomeVoyages'

const components = {
  homeIntro,
  homeVessel,
  homeVoyages,
  homeDiningOccasions,
}

export default {
  layout: 'main',

  components,

  head () {
    return {
      title: this.data.header && this.data.header.title || 'The MAJ Oceanic',
      meta: [
        // meta primary
        {
          hid: this.meta_primary.title.hid,
          name: this.meta_primary.title.name,
          content: this.meta_primary.title.content
        },
        {
          hid: this.meta_primary.description.hid,
          name: this.meta_primary.description.name,
          content: this.meta_primary.description.content
        },
        {
          hid: this.meta_primary.keywords.hid,
          name: this.meta_primary.keywords.name,
          content: this.meta_primary.keywords.content
        },
        // meta faceboook
        {
          hid: 'article:publisher',
          name: 'article:publisher',
          property: 'article:publisher',
          content: 'https://www.facebook.com/themajoceanic/',
        },
        {
          hid: 'article:modified_time',
          property: 'article:modified_time',
          content: this.data.updatedAt
        },
        {
          hid: this.meta_facebook.url.hid,
          name: this.meta_facebook.url.name,
          property: this.meta_facebook.url.property,
          content: this.meta_facebook.url.content
        },
        {
          hid: this.meta_facebook.title.hid,
          name: this.meta_facebook.title.name,
          property: this.meta_facebook.title.property,
          content: this.meta_facebook.title.content
        },
        {
          hid: this.meta_facebook.description.hid,
          name: this.meta_facebook.description.name,
          property: this.meta_facebook.description.property,
          content: this.meta_facebook.description.content
        },
        {
          hid: this.meta_facebook.image.hid,
          name: this.meta_facebook.image.name,
          property: this.meta_facebook.image.property,
          content: this.meta_facebook.image.content
        },
        // meta twitter
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          property: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          hid: 'twitter:creator',
          name: 'twitter:creator',
          property: 'twitter:creator',
          content: '@themajoceanic'
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          property: 'twitter:site',
          content: '@themajoceanic'
        },
        {
          hid: this.meta_twitter.url.hid,
          name: this.meta_twitter.url.name,
          property: this.meta_twitter.url.property,
          content: this.meta_twitter.url.content
        },
        {
          hid: this.meta_twitter.title.hid,
          name: this.meta_twitter.title.name,
          property: this.meta_twitter.title.property,
          content: this.meta_twitter.title.content
        },
        {
          hid: this.meta_twitter.description.hid,
          name: this.meta_twitter.description.name,
          property: this.meta_twitter.description.property,
          content: this.meta_twitter.description.content
        },
        {
          hid: this.meta_twitter.image.hid,
          name: this.meta_twitter.image.name,
          property: this.meta_twitter.image.property,
          content: this.meta_twitter.image.content
        }
      ],
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    }
  },

  async asyncData ({ $content }) {
    const data = await $content('pages/home').fetch();

    return {
      data
    }
  },

  mounted () {
    if (this.$data.data && this.$data.data.hero) {
      this.addHeros({ page_key: this.$route.name || 'title', data: this.$data.data.hero })
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
      this.$store.commit('heros/add', {
        page_key, data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/scss/variables.scss';
  $primary: #208cb2;

  #home {
    @include poly-fluid-sizing ('padding-top', (375px:35px, 768px:39px, 1440px:51px));
  }

  ::v-deep section.home--intro {
    @include poly-fluid-sizing ('margin-bottom', (375px:50px, 768px:23px, 1440px:50px));
    .intro--head {
      @include poly-fluid-sizing ('max-width', (768px:620px, 960px:650px));
      @include poly-fluid-sizing ('margin-bottom', (375px:25px, 768px:40px));
    }
    .intro--image {
      @include poly-fluid-sizing ('margin-bottom', (375px:35px, 768px:45px, 1440px:50px));
    }
    .intro--paragraph {
      @include poly-fluid-sizing ('max-width', (768px:596px, 1440px:660px));
    }
  }

  ::v-deep section.home--the-vessel {
    .__carousel .swiper { padding: 0 !important;}
    padding-bottom: 0;
    @include poly-fluid-sizing ('padding-top', (375px:50px, 768px:75px, 1440px:50px));
    @include poly-fluid-sizing ('height', (600px:545px, 768px:545px, 1440px:595px));
    @media #{map-get($display-breakpoints, 'xs-only')} {
      height: auto !important;
      padding-bottom: 70px;
    }
  }

  ::v-deep section.home--dining {
    @media #{map-get($display-breakpoints, 'md-and-up')} {
      margin-top: 50px !important;
    }
    @media #{map-get($display-breakpoints, 'xs-only')} {
      .v-card__text {
        text-align: center !important;
      }
    }
  }

  ::v-deep section.home--occasions {
    @media #{map-get($display-breakpoints, 'sm-and-up')} {
      margin-bottom: 50px !important;
    }
    @media #{map-get($display-breakpoints, 'xs-only')} {
      .v-card__text {
        text-align: center !important;
      }
    }
  }

  a.v-btn {
    &--outlined {
      &.primary--text {
        &:hover {
          color: white !important;
          background-color: $primary !important;
          border-color: $primary !important;
        }
      }
    }
  }
</style>
