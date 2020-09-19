<template>
  <v-container tag="section" class="px-container">
    <v-row no-gutters align="start" justify="space-between" class="pb-16 _contact-row">
      <v-col cols="12" sm="4" class="text-center text-sm-left text-sm-left pb-16 pb-sm-0">
        <div class="text-h3 mb-8">
          Contact Us
        </div>
        <div class="mb-89 mb-sm-60 mb-md-10">
          <p class="_contact-desc mx-auto mx-sm-0">Send your inquiry now by contacting the addresses below or by filling in the inquiry form. Sail you later!</p>
        </div>

        <div class="mb-8">
          <div class="text-h6 mb-3">
            Whatsapp
          </div>
          <a class="_wa" href="https://api.whatsapp.com/send?phone=628113898419">+62 811 3898 419</a> <span class="_wa--name">(Ringga Ards)</span>
        </div>

        <div class="mb-8">
          <div class="text-h6 mb-3">
            booking inquiries
          </div>
          <a href="mailto:info@themajoceanic.com">info@themajoceanic.com</a>
        </div>

        <div>
          <div class="text-h6 mb-3">
            press & PARTNERSHIPS
          </div>
          <a href="mailto:marketing@themajoceanic.com">marketing@themajoceanic.com</a>
        </div>
      </v-col>
      <v-col cols="12" sm="7" md="8" class="pt-15 pt-sm-0 pb-16">
        <div class="_form--headline ml-sm-5">
          make an inquiry
        </div>
        <v-form
          class="mt-5 py-8 px-5 _form hidden-xs-only"
          ref="form2"
          v-model="valid"
          @submit.prevent="validate"
          @keyup.enter.prevent="validate"
          lazy-validation
        >
          <v-row align="center" justify="space-between">
            <v-col cols="6" class="py-0" style="height: 102px">
              <v-text-field
                ref="name"
                label="Name"
                v-model="name"
                v-bind:rules="[
                  rules.required,
                  rules.countMin4
                ]"
                type="text"
                validate-on-blur
                hide-details="auto"
                background-color="#fafafa"
                filled clearable flat dense required
              ></v-text-field>
            </v-col>
            <v-col cols="6" class="py-0" style="height: 102px">
              <v-select
                ref="destination"
                label="Destination"
                v-model="destination"
                v-bind:items="destinationData"
                v-bind:rules="[
                  rules.required
                ]"
                validate-on-blur
                hide-details="auto"
                background-color="#fafafa"
                filled dense flat required
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" class="py-0">
              <v-row align="stretch">
                <v-col cols="12" align-self="start" class="py-0" style="height: 102px">
                  <v-text-field
                    ref="email"
                    label="Email"
                    v-model="email"
                    v-bind:rules="[
                      rules.required,
                      rules.email
                    ]"
                    type="email"
                    validate-on-blur
                    hide-details="auto"
                    background-color="#fafafa"
                    filled clearable flat dense required
                  ></v-text-field>
                </v-col>
                <!-- <v-spacer /> -->
                <v-col cols="12" align-self="end" class="py-0">
                  <v-text-field
                    ref="phone"
                    label="Phone"
                    v-model="phone"
                    v-bind:rules="[
                      rules.required,
                      rules.countMax16,
                      rules.isNumber
                    ]"
                    counter
                    type="tel"
                    validate-on-blur
                    hide-details="auto"
                    background-color="#fafafa"
                    filled clearable flat dense
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="6" align-self="start"  class="py-0">
              <v-textarea
                ref="message"
                class="_message align-self-end"
                label="Messages"
                v-model="message"
                v-bind:rules="[
                  rules.required,
                  rules.countMin30
                ]"
                counter
                validate-on-blur
                hide-details="auto"
                background-color="#fafafa"
                rows="4"
                filled clearable flat dense required
              ></v-textarea>
            </v-col>
          </v-row>

          <v-row align="center" justify="end" class="text-right">
            <v-col>
              <v-slide-x-reverse-transition>
                <v-tooltip
                  v-if="!valid"
                  left
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      icon
                      class="my-0 d-inline"
                      v-bind="attrs"
                      @click.prevent="reset2"
                      v-on="on"
                    >
                      <v-icon>{{icon.refresh}}</v-icon>
                    </v-btn>
                  </template>
                  <span>Refresh form</span>
                </v-tooltip>
              </v-slide-x-reverse-transition>

              <v-btn
                tile depressed
                color="primary"
                class="_btn--submit ml-auto"
                @click="validate"
              >
                Submit
              </v-btn>
            </v-col>
          </v-row>
        </v-form>

        <v-form
          class="hidden-sm-and-up text-left"
          ref="form"
          v-model="valid"
          @submit.prevent="validate"
          @keyup.enter.prevent="validate"
          lazy-validation
        >
          <v-row no-gutters align="center">
            <v-col cols="12" style="min-height: 78px">
              <v-text-field
                ref="name"
                label="Name"
                v-model="name"
                v-bind:rules="[
                  rules.required,
                  rules.countMin4
                ]"
                type="text"
                validate-on-blur
                hide-details="auto"
                background-color="#fafafa"
                filled clearable flat dense required
              ></v-text-field>
            </v-col>
            <v-col cols="12" align-self="end" style="min-height: 78px">
              <v-text-field
                ref="email"
                label="Email"
                v-model="email"
                v-bind:rules="[
                  rules.required,
                  rules.email
                ]"
                type="email"
                validate-on-blur
                hide-details="auto"
                background-color="#fafafa"
                filled clearable flat dense required
              ></v-text-field>
            </v-col>
            <v-col cols="12" style="min-height: 78px">
              <v-text-field
                ref="phone"
                label="Phone"
                v-model="phone"
                v-bind:rules="[
                  rules.required,
                  rules.countMax16,
                  rules.isNumber
                ]"
                counter
                type="tel"
                validate-on-blur
                hide-details="auto"
                background-color="#fafafa"
                filled clearable flat dense required
              ></v-text-field>
            </v-col>
            <v-col cols="12" style="min-height: 78px">
              <v-select
                ref="destination"
                label="Destination"
                v-model="destination"
                v-bind:items="destinationData"
                v-bind:rules="[
                  rules.required
                ]"
                background-color="#fafafa"
                filled dense required
              ></v-select>
            </v-col>
            <v-col cols="12">
              <v-textarea
                ref="message"
                class="_message align-self-end"
                label="Messages"
                v-model="message"
                v-bind:rules="[
                  rules.required,
                  rules.countMin30
                ]"
                counter
                validate-on-blur
                hide-details="auto"
                background-color="#fafafa"
                rows="4"
                filled clearable flat dense
              ></v-textarea>
            </v-col>
            <v-col cols="12" class="text-center">
              <v-slide-x-reverse-transition>
                <v-tooltip v-if="!valid" left>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      icon
                      class="my-0"
                      v-bind="attrs"
                      @click.prevent="reset"
                      v-on="on"
                    >
                      <v-icon>{{icon.refresh}}</v-icon>
                    </v-btn>
                  </template>
                  <span>Refresh form</span>
                </v-tooltip>
              </v-slide-x-reverse-transition>

              <v-btn
                tile depressed
                color="primary"
                class="_btn--submit mx-auto"
                @click="validate"
              >
                Submit
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
    <v-dialog
      v-model="dialog.show"
      max-width="875"
      overlay-color="rgba(255, 255, 255, 0.8)"
      transition="scale-transition"
      persistent
    >
      <v-sheet class="v-dialog--sheet" tile>
        <v-card
          class="v-dialog--card"
          :style="{
            backgroundImage: `url(${dialog.img})`
          }"
        >
          <v-btn
            v-show="dialog.success"
            right top icon absolute
            class="v-dialog--card-close-btn" @click="dialog.show = false">
            <v-icon>{{icon.close}}</v-icon>
          </v-btn>

          <v-card-title>
            <div class="v-dialog--card-heading mx-auto text-center text-break pa-0">
              {{dialog.text}}
            </div>
          </v-card-title>

          <v-card-actions class="v-dialog--card-actions">
          <v-btn text class="px-2 mx-auto v-dialog--card-link" @click="dialog.click">
            <a class="text-decoration-underline">{{dialog.text_link}}</a>
          </v-btn>
          </v-card-actions>

          <v-img
            :src="require('~/assets/images/contact-dialog-water.png')"
            :lazy-src="require('~/assets/images/contact-dialog-water.png')"
            class="v-dialog--card-img-water hidden-xs-only ml-auto mr-n2"
          />
          <v-img
            :src="require('~/assets/images/contact-dialog-water-mobile.png')"
            :lazy-src="require('~/assets/images/contact-dialog-water-mobile.png')"
            class="v-dialog--card-img-water hidden-sm-and-up ml-auto mr-n2"
          />
        </v-card>
      </v-sheet>
    </v-dialog>
  </v-container>
