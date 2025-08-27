// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: "2025-08-25", // hilangkan warning Nitro
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/google-fonts",
  ],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
  colorMode: {
    classSuffix: "",
    preference: "dark",
    fallback: "dark",
  },
  googleFonts: {
    families: {
      Sora: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800],
      },
      Manrope: {
        wght: [200, 300, 400, 500, 600, 700, 800],
      },
    },
    display: "swap",
    prefetch: true,
    preconnect: true,
  },
  image: {
    dir: "assets",
    provider: "ipx",
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    presets: {
      logo: {
        modifiers: {
          format: "webp",
          fit: "contain",
          quality: "90",
        },
      },
    },
  },
});
