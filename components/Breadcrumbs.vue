<template>
  <v-container class="px-6 px-md-0">
    <client-only>
      <v-breadcrumbs
        v-show="getBreadcrumb.length > 1"
        class="px-0 text-uppercase hidden-xs-only"
        :items="getBreadcrumb"
        large
      >
        <template #item="{ item }">
          <v-breadcrumbs-item
            nuxt
            ripple
            v-bind="item"
            class="text-uppercase"
          >
            {{ item.text }}
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
    </client-only>
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
