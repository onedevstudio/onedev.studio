const { resolve } = require('path')
const webpack = require('webpack')

const debug = process.env.DEBUG === 'true'
const isProd = process.env.NODE_ENV === 'production' && !debug
const baseUrl = isProd ? `https://onedev.studio` : 'http://localhost:3000'
const siteName = 'Onedev.studio'
const shortDescription = 'Um estúdio de Design, Front-end e Desenvolvimento WordPress.'
const description = `${shortDescription} em Curitiba Paraná, desenvolvimento JavaScript e WordPress`
const themeColor = '#435466'

module.exports = {
  dev: !isProd,
  env: {
    isProd,
    baseUrl,
    siteName,
    shortDescription,
    description
  },
  head: {
    title: `${siteName} - ${shortDescription}`,
    htmlAttrs: {
      lang: 'pt-BR'
    },
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: `${description}` },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, minimum-scale=1.0, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes' },
      { name: 'og:locale', content: 'pt_BR' },
      { name: 'googlebot', content: 'index,follow' },
      { name: 'robots', content: 'index,follow,noodp' },
      { name: 'theme-color', content: `${themeColor}` },
      { name: 'country', content: 'Brazil' },
      { name: 'revisit-after', content: '7 days' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'application-name', content: `${siteName}` },
      { name: 'generator', content: 'Visual Studio Code v1.17' }
    ],
    link: [
      { rel: 'author', href: '/humans.txt' },
      { rel: 'me', href: 'nandomoreira.me@gmail.com' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { hid: 'canonical', rel: 'canonical', href: `${baseUrl}` }
    ]
  },
  loading: {
    color: `${themeColor}`,
    height: `5px`
  },
  plugins: [
    { src: '~/plugins/browser.js', ssr: false },
    { src: '~/plugins/plugins.js', ssr: false }
  ],
  modules: [
    ['@nuxtjs/google-analytics'],
    '@nuxtjs/sitemap',
    '@nuxtjs/pwa'
  ],
  build: {
    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          stylus: {
            use: [
              require('rupture')()
            ],
            preferPathResolver: 'webpack',
            import: [
              '~stylus/variables.styl',
              '~stylus/mixins.styl',
              '~stylus/placeholders.styl'
            ]
          },
          context: '/'
        }
      })
    ],
    extend (config, { isDev, isClient }) {
      config.resolve.alias['stylus'] = resolve(__dirname, 'stylus')
      config.devtool = 'source-map'

      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  'google-analytics': {
    id: 'UA-116228262-1',
    debug: {
      enabled: !isProd,
      track: !isProd,
      sendHitTask: isProd
    }
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: `${baseUrl}`,
    cacheTime: 1000 * 60 * 150,
    generate: true
  }
}
