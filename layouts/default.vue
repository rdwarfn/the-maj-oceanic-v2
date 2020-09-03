<template>
  <v-app>
    <v-main id="tmo__main">
      <nuxt />
    </v-main>

    <tmo-footer app/>
  </v-app>
</template>

<script>
export default {
  components: {
    TmoFooter: () =>
      import('@/components/containers/Footer.vue')
  },

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  },
}
</script>

<style scoped>
#tmo__main {
  background: #FAFAFA !important;
}
</style>
