<template>
  <div class="Error404 flex flex--centered">
    <MetaTags :title="pageTitle" :description="pageDescription" :url="pageUrl"/>
    <div class="Error404__inner">
      <h1 class="Error404__title">Ops! Erro 404</h1>
      <p class="Error404__lead">
        Essa página não existe.
        <br/>
        É provável que essa página não exista mais, nunca existiu, ou está acessível por outro endereço.
      </p>
      <nuxt-link class="button button--ghost" to="/">Voltar</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Error404',
    data () {
      return {
        pageTitle: `Erro 404 - Página não encontrada | ${this.$store.state.title}`,
        pageDescription: `Página não encontrada | ${this.$store.state.description}`,
        pageUrl: `${this.$store.state.baseUrl}/404`
      }
    },
    components: {
      MetaTags: () => import('~/components/MetaTags')
    }
  }
</script>

<style lang="stylus">
.Error404
  background url("~/assets/images/hero-cover.png") no-repeat center center
  background-size cover
  text-align center
  &__inner
    max-width 960px
    margin 0 auto
  &__title
    font-size 5.625rem
    line-height 1
    color #fff
    font-weight 900
    margin 0
    padding 0
    text-transform uppercase
  &__lead
    font-weight 300
    font-size 2rem
    color #fff
</style>
