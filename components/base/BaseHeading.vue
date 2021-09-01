<template>
  <v-container class="mx-auto justify-center">
    <v-row v-if="data.caption" align="center" :justify="captionJustify" class="mb-3">
      <div
        class="text-h5 static"
        :class="captionClass"
        v-text="data.caption"
      />
    </v-row>
    <div
      class="v-heading font-weight-bold text-center"
      :class="headingClass"
      v-text="data.heading"
    />
    <p class="text--primary v-paragraph text-center" :class="textClass">
      {{ data.text }}
    </p>
  </v-container>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default () {
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
      transition: 'fade-transition'
    }
  }
}
</script>

<style lang="scss" scoped>
 .v-heading {
   font-family: 'Domine', serif;
   @include poly-fluid-sizing ('font-size', (375px:22px, 768px:34px));
 }

 .v-paragraph {
   margin-top: 40px;
 }
</style>
