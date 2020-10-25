<template>
  <v-row no-gutters align="center" justify="center" class="card-text-image mx-auto">
    <v-card flat tile color="transparent">
      <div class="__card d-sm-flex align-center" v-bind:class="{reversed: reverse}">
        <v-card-subtitle class="hidden-sm-and-up text-h6 text-center font-weight-bold py-0">
          {{ data.caption }}
        </v-card-subtitle>
        <v-card-title class="hidden-sm-and-up text-h4 justify-center text-center text-break px-0 mb-5" >
          {{ data.heading }}
        </v-card-title>
        <v-img
          v-bind:class="cardImgClass ? cardImgClass : '__card--image mx-auto'"
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
        <v-card-text class="hidden-sm-and-up px-0 mt-5 text-center">
          {{ data[returnTextData] }}
        </v-card-text>
        <v-card-actions
          v-if="buttonText"
          class="hidden-sm-and-up pa-0 mt-9"
        >
          <v-btn
            class="mx-auto __card--btn"
            v-bind:class="buttonClass"
            color="primary"
            tile depressed
            outlined :to="data.to"
            height="38"
          >
            {{buttonText}}
          </v-btn>
        </v-card-actions>

        <div class="__card--content hidden-xs-only" v-bind:class="cardContentClass">
          <v-card-subtitle v-if="data.caption" class="text-h6 font-weight-bold pb-0 px-0 static"
            v-bind:class="contentRight ? 'text-right' : null"
            v-text="data.caption"
          />
          <v-card-title class="px-0 text-break"
            v-bind:class="contentRight ? 'justify-end' : null"
            v-text="data.heading"
          />

          <v-card-text class="px-0"
            v-bind:class="contentRight ? 'text-right' : null">
            {{ data[returnTextData] }}
            <ul v-if="data.list">
              <li v-for="(item, index) in data.list.split('\n')"
                v-bind:key="index"
                v-text="item"
              />
            </ul>
          </v-card-text>

          <v-card-actions v-if="buttonText"
            class="px-0 mt-6"
            v-bind:class="[
              buttonContainerClass,
              contentRight ? 'justify-end' : null
            ]">
            <v-btn
              :class="buttonClass"
              color="primary"
              tile depressed outlined :to="data.to"
              height="38"
            >
              {{buttonText}}
            </v-btn>
          </v-card-actions>
        </div>
      </div>
    </v-card>
  </v-row>
</template>

<script>
import tButton from '@/components/base/BaseButton.vue';
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
    returnTextData: { type: string, default: 'text' },
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

  .card-text-image {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .__card {
    flex-wrap: wrap !important;
    flex-direction: row !important;

    .v-btn {
      width: 151px !important;
    }

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
      @include poly-fluid-sizing ('max-width', (374px:325px, 768px:367px, 1440px:570px));
      @include poly-fluid-sizing ('height', (374px:181px, 768px:350px));
    }

    &--content {
      .v-card__title {
        font-family: 'Domine', serif !important;
        font-size: 21px !important;
        font-weight: 600;
        letter-spacing: normal !important;
        line-height: 28px;
      }
      @include poly-fluid-sizing ('margin-left', (375px:0px, 768px:30px, 1440px:65px));
      margin-right: 0;

      .reversed & {
        @include poly-fluid-sizing ('margin-right', (375px:0px, 768px:30px, 1440px:65px));
        margin-left: 0;
      }

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
    }
  }
</style>