<template>
  <v-sheet
    id="sailing-soons"
    color="#F3E9E5"
    class="fill-height d-flex align-end"
  >
    <v-container class="mx-auto mb-lg-10">
      <v-row no-gutters align="center" justify="space-between">
        <v-col cols="12" sm="6" class="mb-12 mx-auto">
          <v-img
            v-ripple
            ref="refImg"
            v-bind:src="require('~/assets/images/sailing-soons.png')"
            v-bind:lazy-src="require('~/assets/images/sailing-soons.png')"
            max-width="495"
            max-height="584"
            class="_sailing-img mx-auto"
          >
            <v-img
              v-bind:src="require('~/assets/images/sailing-soons-stamp.png')"
              v-bind:lazy-src="require('~/assets/images/sailing-soons-stamp.png')"
              max-width="319.17"
              max-height="217.69px"
              class="_sailing-img-stamp"
              v-bind:style="{left: '-20%', top: '10%'}"
            >
            </v-img>
          </v-img>
        </v-col>

        <v-col cols="auto" class="_row-width mx-auto">
          <div class="text-h4 text-md-h3 mb-6">It's on the horizon...</div>
          <div class="mb-6 text-wrap _text-paragraph">
            The page that you are looking for cannot be found. To help you find what you are looking for, we suggest the options below:
          </div>
          <v-row no-gutters align="start" justify="start">
            <v-col cols="12" sm="auto">
              <v-btn
                text depressed nuxt replace
                color="#5A5A5A"
                to="/contact-us"
                class="text-body-1 text-capitalize ml-n4"
              >Contact Us</v-btn>
            </v-col>
            <v-divider vertical inset class="hidden-xs-only" />
            <v-col cols="12" sm="auto">
              <v-btn
                text depressed nuxt replace
                color="#5A5A5A"
                to="/"
                class="text-body-1 text-capitalize ml-n4 ml-sm-0"
              >Return to the Homepage</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  layout: 'main',
}
</script>

<style lang="scss" scoped>
 #sailing-soons {
   @include poly-fluid-sizing ('height', (375px:789px, 768px:472px, 1440px:900px));

   ._text-paragraph {
     @include poly-fluid-sizing ('width', (375px:244px, 768px:329px, 1440px:427px));
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
     @include poly-fluid-sizing ('height', (375px:117.9px, 768px:98.26px, 1440px:217.69px))
   }
 }
</style>