</template>

<script>
import { mdiClose, mdiRefresh } from '@mdi/js';
export default {
  layout: 'main',

  name: 'ContactUs',

  head: {
    title: 'Make an inquiry - The MAJ Oceanic',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Send your inquiry now by contacting the addresses below or by filling in the inquiry form. Sail you later!'
      }
    ]
  },

  data () {
    return {
      icon: {
        close: mdiClose,
        refresh: mdiRefresh
      },
      valid: true,
      name: '',
      email: '',
      message: '',
      phone: '',
      destination: '',
      loading: false,
      destinationData: [
        'Komodo National Park (June–October)',
        'Raja Ampat (December–April)',
        'Spice Islands (May/November)'
      ],
      rules: {
        required: v => !!v || 'This field is required.',
        countMin4: v => (v && v.length >= 4) || 'Min 4 characters.',
        countMin30: v => (v && v.length >= 30) || 'Min 30 characters.',
        countMax16: v => (v && v.length <= 16) || 'Max 16 digit numbers.',
        email: v => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(v) || 'Please enter a valid e-mail.'
        },
        isNumber: v => (v && !isNaN(v)) || 'This field must be number.',
      },
      formHasErrors: false,
      dialog: {
        show: false,
        text: '',
        img: '',
        text_link: '',
        success: false,
        click: () => { return }
      },
    }
  },

  computed: {
    form () {
      return {
        name: this.name,
        email: this.email,
        phone: this.phone,
        destination: this.destination,
        message: this.message,
      }
    },
  },

  methods: {
    validate () {
      const res = this.$refs.form.validate()
      const res2 = this.$refs.form2.validate()
      if (res && res2) {
        this.storeContact(this.form)
        this.reset();
        this.reset2();
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    reset2 () {
      this.$refs.form2.reset()
    },
    async storeContact ({ name, email, phone, destination, message }) {
      try {
        const ress = await this.$axios.post(
          'https://backend.themajbekasi.com/api/oceanic/store-contact',
          { name, email, phone, destination, message }
        )
        if (ress && ress.statusText === 'OK') {
          this.dialog = {
            text: 'We have received your enquiry and will respond to you very soon.',
            img: require('~/assets/images/contact-dialog-bottle.png'),
            text_link: 'Return to the Homepage',
            success: true,
            click: () => {
              this.$router.replace('/')
            },
            show: true,
          }
        }
      } catch (err) {
        this.dialog = {
          text: "We're sorry, but something went wrong. Please try again",
          img: require('~/assets/images/contact-dialog-compass.png'),
          text_link: 'Close',
          success: false,
          click: () => {
            this.dialog.show = false
          },
          show: true
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~/assets/styles/scss/variables.scss';

  section {
    @media #{map-get($display-breakpoints, 'sm-and-down')} {
      padding-left: 25px !important;
      padding-right: 25px !important;
    }
  }

  .mb-89 {
    margin-bottom: 89px !important;
  }

  .mb-sm-60 {
    @media (min-width: 600px) and (max-width: 960px) {
      margin-bottom: 60px !important;
    }
  }

  ._wa {
    font-variant: small-caps;
    letter-spacing: 2px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    line-height: 21px;
  }

  ._wa--name {
    letter-spacing: 2px;
  }

  ._contact-row {
    @include poly-fluid-sizing ('margin-top', (375px:102px, 768px:199px, 1440px:197px));
  }

  ._contact-desc {
    @include poly-fluid-sizing ('width', (375px:293.58px, 768px:220px, 1440px:293.58px));
  }

  ._form {
    box-shadow:  0px 7px 64px rgba(0, 0, 0, 0.03);;
    &--headline {
      font-family: 'Montserrat', sans-serif !important;
      font-size: 14px !important;
      font-weight: bold !important;
      line-height: 16px !important;
      text-transform: uppercase !important;
      letter-spacing: 3px !important;

      @media #{map-get($display-breakpoints, 'xs-only')} {
        margin-bottom: 52px !important;
      }
    }

    ::v-deep .v-textarea textarea {
      min-height: 129px !important;
    }
  }

  ::v-deep .v-dialog {
    width: 100%;
    @include poly-fluid-sizing ('max-width', (375px:315px, 1440px:850px));
    @include poly-fluid-sizing ('max-height', (375px:580px, 1440px:300px));
    padding: 10px;
    background-color: white;

    &--card {
      @include poly-fluid-sizing ('height', (375px:560px, 1440px:280px));
      background-color: #EFE1DC !important;
      display: flex;
      flex-flow: column wrap;
      place-content: space-around;
      width: 100%;
      position: relative;
      background-position: top left;
      @media #{map-get($display-breakpoints, 'xs-only')} {
        background-position: top center;
      }

      &-close-btn {
        background-color: white;
        z-index: 2;
      }
      &-row {
        position: relative !important;
      }
      &-img-water {
        position: absolute;
        @include poly-fluid-sizing ('bottom', (375px:80px, 1440px:60px));
        right: 0;
      }
      .v-card__title {
        @include poly-fluid-sizing ('margin-top', (375px:215px, 1440px:20px));
      }
      &-heading {
        letter-spacing: normal;
        font-family: 'Domine', sans-serif !important;
        @include poly-fluid-sizing ('width', (375px:254px, 1440px:500px));
        @include poly-fluid-sizing ('font-size', (375px:22px, 1440px:32px));
        @include poly-fluid-sizing ('line-height', (375px:32px, 1440px:40px));
      }
      // &-actions {
      // }
      &-link.v-btn {
        font-weight: 300 !important;
        color: #5A5A5A !important;
        font-size: 16px !important;
        font-weight: 300 !important;
        margin-bottom: 15px !important;
        text-transform: unset !important;
        font-family: 'PT Sans', sans-serif !important;
      }
    }
  }

  ::v-deep .v-label {
    font-family: 'PT Sans', sans-serif !important;
    font-size: 16px !important;
    line-height: 21px !important;
    font-weight: normal !important;
    color: #000000 !important;
  }

  ::v-deep .v-btn._btn--submit {
    min-width: 111.39px !important;
    font-family: 'Montserrat', sans-serif !important;
    font-size: 13px !important;
    letter-spacing: 2px !important;
    line-height: 18px !important;
  }


  ::v-deep ._form {
    background: #FFFFFF !important;
  }

</style>