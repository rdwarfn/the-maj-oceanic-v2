<template>
  <v-row tag="section" class="container mx-auto">
    <div class="__divide" v-text="data" />
  </v-row>
</template>

<script>
export default {
  name: 'Divider',

  props: ['data']
}
</script>

<style lang="scss" scoped>
  @import '~/assets/styles/scss/_linear-interpolation.scss';

  $primary: #208cb2;
  .__divide {
    font-family: 'Domine', serif !important;
    font-weight: 600;
    color: $primary !important;
    font-size: 34px !important;

    @media (min-width: 600px) {
      $map: (600px: 34px, 960px: 60px);
      font-size: linear-interpolation($map) !important;
    }

    @media (min-width: 960px) {
      $map: (960px: 60px, 1264px: 65px);
      font-size: linear-interpolation($map) !important;
    }

    @media (min-width: 1264px) {
      $map: (1264px: 65px, 1440px: 72px);
      font-size: linear-interpolation($map) !important;
    }

    @media (min-width: 1440px) {
      font-size: 72px !important;
    }
  }
</style>
