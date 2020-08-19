<template>
  <v-row tag="div" align="center" justify="center">
    <client-only>
      <v-card flat v-if="data">
        <div
          class="__card d-flex align-center static"
          v-bind:class="{reversed: reverse}"
        >
          <v-img
            class="__card--image"
            v-bind:class="cardImgClass"
            v-bind:src="staticImage? require(`~/assets/images/${data.image}`) : data.image"
            v-bind:lazy-src="staticImage? require(`~/assets/images/${data.image}`) : data.image"
            v-bind:aspect-ratio="imgAspectRatio"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>

          <client-only>
            <div class="__card--content" v-bind:class="cardContentClass">
              <v-tooltip bottom>
                <template v-slot:activator="{on, attrs}">
                <v-card-subtitle
                  v-if="data.caption"
                  class="text-h6 pb-0 static"
                  v-bind:class="contentRight ? 'text-right' : null"
                  v-bind="attrs"
                  v-text="data.caption"
                  v-on="on"
                />
                </template>
                <span class="text-capitalize" v-text="data.caption" />
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{on, attrs}">
                <v-card-title
                  class="text-h4 static"
                  v-bind:class="contentRight ? 'justify-end' : null"
                  v-bind="attrs"
                  v-text="data.heading"
                  v-on="on"
                />
                </template>
                <span class="text-capitalize" v-text="data.heading" />
              </v-tooltip>

              <v-card-text
                v-bind:class="contentRight ? 'text-right' : null"
              >
                {{ data.text }}

                <ul v-if="data.list">
                  <li
                    v-for="(item, index) in data.list.split('\n')"
                    v-bind:key="index"
                    v-text="item"
                  />
                </ul>
              </v-card-text>

              <v-card-actions
                v-if="buttonText"
                v-bind:class="[
                  buttonContainerClass,
                  contentRight ? 'justify-end' : null
                ]"
              >
                <t-button
                  :class="buttonClass"
                  :props="{
                    color: 'primary',
                    depressed: true,
                    tile: true,
                    to: data.to,
                    ...buttonProps
                  }"
                  v-text="buttonText"
                ></t-button>
              </v-card-actions>
            </div>
          </client-only>
        </div>
      </v-card>
      <v-card v-else>
        <v-card-title>Oops!</v-card-title>
        <v-card-text>
          <h6>Component stack card-text-image</h6>
          <pre>data is undefined or empty</pre>
        </v-card-text>
      </v-card>
    </client-only>
  </v-row>
</template>

<script>
import tButton from '@/components/base/Button.vue';
const components = {
  tButton
}
export default {
  name: 'CardTextImage',

  props: {
    data: { type: Object },
    cardImgClass: { type: String },
    contentRight: { type: Boolean },
    cardContentClass: { type: String },
    buttonProps: { type: Object },
    buttonText: { type: String },
    buttonClass: { type: String },
    buttonContainerClass: { type: String },
    reverse: { type: Boolean },
    imgAspectRatio: {
      type: [String, Number],
      default: 16/9
    },
    staticImage: { type: Boolean }
  },

  components,

  inheritAttrs: false
}
</script>

<style lang="scss" scoped>
  $primary: #208cb2;
  .bdr {
    border: 1px solid black;
  }
  .__card {
    flex-wrap: wrap !important;
    flex-direction: row !important;

    @media (min-width: 600px) {
      flex-wrap: unset !important;
    }

    &.reversed {
      flex-wrap: wrap-reverse !important;
      flex-direction: row-reverse !important;

      @media (min-width: 600px) {
        flex-wrap: unset !important;
      }
    }

    &--image {
      max-width: 100%;
      @media (min-width: 600px) {
        max-width: 51.351351351351354%;
      }
    }

    &--content {
      .text-h6 {
        color: $primary !important;
      }

      ul {
        padding-left: inherit !important;
        padding-top: 30px !important;
        li {
          margin-bottom: 11px !important;
        }
      }

      ::v-deep a.v-btn {
        font-weight: bold !important;
        &--contained {
          &.primary {
            color: white !important;
            caret-color: white !important;
            &:hover {
              color: $primary !important;
              caret-color: $primary !important;
              border: thin solid $primary !important;
              background-color: white !important;
            }
          }
        }

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

      margin: {
        top: 40px !important;
        bottom: 0 !important;
      }

      @media (min-width: 600px) {
        margin: {
          top: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          left: 10px !important;
        };
      }

      @media (min-width: 960px) {
        margin: {
          top: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          left: 65px !important;
        };
      }

      .reversed & {
        margin: {
          top: 0 !important;
          bottom: 40px !important;
        }

        @media (min-width: 600px) {
          margin: {
            top: 0 !important;
            right: 10px !important;
            bottom: 0 !important;
            left: 0 !important;
          }
        }

        @media (min-width: 960px) {
          margin: {
            top: 0 !important;
            right: 64px !important;
            bottom: 0 !important;
            left: 0 !important;
          }
        }
      }
    }
  }
</style>