<template>
  <v-container class="px-6 px-md-0 komodo--des-three__wrap">
    <v-row no-gutters align="center" justify="space-between">
      <v-col cols="6" sm="5">
        <div
          v-if="data.description"
          class="text--primary text-body-1"
          v-html="data.description"
        />
      </v-col>

      <v-col cols="6">
        <v-row align="center">
          <!-- <v-col
            v-for="(d, i) in data.gallery"
            :key="i"
            :cols="!i ? 12 : 6"
          >
            <v-img
              :src="$store.state.storage + d.image"
              :lazy-src="$store.state.storage + d.image"
              class="komodo--des-three_image"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular indeterminate color="grey lighten-5" />
                </v-row>
              </template>
            </v-img>
          </v-col> -->

          <v-col
            v-if="data.gallery[2]"
            cols="12"
          >
            <v-img
              :src="$store.state.storage + data.gallery[2].image"
              :lazy-src="$store.state.storage + data.gallery[2].image"
              class="komodo--des-three_image"
            />
          </v-col>

          <v-col
            v-if="data.gallery[1]"
            cols="6"
          >
            <v-img
              :src="$store.state.storage + data.gallery[1].image"
              :lazy-src="$store.state.storage + data.gallery[1].image"
              class="komodo--des-three_image"
            />
          </v-col>

          <v-col
            v-if="data.gallery[0]"
            cols="6"
          >
            <v-img
              :src="$store.state.storage + data.gallery[0].image"
              :lazy-src="$store.state.storage + data.gallery[0].image"
              class="komodo--des-three_image"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/styles/scss/variables.scss";
.komodo--des-three__wrap {
  @media #{map-get($display-breakpoints, 'sm-and-up')} {
    padding-top: 100px;
    padding-bottom: 100px;
  }
}

.voyages-komodo {
  &--des3 {
    @media #{map-get($display-breakpoints, 'sm-and-up')} {
      &__wrap {
        padding: 100px 0 !important;
      }
    }
  }
}
</style>
