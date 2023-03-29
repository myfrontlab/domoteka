import ModulesConfig from '../../classes/config/modules.config'
import Config from '../../classes/config'

// @ts-ignore
export default class DefaultConfig implements Config {
  [x: string]: any

  head = {
    title: 'Домотека',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'Content-Type',
        content: 'text/html; charset=utf-8'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
      {
        name: 'format-detection',
        content: 'address=no'
      },
      {
        name: 'HandheldFriendly',
        content: 'true'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest'
      }
    ]
  }

  env: Record<string, any> = {
    LINK_ADMIN: 'https://partner.domoteka.online',
    DEV_MODE: false
  }

  loading: false = false
  css = [
    '~assets/scss/_bootstrap.scss',
    '~assets/scss/style.scss',
    '~/assets/scss/new-design/styles.scss'
  ]

  styleResources = {
    scss: [
      '~/assets/scss/_mixins.scss',
      '~/assets/scss/_style_resources.scss'
    ]
  }

  plugins: any = [
    '@/plugins/axios',
    '@/plugins/formatters',
    '@/plugins/vue-agile',
    '@/plugins/vue-select',
    {
      src: '@/plugins/vue-carousel',
      ssr: false
    },
    {
      src: '@/plugins/vue-carousel-3d',
      ssr: false
    }
  ]

  components = true
  buildModules = new ModulesConfig([
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module'
  ])

  modules = new ModulesConfig([
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/sentry',
    'bootstrap-vue/nuxt',
    ['nuxt-webfontloader', {
      google: {
        families: ['Rubik:300;400;500;700&display=optional']
      }
    }]
  ])

  axios = {
    baseURL: 'https://domoteka.online/api/'
  }

  bootstrapVue = {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: true, // Or `bvCSS: false`
    usePretranspiled: true
  }

  compilerOptions = {
    types: [
      '@nuxt/types',
      '@nuxtjs/axios'
    ]
  }

  sentry = {
    dsn: 'https://8157169e59fd4a3e8d2baf7f52e3b539@sentry.xn--80ajbekothchmme5j.xn--p1ai/22',
    disabled: false,
    config: {
      environment: 'production',
      normalizeDepth: 7,
      beforeSend (event: any) {
        if (event.level === 'info') {
          return null
        }

        return event
      }
    }
  }

  router = {
    prefetchLinks: false,
    parseQuery (query: string) {
      const queryString = query.replace(/&amp%3B/g, '&')
      return require('qs').parse(queryString)
    },
    stringifyQuery (query: any) {
      const result = require('qs').stringify(query)
      return result ? ('?' + result) : ''
    }
  }

  server = {
    // host: '0',
    host: 'localhost'
    // port: 3000
  }

  build = {
    transpile: ['vue-agile'],
    // @ts-ignore
    extend (config, ctx) {
      if (!ctx.isDev) {
        config.devtool = 'source-map'

        const SentryWebpackPlugin = require('@sentry/webpack-plugin')

        config.plugins?.push(new SentryWebpackPlugin({
          include: '.nuxt/dist/',
          configFile: 'sentry.properties'
        }))
      }
    }
  }
}
