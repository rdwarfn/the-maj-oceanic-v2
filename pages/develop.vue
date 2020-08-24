<template>
  <v-sheet height="1000" class="my-16">
    <h1>testing</h1>
    <client-only>
      <ul>
        <li><nuxt-link to="/develop/foo">foo</nuxt-link></li>
        <li><nuxt-link to="/develop/bar">bar</nuxt-link></li>
      </ul>
      <div>
        <nuxt-child />
      </div>
    </client-only>
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
