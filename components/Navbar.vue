<template>
  <nav class="Navbar">
    <button class="Navbar__toggle" :class="{ 'Navbar__toggle--open': $store.state.showNavbar }" @click="$store.commit('TOGGLE_NAVBAR')">
      <span>
        <span class="Navbar__toggle-line"/>
        <span class="Navbar__toggle-line"/>
        <span class="Navbar__toggle-line"/>
      </span>
    </button>
    <ul class="Navbar__nav" :class="{ 'Navbar__nav--open': $store.state.showNavbar }">
      <li class="Navbar__item" v-on:click="closeNavbar">
        <nuxt-link to="/" class="Navbar__link">Home</nuxt-link>
      </li>
      <li class="Navbar__item" v-on:click="closeNavbar">
        <nuxt-link to="/contato" class="Navbar__link">Contato</nuxt-link>
      </li>
      <li class="Navbar__item" v-on:click="closeNavbar">
        <nuxt-link to="/orcamento" class="Navbar__link">Orçamento</nuxt-link>
      </li>
      <li class="Navbar__item" v-on:click="closeNavbar">
        <nuxt-link to="/hospedagem" class="Navbar__link">Hospedagem</nuxt-link>
      </li>
      <li class="Navbar__item">
        <small v-on:click="closeNavbar">
          <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5541984401163">+55 41 98440-1163</a>
        </small>
        <small v-on:click="closeNavbar">
          <a href="https://github.com/onedevstudio">github.com/onedevstudio</a>
        </small>
        <small v-on:click="closeNavbar">
          <a href="https://twitter.com/onedevstudioweb">twitter.com/onedevstudioweb</a>
        </small>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    methods: {
      closeNavbar () {
        this.$store.commit('TOGGLE_NAVBAR')
      }
    }
  }
</script>

<style lang="stylus">
.Navbar
  position fixed
  z-index 100
  top spacingSmall
  right spacingBase
  +above(tablet)
    right spacingBig
  &__nav
    opacity 0
    visibility hidden
    position fixed
    background-color darken(secondaryColor, 25%)
    top 0
    right 0
    bottom 0
    left 0
    text-align right
    overflow-x hidden
    overflow-y scroll
    padding (spacingLarge * 2) spacingSmall spacingLarge
    z-index 1000
    transition all .2s linear
    transition-delay .1s
    display inline-block
    list-style none
    +above(tablet)
      padding (spacingLarge * 2) spacingLarge spacingLarge
    &--open
      opacity 1
      visibility visible
      li
        opacity 1
        transform translate3d(0, 0, 0)
    a
      display inline-block
      position relative
      &:before,
      &:after
        content ''
        display block
        position absolute
        width 0
        height 2px
        transition width .12s linear
        bottom 0
        background-color #fff
      &:before
        left 50%
      &:after
        right 50%
      &:hover,
      &:focus
        &:before,
        &:after
          width 50%
  &__item
    padding 0 spacingBase
    transition opacity .2s linear, transform .2s linear
    transform translate3d(50%, 0, 0)
    opacity 0
    &:nth-child(1)
      transition-delay .2s
    &:nth-child(2)
      transition-delay .35s
    &:nth-child(3)
      transition-delay .4s
    &:nth-child(4)
      transition-delay .5s
    &:last-child
      padding-top spacingSmall
    small
      opacity .85
      font-size 1rem
      margin-bottom 5px
      display block
      color #fff
      a
        text-decoration none
        color #fff
  &__link
    color #fff
    font-size 34px
    letter-spacing -.03em
    text-decoration none
    font-weight 400
    transition color 400ms ease
    line-height 60px
    display inline-block
    padding 0
    margin 0
    position relative
  &__toggle
    background none transparent
    border none
    cursor pointer
    appearance none
    float right
    margin spacingBase .3125rem 0
    padding spacingMini
    line-height 90px
    position relative
    z-index 1001
    display block
    position relative
    top -5px
    +above(tablet)
      top 0
    &:focus
      outline none
    > span
      position relative
      display block
      width 32px
      height 32px
      line-height 1
    &-line
      background-color #fff
      width 100%
      height 2px
      display block
      margin 7px 0
      line-height 1
      position absolute
      transition transform .12s ease-in-out, opacity .12s ease-in-out
      &:nth-child(1)
        top -2px
      &:nth-child(2)
        top 8px
      &:nth-child(3)
        bottom -2px
    &--open
      .Navbar__toggle-line
        &:nth-child(1)
          top 8px
          transform rotate(45deg)
        &:nth-child(2)
          opacity 0
          transform translate3d(100%, 0, 0)
        &:nth-child(3)
          bottom 8px
          transform rotate(-45deg)
</style>
