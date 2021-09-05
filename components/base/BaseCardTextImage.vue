<template>
  <VRow
    no-gutters
    align="center"
    justify="center"
    :class="$style.card_wrap"
  >
    <div
      class="d-sm-flex align-center"
      :class="{ 'flex-sm-row-reverse' : reverse, 'flex-sm-row': !reverse }"
    >
      <!-- <v-card-subtitle class="hidden-sm-and-up text-h6 text-center font-weight-bold py-0">
        {{ data.caption }}
      </v-card-subtitle>

      <v-card-title class="hidden-sm-and-up text-h4 justify-center text-center text-break px-0 mb-5">
        {{ data.heading }}
      </v-card-title> -->

      <VImg
        v-if="data.image"
        :class="cardImgClass ? cardImgClass : 'card--image mx-auto'"
        :src="$store.state.storage + data.image"
        :lazy-src="$store.state.storage + data.image"
        :aspect-ratio="imgAspectRatio"
      >
        <template #placeholder>
          <VRow
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <VProgressCircular indeterminate color="grey lighten-5" />
          </VRow>
        </template>
      </VImg>

      <!-- <v-card-text class="hidden-sm-and-up px-0 mt-5 text-center">
        {{ data.description }}
      </v-card-text> -->

      <!-- <v-card-actions
        v-if="buttonText"
        class="hidden-sm-and-up pa-0 mt-9"
      >
        <v-btn
          class="mx-auto card--btn"
          :class="buttonClass"
          color="primary"
          tile
          depressed
          outlined
          :to="data.to"
          height="38"
        >
          {{ buttonText }}
        </v-btn>
      </v-card-actions> -->

      <div class="card--content hidden-xs-only" :class="cardContentClass">
        <v-card-subtitle
          v-if="data.caption"
          class="text-h6 font-weight-bold pb-0 px-0 static"
          :class="contentRight ? 'text-right' : null"
          v-text="data.caption"
        />

        <v-card-title
          class="px-0 text-break"
          :class="contentRight ? 'justify-end' : null"
          v-text="data.heading"
        />

        <v-card-text
          class="px-0"
          :class="contentRight ? 'text-right' : null"
        >
          {{ data.description }}
          <ul v-if="data.list">
            <li
              v-for="(item, index) in data.list.split('\n')"
              :key="index"
              v-text="item"
            />
          </ul>
        </v-card-text>

        <v-card-actions
          v-if="buttonText"
          class="px-0 mt-6"
          :class="[
            buttonContainerClass,
            contentRight ? 'justify-end' : null
          ]"
        >
          <v-btn
            :class="buttonClass"
            color="primary"
            tile
            depressed
            outlined
            :to="data.to"
            height="38"
          >
            {{ buttonText }}
          </v-btn>
        </v-card-actions>
      </div>
    </div>
  </VRow>
</template>

<script>

export default {
  inheritAttrs: false,
  props: {
    data: { type: Object },
    cardImgClass: { type: String },
    contentRight: { type: Boolean },
    cardContentClass: { type: String },
    buttonProps: { type: Object },
    buttonText: { type: String },
    buttonClass: { type: String },
    buttonContainerClass: { type: String },
    returnTextData: { type: String, default: 'text' },
    reverse: {
      type: Boolean,
      default: false
    },
    imgAspectRatio: {
      type: [String, Number]
    }
  }
}
</script>

<style lang="scss" module>
.card_wrap {
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>

<style lang="scss" scoped>
  $primary: #208cb2;
  .bdr {
    border: 1px solid black;
  }

  .v-card__text {
    font-size: 16px !important;
  }

  .card {
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
    }
  }
</style>
