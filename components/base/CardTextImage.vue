<template>
  <v-row tag="div" align="center" justify="center">
    <v-card flat v-if="data">
      <div
        class="__card d-flex align-center static"
        v-bind:class="{reversed: reverse}"
      >
        <v-img
          class="__card--image"
          v-bind:src="staticImage? require(`~/assets/images/card/${data.image}`) : data.image"
          v-bind:lazy-src="staticImage? require(`~/assets/images/card/${data.image}`) : data.image"
          v-bind:aspect-ratio="16/9"
        ></v-img>

        <div
          class="__card--content"
        >
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
            v-text="data.text"
          />

          <v-card-actions
            v-bind:class="[
              buttonContainerClass,
              contentRight ? 'justify-end' : null
            ]"
          >
            <t-button
              :props="{
                class: buttonClass,
                color: 'primary',
                depressed: true,
                tile: true,
                to: data.to,
                ...buttonProps
              }"
              v-text="buttonText"
            />
          </v-card-actions>
        </div>
      </div>
    </v-card>
    <v-card v-else>
      <v-card-title>Oops!</v-card-title>
      <v-card-text>
        <h6>Component stack card-text-image</h6>
        <pre>data is undefined or empty</pre>
      </v-card-text>
    </v-card>
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
    contentRight: { type: Boolean },
    buttonProps: { type: Object },
    buttonText: { type: String },
    buttonClass: { type: String },
    buttonContainerClass: { type: String },
    reverse: { type: Boolean },
    staticImage: { type: Boolean }
  },

  components
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

    @media (min-width: 768px) {
      flex-wrap: unset !important;
    }

    &.reversed {
      flex-wrap: wrap-reverse !important;
      flex-direction: row-reverse !important;

      @media (min-width: 768px) {
        flex-wrap: unset !important;
      }
    }

    &--image {
      max-width: 100%;
      @media (min-width: 768px) {
        max-width: 51.351351351351354%;
      }
    }

    &--content {
      .text-h6 {
        color: $primary !important;
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

      @media (min-width: 768px) {
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

        @media (min-width: 768px) {
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