<template>
  <v-footer dark tile inset background-color="#232323">
    <v-container>
      <v-row no-gutters class="mb-6" align="start" justify="space-between">
        <v-col class="col--1" cols="12" sm="auto">
          <div class="mb-6">
            <v-tooltip bottom>
              <template v-slot:activator="{on, attrs}">
                <div v-bind="attrs" v-on="on" class="text-caption mb-2 text-truncate text-uppercase font-weight-bold">
                  the maj oceanic
                </div>
              </template>
              <span class="text-capitalize">the maj oceanic</span>
            </v-tooltip>
            <div class="ml-n4">
              <v-btn
                v-for="(data, index) in sosmed"
                v-bind:key="index"
                v-bind:href="data.link"
                fab depressed text nuxt tile
              >
                <v-icon>mdi-{{data.icon}}</v-icon>
              </v-btn>
            </div>
          </div>
          <div class="mb-5">
            <div class="text-uppercase mb-3 __part-of">part of</div>
            <v-row no-gutters align="center" justify="start">
              <v-img
                v-bind:src="require('~/assets/images/svg/the_maj_experience.svg?data')"
                v-bind:lazy-src="require('~/assets/images/svg/the_maj_experience.svg?data')"
                min-width="75"
                max-width="76"
                class="mr-14"
              ></v-img>
              <v-img
                v-bind:src="require('~/assets/images/svg/the_maj_group.svg?data')"
                v-bind:lazy-src="require('~/assets/images/svg/the_maj_group.svg?data')"
                min-width="75"
                max-width="91.91"
              ></v-img>
              <v-spacer/>
            </v-row>
          </div>
          <div>
            <div class="text-uppercase __part-of">PROUD COMFORT PARTNER</div>
            <v-row no-gutters align="center">
              <v-img
                v-bind:src="require('~/assets/images/svg/tmo_sanbrella.svg?data')"
                v-bind:lazy-src="require('~/assets/images/svg/tmo_sanbrella.svg?data')"
                max-width="66"
              ></v-img>
            </v-row>
          </div>
        </v-col>

        <v-col class="col--2 px-sm-1" cols="12" sm="auto" md="2">
          <v-tooltip bottom>
            <template v-slot:activator="{on, attrs}">
              <div v-bind="attrs" v-on="on" class="text-caption text-truncate mb-4 text-uppercase font-weight-bold">
                join our family
              </div>
            </template>
            <span class="text-capitalize">join our family</span>
          </v-tooltip>
          <v-list class="__list" color="transparent" dense flat tile>
            <v-list-item-group no-action>
              <v-list-item
                v-for="(data, index) in joins"
                v-bind:key="index"
                nuxt v-bind:to="data.to"
                class="px-0 fill-height"
              >
                <v-tooltip bottom>
                  <template v-slot:activator="{on, attrs}">
                    <v-list-item-content v-bind="attrs" v-on="on">
                      <v-list-item-title v-text="data.title">
                      </v-list-item-title>
                    </v-list-item-content>
                  </template>
                  <span>{{ data.title }}</span>
                </v-tooltip>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>

        <v-col class="col--3 px-sm-1" cols="12" sm="auto" md="2">
          <v-tooltip bottom>
            <template v-slot:activator="{on, attrs}">
              <div v-bind="attrs" v-on="on" class="text-caption text-truncate mb-4 text-uppercase font-weight-bold">
                explore our World
              </div>
            </template>
            <span class="text-capitalize">explore our World</span>
          </v-tooltip>
          <v-list class="__list" color="transparent" dense flat tile>
            <v-list-item-group no-action>
              <v-list-item
                v-for="(data, index) in explore"
                v-bind:key="index"
                nuxt v-bind:to="data.to"
                class="px-0 fill-height"
              >
                <v-tooltip bottom>
                  <template v-slot:activator="{on, attrs}">
                    <v-list-item-content v-bind="attrs" v-on="on">
                      <v-list-item-title v-text="data.title">
                      </v-list-item-title>
                    </v-list-item-content>
                  </template>
                  <span>{{ data.title }}</span>
                </v-tooltip>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>

        <v-col class="col--4" cols="12" md="4">
          <v-tooltip bottom>
            <template v-slot:activator="{on, attrs}">
              <div v-bind="attrs" v-on="on" class="text-caption text-truncate mb-4 text-uppercase font-weight-bold">
                Sign up for Exclusive news & Offers
              </div>
            </template>
            <span>Sign up for Exclusive news & Offers</span>
          </v-tooltip>
          <v-row no-gutters>
          <form ref="form" v-on:submit.prevent="validate">
            <v-row>
              <v-col cols="4" sm="2" md="4">
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
              <v-col cols="8" sm="5" md="8" class="pl-md-0">
                <v-text-field
                  v-model="forms.fullname.data"
                  v-bind:rules="forms.fullname.rules"
                  light flat dense clearable single-line solo validate-on-blur
                  hide-details="auto"
                  label="Fullname"
                  type="text"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="5" md="12" class="mb-3" no-gutters>
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
              <v-col class="mb-4 mb-md-4" sm="3" md="auto">
              <v-btn class="btn-s" light depressed tile type="submit" v-on:click.prevent="validate">
                sign me up
              </v-btn>
              </v-col>
              <v-col cols="12" sm="9" md="12">
                <span>
                  By entering your details you consent to be contacted via email
                  by the Maj group with offers and updates. To opt out, use the
                  unsubscribe link or email <a href="mailto:themaj@mail.com">themaj@mail.com</a>.
                </span>
              </v-col>
            </v-row>
          </form>
          </v-row>
        </v-col>
      </v-row>
      <v-row no-gutters align="center text-center">
        <v-col>
          <span>Copyright {{ new Date().getFullYear() }} All right reserved</span>
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
          icon: "instagram",
          link: "https://instagram.com/themajbekasi?igshid=4qhtyng01dj0"
        },
        {
          id: 1,
          icon: "facebook",
          link: "https://instagram.com/themajbekasi?igshid=4qhtyng01dj0"
        },
        {
          id: 2,
          icon: "twitter",
          link: "https://mobile.twitter.com/themajbekasi"
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
  span {
    font-size: 13px !important;
    font-weight: normal !important;
  }

  .v-application .text-caption {
    letter-spacing: 3px !important;
    font-weight: bold !important;
  }

  .col {
    &--1 {
      @media (max-width: 600px) {
        border-bottom: 2px solid white !important;
        padding-bottom: 40px !important;
        margin-bottom: 41px !important;
      }
    }

    &--2 {
      @media (max-width: 600px) {
        margin-bottom: 36px !important;
      }
    }

    &--3 {
      @media (max-width: 600px) {
        margin-bottom: 36px !important;
      }
    }

    &--4 {
      @media (min-width: 600px) and (max-width: 960px) {
        border-top: 2px solid #ffffff !important;
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
  }

  .__list {
    ::v-deep .v-list-item {
      min-height: 26px !important;
      .v-list-item__title {
        font-size: 16px !important;
      }
    }
  }

  ::v-deep .v-input {
    border-radius: unset !important;
    .v-label {
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
