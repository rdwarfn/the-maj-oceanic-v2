<template>
  <v-app>
    <v-main id="tmo__main">
      <nuxt />
    </v-main>

    <Footer app/>
  </v-app>
</template>

<script>
import Footer from '~/components/containers/Footer.vue'

export default {
  components: {
    Footer
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
