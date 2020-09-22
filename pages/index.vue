<template>
  <div id="home">
    <intro
      class="home--intro"
      v-bind:data="{
        heading: data.heading,
        image: data.image,
        description: data.description
      }"
    />

    <v-container class="home--the-vessel px-6 px-md-0" tag="section">
      <base-carousel
        :data="data.carousel_card"
        button-text="discover"
        static-image
      >
      </base-carousel>
    </v-container>

    <voyages
      v-bind:data="{
        heading: data.tabs.heading,
        text: data.tabs.text,
        tabsData: data.tabs.data
      }"
    />

    <v-container class="home--dining px-6 px-md-0 py-0" tag="section">
      <base-card-text-image
        v-bind:data="data.card_text_image[0]"
        button-text="learn more"
        content-right
        static-image
        reverse
      />
    </v-container>

    <v-container class="home--occasions px-6 px-md-0 py-0" tag="section">
      <base-card-text-image
        v-bind:data="data.card_text_image[1]"
        button-text="learn more"
        static-image
      />
    </v-container>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

const components = {
  BaseCarousel: () => import('@/components/base/BaseCarousel.vue'),
  BaseCardTextImage: () => import('@/components/base/BaseCardTextImage.vue'),
  intro: () => import('@/components/Intro.vue'),
  voyages: () => import ('@/components/VoyagesHome.vue'),
}

export default {
  layout: 'main',

  name: 'home',

  components,

  head () {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: JSON.stringify(this.data.description)
        }
      ]
    }
  },

  data () {
    return {
      loading: false
    }
  },

  async asyncData ({ $content }) {
    const data = await $content('pages/home').fetch();
    return { data }
  },

  mounted () {
    if (this.$data.data && this.$data.data.hero) {
      this.addHeros({ page_key: this.$route.name, data: this.$data.data.hero })
    }
  },

  computed: {
    heros () {
      return this.$store.state.heros;
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

  #home { padding-top: 51px }

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

  section.home--dining {
    @media #{map-get($display-breakpoints, 'md-and-up')} {
      margin-top: 50px;
    }
  }

  section.home--occasions {
    @media #{map-get($display-breakpoints, 'sm-and-up')} {
      margin-bottom: 50px;
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
