export default {
  loading: {
    color: '#208CB2',
    height: '10px'
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
  //       redirect: '/siiling-soons'
        component: resolve(__dirname, 'pages/sailing-soons.vue')
      })
    }
  },
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    titleTemplate: 'The Maj Oceanic',
    title: 'The Maj Oceanic' || '',
    htmlAttrs: {
      lang: 'id'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: '/the-maj-oceanic--ico/ms-icon-144x144.png' },

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
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/base-components',
    { src: '~/plugins/vue-awesome-swiper', mode: 'client' }
    // { src: '~/plugins/vue-awesome-swiper', model: 'client' }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: [
    '~/components',
    { path: '~/components/containers', prefix: 'containers' },
    { path: '~/components/navigations', prefix: 'navigations' },
    { path: '~/components/svg', prefix: 'svg' }
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
    '@nuxtjs/svg'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
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
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    loader: {
      cssModules: {
        modules: {
          compileType: 'module',
          mode: 'local',
          auto: true,
          exportOnlyLocals: true,
          localIndentName: '[path][name]__[local]--[hash:base64:5]'
        }
      }
    },
    cssSourceMap: true,
    postcss: {
      plugins: {
        'postcss-url': {},
        'postcss-import': {},
        'postcss-nesting': {}
      }
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
