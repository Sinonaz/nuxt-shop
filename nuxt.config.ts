// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  devServer: {
    port: 3001
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css'
        }
      ]
    }
  },
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/image', '@nuxt/scripts', '@nuxt/icon'],
  runtimeConfig: {
    token: '',
    public: {
      apiUrl: ''
    }
  },
  icon: {
    customCollections: [
      {
        prefix: 'icons',
        dir: './app/assets/icons'
      }
    ]
  }
})
