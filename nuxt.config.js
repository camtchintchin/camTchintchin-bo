export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,
  telemetry: false,
  target: 'server',
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  serverMiddleware: [
    '~/api',
  ],
  head: {
    title: 'Reporting',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: `Push Business ${process.env.ENV}` },
      { name: 'format-detection', content: 'telephone=no' },
      {
        name: 'insight-app-sec-validation',
        content: '53c2142d-e0a8-427e-9a97-bab1211ce83f'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: '/base/vendor/jqvmap/css/jqvmap.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/base/vendor/select2/css/select2.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/base/vendor/owl-carousel/owl.carousel.css'
      },
      {
        rel: 'stylesheet',
        href: '/base/css/style.css'
      },
      {
        rel: 'stylesheet',
        href: '/base/scss/main.scss'
      },
      {
        rel: 'stylesheet',
        href: '/base/scss/custom.scss'
      },
      {
        rel: 'stylesheet',
        href: '/base/vendor/animate/animate.min.css'
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/apexcharts",
      },
    ],
    script: [
      {
        src: '/base/vendor/global/global.min.js',
        body: true
      },
      {
        src: '/base/js/custom.js',
        body: true
      },
      {
        src: '/base/js/deznav-init.js',
        body: true
      },
      {
        src: '/base/vendor/peity/jquery.peity.min.js',
        body: true
      },
      {
        src: '/base/js/plugins-init/piety-init.js',
        body: true
      },
      {
        src: '/base/vendor/select2/js/select2.full.min.js',
        body: true
      },
      {
        src: '/base/js/plugins-init/select2-init.js',
        body: true
      },
      {
        src: '/base/js/plugins-init/chartjs-init.js',
        body: true
      },
      {
        src: '/base/vendor/chartist/js/chartist.min.js',
        body: true
      },
      {
        src: '/base/vendor/chart.js/Chart.bundle.min.js',
        body: true
      },
      {
        src: '/base/vendor/chartist-plugin-tooltips/js/chartist-plugin-tooltip.min.js',
        body: true
      },
      {
        src: 'https://sdk.amazonaws.com/js/aws-sdk-2.1.24.min.js',
        body: true
      },
      {
        src: 'https://canvasjs.com/assets/script/canvasjs.min.js',
        body: true
      },
      // {
      //   src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js',
      //   body: true
      // }
    ],
    bodyAttrs: {
      'data-typography': 'Metropolis',
      'data-theme-version': 'light',
      'data-layout': 'vertical',
      'data-nav-headerbg': 'color_1',
      'data-headerbg': 'color_1',
      'data-sidebar-style': 'full',
      'data-sibebarbg': 'color_1',
      'data-sidebar-position': 'fixed',
      'data-header-position': 'fixed',
      'data-container': 'wide',
      direction: 'ltr',
      'data-primary': 'color_1'
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/sass/modal',
    '~/assets/sass/buttons',
    '~/assets/sass/global',
    '~/assets/sass/devwikak',
    '~/assets/sass/variant'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/chart.js', mode: 'client'},
    { src: '~/plugins/axios' },
    { src: '~/plugins/moment.js', ssr: false },
    { src: '~/plugins/vee-val.ts', ssr: false },
    { src: '~/plugins/persistedState.client.js' },
    { src: '~plugins/leaflet.js', ssr: false },

    // { src: '~/plugins/lodash.js'},

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build',
    'nuxt-typed-vuex',


  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    'nuxt-typed-vuex',

    { src: '@nuxtjs/axios', mode: 'client' },
  ],
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: true,
  },

  axios: {
    // proxy: true
    // baseURL: `${process.env.api_url}`,
    proxyHeaders: false,
    credentials: false,
    // proxy: true
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: { compact: true },
    transpile: ['vee-validate/dist/rules'],
  }
}
