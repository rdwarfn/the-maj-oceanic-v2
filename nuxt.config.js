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
  ssr: false,
  target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    title: 'The MAJ Oceanic',
    htmlAttrs: {
      lang: 'en-US'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'robots', name: 'robots', content: 'follow, index' },
      { hid: 'googlebot', name: 'googlebot', content: 'follow, index, max-snippet: -1, max-video-preview:-1, max-image-preview:large' },
      { hid: 'bingbot', name: 'bingbot', content: 'follow, index, max-snippet: -1, max-video-preview:-1, max-image-preview:large' },
      { hid: 'og:locale', property: 'og:locale', content: 'en_US' },
    ],
    link: [
      { rel: 'canonical', href: 'https://themajoceanic.com' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
  axios: {
    baseURL: process.env.BASE_URL
  },
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
    }
  }
}
