<template>
  <div id="the-cabin">
    <v-container tag="section" class="mx-auto px-6 px-md-0">
      <div class="intro--head font-weight-bold text-center mx-auto">
        {{data.heading}}
      </div>
      <p class="intro--paragraph text-center mx-auto"> {{data.description}} </p>
    </v-container>

    <spesification class="admiral-suite" v-bind:data="data.spesification[0].data">
    </spesification>

    <spesification class="columbus" reverse v-bind:data="data.spesification[1].data">
    </spesification>

    <spesification class="deluxe" v-bind:data="data.spesification[2].data" no-wrap>
    </spesification>
  </div>
</template>

<script>
import TmgIconDivider from '@/assets/images/svg/divider_tmg.svg?inline';
import iconZhengHe from '@/assets/images/tmg-icon-zheng-he.png';
import columbus from '@/assets/images/tmo-icon-columbus-2.png';
import iconFerdinand from '@/assets/images/tmo-icon-ferdinand-magellan.png';
import iconJames from '@/assets/images/tmo-icon-james-cook.png';
import iconMarco from '@/assets/images/tmo-icon-marco-polo.png';
import iconVasco from '@/assets/images/tmo-icon-vasco-da-gamma.png';
const components = {
  TmgIconDivider,
  Spesification: () => import('@/components/SpesificationTheCabin.vue')
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
        to: '/activites',
        text: 'Activites'
      }
    ]
  },

  components,

  data () {
    return {
    }
  },

  async asyncData ({ $content }) {
    const data = await $content ('pages/the-cabins/index').fetch();
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
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/scss/variables.scss";
$primary: #208cb2;
$secondary: #EFE1DC;

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