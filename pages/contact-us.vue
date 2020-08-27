<template>
  <v-container tag="section" class="px-7 px-sm-6">
    <v-row no-gutters align="start" justify="space-between" class="py-16" style="background-color: transparent">
      <v-col cols="12" sm="4" class="pt-sm-15 pb-md-0 pb-10 pr-sm-6 pr-md-2 pb-sm-0 text-sm-left">
        <div class="text-h3 mb-15">
          Contact Us
        </div>
        <div class="mb-10">
          <p>Send your inquiry now by contacting the addresses below or by filling in the inquiry form. Sail you later!</p>
        </div>

        <div class="mb-8">
          <div class="text-h6 mb-3">
            Whatsapp
          </div>
          <a href="https://api.whatsapp.com/send?phone=628113898419">+62 811 3898 419</a>
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
        <div class="_form--headline">
          make an inquiry
        </div>
        <v-form
          class="my-8 py-8 px-5 _form hidden-xs-only"
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
                  rules.countMin50
                ]"
                counter
                validate-on-blur
                hide-details="auto"
                background-color="#fafafa"
                rows="4"
                filled clearable flat denserequired
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
                  rules.countMin50
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
      destinationData: ['Komodo National Park (May - October 2020)', 'Raja Ampat (November 2020 - April 2021)'],
      rules: {
        required: v => !!v || 'This field is required.',
        countMin4: v => (v && v.length >= 4) || 'Min 4 characters.',
        countMin50: v => (v && v.length >= 50) || 'Min 50 characters.',
        email: v => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(v) || 'Please enter a valid e-mail.'
        },
        // phone: v => {
        //   const pattern = (\+62 ((\d{3}([ -]\d{3,})([- ]\d{4,})?)|(\d+)))|(\(\d+\) \d+)|\d{3}( \d+)+|(\d+[ -]\d+)|\d+
        //   return pattern.test(v) || 'Please'
        // }
      },
      formHasErrors: false
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
        console.log(this.form)
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
  }
}
</script>

<style lang="scss" scoped>
  section {
    @media (min-width: 600px) {
      background: #FAFAFA !important;
    }
  }
  ._form--headline {
    font-family: 'Verlag Bold', sans-serif !important;
    font-size: 14px !important;
    font-weight: 400 !important;
    line-height: 16px !important;
    text-transform: uppercase !important;
    letter-spacing: 3px !important;
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