<template>
  <v-sheet
    tag="section"
    class="komodo--des-one__wrap"
    :class="{
      'komodo': $route.name.includes('komodo'),
      'spice-islands': $route.name.includes('spice-islands'),
      'raja-ampat': $route.name.includes('raja-ampat'),
    }"
  >
    <v-container class="py-0 px-6 px-md-0">
      <v-row no-gutters>
        <v-col cols="12" sm="6" class="text-center text-sm-left">
          <v-card flat tile class="komodo--des-one_card">
            <v-img
              :src="$store.state.storage + data.gallery[0].image"
              :lazy-src="$store.state.storage + data.gallery[0].image"
              class="komodo--des-one_img"
            >
              <template #placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular indeterminate color="grey lighten-5" />
                </v-row>
              </template>
            </v-img>

            <div class="komodo--des-one__content">
              <v-card-text class="komodo--des-one_text px-0 text--primary text-body-1" v-html="data.description" />

              <v-card-actions class="pa-0">
                <v-btn
                  tile
                  nuxt
                  to="/contact-us"
                  outlined
                  depressed
                  color="primary"
                  class="btn-l mx-auto mx-sm-0"
                  width="152px"
                >
                  {{ buttonText }}
                </v-btn>
              </v-card-actions>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  props: {
    data: {
      image: { type: String, required: true },
      description: { type: String, required: true },
      to: { type: String, required: true }
    },
    buttonText: { type: String, default: 'Book a trip' }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/styles/scss/variables.scss";
.komodo--des-one {
  &__wrap {
    @include poly-fluid-sizing ('padding-top', (
      375px:130px,
      768px:80px,
      1440px:200px
    ));
  }

  @media #{map-get($display-breakpoints, 'xs-only')} {
    &__wrap {
      &.komodo {
        background-image: url('~assets/images/voyages/komodo/bg-intro-komodo-mobile.png'),
        linear-gradient(rgba(229,229,229,0.2),
        transparent, rgba(229,229,229,0.2));
      };
      &.spice-islands {
        background-image: url('~assets/images/voyages/spice-islands/bg-intro-mobile.svg?data'),
          linear-gradient(rgba(229,229,229,0.2),
          transparent, rgba(229,229,229,0.2));
      }
      &.raja-ampat {
        background-image: url('~assets/images/voyages/raja-ampat/bg-intro-mobile.svg?data'),
          linear-gradient(rgba(229,229,229,0.2),
          transparent, rgba(229,229,229,0.2));
      }
      background-repeat: no-repeat !important;
      background-size: contain !important;
      padding-bottom: 41px !important;
      margin-bottom: 100px !important;
    }
    &_card {
      padding-bottom: 41px !important;
      max-width: 321px !important;
      margin: 0 auto !important;
    }
    &_img {
      height: 348px !important;
    }
    &__content {
      @media #{map-get($display-breakpoints, 'sm-and-up')} {
        padding: 30px 17px 0 !important;
      }
    }
    &_text {
      margin-bottom: 64px !important;
    }
  }

  @media #{map-get($display-breakpoints, 'sm-and-up')} {
    &__wrap {
      &.komodo {
        background-image: url('~assets/images/voyages/komodo/bg-intro-komodo.svg?data'),
          linear-gradient(rgba(229,229,229,0.2),
          transparent, rgba(229,229,229,0.2));
      }
      &.spice-islands {
        background-image: url('~assets/images/voyages/spice-islands/bg-intro.svg?data'),
          linear-gradient(rgba(229,229,229,0.2),
          transparent, rgba(229,229,229,0.2));
      }
      &.raja-ampat {
        background-image: url('~assets/images/voyages/raja-ampat/bg-intro.svg?data'),
          linear-gradient(rgba(229,229,229,0.2),
          transparent, rgba(229,229,229,0.2));
      }
      // background-position: center !important;
      background-repeat: no-repeat !important;
      background-size: contain !important;
      margin-bottom: 150px !important;
    }
    &__content {
      padding: 30px 30px 66px !important;
    }
    &_text {
      padding-bottom: 50px !important;
    }
  }
}
</style>
