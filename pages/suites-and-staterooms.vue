<template>
  <div id="the-cabin">
    <v-container tag="section" class="mx-auto py-0 px-6 px-md-0">
      <div
        class="intro--head font-weight-bold text-center mx-auto"
        v-html="data.intro.heading"
      />
      <div
        class="intro--paragraph text-center mx-auto"
        v-html="data.intro.description"
      />
    </v-container>

    <component :is="asyncComponent" class="admiral-suite" :data="data.admiral_suite">
      <template #icon>
        <v-img
          v-if="data.admiral_suite.icon"
          class="spesification--icon"
          :src="$store.state.storage + data.admiral_suite.icon"
          :lazy-src="$store.state.storage + data.admiral_suite.icon"
        />
      </template>
    </component>

    <component :is="asyncComponent" class="columbus" reverse :data="data.commodore_suite">
      <template #icon>
        <v-img
          v-if="data.commodore_suite.icon"
          class="spesification--icon"
          :src="$store.state.storage + data.commodore_suite.icon"
          :lazy-src="$store.state.storage + data.commodore_suite.icon"
        />
      </template>
    </component>

    <component :is="asyncComponent" class="deluxe" :data="data.deluxe_stateroom" no-wrap>
      <template #icon>
        <div v-if="data.deluxe_stateroom.icons" class="d-inline-flex">
          <v-img
            v-for="(d, index) in data.deluxe_stateroom.icons"
            :key="index"
            class="spesification--icon spesification--icon-delux"
            :class="{'mr-0': data.deluxe_stateroom.icons.length - 1 == index}"
            :src="$store.state.storage + d.icon"
            :lazy-src="$store.state.storage + d.icon"
          />
        </div>
      </template>
    </component>

    <v-sheet color="#EFE1DC">
      <v-container class="ig--container text-center px-6 px-md-0">
        <div class="ig--heading" v-html="data.instagram.heading" />
        <v-row id="instafeed" />

        <v-btn
          width="141"
          height="38"
          :loading="loading"
          class="btn-l ig--btn"
          color="primary"
          tile
          outlined
          depressed
          @click.prevent="() => loadMore(6)"
        >
          View more
        </v-btn>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
import tmgIconDivider from '@/assets/images/svg/divider_tmg.svg?inline'
import SuitesSpecification from '@/components/suites/SuitesSpecificationPrimary.vue'
import SuitesSpecificationMobile from '@/components/suites/SuitesSpecificationMobilePrimary.vue'

export default {
  components: {
    tmgIconDivider,
    SuitesSpecification,
    SuitesSpecificationMobile
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
        to: '/suites-and-staterooms',
        replace: true,
        text: 'Suites & Staterooms'
      }
    ]
  },

  async asyncData ({ $axios }) {
    const data = await $axios.$get('/api/pages/suites-and-staterooms')
    return { data }
  },

  data () {
    return {
      myIgData: [],
      showed: 6,
      loading: false
    }
  },

  computed: {
    asyncComponent () {
      if (!this.$vuetify.breakpoint.xs) { return 'suites-specification' }
      return 'suites-specification-mobile'
    }
  },

  mounted () {
    this.instafeed()
    if (this.$data && this.$data.data.hero) {
      this.addHeros({ page_key: this.$route.name, data: this.$data.data.hero })
    }
  },

  methods: {
    // eslint-disable-next-line camelcase
    addHeros ({ page_key, data }) {
      this.$store.commit('heros/add', { page_key, data })
    },

    instafeed (limit = this.showed) {
      // eslint-disable-next-line no-undef
      const feed = new Instafeed({
        limit,
        accessToken: this.data && this.data.instagram && this.data.instagram.access_token,
        transform (item) {
          const d = new Date(item.timestamp)
          item.date = [d.getDate(), d.getMonth(), d.getYear()].join('/')
          return item
        },
        template: `<div class="col-4">
          <a target="blank" href="{{link}}"><img class="ig--img" title="{{caption}}" src="{{image}}" /></a>
        </div>`
      })
      feed.run()
      this.loading = false
    },
    loadMore (params = null) {
      this.loading = true
      const n = this.showed + params
      this.showed = n
      this.instafeed(n)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/scss/variables.scss";
$primary: #208cb2;
$secondary: #EFE1DC;

#the-cabin {
  @include poly-fluid-sizing ('padding-top', (375px:35px, 768px:39px, 1440px:51px));
}

.intro {
  &--head {
    width: 100%;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    font-family: 'Domine', serif;
    @include poly-fluid-sizing ('max-width', (768px:596px, 1440px:560px));
    @include poly-fluid-sizing ('font-size', (375px:20px, 768px:34px));
    @media #{map-get($display-breakpoints, 'sm-and-up')} {
      line-height: 41px !important;
    }
    @media #{map-get($display-breakpoints, 'xs-only')} {
      line-height: 32px !important;
      max-width: 100% !important;
    }
  }

  &--paragraph {
    margin-top: 40px;
    @include poly-fluid-sizing ('max-width', (768px:718px, 960px:800px))
  }
}

.spesification--icon {
  @include poly-fluid-sizing ('width', (768px:40px, 1264px:70px));

  &-delux {
    @include poly-fluid-sizing ('margin-right', (375px: 10px, 768px:12px, 1264px:20px));
  }
}

@media #{map-get($display-breakpoints, 'md-and-up')} {
  .suites-and-staterooms.admiral-suite, .suites-and-staterooms.deluxe {
    margin-bottom: 100px !important;
  }
  .suites-and-staterooms.columbus {
    margin-bottom: 150px !important;
  }
}

// ::v-deep .__oceanic--secondary {
//   background: $secondary !important;
//   @include poly-fluid-sizing('padding-top', (375px:39px, 600px:80px, 960px:110px));
//   @include poly-fluid-sizing('padding-bottom', (375px:39px, 600px:80px, 960px:110px));
// }

// ::v-deep .__text-primary {
//   color: $primary !important;
// }
// ::v-deep .__carousel {
//   @media (min-width: 600px) {
//     margin-bottom: 150px !important;
//   }
// }
// ::v-deep .__carousel_card {
//   top: 40px !important;
//   @include poly-fluid-sizing('padding-top', (375px:39px, 768px:26px, 1204px:34px));
//   @include poly-fluid-sizing('padding-bottom', (375px:33px, 768px:34px, 1204px: 69px));
//   @include poly-fluid-sizing('width', (375px:323px, 600px:362px, 1204px: 445px));
// }

::v-deep .ig--img {
  width: 100%;
  // @include poly-fluid-sizing ('width', (768px:352px, 1440px:445px));
}

.ig--container {
  @include poly-fluid-sizing ('padding-top', (375px:50px, 768px:53px, 960px:100px));
  @include poly-fluid-sizing ('padding-bottom', (375px:100px, 768px:98.74px, 960px:113px));
}

.ig--heading {
  font-family: 'Domine', serif !important;
  line-height: 41px;
  font-weight: 600;
  text-align: center !important;

  @include poly-fluid-sizing ('font-size', (375px:22px, 768px:34px));
  @include poly-fluid-sizing ('margin-bottom', (375px:43px, 768px:55px, 960px:84px));
}
.ig--btn {
  @include poly-fluid-sizing ('margin-top', (375px:50px, 960px:100px));
}
::v-deep .col-4 {
  @media #{map-get($display-breakpoints, 'xs-only')} {
    padding: 4.5px !important;
  }
}

.v-btn--outlined:hover {
  color: white !important;
  background-color: #208cb2 !important;
}
</style>
