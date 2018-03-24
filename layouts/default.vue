<template>
  <div>
    <PageHeader/>
    <div class="flex flex--bottom flex--full bg">
      <nuxt/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Default',
    components: {
      PageHeader: () => import('~/components/PageHeader')
    }
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
  max-width containerWidth
  &, &--small
    @extend $container
  &--small
    max-width containerWidthSmall

.button
  @extend $button
  &--ghost
    border-color primaryColor
    color primaryColor
    background-color transparent
  &--default
    background-color darken(#fff, 10%)
    color secondaryColor
    &:hover
      color secondaryColor
      background-color darken(#fff, 15%)
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
  &__label,
  &__field,
  &__fieldset
    display block
    width 100%
  &__fieldset
    padding spacingSmall spacingSmall spacingBase
    border 1px solid rgba(#000, .1)
    margin-bottom spacingLarge
    background-color #fff
    border-radius .3125rem
    box-shadow 0px 6px 12px 4px rgba(#000, .05)
    @extend $clearfix
  &__legend
    border none
    padding spacingMini spacingSmall
    background-color primaryColor
    border-radius .3125rem
    color #fff
    font-size 1.125rem
    position relative
    font-weight 500
    display block
    width 100%
  &__label
    margin-bottom spacingMini
    cursor pointer
    font-weight 700
  &__group:not(:last-child)
    margin-bottom spacingBase
  &__field
    border 2px solid #cfd9db
    line-height 46px
    padding 0 spacingSmall
    background-color #fff
    appearance none
    border-radius 0
    box-shadow none
    transition border-color .2s timingFunction
    border-radius .3125rem
    &:focus
      outline 0
      border-color #2c97de
      box-shadow none
  &__hidden
    display none
  small
    color rgba(#000, .65)
    font-weight 500
  &__list
    list-style none
    padding 0
    margin 0
    li
      display block
      position relative
      user-select none
      margin 0 26px 16px 0
    label
      cursor pointer
    input[type="radio"],
    input[type="checkbox"]
      position absolute
      left 0
      top 50%
      transform translateY(-50%)
      margin 0
      padding 0
      opacity 0
      z-index 2

    input[type="radio"] + label,
    input[type="checkbox"] + label
      padding-left 24px

    input[type="radio"] + label:before,
    input[type="radio"] + label:after,
    input[type="checkbox"] + label:before,
    input[type="checkbox"] + label:after
      content ''
      display block
      position absolute
      left 0
      top 50%
      margin-top -8px
      width 16px
      height 16px

    input[type="radio"] + label:before,
    input[type="checkbox"] + label:before
      border 1px solid #cfd9db
      background #fff
      box-shadow inset 0 1px 1px rgba(0, 0, 0, .08)

    input[type="radio"] + label:before,
    input[type="radio"] + label:after
      border-radius 50%

    input[type="checkbox"] + label:before,
    input[type="checkbox"] + label:after
      border-radius .25em

    input[type="radio"] + label:after,
    input[type="checkbox"] + label:after
      background-color #2c97de
      background-position center center
      background-repeat no-repeat
      box-shadow 0 0 5px rgba(44, 151, 222, .4)
      display none

    input[type="radio"] + label:after
      background-image url("~/assets/images/icon-radio.svg")

    input[type="checkbox"] + label:after
      background-image url("~/assets/images/icon-check.svg")

    input[type="radio"]:focus+label:before,
    input[type="checkbox"]:focus+label:before
      box-shadow 0 0 5px rgba(44, 151, 222, .6)

    input[type="radio"]:checked+label:after,
    input[type="checkbox"]:checked+label:after
      display block

    input[type="radio"]:checked+label:before,
    input[type="radio"]:checked+label:after,
    input[type="checkbox"]:checked+label:before,
    input[type="checkbox"]:checked+label:after
      animation Bounce .3s

  &__alert
    color brandDanger
    cursor pointer

select.form__field
  background-image url("~/assets/images/icon-arrow.svg")
  background-repeat no-repeat
  background-position calc(100% - 20px) 50%

textarea.form__field
  padding-top spacingMini
  min-height 100px
  line-height 1.65
  resize vertical
  overflow auto

.flex
  display flex
  &--centered
    align-items center
    justify-content center
  &--bottom
    display flex
    align-items flex-end
    justify-content flex-start
  &--full
    width 100%
    height 100vh

.bg
  background darken(secondaryColor, 25%) url("~/assets/images/hero-cover.png") no-repeat 50%
  background-size cover

@keyframes Bounce
  0%, 100%
    transform scale(1)
  50%
    transform scale(.8)
</style>
