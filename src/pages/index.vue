<template>
  <section class="container">
    <div>
      <logo />
      <h2 class="description"></ Um estúdio de desenvolvimento web de um homem só ></h2>
      <div class="links">
        <a href="https://twitter.com/OnedevStudioweb" target="_blank" class="button button--green">Contato</a>
        <a href="https://goo.gl/forms/Dr1JEZuMIMLAwpHM2" target="_blank" class="button button--gray">Orçamento</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  components: {
    Logo: () => import('~/components/Logo')
  }
}
</script>

<style lang="sass">
.container
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center
  text-align: center

.description
  font-weight: 300
  font-size: 2.6rem
  color: #435466
  word-spacing: 5px
  padding-bottom: 15px

.links
  padding-top: 15px

.button
  display: inline-block
  border-radius: 4px
  border: 3px solid transparent
  text-decoration: none
  font-size: 1.2rem
  line-height: 40px
  padding: 0 2.4rem

  &--green
    border-color: #4DBA87
    color: #4DBA87
    &:hover
      color: #fff
      background-color: #4DBA87

  &--gray
    border-color: #435466
    color: #435466
    margin-left: 15px
    &:hover
      color: #fff
      background-color: #435466
</style>
