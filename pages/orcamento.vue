<template>
  <div class="Budget">
    <MetaTags :title="pageTitle" :description="pageDescription" :url="pageUrl"/>
    <div class="container--small">
      <h1 class="Budget__title">
        <span>
          <nuxt-link to="/" class="Budget__back">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#435466" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="20" y1="12" x2="4" y2="12"/>
              <polyline points="10 18 4 12 10 6"/>
            </svg>
          </nuxt-link>
          Orçamento <nuxt-link to="/">Onedev.studio</nuxt-link>
          <small v-html="`{{ Briefing para criação de sites, blogs, portais, lojas virtuais e aplicações web }}`"/>
        </span>
      </h1>
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
        pageDescription: `Faça o seu orçamento sem compromisso preenchendo o Briefing para criação de sites, blogs, portais, lojas virtuais e aplicações web | ${this.$store.state.title}`,
        pageUrl: `${this.$store.state.baseUrl}/orcamento`
      }
    },
    components: {
      MetaTags: () => import('~/components/MetaTags'),
      BudgetForm: () => import('~/components/Budget/Form')
      // GForm: () => import('~/components/GForm')
    }
  }
</script>

<style lang="stylus">
.Budget
  &__title
    font-size 2.625rem
    line-height 1
    font-weight 900
    margin 0
    padding spacingLarge spacingBase
    text-align center
    text-transform uppercase
    color #435466
    display flex
    width 100%
    justify-content center
    align-items center
    line-height 1.4
    @extend $clearfix
    span
      position relative
    &__back
      display inline-block
      vertical-align middle
      line-height 1
      padding 0 spacingSmall
      margin 0 .3125rem
      position absolute
      left 10px
      top 10px
      svg
        display inline-block
        line-height 1
        padding 0
    small
      display block
      text-transform none
      color rgba(#000, .5)
      font-weight 500
      font-size 1.5rem
  &__iframe
    position fixed
    display block
    z-index 50
    width 100%
    height calc(100vh - 80px)
    top 80px
</style>
