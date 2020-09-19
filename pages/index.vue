<template>
  <div>
    <intro
      class="px-0 pt-0 pb-10"
      v-bind:data="{
        heading: data.heading,
        image: data.image,
        description: data.description
      }"
    />

    <v-container class="pt-10 pb-13 px-6 px-md-0" tag="section">
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

    <v-container class="dining px-6 px-md-0" tag="section">
      <base-card-text-image
        v-bind:data="data.card_text_image[0]"
        v-bind:button-props="{
          outlined: true
        }"
        card-img-class="_card-img-class"
        button-text="learn more"
        content-right
        static-image
        reverse
      />
    </v-container>

    <v-container class="occasions px-6 px-md-0" tag="section">
      <base-card-text-image
        v-bind:data="data.card_text_image[1]"
        v-bind:button-props="{
          outlined: true
        }"
        card-img-class="_card-img-class"
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
      this.addBreadcrumb ({
        text: 'home',
        href: this.$route.path
      })
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
    },
    addBreadcrumb ({ text, href }) {
      this.$store.commit('breadcrumbs/add', {
        text, href
      })
    },
    removeBreadcrumb(params) {
      const callback = (args) => args.text === params;
      this.$store.commit('breadcrumbs/remove', callback);
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/scss/variables.scss';
  $primary: #208cb2;

  ::v-deep .intro--paragraph {
    @include poly-fluid-sizing('max-width', (768px:596px, 960px:700px));
  }

  ::v-deep .dining, ::v-deep .occasions {
    padding-top: 50px;
    padding-bottom: 50px;
    ._card-img-class {
      margin: 0 auto;
      @include poly-fluid-sizing ('max-width', (374px:325px, 768px:367px, 1440px:570px));
      @include poly-fluid-sizing ('height', (374px:181px, 768px:350px));
    }
  }

  ::v-deep .dining {
    @media (min-width: 960px) {
      margin-top: 100px !important;
    }
  }

  ::v-deep .occasions {
    @media #{map-get($display-breakpoints, 'md-and-down')} {
      margin-bottom: 50px !important;
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
