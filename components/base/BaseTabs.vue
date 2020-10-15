<template>
  <v-row no-gutters class="__tab">
    <client-only>
    <v-tabs
      ref="tabs"
      background-color="transparent"
      :light="false"
      show-arrows
      :center-active="isSmAndDown"
      :hide-slider="isXs"
      v-bind:centered="tabsCenter ? tabsCenter : isSmAndDown"
      v-model="label"
    >
      <v-tabs-slider color="primary"></v-tabs-slider>
      <v-tab v-for="item in data" v-bind:key="item.label" :href="`#${item.label.replace(/\s/g, '-').toLowerCase()}`">
        <div class="__tab--label font-weight-bold text-uppercase" v-text="item.label" />
      </v-tab>
    </v-tabs>
    <v-tabs-items class="mt-16" v-model="label">
    <v-tab-item v-for="item in data" v-bind:key="item.label" :value="item.label.replace(/\s/g, '-').toLowerCase()">
      <slot v-bind:data-tab="item.data">
        <v-card flat>
          <div class="d-flex justify-space-between align-center __tab-item static" v-bind:class="{reversed: reverse}">
            <v-img class="__tab--img mx-auto mx-md-0"
              v-bind:src="staticImage ? require(`~/assets/images/${item.data.image}`) : item.data.image"
              v-bind:lazy-src="staticImage ? require(`~/assets/images/${item.data.image}`) : item.data.image"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <div class="__tab--content">
              <v-card-title class="px-0 pt-0">
                <div class="text-h4 mx-auto mx-md-0">
                  {{ item.data.title }}
                </div>
              </v-card-title>

              <v-card-text class="__tab--content-text text--primary px-0 mb-3">
                <p class="text-center text-md-left">
                  {{ item.data.text }}
                </p>
              </v-card-text>

              <v-card-actions class="px-0" v-bind:class="buttonClass">
                <v-btn
                  class="btn-l mx-auto mx-md-0 __tab--btn"
                  v-bind:class="buttonProps"
                  color="primary"
                  tile depressed outlined :to="item.data.to"
                >{{buttonText}}</v-btn>
              </v-card-actions>
            </div>
          </div>
        </v-card>
      </slot>
    </v-tab-item>
    </v-tabs-items>
    </client-only>
  </v-row>
</template>

<script>
const primary = "#208CB2";
const components = {
  tButton: () => import('@/components/base/BaseButton.vue')
};
export default {
  name: 'Tabs',

  props: {
    data: { type: Array },
    buttonClass: { type: String },
    buttonText: { type: String },
    buttonProps: { type: Object },
    tabsCenter: { type: Boolean, defult: false  },
    staticImage: { type: Boolean, default: false },
    reverse: { type: Boolean, default: false }
  },

  data () {
    return {
      label: null
    }
  },

  components,

  computed: {
    isSmAndDown () {
      return this.$vuetify.breakpoint.smAndDown;
    },
    isXs () {
      return this.$vuetify.breakpoint.xsOnly
    },
    listenLabel () {
      return this.label
    },
    tabsRef () {
      return this.$refs.tabsRef
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .theme--light.v-tabs-items {
  background-color: transparent !important;
}

::v-deep .v-tabs {
  .v-tab {
    letter-spacing: 0;
    text-transform: capitalize !important;
    &:not(.v-tab--active) {
      color: #232323 !important;
    }
    // @include poly-fluid-sizing ('width', (320px:262px, 375px:223px, 599px:447px));
    @media #{map-get($display-breakpoints, 'xs-only')} {
      width: 262px !important;
      color: #232323 !important;
    }
    @media only screen and (max-width: 413px) {
      width: 223px !important;
    }
    @media only screen and (max-width: 374px) {
      width: 168px !important;
    }
  }
}

.__tab {
  clear: both !important;

  &--btn {
    width: 151px !important;
  }

  &--label {
    font-family: 'Montserrat', sans-serif !important;
    @include poly-fluid-sizing ('font-size', (375px:12px, 768px:14px));
    letter-spacing: 3px !important;
  }

  &-item {
    flex-direction: row;
    flex-wrap: wrap;
    @media (min-width: 960px) {
      flex-wrap: unset;
    }
    .__tab--content {
      @media (max-width: 960px) {
        margin: {
          left: auto !important;
          right: auto !important;
        }
      }
      @include poly-fluid-sizing ('margin-top', (375px:39px, 768px:45px, 960px:0px));
      @include poly-fluid-sizing ('margin-left', (960px:33px, 1440px:65px));

      &-text {
        @media (max-width: 768px) {
          width: auto !important;
        };
        @include poly-fluid-sizing ('max-width', (768px:427px, 1440px:475px));
      }
    }

    .__tab--img {
      @media (max-width: 599px) {
        width: 100%;
      }
      @include poly-fluid-sizing ('max-width', (374px:325px, 768px:718px, 1440px:570px));
      @include poly-fluid-sizing ('max-height', (375px:181px, 768px:347px, 1440px:350px));

      ::v-deep .v-image__image {
        background-position: center top !important;
      }
    }
  }
}
</style>