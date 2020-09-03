<template>
  <v-sheet
    id="sailing-soons"
  >
    <v-row no-gutters align="center" justify="space-between" class="container mx-auto px-8 px-md-0">
    <v-col cols="12" sm="6" class="mb-12 mx-auto mx-sm-0">
      <v-img
        v-ripple
        ref="refImg"
        v-bind:src="require('~/assets/images/sailing-soons.png')"
        v-bind:lazy-src="require('~/assets/images/sailing-soons.png')"
        class="_sailing-img mx-auto"
      >
        <v-img
          v-bind:src="require('~/assets/images/sailing-soons-stamp.png')"
          v-bind:lazy-src="require('~/assets/images/sailing-soons-stamp.png')"
          max-width="319.17"
          max-height="217.69px"
          class="_sailing-img-stamp"
        >
        </v-img>
      </v-img>
    </v-col>

    <v-col cols="12" sm="5" class="mx-auto mx-sm-0 px-sm-0 _text-width">
      <div class="mb-6 mx-auto">
        <h1 class="text-h4 text-md-h3">It's on the horizon...</h1>
      </div>
      <div class="mb-15 mb-sm-6 text-break mx-auto">
        The page that you are looking for cannot be found. To help you find what you are looking for, we suggest the options below:
      </div>
      <v-row no-gutters align="start" justify="start" class="ml-n2 ml-sm-0 flex-sm-nowrap">
        <v-col cols="12" sm="auto" class="mb-6 mb-sm-0">
          <v-btn
            text x-small depressed nuxt replace
            color="#5A5A5A"
            to="/contact-us"
            class="text-body-1 text-capitalize pl-sm-0"
          >Contact Us</v-btn>
        </v-col>
        <v-divider vertical class="hidden-xs-only mt-1" style="background: #5A5A5A; height: 15px" />
        <v-col cols="12" sm="auto">
          <v-btn
            text x-small depressed nuxt replace
            color="#5A5A5A"
            to="/"
            class="text-body-1 text-capitalize pr-sm-0 ml-sm-0"
          >Return to the Homepage</v-btn>
        </v-col>
      </v-row>
    </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  layout: 'main',
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/scss/variables.scss';
#sailing-soons {
  height: 100%;
  display: flex !important;
  flex-direction: row !important;
  @include poly-fluid-sizing ('min-height', (375px:789px, 768px:472px, 1440px:900px));
  @media #{map-get($display-breakpoints, 'sm-and-down')} {
    padding-top: 144px !important;
    padding-bottom: 100px !important;
  }
  @media #{map-get($display-breakpoints, 'sm-and-up')} {
    padding-top: 165px !important;
  }
  background: #F3E9E5 !important;

  ._text-width {
    @include poly-fluid-sizing ('max-width', (375px:244px, 768px:329px, 1440px:427px));
  }

  ._sailing-img {
    position: relative !important;
    overflow: visible !important;
    @include poly-fluid-sizing ('width', (375px:250.96px, 768px:222px, 1440px:495px));
    @include poly-fluid-sizing ('height', (375px:317px, 768px:264px, 1440px:584px));
  }

  ._sailing-img-stamp {
    position: absolute !important;
    @include poly-fluid-sizing ('width', (375px:162.24px, 768px:144.07px, 1440px:319.17px));
    @include poly-fluid-sizing ('height', (375px:117.9px, 768px:98.26px, 1440px:217.69px));
    left: -28% !important;
    right: auto;
    top: 10% !important;
    bottom: auto;
  }
}
</style>