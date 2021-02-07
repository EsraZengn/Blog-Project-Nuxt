export default {
  mode: "universal",
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "blog-project",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["~assets/styles/main.css"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["~plugins/date-filter.js"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxtjs/axios"],

  axios: {
    baseURL: process.env.BASE_URL || "https://blog-project-nuxt.firebaseio.com",
    credentials: false
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  env: {
    //  baseUrl: process.env.BASE_URL || "https://blog-project-nuxt.firebaseio.com"
  },
  transition: {
    name: "fade",
    mode: "out-in"
  }
};
