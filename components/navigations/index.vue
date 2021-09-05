<template>
  <div class="navbar" :class="{'is-intersect': isIntersecting}">
    <div>
      <VRow
        no-gutters
        align="center"
        justify="space-between"
        class="navrow"
        :class="{'is-intersect': isIntersecting}"
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

            <!-- TODO: dihide dulu -->
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

        <VCol v-ripple cols="4" md="3" class="text-center rounded py-2 px-3 mx-2">
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
                  <VProgressCircular indeterminate color="grey lighten-5" />
                </VRow>
              </template>
            </VImg>
          </nuxt-link>
        </VCol>

        <VCol cols="3" offset="1">
          <VRow no-gutters align="end" justify="end">
            <!-- TODO: dihide dulu -->
            <VCol v-show="false" cols="auto">
              <VBtn
                tile
                text
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

      <div class="navlist" :class="{'is-intersect': isIntersecting}">
        <NavMenu :is-intersecting="isIntersecting" />
      </div>
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
@import '~/assets/styles/utilities/_variables.scss';

$fifo: #{map-get($transition, 'fast-in-fast-out')};
$secondary: #232323;
$second: .3s;

.navbar {
  display: none;
  height: 30%;
  width: 100vw;
  position: fixed;
  max-height: 192px;
  background: rgba(47, 46, 46, 0.4);
  transition: all $second $fifo;

  @media #{map-get($display-breakpoints, 'lg-and-up')} {
    z-index: 10;
    display: block;
    &.is-intersect {
      transform: translateY(-6.71875rem);
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
  margin: 2rem auto 0px;
  place-self: baseline;
  opacity: 1;
  width: 90%;
  transform: scale(1);
  transition: all $second $fifo;
  &.is-intersect {
    opacity: 0;
    transform: scale(0.9, 0.9);
  }
}

.navlist {
  display: flex;
  align-self: flex-end;
  justify-self: center;
  width: 90%;
  background-color: transparent;
  border-top: 1.5px solid white;
  color: white;
  height: 2.8125rem;
  top: unset;
  transition: all $second $fifo;
  &.is-intersect {
    background-color: white;
    color: #232323;
    height: 4.875rem;
    width: 100%;
    padding-left: 20px;
    @include poly-fluid-sizing ('padding-right', (960px:20px, 1440px:75px));
  }
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
    font-family: 'Montserrat', sans-serif !important;
    font-size: 13px !important;
    font-weight: 600 !important;
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
      color: #FFFFFF !important;
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
