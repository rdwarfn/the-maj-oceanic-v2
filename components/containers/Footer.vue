<template>
  <v-footer id="footer" class="px-0" dark tile background-color="#232323">
    <v-container class="px-6 px-md-0">
      <v-row no-gutters class="mb-1 mb-sm-12 mb-lg-6" align="start" justify="space-between">
        <!-- the maj oceanic -->
        <v-col class="col--1" cols="12" sm="6" md="5" lg="3">
          <div class="mb-7 mb-sm-6">
            <div class="text-caption mb-2 text-uppercase font-weight-bold">
              the maj oceanic
            </div>
            <div class="ml-n4">
              <v-btn
                v-for="(data, index) in sosmed"
                v-bind:key="index"
                v-bind:href="data.link"
                target="blank"
                fab depressed text tile link
              >
                <v-icon>{{data.icon}}</v-icon>
              </v-btn>
            </div>
          </div>
          <div class="mb-6">
            <div class="text-uppercase mb-3 __part-of">part of</div>
            <v-row no-gutters align="center" justify="start">
              <v-col cols="4">
                <v-img
                  v-bind:src="require('~/assets/images/svg/the_maj_experience.svg?data')"
                  v-bind:lazy-src="require('~/assets/images/svg/the_maj_experience.svg?data')"
                  min-width="75"
                  max-width="76"
                  class="mr-14"
                ></v-img>
              </v-col>
              <v-col cols="5">
                <v-img
                  v-bind:src="require('~/assets/images/svg/the_maj_group.svg?data')"
                  v-bind:lazy-src="require('~/assets/images/svg/the_maj_group.svg?data')"
                  min-width="75"
                  max-width="91.91"
                ></v-img>
              </v-col>
            </v-row>
          </div>
          <div>
            <v-row no-gutters>
              <v-col cols="4" sm="12" class="mb-sm-6">
                <div class="text-uppercase __part-of mb-3" style="line-height: 12px !important">CRUISE OPERATOR</div>
                <v-btn class="px-0" tile depressed text link small target="blank" href="https://yachtsourcing.com/">
                  <v-img
                    class="ml-n1"
                    v-bind:src="require('~/assets/images/svg/tmo_yacht_sourching.svg?data')"
                    v-bind:lazy-src="require('~/assets/images/svg/tmo_yacht_sourching.svg?data')"
                    max-width="45"
                  ></v-img>
                </v-btn>
              </v-col>
              <v-col cols="5" sm="12">
                <div class="text-uppercase __part-of mb-3" style="line-height: 12px !important">PROUD COMFORT PARTNER</div>
                <v-btn class="px-0" tile depressed text link small target="blank" href="https://global.sunbrella.com/">
                  <v-img
                    class="ml-n1"
                    v-bind:src="require('~/assets/images/svg/tmo_sanbrella.svg?data')"
                    v-bind:lazy-src="require('~/assets/images/svg/tmo_sanbrella.svg?data')"
                    max-width="66"
                  ></v-img>
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </v-col>

        <!-- join our family & explore our worl -->
        <v-col class="col--2 px-0" sm="6" md="6" lg="4">
          <v-row no-gutters align="start" justify-sm="space-between">
            <v-col class="col--2a px-sm-1" cols="12" sm="6">
              <div class="text-caption mb-4 text-uppercase font-weight-bold">
                join our family
              </div>
              <v-list class="__list" color="transparent" dense flat tile>
                <v-list-item-group no-action>
                  <v-list-item
                    v-for="(data, index) in joins"
                    v-bind:key="index"
                    nuxt v-bind:to="data.to"
                    class="px-0 fill-height"
                  >
                    <v-list-item-content>
                      <v-list-item-title v-text="data.title">
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-col>

            <v-col class="px-sm-1" cols="12" sm="6">
              <div class="text-caption mb-4 text-uppercase font-weight-bold">
                explore our World
              </div>
              <v-list class="__list" color="transparent" dense flat tile>
                <v-list-item-group no-action>
                  <v-list-item
                    v-for="(data, index) in explore"
                    v-bind:key="index"
                    nuxt v-bind:to="data.to"
                    class="px-0 fill-height"
                  >
                    <v-list-item-content>
                      <v-list-item-title class="text-wrap" v-text="data.title">
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-col>
          </v-row>
        </v-col>

        <!-- signup for exlusive news & offers -->
        <v-col class="col--3 px-0" cols="12" lg="4" offset-lg="1">
          <div class="text-caption mb-4 text-uppercase font-weight-bold">
            Sign up for Exclusive news & Offers
          </div>
          <v-row no-gutters>
          <v-form
            ref="form"
            @submit.prevent="validate"
            @keyup.enter.prevent="validate"
            lazy-validation
          >
            <v-row>
              <v-col cols="4" sm="2" lg="4" class="pr-0 pr-sm-3">
                <v-select
                  v-model="title"
                  v-bind:items="titleData"
                  v-bind:rules="[rules.required]"
                  light flat dense solo validate-on-blur
                  hide-details="auto"
                  label="Title"
                  required
                ></v-select>
              </v-col>
              <v-col cols="8" sm="5" lg="8" class="pl-md-0">
                <v-text-field
                  v-model="fullname"
                  v-bind:rules="[
                    rules.required,
                    rules.countMin4
                  ]"
                  light flat dense clearable single-line solo validate-on-blur
                  hide-details="auto"
                  label="Full name"
                  type="text"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="5" lg="12" class="mb-3" no-gutters>
                <v-text-field
                  v-model="email"
                  v-bind:rules="[
                    rules.required,
                    rules.email
                  ]"
                  light flat dense clearable single-line solo validate-on-blur
                  hide-details="auto"
                  label="Email address"
                  type="email"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col class="mb-4 mb-sm-0 mb-lg-4" sm="3" lg="auto">
              <v-btn class="btn-s" light depressed tile type="submit" v-on:click.prevent="validate">
                sign me up
              </v-btn>
              </v-col>
              <v-col cols="12" sm="9" lg="12">
                <span class="detail-offers">
                  By entering your details you consent to be contacted via email
                  by The MAJ Group with offers and updates. To opt out, use the
                  unsubscribe link or email <a class="inline" href="mailto:digital@themajgroup.com">digital@themajgroup.com</a>.
                </span>
              </v-col>
            </v-row>
          </v-form>
          </v-row>
        </v-col>
      </v-row>

      <!-- copyrights -->
      <v-row no-gutters align="start" class="text-sm-center mt-6 mt-sm-1 mt-lg-0">
        <v-col tag="span" class="px-0">
          <span class="">Copyright {{ new Date().getFullYear() }} All rights reserved</span>
        </v-col>
      </v-row>

    </v-container>
    <v-snackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      top
      absolute
      elevation="24"
    >
      {{ snackbar.text }}
    </v-snackbar>
    </v-footer>
