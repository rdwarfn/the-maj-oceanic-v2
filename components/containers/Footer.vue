<template>
  <v-footer id="footer" class="px-0" dark tile inset background-color="#232323">
    <v-container class="px-6 px-md-0">
      <v-row no-gutters class="mb-1 mb-sm-12 mb-lg-6" align="start" justify="space-between">
        <!-- the maj oceanic -->
        <v-col class="col--1" cols="12" sm="4" md="mb-4" lg="3">
          <div class="mb-7 mb-sm-6">
            <div class="text-caption mb-2 text-uppercase font-weight-bold">
              the maj oceanic
            </div>
            <div class="ml-n4">
              <v-btn
                v-for="(data, index) in sosmed"
                v-bind:key="index"
                v-bind:href="data.link"
                fab depressed text nuxt tile
              >
                <v-icon>{{data.icon}}</v-icon>
              </v-btn>
            </div>
          </div>
          <div class="mb-8">
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
              <v-col cols="6">
              <v-img
                v-bind:src="require('~/assets/images/svg/the_maj_group.svg?data')"
                v-bind:lazy-src="require('~/assets/images/svg/the_maj_group.svg?data')"
                min-width="75"
                max-width="91.91"
              ></v-img>
              </v-col>
              <!-- <v-spacer/> -->
            </v-row>
          </div>
          <div>
            <div class="text-uppercase __part-of">PROUD COMFORT PARTNER</div>
            <!-- <v-row no-gutters align="center"> -->
              <v-img
                class="ml-n1"
                v-bind:src="require('~/assets/images/svg/tmo_sanbrella.svg?data')"
                v-bind:lazy-src="require('~/assets/images/svg/tmo_sanbrella.svg?data')"
                max-width="66"
              ></v-img>
            <!-- </v-row> -->
          </div>
        </v-col>

        <!-- join our family & explore our worl -->
        <v-col class="col--2 px-0" sm="5" md="6" lg="4">
          <v-row no-gutters align="start" justify-sm="space-between">
            <v-col class="col--2a px-sm-1" cols="12" sm="auto">
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

            <v-col class="px-sm-1" cols="12" sm="auto">
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
        <v-col class="col--3 px-0" cols="12" lg="4" offset-lg="1">\
          <div class="text-caption mb-4 text-uppercase font-weight-bold">
            Sign up for Exclusive news & Offers
          </div>
          <v-row no-gutters>
          <form ref="form" v-on:submit.prevent="validate">
            <v-row>
              <v-col cols="4" sm="2" lg="4">
                <v-select
                  v-model="forms.select.data"
                  v-bind:items="forms.select.items"
                  v-bind:rules="forms.select.rules"
                  light flat dense solo validate-on-blur
                  hide-details="auto"
                  label="Title"
                  required
                ></v-select>
              </v-col>
              <v-col cols="8" sm="5" lg="8" class="pl-md-0">
                <v-text-field
                  v-model="forms.fullname.data"
                  v-bind:rules="forms.fullname.rules"
                  light flat dense clearable single-line solo validate-on-blur
                  hide-details="auto"
                  label="Full name"
                  type="text"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="5" lg="12" class="mb-3" no-gutters>
                <v-text-field
                  v-model="forms.email.data"
                  v-bind:rules="forms.email.rules"
                  light flat dense clearable single-line solo validate-on-blur
                  hide-details="auto"
                  label="Email address"
                  type="email"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col class="mb-4 mb-md-4" sm="3" lg="auto">
              <v-btn class="btn-s" light depressed tile type="submit" v-on:click.prevent="validate">
                sign me up
              </v-btn>
              </v-col>
              <v-col cols="12" sm="9" lg="12">
                <span>
                  By entering your details you consent to be contacted via email
                  by The MAJ Group with offers and updates. To opt out, use the
                  unsubscribe link or email <a href="mailto:digital@themajgroup.com">digital@themajgroup.com</a>.
                </span>
              </v-col>
            </v-row>
          </form>
          </v-row>
        </v-col>
      </v-row>

      <!-- copyrights -->
      <v-row no-gutters align="start" class="text-sm-center mt-0 mt-sm-5 mt-lg-0">
        <v-col tag="span" class="px-0">
          <span class="">Copyright {{ new Date().getFullYear() }} All rights reserved</span>
        </v-col>
      </v-row>
    </v-container>
    </v-footer>
</template>

<script>
export default {
  name: 'Footer',

  data () {
    return {
      sosmed: [
        {
          id: 0,
          icon: "mdi-instagram",
          link: "https://www.instagram.com/themajoceanic"
        },
        {
          id: 1,
          icon: "mdi-facebook",
          link: "https://www.facebook.com/themajoceanic"
        },
        {
          id: 2,
          icon: "mdi-twitter",
          link: "https://twitter.com/themajoceanic"
        },
        {
          id: 3,
          icon: "mdi-youtube",
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
          title: "Ancora Capital Management",
          to: "#"
        },
        {
          id: 2,
          title: "Media Center",
          to: "#"
        },
        {
          id: 3,
          title: "Privacy",
          to: "#"
        },
        {
          id: 4,
          title: "Terms and Conditions",
          to: "#"
        }
      ],
      forms: {
        valid: true,
        fullname: {
          data: "",
          rules: [
            v => !!v || 'Required.',
            v => (v && v.length < 20) || 'Name must be less than 20 characters',
          ]
        },
        select: {
          data: null,
          items: ["Mr.", "Ms."],
          rules: [v => !!v || 'Required.']
        },
        email: {
          data: "",
          rules: [
            value => !!value || 'Required.',
            value => (value || '').length <= 20 || 'Max 20 characters',
            value => {
              const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              return pattern.test(value) || 'Please enter a valid e-mail.'
            },
          ]
        }
      }
    }
  },

  methods: {
    validate () {
      // this.$refs.form;
      console.log(this.$refs.form);
    },
    reset () {
      this.$refs.form.reset();
    }
  }
}
</script>

<style lang="scss" scoped>
  #footer {
    @include poly-fluid-sizing ('padding-top', (375px:38px, 768px:55px, 1440px:90px));
    @include poly-fluid-sizing ('padding-bottom', (375px:58, 768px:38px, 1440px:38px));
  }
  span {
    font-size: 13px !important;
    font-weight: normal !important;
    font-family: 'Ideal Sans Book', sans-serif !important;
  }

  .v-application .text-caption {
    font-family: 'Ideal Sans Semibold', sans-serif !important;
    letter-spacing: 3px !important;
    font-weight: bold !important;
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
    font-family: 'Verlag Bold', sans-serif !important;
    font-size: 9px !important;
    line-height: 36px !important;
    letter-spacing: 3px !important;
    font-weight: bold !important;
  }

  .__list {
    ::v-deep .v-list-item {
      min-height: 26px !important;
      font-family: 'Ideal Sans Book', sans-serif !important;
      font-size: 16px !important;
      // .v-list-item__title {
      // }
    }
  }

  ::v-deep .v-input {
    border-radius: unset !important;
    .v-label {
      font-family: 'Ideal Sans Light', sans-serif !important;
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
