import Vue from 'vue'
import 'video.js/dist/video-js.css'
// import VueVideoPlayer from 'vue-video-player/dist/ssr';

// require videojs style
// import 'vue-video-player/src/custom-theme.css'
if (process.browser) {
  const VueVideoPlayer = require('vue-video-player/dist/ssr')
  Vue.use(VueVideoPlayer)
}
