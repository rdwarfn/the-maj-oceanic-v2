<template>
  <v-sheet :height="objHeight">
    <component
      v-bind:is="'div'"
      hide-on-leave
    >
      <v-skeleton-loader
        tile
        v-if="loading"
        :boilerplate="objType !== 2"
        :type="'image@' + objType"
        :max-height="objHeight"
      >
      </v-skeleton-loader>
      <v-carousel
        v-else
        hide-delimiters
        :show-arrows="false"
        :height="objHeight"
      >
        <v-carousel-item
          v-for="(item,i) in data"
          :key="i"
          :src="staticImage
            ? require(`~/assets/images/${item.image}`)
            : item.image"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <v-sheet height="100%" color="transparent">
            <v-row class="fill-height" align="end" justify="center">
              <div
                class="text-h3 text-sm-h2 text-md-h1 text-center static"
                :class="$style.whitespace_pre_line"
                style="margin-bottom: 15%"
                v-text="item.text"
              />
            </v-row>
          </v-sheet>
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
      const v = this.$vuetify.breakpoint.name;
      return {
        height: function () {
          switch (v) {
            case "xs":
              return '332px';
            case "sm":
              return '332px';
            case "md":
              return '700px';
            case "lg":
              return '700px';
            default:
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

<style module src="~/assets/styles/css/_utilities.module.css">
</style>
