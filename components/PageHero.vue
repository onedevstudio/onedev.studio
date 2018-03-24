<template>
  <div class="PageHero">
    <meta-tags/>
    <div class="PageHero__inner" itemscope itemtype="http://schema.org/Organization">
      <h2 class="PageHero__lead">
        Um estúdio de <nuxt-link to="/">Design</nuxt-link>, <nuxt-link to="/">Front-end</nuxt-link> e <nuxt-link to="/">Desenvolvimento WordPress</nuxt-link>.
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
    max-width 1260px
    +above(tablet)
      padding spacingBig
  &__lead
    font-weight 700
    font-size 30px
    line-height 1.2
    color #fff
    margin 0
    +above(mobileLarge)
      font-size 48px
    +above(tablet)
      font-size 56px
    +above(tabletLarge)
      font-size 78px
    strong
      font-weight 700
      color primaryColor
  &__buttons
    text-align center
    .button:first-child
      margin spacingSmall
</style>
