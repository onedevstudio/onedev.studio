<template>
  <div class="PageHero">
    <meta-tags/>
    <div class="PageHero__inner" itemscope itemtype="http://schema.org/Organization">
      <h1 class="PageHero__title" itemprop="name" v-html="`Onedev.studio`"/>
      <p class="PageHero__lead">
        <span v-html="`{{ Design, Front-end e Desenvolvimento web }}`"/>
      </p>
      <div class="PageHero__buttons">
        <nuxt-link to="/contato" class="button button--ghost">Contato</nuxt-link>
        <nuxt-link to="/orcamento" class="button button--secondary">Orçamento</nuxt-link>
      </div>
      <span itemprop="telephone" class="visually-hidden">+55 41 984401163</span>
      <span itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
        <span itemprop="addressLocality" class="visually-hidden">Curitiba</span>
        <span itemprop="addressRegion" class="visually-hidden">Paraná</span>
        <span itemprop="postalCode" class="visually-hidden">81470175</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
      MetaTags: () => import('~/components/MetaTags')
    }
  }
</script>

<style lang="stylus">
.PageHero
  width 100%
  height 100vh
  max-height inherit
  background url("~/assets/images/hero-cover.png") no-repeat center center
  background-size cover
  display flex
  align-items center
  justify-content center
  &__inner
    display block
    vertical-align middle
  &__title
    font-size 120px
    line-height 1
    color #fff
    font-weight 900
    margin 0
    padding 0
    text-align center
    text-transform uppercase
  &__lead
    font-weight 300
    font-size 45px
    color #fff
    text-align center
    text-transform uppercase
  &__buttons
    text-align center
    .button:first-child
      margin spacingSmall
</style>
