import axios from "axios";

// console.info(`Endpoint: ${process.env.BASE_URL}`);
// console.info(`Website url: ${process.env.WEBSITE_URL}`);

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  // mode: "universal",

  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",

  webfontloader: {
    custom: {
      families: ["Roboto:n3", "Cormorant+Garamond:n3"],
      urls: [
        // for each Google Fonts add url + options you want
        // here add font-display option
        "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;1,300&display=swap",
        "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300&display=swap"
      ]
    }
    // google: {
    //   families: [
    //     "Cormorant+Garamond:ital,wght@0,300;1,300&display=swap",
    //     "Roboto:ital,wght@0,300;1,300&display=swap"
    //   ]
    // },
    // custom: {
    //   families: ["brandon-grotesque"],
    //   urls: ["https://use.typekit.net/chs6rdt.css"]
    // }
  },

  /*
   ** Headers of the page
   */
  head: {
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      }
    ]
    // noscrip: [{ href: "/js/noscript.html" }],
    // script: [
    //   {
    //     src:
    //       "https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver",
    //     body: true
    //   }
    // ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: [
    {
      src: "@/assets/styles/index.scss",
      lang: "scss"
    }
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "@/plugins/util",
    { src: "@/plugins/lazysizes.client.js", mode: "client" },
    { src: "@/plugins/vue-scroll-reveal", mode: "client" },
    { src: "@/plugins/ga", mode: "client" },
    //{ src: "@/plugins/v-waypoint.js", mode: "client" },
    { src: "@/plugins/vue-select.js", mode: "client" },
    { src: "@/plugins/etscrip.js", mode: "client", body: true },
    { src: "@/plugins/vue-calendly.js", mode: "client" }
  ],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/gtm", "@aceforth/nuxt-optimized-images"],

  gtm: {
    id: "GTM-MC42CM7",
    scriptDefer: true
  },

  optimizedImages: {
    optimizeImages: true
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    "nuxt-webfontloader",
    "@nuxtjs/axios",
    "vue-social-sharing/nuxt",
    "@nuxtjs/sitemap",
    '@nuxtjs/component-cache',
    "@nuxtjs/robots",
    [
      "nuxt-facebook-pixel-module",
      {
        /* module options */
        // track: "PageView",
        pixelId: "2639218009732786",
        disabled: false
      }
    ]
  ],

  router: {
    middleware: "redirections"
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.BASE_URL || "http://sc-api.inconstruction.website",
    credentials: false
  },

  generate: {
    routes: async () => {
      const { data } = await axios.get(
        process.env.BASE_URL + "/api/v2/pages?status=published"
      );

      return data["hydra:member"].map(page => "/" + page.slug);
    }
  },

  sitemap: {
    hostname: process.env.WEBSITE_URL,
    trailingSlash: true,
    defaults: {
      priority: 0.8,
      lastmod: new Date()
    },
    exclude: [
      "/magazine-category",
      "/thankyou",
      "/index",
      "/our-service",
      "/about",
      "/membership",
      "/goodbye",
      "/cookies",
      "/policy",
      "/terms",
      "/appointment"
    ],
    routes: async () => {
      // By default, the dynamic routes are ignored by the sitemap module
      let articles = [];
      let pages = [];

      try {
        const { data } = await axios.get(
          process.env.BASE_URL + "/api/v2/articles?status=published"
        );

        articles = data["hydra:member"].map(a => {
          return { url: "/magazine/" + a.slug, priority: 0.8 };
        });
      } catch (err) {
        return;
      }

      try {
        const { data } = await axios.get(
          process.env.BASE_URL + "/api/v2/pages?inSitemap=true&status=published"
        );

        pages = data["hydra:member"].map(p => {
          return { url: "/" + p.slug, priority: 0.8 };
        });
      } catch (err) {
        return;
      }

      return [
        {
          url: "/",
          priority: 1
        },
        ...pages,
        ...articles
      ];
    }
  },

  robots: async () => {
    try {
      const { data } = await axios.get(
        process.env.BASE_URL + "/api/v2/get-robots"
      );

      return data;
    } catch (err) {
      return;
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient, loaders: { vue } }) {
      //if (isClient) {
      vue.transformAssetUrls.img = ["data-src", "src"];
      vue.transformAssetUrls.source = ["data-srcset", "srcset"];
      //}
    }
  },

  vue: {
    html: {
      query: { attrs: "img:src img:data-src" }
    }
  },

  env: {
    APP_NAME: "Sienna Charles Website",
    BASE_URL: process.env.BASE_URL,
    WEBSITE_URL: process.env.WEBSITE_URL,
    CLIENT_PORTAL_URL: process.env.CLIENT_PORTAL_URL,
    SITE_KEY: process.env.SITE_KEY
  }
};
