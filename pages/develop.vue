<template>
  <v-sheet height="1000" class="my-16">
    <t-footer />
  </v-sheet>
</template>

<script>
const components = {
  tFooter: () => import('@/components/containers/Footer.vue')
}
export default {
  layout: 'main',

  name: 'Develop',

  components
}
</script>

<style>
</style>
