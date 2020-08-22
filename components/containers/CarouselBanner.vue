<template>
  <v-sheet
  >
    <!-- :height="objHeight" -->
    <component
      v-bind:is="'div'"
      hide-on-leave
    >
      <v-skeleton-loader
        tile
        v-if="loading"
        :boilerplate="objType !== 2"
        :type="'image@' + objType"
      >
        <!-- :max-height="objHeight" -->
      </v-skeleton-loader>
      <v-carousel
        v-else
        hide-delimiters
        :show-arrows="false"
      >
        <!-- :height="objHeight" -->
        <v-carousel-item
          v-for="(item,i) in data"
          :key="i"
          :src="staticImage
            ? require(`~/assets/images/${item.image}`)
            : item.image"
          reverse-transition="fade-transition"
          transition="fade-transition"
          class="align-center _carousel--item"
        >
          <!-- <v-sheet color="transparent"> -->
            <v-row no-gutters align="center" justify="center" class="fill-height _head--container">
              <v-spacer />
              <div
                v-text="item.text"
                class="_head--text text-sm-h2 text-md-h1 text-center static"
                :class="$style.whitespace_pre_line"
              />
              <v-spacer/>
            </v-row>
          <!-- </v-sheet> -->
        </v-carousel-item>
      </v-carousel>
    </component>
  </v-sheet>
</template>

<script>
export default {
  name: 'CarouselBanner',

  props: {
    loading: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: () => []
    },
    staticImage: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    objHeight () {
      return this.helper().height();
    },
    objType () {
      return this.helper().type()
    },
  },

  methods: {
    helper: function () {
      const v = this.$vuetify.breakpoint.width;
      return {
        height: function () {
          switch (v) {
            case (600):
              return '670px';
            case (v < 960):
              return '347px';
            // case "md":
            //   return '700px';
            // case "lg":
            //   return '700px';
            // default:
              return '100%';
          }
        },
        type: function () {
          switch (v) {
            case "md":
              return 4;
            case "lg":
              return 4;
            default:
              return 2;
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

._head--text {
  position: relative;
  font-family: "Sentinel Semibold", serif !important;
  font-size: 24px;
}

._head--container {
  display: grid;
}

._carousel--item {
  @media (max-width: 600px) {
    height: 670px !important;
    place-items: center !important;
    ::v-deep .v-responsive__content {
      // align-items: center !important;
      // place-content: center !important;;

      height: 670px !important;
    }
  }

  @media (min-width: 600px) {
    height: 347px !important;
  }

  @media (min-width: 960px) {
    height: 700px !important;
  }
}
</style>

<style module src="~/assets/styles/css/_utilities.module.css">
</style>
