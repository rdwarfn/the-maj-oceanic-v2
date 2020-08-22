<template>
  <v-row no-gutters align="center" justify="center" class="mx-auto">
    <client-only>
      <v-card flat v-if="data">
        <div
          class="__card d-sm-flex align-center static"
          v-bind:class="{reversed: reverse}"
        >
          <v-card-subtitle class="hidden-sm-and-up text-h6 text-center font-weight-bold pb-0">
            {{ data.caption }}
          </v-card-subtitle>
          <v-card-title class="hidden-sm-and-up text-h4 justify-center text-center mb-5">
            {{ data.heading }}
          </v-card-title>
          <v-img
            v-bind:class="cardImgClass ? cardImgClass : '__card--image'"
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
          <v-card-text class="hidden-sm-and-up px-0 mt-5 text-justify">
            {{ data.text }}
          </v-card-text>
          <v-card-actions
            v-if="buttonText"
            class="hidden-sm-and-up px-0 mt-9"
          >
            <t-button
              class="mx-auto"
              v-bind:class="buttonClass"
              v-bind:props="{
                color: 'primary',
                depressed: true,
                tile: true,
                to: data.to,
                ...buttonProps
              }"
              v-text="buttonText"
            ></t-button>
          </v-card-actions>

          <client-only>
            <div class="__card--content hidden-xs-only" v-bind:class="cardContentClass">
              <v-tooltip bottom>
                <template v-slot:activator="{on, attrs}">
                <v-card-subtitle
                  v-if="data.caption"
                  class="text-h6 font-weight-bold pb-0 static"
                  v-bind:class="contentRight ? 'text-right' : null"
                  v-text="data.caption"
                  v-bind="attrs"
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
                  v-text="data.heading"
                  v-bind="attrs"
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
                class="px-4 static"
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
      type: [String, Number]
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

  .v-card__text {
    font-size: 16px !important;
  }

  .__card {
    flex-wrap: wrap !important;
    flex-direction: row !important;

    .text-h6 {
      color: $primary !important;
    }

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
      ul {
        padding-left: inherit !important;
        padding-top: 30px !important;
        li {
          margin-bottom: 11px !important;
        }
      }

      a.v-btn {
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