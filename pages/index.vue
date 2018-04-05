<template>
  <div class="PageHero flex flex--bottom flex--full bg">
    <meta-tags/>
    <div class="PageHero__inner" itemscope itemtype="http://schema.org/Organization">
      <h2 class="PageHero__lead">
        Somos um estúdio de produção digital com foco em
        <span>Front-end</span> e <span>desenvolvimento WordPress</span>.
      </h2>
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
  position relative
  max-height inherit
  &__inner
    display block
    vertical-align bottom
    padding spacingBase
    max-width 64rem /* 1024/16 */
    +above(tablet)
      padding spacingBig
  &__lead
    font-weight 700
    font-size 30px
    line-height 1.2
    color #fff
    margin 0
    +above(mobileLarge)
      font-size 42px
    +above(tablet)
      font-size 46px
    +above(tabletLarge)
      font-size 50px
    span
      font-weight 700
      color lighten(primaryColor, 15%)
      text-decoration underline
</style>
