require("dotenv").config();
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Nuxt-JWT",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    "@nuxtjs/pwa",
    "bootstrap-vue/nuxt"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "ja"
    }
  },
  auth: {
    redirect: {
      login: "/login",
      logout: "/login",
      callback: "/",
      home: "/"
    },
    cookie: {
      prefix: "auth.",
      options: {
        path: "/",
        expires: 365
      }
    },
    strategies: {
      local: {
        token: {
          property: "token"
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: false
          // autoFetch: true
        },
        endpoints: {
          login: {
            url: "/login",
            method: "post"
            // properryName: "token"
          },
          logout: {
            url: "/logout",
            method: "post"
          },
          user: {
            url: "/me",
            method: "get"
          }
        }
        // tokenRequired: true,
        // tokenName: "Authorization",
        // tokenType: "Bearer", //Bearer
        // sameSite: "None",
        // Secure: true
      }
    }
    // plugins: ["~/plugins/auth-lang-redirect"]
  },
  bootstrapVue: {
    icons: false
  },
  axios: {
    baseURL: process.env.END_POINT,
    timeout: 10000
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
