<template>
  <div id="the-cabin">
    <v-container tag="section" class="mx-auto px-6 px-md-0">
      <div class="intro--head font-weight-bold text-center mx-auto">
        {{data.heading}}
      </div>
      <p class="intro--paragraph text-center mx-auto"> {{data.description}} </p>
    </v-container>

    <spesification class="admiral-suite" v-bind:data="data.spesification[0].data">
      <template #icon>
        <v-img
          class="spesification--icon"
          v-bind:src="icon.zhenghe"
          v-bind:lazy-src="icon.zhenghe"></v-img>
      </template>
    </spesification>

    <spesification class="columbus" reverse v-bind:data="data.spesification[1].data">
      <template #icon>
        <v-img
          class="spesification--icon"
          v-bind:src="icon.columbus"
          v-bind:lazy-src="icon.columbus"></v-img>
      </template>
    </spesification>

    <spesification class="deluxe" v-bind:data="data.spesification[2].data" no-wrap>
      <template #icon>
        <div class="d-inline-flex">
          <v-img
            class="spesification--icon spesification--icon-delux"
            v-bind:src="icon.ferdinand"
            v-bind:lazy-src="icon.ferdinand"></v-img>

          <v-img
            class="spesification--icon spesification--icon-delux"
            v-bind:src="icon.marco"
            v-bind:lazy-src="icon.marco"></v-img>

          <v-img
          class="spesification--icon spesification--icon-delux"
            v-bind:src="icon.vasco"
            v-bind:lazy-src="icon.vasco"></v-img>

          <v-img
          class="spesification--icon spesification--icon-delux mr-0"
            v-bind:src="icon.james"
            v-bind:lazy-src="icon.james"></v-img>
        </div>
      </template>
    </spesification>
    <v-sheet color="#EFE1DC">
      <v-container class="ig--container text-center px-6 px-md-0">
        <div class="ig--heading">Follow us on Instagram</div>
        <v-row id="instafeed"></v-row>

        <v-btn width="141" height="38" :loading="loading" @click.prevent="() => loadMore(6)" class="btn-l ig--btn" color="primary" tile outlined depressed>
          View more
        </v-btn>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
const myIgToken = "IGQVJXT3NVR21Ra1JpdlluTUQ3RmhhWjY4NWFFUXRYSzAxWklRSFgtODVOaktlNTRfRk4wdmE3cTB6aXBSaThwcXE2LWNXdXBwdWpfQ1ZATd25kR2dKMmM2dHByYzRfeDV5MktST2hFMGN0aEVpSmhmOQZDZD";
const test = "IGQVJWRFN6UUVvam9qbVA3TTU3ZAVNGelpFLTJQOFRxOTJ3N1pnSmlxeG1pdGE5ZAmJGNmJtMll6U3ZApZA2ljeDV0RkpkWUJrajZAWOUNHRFBaeGo5TnVOUGM4Y0kyc1JxR0R4dDVKU3RB";
// import VueInstagram from 'vue-instagram';
import TmgIconDivider from '@/assets/images/svg/divider_tmg.svg?inline';
import iconZhengHe from '@/assets/images/tmg-icon-zheng-he.png';
import columbus from '@/assets/images/tmo-icon-columbus-2.png';
import iconFerdinand from '@/assets/images/tmo-icon-ferdinand-magellan.png';
import iconJames from '@/assets/images/tmo-icon-james-cook.png';
import iconMarco from '@/assets/images/tmo-icon-marco-polo.png';
import iconVasco from '@/assets/images/tmo-icon-vasco-da-gamma.png';
const components = {
  TmgIconDivider,
  Spesification: () => import('@/components/SpesificationTheCabin.vue'),
  // VueInstagram: () => import('vue-instagram')
}
export default {
  layout: 'main',

  components,

  data () {
    return {
      icon: {
        zhenghe :iconZhengHe,
        columbus: columbus,
        ferdinand: iconFerdinand,
        james: iconJames,
        marco: iconMarco,
        vasco: iconVasco,
      },
      mytoken: myIgToken,
      myIgData: [],
      showed: 6,
      loading: false
    }
  },

  async asyncData ({ $content }) {
    const data = await $content ('pages/the-cabins/index').fetch();
    return { data }
  },

  mounted () {
    this.instafeed();
    if (this.$data && this.$data.data.hero) {
      this.addHeros({ page_key: this.$route.name, data: this.$data.data.hero });
      this.addBreadcrumb ({
        text: 'the cabin',
        href: this.$route.path
      });
    }
  },

  destroyed () {
    this.removeBreadcrumb('the cabin');
  },

  methods: {
    addHeros ({ page_key, data }) {
      this.$store.commit('heros/add', { page_key, data });
    },
    addBreadcrumb ({ text, href }) {
      this.$store.commit('breadcrumbs/add', {
        text, href
      });
    },
    removeBreadcrumb(params) {
      const callback = (args) => args.text === params;
      this.$store.commit('breadcrumbs/remove', callback);
    },
    instafeed (limit=this.showed) {
      var feed = new Instafeed({
        limit: limit,
        accessToken: myIgToken,
        transform: function(item) {
          var d = new Date(item.timestamp);
          item.date = [d.getDate(), d.getMonth(), d.getYear()].join('/');
          return item;
        },
        template: `<div class="col-4">
            <a target="blank" href="{{link}}"><img class="ig--img" title="{{caption}}" src="{{image}}" /></a>
        </div>`,
      });
      feed.run();
      this.loading = false
    },
    loadMore (params=null) {
      this.loading = true
      const n = this.showed + params
      this.showed = n
      this.instafeed(n);
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