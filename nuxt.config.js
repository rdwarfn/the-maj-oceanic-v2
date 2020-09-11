export default {
  loading: {
    color: '#208CB2',
    height: '10px'
  },
  rootDir: __dirname,
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/sailing-soons.vue')
      })
    }
  },
  /*
  ** Nuxt rendering mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  */
  target: 'server',
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
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
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
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css2?family=Domine&family=Montserrat:wght@400;500;600;700&family=PT+Sans&display=swap' }
    ]
  },
  /*
  ** Global CSS
  */
  styleResources: {
    scss: [
      './assets/styles/scss/_poly-fluid-sizing.scss'
    ]
  },
  css: [
    '@/assets/styles/css/main.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-awesome-swiper', mode: 'client' },
    '~/plugins/vue-video-player'
  ],
  /*
  ** Auto import components
  */
  components: [
    '~/components',
    { path: '~/components/base', prefix: 'Base' },
    '~/components/containers',
    '~/components/navigations',
    '~/components/svg',
    { path: '~/components/skeletons', prefix: 's' },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/style-resources',
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
    '@nuxtjs/svg'
  ],
  /*
  ** Axios module configuration
  */
  axios: {},
  /*
  ** Content module configuration
  */
  content: {},
  /*
  ** vuetify module configuration
  */
  vuetify: {
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
    postcss: {
      // preset name
      order: 'cssnanoLast',
      // ordered plugin names
      order: [
        'postcss-import',
        'postcss-nesting',
        'postcss-preset-env',
        'cssnano'
      ],
      // Function to calculate plugin order
      order: (names, presets) => presets.cssnanoLast(names)
    },
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
  }
}
