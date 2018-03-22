<template>
  <page-hero/>
</template>

<script>
  export default {
    name: 'Home',
    components: {
      PageHero: () => import('~/components/PageHero')
    }
  }
</script>

<style lang="stylus">
</style>
