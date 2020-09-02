<template>
  <v-container tag="section" class="px-container">
    <v-row no-gutters align="start" justify="space-between" class="pb-16 _contact-row">
      <v-col cols="12" sm="4" class="text-center text-sm-left text-sm-left">
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
          <a class="_wa" href="https://api.whatsapp.com/send?phone=628113898419">+62 811 3898 419</a>
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
      <v-col cols="12" sm="7" md="8" class="pt-15 pb-16">
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
            <v-col cols="6">
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
            <v-col cols="6">
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
          <v-row align="end">
            <v-col cols="6" align-self="start">
              <v-row no-gutters style="height: 138px">
                <v-col cols="12" align-self="start">
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
                <v-col cols="12" align-self="end">
                  <v-text-field
                    ref="phone"
                    label="Phone"
                    v-model="phone"
                    v-bind:rules="[
                      rules.required
                    ]"
                    type="tel"
                    validate-on-blur
                    hide-details="auto"
                    background-color="#fafafa"
                    filled clearable flat dense
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="6" align-self="start">
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
                      <v-icon>mdi-refresh</v-icon>
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
          <v-row align="center">
            <v-col cols="12">
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
            <v-col cols="12" align-self="end">
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
            <v-col cols="12">
              <v-text-field
                ref="phone"
                label="Phone"
                v-model="phone"
                v-bind:rules="[
                  rules.required
                ]"
                type="tel"
                validate-on-blur
                hide-details="auto"
                background-color="#fafafa"
                filled clearable flat dense required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
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
                      <v-icon>mdi-refresh</v-icon>
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
    <!-- <v-dialog
      v-model="dialog.show"
      max-width="875"
      overlay-color="rgba(255, 255, 255, 0.8)"
      transition="scale-transition"
      persistent
    > -->
      <!-- <v-row class="pa-2 fill-height "> -->
        <!-- <v-sheet class="pa-2 fill-height" tile flat>
          <v-container class="v-dialog--card py-0 px-0"> -->
          <!-- <v-col cols="12"> -->
            <!-- <v-row no-gutters justify="end" class="bdr text-right">
              <v-btn class="float-right" @click="dialog.show = false" icon style="background: white; top: 0; right: 0">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-row>
            <v-row no-gutters align="center" style="position: relative">
              <v-col>
                <v-img
                  :src="require('~/assets/images/contact-dialog-bottle.png')"
                  :lazy-src="require('~/assets/images/contact-dialog-bottle.png')"
                  class="mx-auto ml-sm-0"
                  height="245"
                >
                </v-img>
              </v-col>
              <v-col> -->
                <!-- v-dialog--card-heading -->
                <!-- <div class="v-dialog--card-heading mx-auto text-center pa-0">
                  We have received your enquiry and will respond to you very soon.
                </div>
              </v-col>
              <v-col>
                <v-img
                  :src="require('~/assets/images/contact-dialog-water.png')"
                  :lazy-src="require('~/assets/images/contact-dialog-water.png')"
                  max-width="114"
                  max-height="61"
                  class="mt-5 ml-auto mr-n2"
                />
              </v-col>
            </v-row> -->
            <!-- <v-row class="bdr"></v-row> -->
            <!-- <v-card-actions class="mt-8" style="border: 1px solid black"> -->
              <!-- <nuxt-link
                v-ripple
                class="px-2 mx-auto text-decoration-underline v-dialog--card-link"
                to="/"
              >Return to the Homepage</nuxt-link> -->
            <!-- </v-card-actions> -->
          <!-- </v-col> -->

          <!-- </v-container>
        </v-sheet> -->
      <!-- </v-row> -->
    <!-- </v-dialog> -->

    <v-snackbar
      v-model="dialog.show"
      :color="dialog.color"
      top
      absolute
      elevation="24"
    >
      {{ dialog.text }}
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  layout: 'main',

  name: 'ContactUs',

  data () {
    return {
      valid: true,
      name: '',
      email: '',
      message: '',
      phone: '',
      destination: '',
      destinationData: [
        'Komodo National Park (June–October)',
        'Raja Ampat (December–April)',
        'Spice Islands (May/November)'
      ],
      rules: {
        required: v => !!v || 'This field is required.',
        countMin4: v => (v && v.length >= 4) || 'Min 4 characters.',
        countMin30: v => (v && v.length >= 30) || 'Min 30 characters.',
        email: v => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(v) || 'Please enter a valid e-mail.'
        },
        // phone: v => {
        //   const pattern = (\+62 ((\d{3}([ -]\d{3,})([- ]\d{4,})?)|(\d+)))|(\(\d+\) \d+)|\d{3}( \d+)+|(\d+[ -]\d+)|\d+
        //   return pattern.test(v) || 'Please'
        // }
      },
      formHasErrors: false,
      dialog: {
        show: false,
        text: '',
        color: ''
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
    }
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
            text: 'Your message has been sent.',
            color: 'primary',
            show: true
          }
        }
      } catch (err) {
        this.dialog = {
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

  ::v-deep .bdr {
    border: 1px solid black !important;
  }

  section {
    @media (min-width: 600px) {
      background: #FAFAFA !important;
    }
  }

  .px-container {
    @media (max-width: 600px) {
      padding-left: 25px;
      padding-right: 25px;
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

  ._contact-row {
    @include poly-fluid-sizing ('margin-top', (375px:123px, 768px:210px, 1440px:100px));
  }

  ._contact-desc {
    @include poly-fluid-sizing ('width', (375px:293.58px, 768px:210px, 1440px:293.58px));
  }

  ._form {
    &--headline {
      font-family: 'Verlag Bold', sans-serif !important;
      font-size: 14px !important;
      font-weight: 400 !important;
      line-height: 16px !important;
      text-transform: uppercase !important;
      letter-spacing: 3px !important;
    }
  }

  ::v-deep .v-dialog {
    width: 100%;
    @include poly-fluid-sizing ('max-width', (375px:315px, 1440px:857px));
    @include poly-fluid-sizing ('height', (375px:580px, 1440px:300px));
    &--card {
      background: #EFE1DC !important;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      // @include poly-fluid-sizing ('height', (375px:580px, 1440px:300px));
      padding-bottom: 30px !important;
      @media #{map-get($display-breakpoints, 'sm-and-up')} {
        padding-bottom: 0 !important;
      }
      &-img-water {
        position: absolute;
        right: 0;
        top: 150px;
        @include poly-fluid-sizing ('width', (375px:74px, 1440px:114px));
        @include poly-fluid-sizing ('height', (375px:52px, 1440px:61px));
      }
      &-heading {
        font-family: 'Sentinel Semibold', sans-serif !important;
        @include poly-fluid-sizing ('width', (375px:254px, 1440px:520px));
        @include poly-fluid-sizing ('font-size', (375px:22px, 1440px:32px));
        @include poly-fluid-sizing ('line-height', (375px:32px, 1440px:40px));
        z-index: 2;
        top: 0;
        // right: 50px !important;
        // left: auto;
        // position: absolute;
        // left: 50%;
        // transform: translate(-50%, -50%);

      }
      // @media #{map-get($display-breakpoints, 'sm-and-up')} {
      //   &-heading, &-link {
      //     position: relative;
      //     top: -180px;
      //     // margin-left: auto;
      //   }
      // }
      &-link {
        font-weight: 300 !important;
        color: #5A5A5A !important;
      }
    }
  }

  ::v-deep .v-label {
    font-family: 'Ideal Sans Light', sans-serif !important;
    font-size: 16px !important;
    line-height: 21px !important;
    font-weight: normal !important;
    color: #000000 !important;
  }

  ::v-deep .v-btn._btn--submit {
    min-width: 111.39px !important;
    font-family: 'Verlag Bold', sans-serif !important;
    font-size: 13px !important;
    letter-spacing: 2px !important;
    line-height: 18px !important;
  }


  ::v-deep ._form {
    // border: 1px solid black !important;
    background: #FFFFFF !important;
  }

</style>