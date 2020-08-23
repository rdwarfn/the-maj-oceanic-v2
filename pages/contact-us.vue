<template>
  <v-container tag="section" class="px-7 px-sm-6">
    <v-row no-gutters align="center" justify="center" class="py-16" style="background-color: transparent">
      <v-col cols="12" sm="4" class="pb-10 pr-2 pb-sm-0 text-sm-left">
        <div class="text-h3 mb-15">
          Contact Us
        </div>
        <div class="mb-10">
          <p>For more information, enquiries or bookings, contact The Maj Oceanic here</p>
        </div>
        <div class="mb-8">
          <div class="text-h6 mb-3">
            Call Center
          </div>
          <a href="telp:+62512683129">+62 5126 83129</a>
        </div>
        <div>
          <div class="text-h6 mb-3">
            Email
          </div>
          <a href="href:oceanic@themajgroup.com">oceanic@themajgroup.com</a>
        </div>
      </v-col>
      <v-col cols="12" sm="8" class="pt-15 pb-16">
        <div class="_form--headline">
          make an enquiry
        </div>
        <v-form
          class="my-8 py-8 px-5 _form hidden-xs-only"
          ref="form"
          v-model="valid"
          @submit.prevent="validate"
          @keyup.enter.prevent="validate"
          lazy-validation
        >
          <v-row align="end">
            <v-col cols="6" align-self="start">
              <v-row no-gutters style="height: 138px">
                <v-col cols="12">
                  <v-text-field
                    ref="name"
                    label="Name"
                    v-model="name"
                    v-bind:rules="[
                      rules.required,
                      rules.countMin4,
                      rules.countMax20
                    ]"
                    type="text"
                    counter="20"
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

          <v-row align="end" justify="space-between" style="height: 59px">
            <v-col cols="6">
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
                hint="format: +6281234567890 / 081234567890"
                filled clearable flat dense
              ></v-text-field>
            </v-col>
            <v-col cols="4" class="text-right">
              <v-slide-x-reverse-transition>
                <v-tooltip
                  v-if="!valid"
                  left
                >
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
                  rules.countMin4,
                  rules.countMax20
                ]"
                type="text"
                counter="20"
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
                hint="format: +6281234567890 / 081234567890"
                filled clearable flat dense
              ></v-text-field>
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
                filled clearable flat denserequired
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
      rules: {
        required: v => !!v || 'This field is required.',
        countMin4: v => (v && v.length >= 4) || 'Min 4 characters.',
        countMax20: v => (v && v.length <= 20) || 'Max 20 characters.',
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
        message: this.message,
        phone: this.phone
      }
    }
  },

  methods: {
    validate () {
      const res = this.$refs.form.validate()
      if (res) {
        console.log(this.form)
        this.reset();
      }
    },
    reset () {
      this.$refs.form.reset()
    }
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