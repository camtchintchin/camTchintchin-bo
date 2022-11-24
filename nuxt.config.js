export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: true,
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
    title: 'Dashboard tchin-tchin',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: `Dashboard` },
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
        href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700'
      },
      {
        rel: 'stylesheet',
        href: '/assets/plugins/custom/fullcalendar/fullcalendar.bundle.css?v=7.0.4'
      },
      {
        rel: 'stylesheet',
        href: '/assets/css/custom.css'
      },
      {
        rel: 'stylesheet',
        href: '/assets/css/pages/login/login-1.css?v=7.0.4'
      },
      {
        rel: 'stylesheet',
        href: '/assets/plugins/global/plugins.bundle.css?v=7.0.4'
      },

      {
        rel: 'stylesheet',
        href: '/assets/plugins/custom/prismjs/prismjs.bundle.css?v=7.0.4'
      },
      {
        rel: 'stylesheet',
        href: '/assets/css/style.bundle.css?v=7.0.4'
      },
      {
        rel: 'stylesheet',
        href: '/assets/css/themes/layout/header/base/light.css?v=7.0.4'
      },
      {
        rel: 'stylesheet',
        href: '/assets/css/themes/layout/header/menu/light.css?v=7.0.4'
      },
      {
        rel: 'stylesheet',
        href: '/assets/css/themes/layout/brand/dark.css?v=7.0.4'
      },
      {
        rel: 'stylesheet',
        href: '/assets/css/themes/layout/aside/dark.css?v=7.0.4'
      },
      {
        rel: 'stylesheet',
        href: '/assets/owlcarousel/dist/owl.carousel.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/owlCarousel/assets/owl.theme.default.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/owlCarousel/assets/owl.carousel.css'
      },
      {
        rel: 'stylesheet',
        href: '/aos/dist/aos.css'
      },
      {
        rel: 'stylesheet',
        href: '/assets/css/custom.scss'
      },
      {
        rel: 'stylesheet',
        href: '/assets/plugins/custom/datatables/datatables.bundle.css?v=7.0.4'
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/aos@next/dist/aos.css"
      },

    ],
    script: [
      {
        src: '/assets/plugins/global/plugins.bundle.js?v=7.0.4',
        body: true
      },
      {
        src: '/assets/plugins/custom/prismjs/prismjs.bundle.js?v=7.0.4',
        body: true
      },
      {
        src: '/assets/js/scripts.bundle.js?v=7.0.4',
        body: true
      },
      {
        src: '/assets/plugins/custom/fullcalendar/fullcalendar.bundle.js?v=7.0.4',
        body: true
      },
      {
        src: '/assets/js/pages/widgets.js?v=7.0.',
        body: true
      },
      {
        src: '/assets/js/metronic.js',
        body: true
      },
      {
        src: '/assets/js/initialize.js',
        body: true
      },
      {
        src: '/owlCarousel/owl.carousel.min.js',
        body: true
      },
      {
        src: '/assets/plugins/custom/datatables/datatables.bundle.js?v=7.0.4',
        body: true
      },
      {
        src: '/assets/js/pages/crud/datatables/basic/scrollable.js?v=7.0.4',
        body: true
      },
      {
        src: 'https://unpkg.com/aos@next/dist/aos.js',
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


  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/aos.js", ssr: "false" },
    { src: '~/plugins/axios' },
    { src: '~/plugins/moment.js', ssr: false },
    { src: '~/plugins/vee-val.ts', ssr: false },
    { src: '~/plugins/persistedState.client.js' },
    { src: '~plugins/numericValue.ts', ssr: false },
  ],
  purgeCSS: {
    whitelist: ["aos-init", "aos-animate", "data-aos-delay", "data-aos-duration", "fade-up", "zoom-in"],
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build',
    'nuxt-typed-vuex',
    '@nuxtjs/dotenv'


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
    standalone: true
  }
}
