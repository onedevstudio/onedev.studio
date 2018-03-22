<template>
  <div class="Budget">
    <MetaTags :title="pageTitle" :description="pageDescription" :url="pageUrl"/>
    <nuxt-link to="/" class="arrow-back">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#435466" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="20" y1="12" x2="4" y2="12"/>
        <polyline points="10 18 4 12 10 6"/>
      </svg>
    </nuxt-link>
    <h1 class="Budget__title">Orçamento</h1>
    <iframe class="Budget__iframe" src="https://docs.google.com/forms/d/e/1FAIpQLSeT9JO1EawQbxq4A1suUXn742pufbqwaoupgkzVYpaVaxcyCA/viewform?embedded=true" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0"/>
  </div>
</template>

<script>
  export default {
    name: 'Budget',
    data () {
      return {
        pageTitle: `Orçamento | ${this.$store.state.title}`,
        pageDescription: `Faça o seu orçamento sem compromisso | ${this.$store.state.description}`,
        pageUrl: `${this.$store.state.baseUrl}/orcamento`
      }
    },
    components: {
      MetaTags: () => import('~/components/MetaTags')
    }
  }
</script>

<style lang="stylus">
.Budget
  &__title
    font-size 4.5rem
    line-height 1
    font-weight 900
    margin 0
    padding 0
    text-align center
    text-transform uppercase
    color #435466
  &__iframe
    position fixed
    display block
    z-index 50
    width 100%
    height calc(100vh - 100px)
    top 100px
.arrow-back
  z-index 100
  position fixed
  top 2rem
  left 2rem
</style>
