// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  imports: {
    dirs: ['interfaces', 'stores']
  },
  devServer: {
    port: 3001
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
    head: {
      title: 'Магазин SHOPPE',
      htmlAttrs: {
        lang: 'ru'
      },
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css'
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon/favicon-32x32.png'
        },
        {
          rel: 'apple-touch-icon',
          type: 'image/png',
          sizes: '48x48',
          href: '/favicon/favicon-48x48.png'
        },
        {
          rel: 'apple-touch-icon',
          type: 'image/png',
          sizes: '72x72',
          href: '/favicon/favicon-72x72.png'
        },
        {
          rel: 'apple-touch-icon',
          type: 'image/png',
          sizes: '96x96',
          href: '/favicon/favicon-96x96.png'
        },
        {
          rel: 'apple-touch-icon',
          type: 'image/png',
          sizes: '256x256',
          href: '/favicon/favicon-256x256.png'
        },
        {
          rel: 'apple-touch-icon',
          type: 'image/png',
          sizes: '384x384',
          href: '/favicon/favicon-384x384.png'
        },
        {
          rel: 'apple-touch-icon',
          type: 'image/png',
          sizes: '512x512',
          href: '/favicon/favicon-512x512.png'
        },
        {
          rel: 'manifest',
          crossorigin: 'anonymous',
          href: '/favicon/manifest.webmanifest'
        }
      ]
    }
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/icon',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/sitemap'
  ],
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
  },
  sitemap: {
    sources: ['/api/sitemap/urls'],
    defaults: {
      lastmod: new Date().toISOString(),
      priority: 0.5,
      changefreq: 'weekly'
    }
  }
})
