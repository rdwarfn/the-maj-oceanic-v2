<template>
  <!-- class="navbar align-self-center" -->
  <div
    class="navbar"
    :class="{ intersecting: isIntersecting }"
  >
    <div>
      <VRow
        no-gutters
        align="center"
        justify="space-between"
        class="navrow mx-auto"
        :class="{ intersecting: isIntersecting }"
      >
        <VCol cols="4">
          <VRow
            no-gutters
            align="end"
            justify="start"
          >
            <VCol cols="4" class="mr-md-3">
              <form style="max-width: 150px">
                <VContainer class="px-0 py-0">
                  <VTextField
                    v-model="search_input"
                    background-color="transparent"
                    class="text-uppercase"
                    label="search"
                    placeholder="SEARCH"
                    prepend-icon="$search"
                    hide-details
                    single-line
                    clearable
                    dense
                    flat
                    dark
                    solo
                  />
                </VContainer>
              </form>
            </VCol>

            <VCol v-show="false" cols="auto">
              <VBtn
                color="white"
                class="btn-s font-md-12"
                depressed
                text
                tile
              >
                the maj group
              </VBtn>
            </VCol>
          </VRow>
        </VCol>

        <VCol
          v-ripple
          cols="4"
          md="3"
          class="text-center rounded py-2 px-3 mx-2"
        >
          <nuxt-link class="mx-auto" to="/" replace>
            <VImg
              :lazy-src="require('~/assets/images/svg/tmo_main_logo_white.svg?data')"
              :src="require('~/assets/images/svg/tmo_main_logo_white.svg?data')"
              max-width="319"
              max-height="56"
              class="mx-auto"
            >
              <template #placeholder>
                <VRow
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <VProgressCircular
                    indeterminate
                    color="grey lighten-5"
                  />
                </VRow>
              </template>
            </VImg>
          </nuxt-link>
        </VCol>

        <VCol cols="3" offset="1">
          <VRow
            no-gutters
            align="end"
            justify="end"
          >
            <VCol v-show="false" cols="auto">
              <VBtn
                to="#"
                text
                nuxt
                color="white"
                class="btn-s __btn font-md-12"
              >
                login
              </VBtn>
            </VCol>

            <VCol cols="auto">
              <VBtn
                to="/contact-us"
                color="primary"
                class="btn-s font-md-12"
                depressed
                tile
                nuxt
              >
                inquire now
              </VBtn>
            </VCol>
          </VRow>
        </VCol>
      </VRow>

      <!-- row list  -->

      <VFlex
        class="navlist d-flex mx-auto static"
        :class="{ intersecting: isIntersecting }"
      >
        <VRow
          no-gutters
          align="center"
          justify="space-around"
        >
          <NavMenu :is-intersecting="isIntersecting" />

          <VCol
            v-show="isIntersecting"
            cols="auto"
          >
            <VBtn
              text
              tile
              depressed
              class="font-md-12 mr-3"
            >
              login
            </VBtn>
          </VCol>

          <VCol
            v-show="isIntersecting"
            cols="auto"
          >
            <VBtn
              class="btn-s btn--inquire font-md-12"
              to="/contact-us"
              depressed
              tile
              nuxt
              dark
            >
              Inquire Now
            </VBtn>
          </VCol>
        </VRow>
      </VFlex>
    </div>
  </div>
</template>

<script>
import NavMenu from './Menu.vue'

export default {
  components: {
    NavMenu
  },

  props: {
    isIntersecting: {
      type: Boolean,
      default: false
    },

    loading: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      search_input: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/scss/variables.scss';
$fifo: #{map-get($transition, 'fast-in-fast-out')};
$primary: #208CB2;
$secondary: #232323;

.navbar {
  display: none;
  height: 30%;
  width: 100vw;
  position: fixed !important;
  max-height: 192px;
  background: rgba(47, 46, 46, 0.4) !important;
  transition: all .3s $fifo;

  @media #{map-get($display-breakpoints, 'lg-and-up')} {
    z-index: 10 !important;
    display: block !important;

    &.intersecting {
      transform: translateY(-115px); //1204
      box-shadow: 0px 20px 60px rgba(138, 149, 158, 0.2);
    }
  }

  > div {
    display: grid;
    align-items: flex-end;
    height: 100%;
  }
}

.navrow {
  margin-top: 2rem;
  place-self: baseline;
  opacity: 1;
  width: 90%;
  transform: scale(1);
  transition: all .3s $fifo;
  &.intersecting {
    opacity: 0;
    transform: scale(0.9, 0.9);
  }
}

.navlist {
  align-self: flex-end !important;
  justify-self: center;
  width: 90%;
  background-color: transparent;
  border-top: 1px solid white;
  color: white;
  height: 44px;
  top: unset;
  transition: all .3s $fifo;
  &.intersecting {
    background-color: white;
    color: #232323;
    height: 78px;
    width: 100%;
    padding-left: 20px;
    @include poly-fluid-sizing ('padding-right', (960px:20px, 1440px:48px));
  }
}

.navinput {
  place-self: center;
  max-height: 42px !important;
  text-transform: uppercase;
}

.navlink {
  font-family: 'Montserrat', sans-serif;
  padding: 0 4px;
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
}

@media (max-width: 1362px) {
  .font-md-12 {
    font-size: 12px !important;
  }
}

::v-deep .v-input {
  .v-input__slot {
    padding: 0 !important;
  }
  ::placeholder {
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    font-weight: bold;
    opacity: 1 !important;
    letter-spacing: 2px !important;
    text-transform: uppercase !important;

    @media (max-width: 1264px) {
      font-size: 12px !important;
    }
  }

  &.theme--dark {
    ::placeholder {
      color: #FFFFFF !important;
    }
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: #FFFFFF  !important;
    }
    ::-ms-input-placeholder { /* Microsoft Edge */
      color: #FFFFFF ;
    }
  }

  &.theme--light {
    ::placeholder {
      color: #232323 !important;
    }
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: #232323 !important;
    }
    ::-ms-input-placeholder { /* Microsoft Edge */
      color: #232323 !important;
    }
  }
}

::v-deep a.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined):not(.primary) {
  background-color: $secondary !important;
  color: #ffffff !important;
}

::v-deep a.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined).primary {
  color: #ffffff !important;
}
</style>
