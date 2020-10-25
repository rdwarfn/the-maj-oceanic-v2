<template>
  <v-container class="mx-auto px-6 px-md-0">
    <nuxt-content :document="data" />
  </v-container>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const data = await $content('articles').fetch()

    return {
      data
    }
  }
}
</script>

<style>

</style>