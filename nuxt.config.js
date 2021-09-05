export default {
  env: {
    BASE_URL: process.env.BASE_URL
  },

  serverMiddleware: {
    '/': '~/api/swr.js'
  },

  rootDir: __dirname,
  router: {
    middleware: ['breadcrumbs'],
    extendRoutes (routes, resolve) {
      routes.push({
        name: '404',
        path: '*',
        component: resolve(__dirname, 'pages/sailing-soons.vue')
      })
    }
  },
  /*
  ** Global CSS
  */
  styleResources: {
    scss: [
      './assets/styles/utilities/sizing/_poly-fluid-sizing.scss'
    ]
  },

  css: [
    './assets/styles/main.scss'
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
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/svg',
    '@nuxtjs/pwa',
    '@nuxtjs/vuetify',
    '@nuxtjs/style-resources'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // '@nuxtjs/pwa',
    '@nuxt/image'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    baseURL: process.env.BASE_URL
  },
  /*
  ** vuetify module configuration
  */
  vuetify: {
    defaultAssets: false,
    treeShake: true,
    customVariables: ['~/assets/styles/utilities/_vuetify-variables.scss'],
    optionsPath: './vuetify.options.js'
  },
  /*
  ** Build configuration
  */
  build: {
    extend (config) {
      config.module.rules.unshift({
        test: /\.mjs/,
        type: 'javascript/auto',
        include: /node_modules/
      })
    }
  },

  image: {
    provider: 'ipx',
    screens: {
      // _variables.scss
      sm: 600,
      md: 960,
      lg: 1264,
      xl: 1904
    },
    ipx: {}
  },
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
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { type: 'text/javascript', src: '/js/instafeed.min.js' }
    ]
  },

  loading: {
    color: '#208CB2'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      // lang: 'en'
      name: 'TMO',
      short_name: 'TMO',
      description: 'The MAJ Oceanic Official Site',
      theme_color: '#208CB2',
      background_color: '#000000'
    }
  }
}
