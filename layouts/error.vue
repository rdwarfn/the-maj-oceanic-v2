<template>
  <!-- <v-container>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ error }}
      {{ otherError }}
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </v-container> -->
  <v-sheet height="calc(100vh - 300px)" color="#F3E9E5" class="other-error d-flex flex-row" v-if="error.statusCode !== 404">
    <v-container>
      <v-row align="center" justify="center" class="container mx-auto">
      <v-col cols="12" sm="auto" class="mx-auto mx-sm-0">
        <v-img
          ref="refImg"
          v-bind:src="require('~/assets/images/contact-dialog-compass.png')"
          v-bind:lazy-src="require('~/assets/images/contact-dialog-compass.png')"
          class="_sailing-img mx-auto"
          width="300px"
        >
        </v-img>
      </v-col>

      <v-col cols="12" sm="auto" class="mx-auto mx-sm-0 px-sm-0 _text-width">
        <h1 class="text-center text-h4 text-md-h3 mb-6">We're sorry,<br /> but something went wrong.</h1>
        <div class="mb-15 mb-sm-6 mt-6 text-break mx-auto">
          <h4>Error message :</h4>
          <code>
            {{ error.message }}
          </code>
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
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred.',
      customOtherError: '',
      items: [
        {
          id: 1,
          name: 'Error: ',
          children: [
            { id: 2, name: 'code : ' + this.error.code },
            { id: 3, name: 'message : ' + this.error.message },
            { id: 4, name: 'status code : ' + this.error.statusCode }
          ]
        }
      ]
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/scss/variables.scss';
 .other-error {
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
    width: 260px !important;
    height: 318px !important;
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
