<script>
  import { ContentLoader } from "vue-content-loader";

  export default {
    name: 'SkeletonCarousel',
    components: { ContentLoader }
  }
</script>

<template>
  <content-loader
    width="1232"
    :height="714"
    :speed="2"
    primaryColor="#dcdcdc"
    secondaryColor="#ecebeb"
  >
    <rect x="563" y="0" rx="4" ry="4" width="111" height="25" />
    <rect x="453" y="47" rx="4" ry="4" width="336" height="29" />
    <rect x="247" y="95" rx="4" ry="4" width="739" height="23" />
    <rect x="349" y="127" rx="4" ry="4" width="539" height="23" />
    <circle cx="16" cy="444" r="16" />
    <circle cx="1216" cy="444" r="16" />
    <rect x="60" y="219" rx="8" ry="8" width="826" height="450" />
    <rect x="726" y="294" rx="8" ry="8" width="445" height="300" />
    <circle cx="461" cy="708" r="6" />
    <circle cx="485" cy="708" r="6" />
  </content-loader>
</template>
