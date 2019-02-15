<template>
  <nuxt />
</template>

<style lang="stylus">
html, body
  width 100%
  height 100%
  overflow-x hidden

html
  font-size 16px
  word-spacing 1px
  -ms-text-size-adjust 100%
  -webkit-text-size-adjust 100%
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  box-sizing border-box

*,
*:before,
*:after
  box-sizing inherit
  margin 0

body
  font-family 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
  font-size 1rem
  background-color #fafafa
  color #323232

.button
  display inline-block
  border-radius .25rem /* 4/16 */
  text-decoration none
  padding .75rem /* 12/16 */ 1.25rem /* 20/16 */
  line-height 1
  border 1px solid transparent
  text-transform uppercase
  transition color .12s ease-in-out,
    background-color .12s ease-in-out,
    border-color .12s ease-in-out
  span, svg
    display inline-block
    vertical-align middle
  span
    margin-right .3125rem /* 5/16 */
  &--green
    color #fff
    border-color #3b8070
    background-color #3b8070
    &:hover
      background-color darken(#3b8070, 10%)
  &--grey
    color #fff
    border-color #35495e
    background-color #35495e
    margin-left .9375rem /* 15/16 */
    &:hover
      background-color darken(#35495e, 10%)
</style>
