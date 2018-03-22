<template>
  <div class="Budget">
    <MetaTags :title="pageTitle" :description="pageDescription" :url="pageUrl"/>
    <h1 class="Budget__title">
      <nuxt-link to="/" class="arrow-back">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#435466" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="20" y1="12" x2="4" y2="12"/>
          <polyline points="10 18 4 12 10 6"/>
        </svg>
      </nuxt-link>
      <span>Orçamento</span>
    </h1>
    <div class="container">
      <budget-form/>
    </div>
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
      MetaTags: () => import('~/components/MetaTags'),
      BudgetForm: () => import('~/components/BudgetForm')
      // GForm: () => import('~/components/GForm')
    }
  }
</script>

<style lang="stylus">
.Budget
  &__title
    font-size 3rem
    line-height 1
    font-weight 900
    margin 0
    padding 0
    text-align center
    text-transform uppercase
    color #435466
    display flex
    width 100%
    justify-content center
    align-items center
    height 80px
    a, span
      display inline-block
      vertical-align middle
      margin 0 .3125rem
  &__iframe
    position fixed
    display block
    z-index 50
    width 100%
    height calc(100vh - 80px)
    top 80px
</style>
