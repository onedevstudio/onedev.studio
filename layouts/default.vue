<template>
  <div>
    <PageHeader/>
    <nuxt/>
  </div>
</template>

<script>
  export default {
    components: {
      PageHeader: () => import('~/components/PageHeader')
    }
  }
</script>