</template>

<script>
import {
  mdiInstagram,
  mdiFacebook,
  mdiTwitter,
  mdiYoutube
} from '@mdi/js';
export default {
  name: 'Footer',

  data () {
    return {
      sosmed: [
        {
          id: 0,
          icon: mdiInstagram,
          link: "https://www.instagram.com/themajoceanic"
        },
        {
          id: 1,
          icon: mdiFacebook,
          link: "https://www.facebook.com/themajoceanic"
        },
        {
          id: 2,
          icon: mdiTwitter,
          link: "https://twitter.com/themajoceanic"
        },
        {
          id: 3,
          icon: mdiYoutube,
          link: "https://www.youtube.com/channel/UC8TUM39T9bFOtxcJn7PwYgA"
        }
      ],
      joins: [
        {
          id: 0,
          title: "Careers",
          to: "#"
        },
        {
          id: 1,
          title: "Investors",
          to: "#"
        }
      ],
      explore: [
        {
          id: 0,
          title: "Contact Us",
          to: "#"
        },
        {
          id: 1,
          title: "Media Center",
          to: "#"
        },
        {
          id: 2,
          title: "Privacy",
          to: "#"
        },
        {
          id: 3,
          title: "Terms and Conditions",
          to: "#"
        }
      ],
      valid: true,
      fullname: "",
      title: "",
      titleData: ["Mr.", "Ms."],
      email: "",
      rules: {
        required: v => !!v || 'This field is required.',
        countMin4: v => (v && v.length >= 4) || 'Min 4 characters.',
        email: v => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(v) || 'Please enter a valid e-mail.'
        },
      },
      snackbar: {
        show: false,
        text: '',
        color: ''
      }
    }
  },

  computed: {
    form () {
      return {
        title: this.title,
        fullname: this.fullname,
        email: this.email
      }
    }
  },

  methods: {
    validate () {
      const ress = this.$refs.form.validate();
      if (ress) {
        this.subscribeStore(this.form)
        this.reset();
      }
    },
    reset () {
      this.$refs.form.reset();
    },
    async subscribeStore ({ title, fullname, email }) {
      try {
        const ress = await this.$axios.post(
          'https://backend.themajbekasi.com/api/oceanic/store-subscriber',
          { title, fullname, email }
        )
        if (ress && ress.statusText === 'OK') {
          this.snackbar = {
            text: 'Your message has been sent.',
            color: 'primary',
            show: true
          }
        }
      } catch (err) {
        this.snackbar = {
          text: 'My apologize, there is error ' + err,
          color: 'red',
          show: true
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/scss/variables.scss';
  #footer {
    @include poly-fluid-sizing ('padding-top', (375px:38px, 768px:55px, 1440px:90px));
    @include poly-fluid-sizing ('padding-bottom', (375px:58, 768px:38px, 1440px:38px));
  }

  span {
    display: inline-block;
    font-size: 13px !important;
    font-weight: normal !important;
    font-family: 'PT Sans', sans-serif !important;

    &.detail-offers {
      @media #{map-get($display-breakpoints, 'xs-only')} {
        font-size: 12px !important;
        line-height: 18px !important;
        text-align: justify !important;
        text-justify: inter-word !important;
      }
    }
  }

  .v-application .text-caption {
    font-family: 'PT Sans', sans-serif !important;
    letter-spacing: 3px !important;
    @media #{map-get($display-breakpoints, 'sm-and-down')} {
      font-size: 11px !important;
    }
  }

  .col {
    &--1 {
      @media (max-width: 599px) {
        border-bottom: thin solid white !important;
        padding-bottom: 40px !important;
        margin-bottom: 41px !important;
      }
    }

    &--2 {
      @media (max-width: 599px) {
        margin-bottom: 36px !important;
      }
    }

    &--2a {
      @media (max-width: 599px) {
        margin-bottom: 36px !important;
      }
    }

    &--3 {
      @media (min-width: 600px) and (max-width: 1263px) {
        border-top: thin solid #ffffff !important;
        padding-top: 34px !important;
        margin-top: 37px !important;
      }
    }
  }

  .__part-of {
    font-family: 'Montserrat', sans-serif !important;
    font-size: 7px !important;
    line-height: 36px;
    letter-spacing: 3px !important;
    font-weight: bold !important;
  }

  .__list {
    ::v-deep .v-list-item {
      min-height: 26px !important;
      font-family: 'PT Sans', sans-serif !important;
      font-size: 16px !important;
      // .v-list-item__title {
      // }
    }
  }

  ::v-deep .v-input {
    border-radius: unset !important;
    .v-label {
      font-family: 'PT Sans', sans-serif !important;
      color: #B5B5B5 !important;
      font-size: 14px !important;
      font-weight: normal !important;
    }
    .v-select__slot {
      .v-label { left: 10px !important;}
      .v-select__selections {
        .v-select__selection--comma {
          margin-left: 10px;
        }
      }
    }
    .v-input__slot {
      .v-text-field__slot {
        left: 10px !important;
      }
    }
  }
</style>
