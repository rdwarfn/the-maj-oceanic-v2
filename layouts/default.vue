<template>
  <v-app>
    <v-main id="tmo__main">
      <nuxt />
    </v-main>

    <tmo-footer app />
  </v-app>
</template>

<script>
export default {
  components: {
    TmoFooter: () =>
      import('@/components/containers/Footer.vue')
  }
}
</script>

<style scoped>
#tmo__main {
  background: #FAFAFA !important;
}
</style>
