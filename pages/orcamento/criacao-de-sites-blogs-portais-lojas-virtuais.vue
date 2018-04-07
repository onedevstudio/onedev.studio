<template>
  <div class="Budget">
    <MetaTags :title="pageTitle" :description="pageDescription" :url="pageUrl"/>
    <div class="container">
      <h1 class="Budget__title">
        <span>
          <nuxt-link to="/" class="Budget__back">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="20" y1="12" x2="4" y2="12"/>
              <polyline points="10 18 4 12 10 6"/>
            </svg>
          </nuxt-link>
          Orçamento <nuxt-link to="/">Onedev.studio</nuxt-link>
          <small v-html="`Briefing para criação de sites, blogs, portais, lojas virtuais e aplicações web`"/>
        </span>
      </h1>
    </div>

    <form name="budget" netlify netlify-honeypot="bot-field" hidden>
      <input name="bot-field"/>
      <input type="text" name="name"/>
      <input type="email" name="email"/>
      <input type="text" name="project_name"/>
      <input type="text" name="site_address"/>
      <input type="checkbox" name="services[]" value="Remodelar meu site atual"/>
      <input type="checkbox" name="services[]" value="Hotsite/Landing page (tela única)"/>
      <input type="checkbox" name="services[]" value="Site Institucional"/>
      <input type="checkbox" name="services[]" value="E-commerce/Loja Virtual"/>
      <input type="checkbox" name="services[]" value="Blog/Site de notícias"/>
      <input type="checkbox" name="services[]" value="Design (PSD, sketch) para HTML"/>
      <input type="checkbox" name="services[]" value="Design (PSD, sketch) para WordPress"/>
      <input type="checkbox" name="services[]" value="HTML para WordPress"/>
      <input type="checkbox" name="services[]" value="Consultoria Design/Desenvolvimento"/>
      <input type="checkbox" name="services[]" value="Outros serviços"/>
      <textarea name="notes"></textarea>
    </form>

    <no-ssr>
      <lazy-component>
        <budget-form/>
      </lazy-component>
    </no-ssr>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        pageTitle: `Orçamento | ${this.$store.state.title}`,
        pageDescription: `Faça o seu orçamento sem compromisso preenchendo o Briefing para criação de sites, blogs, portais, lojas virtuais e aplicações web | ${this.$store.state.title}`,
        pageUrl: `${this.$store.state.baseUrl}/orcamento`
      }
    },
    components: {
      MetaTags: () => import('~/components/MetaTags'),
      BudgetForm: () => import('~/components/BudgetForm')
    }
  }
</script>

<style lang="stylus">
body,
.Budget
  background-color secondaryColor
.Budget
  padding-top 100px
  padding-bottom 100px
  @extend $clearfix
  .container--small
    max-width 650px
  &__title
    font-size 2.625rem
    line-height 1
    font-weight 900
    margin 0
    padding spacingLarge spacingBase
    text-align center
    text-transform uppercase
    display flex
    width 100%
    justify-content center
    align-items center
    line-height 1.4
    @extend $clearfix
    &, a
      color #fff
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
      color rgba(#fff, .65)
      font-weight 500
      font-size 1.5rem
</style>
