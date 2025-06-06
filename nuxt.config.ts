// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/helpers" as *; '
        }
      }
    }
  },

  alias: {
    '@': '/<rootDir>',
  },

  modules: ['@nuxt/image']
})