<template>
  <VSheet id="home">
    <Intro
      class="home--intro"
      :data="data.intro"
    />

    <VContainer
      v-if="data.the_vessel"
      class="home--the-vessel px-6 px-md-0"
      tag="section"
    >
      <BaseCarousel
        :data="[...data.the_vessel]"
        button-text="discover"
      />
    </VContainer>

    <HomeVoyages v-if="data.voyages" :data="data.voyages" />

    <VContainer
      v-if="data.dining"
      class="home--dining px-6 px-md-0 py-0"
      tag="section"
    >
      <BaseCardTextImage
        :data="data.dining"
        button-text="learn more"
        content-right
        reverse
      />
    </VContainer>

    <VContainer
      v-if="data.occasions"
      class="home--occasions px-6 px-md-0 py-0"
      tag="section"
    >
      <BaseCardTextImage
        :data="data.occasions"
        button-text="learn more"
      />
    </VContainer>
  </VSheet>
</template>

<script>
import Intro from '~/components/Intro.vue'
import BaseCarousel from '~/components/base/BaseCarousel.vue'
import HomeVoyages from '~/components/home/HomeVoyages.vue'
import BaseCardTextImage from '~/components/base/BaseCardTextImage.vue'

export default {

  components: {
    Intro,
    BaseCarousel,
    HomeVoyages,
    BaseCardTextImage
  },
  layout: 'main',

  async asyncData ({ $axios }) {
    const data = await $axios.$get('/api/pages/home/')
    return {
      data
    }
  },

  mounted () {
    if (this.$data.data && this.$data.data.hero) {
      this.addHeros({ page_key: this.$route.name || 'title', data: this.$data.data.hero })
    }
  },

  methods: {
    // eslint-disable-next-line camelcase
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
