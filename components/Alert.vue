<template>
  <div :class="`alert alert--${$store.state.alert.type}`" v-if="$store.state.alert.message">
    <p>{{ $store.state.alert.message }}</p>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="stylus">
.alert
  padding spacingSmall
  margin-bottom spacingBase
  border none
  p
    font-size 1rem
    font-weight 500
  &--default
    background-color darken(#fff, 10%)
    color rgba(#000, .7)
  &--success
    background-color lighten(brandSuccess, 80%)
    color darken(brandSuccess, 20%)
  &--error
    background-color lighten(brandDanger, 80%)
    color darken(brandDanger, 20%)
</style>
