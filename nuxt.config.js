export default {
  loading: {
    color: '#208CB2',
    height: '10px'
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
    titleTemplate: process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'id'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/styles/css/main.css',
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/base-components',
    '~/plugins/vue-awesome-swiper'
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
    // options: {
    //   customProperties: true
    // },
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
