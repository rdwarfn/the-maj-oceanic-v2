<script>
  import { ContentLoader } from "vue-content-loader"

  export default {
    name: 'SkeletonNavigation',
    components: { ContentLoader }
  }
</script>

<template>
  <content-loader
    style="position: fixed; z-index: 20px"
    :width="1349"
    :height="497"
    :speed="2"
    primaryColor="#dcdcdc"
    secondaryColor="#ecebeb"
  >
    <rect x="0" y="15" rx="4" ry="4" width="123" height="53" />
    <rect x="164" y="211" rx="4" ry="4" width="123" height="53" />
    <rect x="385" y="211" rx="4" ry="4" width="123" height="53" />
    <rect x="607" y="211" rx="4" ry="4" width="123" height="53" />
    <rect x="828" y="211" rx="4" ry="4" width="123" height="53" />
    <rect x="1050" y="211" rx="4" ry="4" width="123" height="53" />
    <rect x="138" y="15" rx="4" ry="4" width="123" height="53" />
    <rect x="1085" y="15" rx="4" ry="4" width="123" height="53" />
    <rect x="1223" y="15" rx="4" ry="4" width="126" height="53" />
    <rect x="498" y="0" rx="8" ry="8" width="350" height="90" />
    <rect x="213" y="407" rx="8" ry="8" width="924" height="90" />
  </content-loader>
</template>
