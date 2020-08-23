<template>
  <v-row no-gutters class="__tab" ref="tabsRef">
    <v-tabs
      background-color="transparent"
      v-bind:centered="tabsCenter ? tabsCenter : isSmDown"
      :light="false"
    >
      <v-tabs-slider color="primary"></v-tabs-slider>
        <v-tab
          v-for="item in data"
          v-bind:key="item.label"
        >
        <v-tooltip
          bottom
          v-bind:key="item.label"
        >
          <template v-slot:activator="{on, attrs}">
          <div
            class="__tab--label"
            v-bind="attrs"
            v-on="on"
            v-text="item.label"
          />
        </template>
        <span class="text-capitalize" v-text="item.label" />
      </v-tooltip>
      </v-tab>

      <v-tab-item
        v-for="item in data"
        v-bind:key="item.label"
        class="mt-7"
      >
        <slot v-bind:data-tab="item.data">
          <client-only>
            <v-card flat>
              <div
                class="d-flex justify-space-between align-center __tab-item static"
                v-bind:class="{reversed: reverse}"
              >
                <v-img
                  class="__tab--img"
                  v-bind:src="staticImage ? require(`~/assets/images/${item.data.image}`) : item.data.image"
                  v-bind:lazy-src="staticImage ? require(`~/assets/images/${item.data.image}`) : item.data.image"
                  v-bind:aspect-ratio="16/9"
                ></v-img>
                <div class="__tab--content">
                  <v-tooltip bottom>
                    <template v-slot:activator="{on, attrs}">
                      <v-card-title
                        class="px-0"
                        v-bind="attrs"
                        v-on="on"
                      >
                        <div class="text-h4 mx-auto mx-md-0">
                          {{ item.data.title }}
                        </div>
                      </v-card-title>
                    </template>
                    <span v-text="item.data.title" />
                  </v-tooltip>

                  <v-card-text class="__tab--content-text px-0">
                    <p class="text-justify text-sm-center text-md-left">
                      {{ item.data.text }}
                    </p>
                  </v-card-text>

                  <v-card-actions class="px-0" v-bind:class="buttonClass">
                    <t-button
                      class="btn-l mx-auto mx-md-0 __tab--btn"
                      v-bind:props="{
                        color: 'primary',
                        to: item.data.to,
                        outlined: true,
                        ...buttonProps
                      }"
                      v-text="buttonText"
                    />
                  </v-card-actions>
                </div>
              </div>
            </v-card>
          </client-only>
        </slot>
      </v-tab-item>
    </v-tabs>
  </v-row>
</template>

<script>
const primary = "#208CB2";
const components = {
  tButton: () => import('@/components/base/Button.vue')
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

  components,

  computed: {
    isSmDown () {
      return this.$vuetify.breakpoint.smAndDown;
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .theme--light.v-tabs-items {
  background-color: transparent !important;
}
.__tab {
  clear: both !important;
  ::v-deep .v-tabs {
    .v-tab {
      letter-spacing: 0;
      text-transform: capitalize !important;
      &:not(.v-tab--active) {
        color: #232323 !important;
      }
    }
  }

  &--btn {
    width: 151px !important;
  }

  &--label {
    font-family: 'Verlag Bold', sans-serif !important;
    @include poly-fluid-sizing ('font-size', (320px:16px, 600px:22px))
  }

  &-item {
    flex-direction: row;
    flex-wrap: wrap;
    @media (min-width: 960px) {
      flex-wrap: unset;
    }

    // &.reversed {
    //   flex-direction: row-reverse;
    //   flex-wrap: wrap-reverse;
    //   @media (min-width: 960px) {
    //     flex-wrap: unset;
    //   }

    //   .__tab--content {
    //     margin-top: unset !important;
    //     margin-bottom: 16px;
    //     @media (max-width: 600px) {
    //       text-align: center !important;
    //     }
    //     @media (min-width: 600px) {
    //       margin-left: unset;
    //       margin: {
    //         right: 10.22px !important;
    //         bottom: 0 !important;
    //         left: 0 !important;
    //       }
    //     }
    //     @media (min-width: 960px) {
    //       margin-left: unset;
    //       margin: {
    //         right: 33px !important;
    //         bottom: 0 !important;
    //         left: 0 !important;
    //       }
    //     }
    //   }
    // }

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
      width: 100%;
      max-width: unset;
      @include poly-fluid-sizing ('max-height', (375px:181px, 768px:347px, 1440px:350px));

      @media (min-width: 960px) {
        // max-width: 51.351351351%;
        max-width: 50%;
        max-height: 100%;
      }
    }
  }
}
</style>