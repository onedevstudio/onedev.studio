<template>
  <nuxt/>
</template>

<script>
  export default {
    name: 'Default'
  }
</script>

<style lang="stylus">
html
  font-family: sans-serif
  font-size 16px
  word-spacing 1px
  -ms-text-size-adjust 100%
  -webkit-text-size-adjust 100%
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  box-sizing border-box

*, *:before, *:after
  box-sizing inherit
  margin 0

body
  font-family fontFamily
  background-color #fef8f0
  line-height 1.6
  font-weight 400
  font-size 1rem

html,
body,
#__nuxt,
#__layout,
.flex
  width 100%
  height 100%

h1, h2, h3, h4, h5, h6, p
  margin 0
  &:not(:last-child)
    margin-bottom  spacingSmall

h1
  font-size 2rem

h2
  font-size 1.75rem

h3
  font-size 1.5rem

h4
  font-size 1.25rem

h5, h6
  font-size 1.125rem

a
  color lighten(primaryColor, 10%)
  &:hover,
  &:focus
    color lighten(primaryColor, 20%)

code,
pre
  font-family: monospace, serif
  font-size: 1em

pre
  white-space: pre
  white-space: pre-wrap
  word-wrap: break-word

small
  font-size: 80%

button,
input,
select,
textarea
  font-family: inherit
  font-size: 100%
  margin: 0

textarea
  vertical-align: top

table
  border-collapse: collapse
  border-spacing: 0

.container
  max-width 1260px
  margin-left auto
  margin-right auto

.button
  display inline-block
  border-radius .25rem
  border .1875rem solid transparent
  text-decoration none
  font-size 1.2rem
  line-height 2.5rem
  padding 0 2.4rem
  appearance none
  text-transform uppercase
  font-weight 700
  transition .2s background-color timingFunction, .2s border-color timingFunction, .2s color timingFunction
  &--ghost
    border-color primaryColor
    color primaryColor
    background-color transparent
  &--primary
    background-color primaryColor
    color #fff
    &:hover
      background-color darken(primaryColor, 15%)
  &--secondary
    background-color secondaryColor
    color #fff
    &:hover
      background-color lighten(secondaryColor, 10%)

.visually-hidden
  position absolute
  border 0
  clip rect(0, 0, 0, 0)
  width 1px
  height 1px
  margin -1px
  padding 0
  overflow hidden

.form
  &,
  &__group,
  &__input
    display block
    width 100%
  &__group:not(:last-child)
    margin-bottom spacingSmall
  &__input
    border 1px solid #fff
    line-height 60px
    padding 0 spacingBase
    background-color #fff

.flex
  display flex
  &--centered
    align-items center
    justify-content center
</style>
