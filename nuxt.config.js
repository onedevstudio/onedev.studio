const webpack = require('webpack')

const env = process.env.NODE_ENV || 'development'
const isProd = env === 'production'
const baseUrl = isProd ? `https://onedev.studio` : 'http://localhost:3000'
const siteName = 'Onedev.studio'
const shortDescription = 'Um estúdio de Design, Front-end e Desenvolvimento WordPress'
const description = `${shortDescription} em Curitiba Paraná, desenvolvimento JavaScript e WordPress Curitiba`
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
      { name: 'googlebot', content: 'index,follow' },
      { name: 'robots', content: 'index,follow,noodp' },
      { name: 'theme-color', content: `${themeColor}` },
      { name: 'country', content: 'Brazil' },
      { name: 'revisit-after', content: '7 days' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'application-name', content: `${siteName}` },
      { name: 'generator', content: 'Visual Studio Code - Insiders' }
    ],
    link: [
      { rel: 'author', href: `${baseUrl}/humans.txt` },
      { rel: 'me', href: 'nandomoreira.me@gmail.com' },
      { rel: 'icon', type: 'image/x-icon', href: `${baseUrl}/favicon.ico` },
      { hid: 'canonical', rel: 'canonical', href: `${baseUrl}` }
    ]
  },
  loading: false,
  plugins: [
    { src: '~/plugins/browser.js', ssr: false },
    { src: '~/plugins/plugins.js', ssr: false }
  ],
  modules: [
    ['@nuxtjs/google-analytics'],
    // ['@nuxtjs/component-cache', {
    //   max: 10000,
    //   maxAge: 1000 * 60 * 60
    // }],
    '@nuxtjs/sitemap'
    // '@nuxtjs/pwa'
  ],
  build: {
    publicPath: '/app/',
    plugins: [
      new webpack.DefinePlugin({
        'process.VERSION': require('./package.json').version
      }),
      new webpack.LoaderOptionsPlugin({
        options: {
          stylus: {
            use: [
              require('rupture')()
            ],
            preferPathResolver: 'webpack',
            import: [
              '~assets/stylus/variables.styl',
              '~assets/stylus/mixins.styl',
              '~assets/stylus/placeholders.styl',
              '~assets/stylus/base.styl'
            ]
          },
          context: '/'
        }
      })
    ],
    extend (config, { isDev, isClient }) {
      if (isClient) {
        config.devtool = 'eval-source-map'
      }

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
