export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "redlab",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
      },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/png", href: "/icon.png" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/scss/_reset.scss",
    "~/assets/scss/_variables.scss",
    "~/assets/scss/_mixins.scss",
    "~/assets/scss/default.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/style-resources", "nuxt-gsap-module"],
  gsap: {
    extraPlugins: {
      text: true,
      cssRule: true,
      draggable: false,
      easel: false,
      motionPath: false,
      pixi: false,
      scrollTo: false,
      scrollTrigger: true,
    },
  },
  // Global page transition
  pageTransition: {
    name: "page",
    mode: "out-in",
    css: false,
    enter(el, done) {
      this.$gsap.from(el, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          el.style.transform = "none";
          done();
        },
      });
    },
    leave(el, done) {
      this.$gsap.to(el, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => {
          done();
        },
      });
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    [
      "nuxt-font-loader-strategy",
      {
        ignoreLighthouse: true,
        ignoredEffectiveTypes: ["2g", "slow-2g"],
        fonts: [
          // Font
          {
            fileExtensions: ["ttf"],
            fontFamily: "TTTravels",
            fontFaces: [
              // Font-Face
              {
                preload: true,
                localSrc: ["TTTravels-Regular"],
                src: "@/assets/fonts/TTTravels/TTTravels-Regular",
                fontWeight: 400,
                fontStyle: "normal",
                fontDisplay: "block",
              },
            ],
          },
        ],
      },
    ],
    [
      "nuxt-i18n",
      {
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: "i18n_redirected",
          alwaysRedirect: false,
          fallbackLocale: "ru",
        },
        locales: [
          {
            name: "Russian",
            code: "ru",
            iso: "ru-RU",
            file: "ru-RU.js",
          },
        ],
        lazy: true,
        langDir: "lang/",
        defaultLocale: "ru",
      },
    ],
  ],
  styleResources: {
    scss: ["./assets/scss/*.scss"],
  },
  // server: {
  //   port: 3000,
  //   host: '192.168.31.154',
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
