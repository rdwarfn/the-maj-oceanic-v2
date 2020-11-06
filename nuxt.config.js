import webpack from 'webpack';
export default {
  loading: {
    color: '#208CB2',
    height: '10px'
  },
  rootDir: __dirname,
  router: {
    // trailingSlash: false,
    middleware: ['breadcrumbs'],
    extendRoutes(routes, resolve) {
      routes.push({
        name: '404',
        path: '*',
        component: resolve(__dirname, 'pages/sailing-soons.vue')
      })
    }
  },
  /*
  ** Nuxt target
  */
  target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    title: 'The MAJ Oceanic',
    htmlAttrs: {
      lang: 'id'
    },
    meta: [
      { charset: 'utf-8' },
      { hid: 'robots', name: 'robots', content: 'follow, index, max-snippet: -1, max-video-preview:-1, max-image-preview:large' },
      { hid: 'msapplication-TileColor', name: 'msapplication-TileColor', content: '#ffffff' },
      { hid: 'msapplication-TileImage', name: 'msapplication-TileImage', content: '/the-maj-oceanic--ico/ms-icon-144x144.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/the-maj-oceanic--ico/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/the-maj-oceanic--ico/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/the-maj-oceanic--ico/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/the-maj-oceanic--ico/favicon-16x16.png' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/the-maj-oceanic--ico/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/the-maj-oceanic--ico/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/the-maj-oceanic--ico/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/the-maj-oceanic--ico/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/the-maj-oceanic--ico/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/the-maj-oceanic--ico/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/the-maj-oceanic--ico/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/the-maj-oceanic--ico/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/the-maj-oceanic--ico/apple-icon-180x180.png' },
    ],
    script: [
      { type: 'text/javascript', src: '/js/instafeed.min.js' }
    ]
  },
  /*
  ** Global CSS
  */
  styleResources: {
    scss: [
      './assets/styles/scss/_poly-fluid-sizing.scss',
      './assets/styles/scss/variables.scss',
      './assets/styles/scss/main.scss'
    ]
  },
  css: [
    '@/assets/styles/css/_fonts.css',
    '@/assets/styles/css/main.css',
    'video.js/dist/video-js.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-awesome-swiper', mode: 'client' },
    { src: '~/plugins/vue-video-player', mode: 'client' },
    { src: '~/plugins/vue-instagram', mode: 'client' },
    { src: '~/plugins/vue-youtube-embed', mode: 'client' }
  ],
  /*
  ** Auto import components
  */
  components: [
    '~/components',
    { path: '~/components/base', prefix: 'Base' },
    '~/components/containers',
    '~/components/navigations',
    { path: '~/components/skeletons', prefix: 's' },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/style-resources'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    // Doc: https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
  ],
  /*
  ** Axios module configuration
  */
  axios: {},
  /*
  ** Content module configuration
  */
  content: {
    markdown: {
      remarkPlugins: [
        ['remark-emoji', { emoticon: true }]
      ]
    }
  },
  /*
  ** vuetify module configuration
  */
  vuetify: {
    defaultAssets: false,
    options: {
      customProperties: true
    },
    treeShake: true,
    customVariables: ['~/assets/styles/scss/variables.scss'],
    optionsPath: './vuetify.options.js',
  },
  /*
  ** Build configuration
  */
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        _: 'lodash'
      })
    ],
    postcss: {
      plugins: {
        // Add some plugins
        'postcss-import': {},
        'postcss-nesting': {},
      },
      preset: {
        autoprefixer: {
          // grid: true
        }
      }
    },

    // extractCSS: true,
    // optimization: {
    //   splitChunks: {
    //     cacheGroups: {
    //       styles: {
    //         name: 'styles',
    //         test: /\.(css|vue)$/,
    //         chunks: 'all',
    //         enforce: true
    //       }
    //     }
    //   }
    // }
  }
}
