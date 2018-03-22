const { resolve } = require('path')
const webpack = require('webpack')

const debug = process.env.DEBUG === 'true'
const isProd = process.env.NODE_ENV === 'production' && !debug
const baseUrl = isProd ? `https://onedev.studio` : 'http://localhost:3000'
const title = 'Onedev.studio'
const shortDescription = 'Design, Front-end e Desenvolvimento web'
const description = 'Um estúdio de desenvolvimento web de um homem só em Curitiba Paraná, desenvolvimento JavaScript e WordPress'
const themeColor = '#4dba87'
const imageShare = `${baseUrl}/share.png`

module.exports = {
  dev: !isProd,
  env: {
    isProd,
    baseUrl,
    title,
    shortDescription,
    description,
    imageShare
  },
  head: {
    title: `${title} - ${shortDescription}`,
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
      { name: 'application-name', content: `${title}` },
      { name: 'generator', content: 'Visual Studio Code v1.17' },
      // Meta for Facebook
      { hid: 'og:title', property: 'og:title', content: `${title} - ${shortDescription}` },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:description', property: 'og:description', content: `${description}` },
      { hid: 'og:url', property: 'og:url', content: `${baseUrl}` },
      { hid: 'og:image', property: 'og:image', content: `${imageShare}` },
      // Meta for Twitter
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@onedevstudioweb' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@oseunando' },
      { hid: 'twitter:title', name: 'twitter:title', content: `${title} - ${shortDescription}` },
      { hid: 'twitter:description', name: 'twitter:description', content: `${description}` },
      { hid: 'twitter:image', name: 'twitter:image', content: `${imageShare}` },
      { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: `${title} - ${shortDescription}` }
    ],
    link: [
      { rel: 'author', href: '/humans.txt' },
      { rel: 'me', href: 'nandomoreira.me@gmail.com' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { hid: 'canonical', rel: 'canonical', href: `${baseUrl}` }
    ]
  },
  loading: { color: `${themeColor}` },
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
  }
}
