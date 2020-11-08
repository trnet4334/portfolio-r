export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // font-family: 'Courgette', cursive;
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Courgette&display=swap' },
        // font-family: 'Spectral', serif;
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Spectral:wght@300;400;600;700&display=swap'},
        // font-family: 'Mulish', sans-serif;
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Mulish:wght@400;600;700;800&display=swap' },
        // font-family: 'Grandstander', cursive;
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Grandstander:wght@700;800;900&display=swap' }
        ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
      {
          src: '~plugins/vue-particles',
          ssr: false
      }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/chakra
    '@chakra-ui/nuxt',
    // https://go.nuxtjs.dev/emotion
    '@nuxtjs/emotion',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
