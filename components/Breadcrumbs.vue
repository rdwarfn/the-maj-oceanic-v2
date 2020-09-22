<template>
  <v-container class="px-6 px-md-0">
    <v-breadcrumbs
      class="px-0 text-uppercase hidden-xs-only"
      v-show="getBreadcrumb.length > 1"
      :items="getBreadcrumb"
      large
    >
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item
          nuxt ripple
          v-bind="item"
          class="text-uppercase"
        >
          {{ item.text }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
  </v-container>
</template>

<script>
export default {
  props: {
    data: { type: Array }
  },

  computed: {
    getBreadcrumb () {
      return this.$store.state.breadcrumbs
    }
  }
}
</script>