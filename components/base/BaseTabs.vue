<template>
  <v-row no-gutters class="__tab">
    <client-only>
      <v-tabs
        ref="tabs"
        v-model="name"
        background-color="transparent"
        :light="false"
        show-arrows
        :center-active="isSmAndDown"
        :hide-slider="isXs"
        :centered="tabsCenter ? tabsCenter : isSmAndDown"
      >
        <v-tabs-slider color="primary" />
        <v-tab v-for="item in data" :key="item.name" :href="`#${item.name.replace(/\s/g, '-').toLowerCase()}`">
          <div class="__tab--label font-weight-bold text-uppercase" v-text="item.name" />
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="name" class="mt-16">
        <v-tab-item v-for="item in data" :key="item.name" :value="item.name.replace(/\s/g, '-').toLowerCase()">
          <slot :data-tab="item">
            <v-card flat>
              <div class="d-flex justify-space-between align-center __tab-item static" :class="{reversed: reverse}">
                <v-img
                  class="__tab--img mx-auto mx-md-0"
                  :src="$store.state.storage + item.image"
                  :lazy-src="$store.state.storage + item.image"
                >
                  <template #placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="grey lighten-5" />
                    </v-row>
                  </template>
                </v-img>
                <div class="__tab--content">
                  <v-card-title class="px-0 pt-0">
                    <div class="text-h4 mx-auto mx-md-0">
                      {{ item.heading }}
                    </div>
                  </v-card-title>

                  <v-card-text
                    v-if="item.description"
                    class="__tab--content-text text--primary text-center text-md-left px-0 mb-3"
                    v-html="item.description"
                  />

                  <v-card-actions class="px-0" :class="buttonClass">
                    <v-btn
                      class="btn-l mx-auto mx-md-0 __tab--btn"
                      :class="buttonProps"
                      color="primary"
                      tile
                      depressed
                      outlined
                      :to="item.to"
                    >
                      {{ buttonText }}
                    </v-btn>
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
export default {
  props: {
    data: { type: Array },
    buttonClass: { type: String },
    buttonText: { type: String },
    buttonProps: { type: Object },
    tabsCenter: { type: Boolean, defult: false },
    reverse: { type: Boolean, default: false }
  },

  data () {
    return {
      name: null
    }
  },

  computed: {
    isSmAndDown () {
      return this.$vuetify.breakpoint.smAndDown
    },
    isXs () {
      return this.$vuetify.breakpoint.xsOnly
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
        font-size: 16px !important;
        line-height: inherit !important;
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
