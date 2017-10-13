module.exports = {
  srcDir: 'src/',
  dev: (process.env.NODE_ENV !== 'production'),
  head: {
    title: 'OneDev studio - Um estúdio de desenvolvimento web de um homem só',
    htmlAttrs: {
      lang: 'pt-BR'
    },
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: 'Um estúdio de desenvolvimento web de um homem só em Curitiba Paraná, desenvolvimento JavaScript e WordPress' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, minimum-scale=1.0, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes' },
      { name: 'og:locale', content: 'pt_BR' },
      { name: 'googlebot', content: 'index,follow' },
      { name: 'robots', content: 'index,follow,noodp' },
      { name: 'theme-color', content: '#4DBA87' },
      { name: 'country', content: 'Brazil' },
      { name: 'revisit-after', content: '7 days' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'application-name', content: 'Fernando Moreira | Front-end / UX Designer' },
      { name: 'generator', content: 'Visual Studio Code v1.17' },
      // Meta for Facebook
      { property: 'og:title', content: 'OneDev studio - Um estúdio de desenvolvimento web de um homem só' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://onedevstudio.github.io/share.png' },
      { property: 'og:description', content: 'Um estúdio de desenvolvimento web de um homem só em Curitiba Paraná, desenvolvimento JavaScript e WordPress' },
      { property: 'og:url', content: 'https://onedevstudio.github.io/' },
      // Meta for Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@OnedevStudioweb' },
      { name: 'twitter:creator', content: '@oseunando' },
      { name: 'twitter:title', content: 'OneDev studio - Um estúdio de desenvolvimento web de um homem só' },
      { name: 'twitter:description', content: 'Um estúdio de desenvolvimento web de um homem só em Curitiba Paraná, desenvolvimento JavaScript e WordPress' },
      { name: 'twitter:image', content: 'https://onedevstudio.github.io/share.png' }
    ],
    link: [
      { rel: 'me', href: 'nandomoreira.me@gmail.com' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://onedevstudio.github.io/' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,700' }
    ]
  },
  loading: { color: '#4DBA87' },
  build: {
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
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
