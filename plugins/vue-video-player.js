import Vue from 'vue'
// import VueVideoPlayer from 'vue-video-player/dist/ssr';

// require videojs style
// import 'video.js/dist/video-js.css';
// import 'vue-video-player/src/custom-theme.css'
if (process.browser) {
  const VueVideoPlayer = require('vue-video-player/dist/ssr')
  Vue.use(VueVideoPlayer)
}
// Vue.use(VueVideoPlayer, /* {
//   options: global default options,
//   events: global videojs events
// } */);
