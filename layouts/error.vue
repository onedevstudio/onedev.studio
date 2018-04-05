<template>
  <div class="error">
    <div class="container--small">
      <h1 v-text="(error.statusCode === 404) ? 'Página não foi encontrada' : 'Oops, ocorreu um erro'"/>
      <p v-text="(error.statusCode === 404) ? 'Essa página não existe mais ou está acessível por outro endereço.' : 'Por favor espere alguns minutos e tente novamente.'"/>
      <nuxt-link class="button" to="/">Home page</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'blank',
    head () {
      return {
        title: 'Oops, ocorreu um erro',
        meta: [
          { hid: 'description', name: 'description', content: 'Oops, ocorreu um erro. Por favor espere alguns minutos e tente novamente.' }
        ],
        bodyAttrs: {
          class: `page-error`
        }
      }
    }
  }
</script>

<style lang="stylus">
#__nuxt,
#__layout,
body.page-error,
.error
  width 100%
  height 100vh
</style>
