<template>
  <div class="container">
    <v-row v-if="data.caption" align="center" :justify="captionJustify" class="mb-3">
      <div
        class="text-h5 static"
        :class="captionClass"
        v-text="data.caption"
      />
    </v-row>
    <v-row align="center" :justify="headingJustify" class="fill-height mb-3">
      <v-skeleton-loader
        type="heading"
        :loading="loading"
        :transition="transition"
        max-width="100%"
      >
        <div
          :title="data.heading"
          v-text="data.heading"
          class="text-h4 text-md-h3 font-weight-bold static"
          :class="headingClass"
        />
      </v-skeleton-loader>
    </v-row>
    <v-row v-if="data.text" align="center" :justify="textJustify" class="fill-height">
      <v-skeleton-loader
        type="paragraph"
        :loading="loading"
        :transition="transition"
        max-width="100%"
      >
        <p
          :class="[textClass, $style.whitespace_pre_line]"
          :title="data.text"
        >
          {{ data.text }}
        </p>
      </v-skeleton-loader>
    </v-row>
    <v-row v-if="data.list">
      <ul :class="listClass">
        <li
          v-for="(item, index) in data.list.split('\n')"
          :key="index"
          :title="item"
          v-text="item"
        />
      </ul>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Heading',

  props: {
    data: {
      type: Object,
      default: function () {
        return { heading: 'Default' }
      },
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    captionJustify: {
      type: String
    },
    headingJustify: {
      type: String
    },
    textJustify: {
      type: String
    },
    captionClass: {
      type: String
    },
    headingClass: {
      type: String
    },
    textClass: {
      type: String
    },
    listClass: {
      type: String
    }
  },

  data () {
    return {
      transition: 'fade-transition',
    }
  }
}
</script>

<style module src="~/assets/styles/css/_utilities.module.css" />
