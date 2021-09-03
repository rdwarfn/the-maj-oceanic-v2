<template>
  <v-app>
    <v-main id="tmo__main">
      <nuxt />
    </v-main>

    <Footer app />
  </v-app>
</template>

<script>
import Footer from '~/components/containers/Footer.vue'

export default {
  components: {
    Footer
  }
}
</script>

<style scoped>
#tmo__main {
  background: #FAFAFA !important;
}
</style>
