const webpack = require('webpack')
const pkg = require('./package')

export const isProduction = process.env.NODE_ENV === 'production'
export const baseUrl = isProduction
  ? 'http://onedev.studio'
  : 'http://localhost:3000'

module.exports = {
  mode: 'universal',
  dev: !isProduction,
  head: {
    htmlAttrs: {
      dir: 'ltr',
      lang: 'pt-br'
    },
    title: `Onedev.studio`,
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'og:locale', content: 'pt_BR' },
      { 'http-equiv': 'Content-Language', content: 'pt-br' },
      { name: 'googlebot', content: 'index,follow' },
      { name: 'robots', content: 'index,follow,noodp' },
      { name: 'country', content: 'Brazil' },
      { name: 'revisit-after', content: '7 days' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'generator', content: 'Visual Studio Code - Insiders' }
    ],
    link: [
      { rel: 'author', href: `${baseUrl}/humans.txt` },
      { rel: 'index', href: `${baseUrl}/` },
      { rel: `shortcut icon`, href: `${baseUrl}/icon.png`, type: `image/png` }
    ]
  },
  loading: { color: '#3b8070' },
  css: [],
  plugins: [
    { src: '~/plugins/plugins' },
    { src: '~/plugins/browser', ssr: false }
  ],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  workbox: {
    dev: !isProduction
  },
  build: {
    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          stylus: {
            use: [require('rupture')()],
            preferPathResolver: 'webpack',
            import: [
              '~assets/stylus/config.styl',
              '~assets/stylus/placeholders.styl',
              '~assets/stylus/mixins.styl'
            ]
          },
          context: '/'
        }
      })
    ],
    extend (config, { isDev, isClient }) {
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
  }
}
