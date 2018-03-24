<template>
  <header class="PageHeader">
    <div class="PageHeader__inner">
      <h1 class="PageHeader__logo" itemprop="name">
        <nuxt-link to="/">{{ $store.state.siteName }}</nuxt-link>
      </h1>
      <navbar/>
    </div>
  </header>
</template>

<script>
  export default {
    components: {
      Navbar: () => import('~/components/Navbar')
    }
  }
</script>

<style lang="stylus">
.PageHeader
  .PageHeader__logo
    float left
    position relative
    font-size 1.375rem
    z-index 10001
    pointer-events all
    background-color transparent
    position fixed
    z-index 100
    top spacingSmall
    left spacingBase
    +above(tablet)
      left spacingBig
    a
      color #fff
      text-decoration none
      line-height 90px
      display inline-block
</style>
