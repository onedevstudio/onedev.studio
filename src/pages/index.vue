<template>
  <section class="container">
    <div>
      <h1 class="title">OneDev studio</h1>
      <h2 class="subtitle">
          </ Um estúdio de desenvolvimento web de um homem só >
      </h2>
      <div class="links">
        <a href="https://twitter.com/OnedevStudioweb" target="_blank" class="button button--gray">Contato</a>
        <a href="https://goo.gl/forms/Dr1JEZuMIMLAwpHM2" target="_blank" class="button button--green">Orçamento</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="sass">
.container
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center
  text-align: center

.title
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
  display: block
  font-weight: 200
  font-size: 8rem
  color: #35495e
  letter-spacing: 1px

.subtitle
  font-weight: 300
  font-size: 2.6rem
  color: #526488
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
    border-color: #3b8070
    color: #3b8070
    &:hover
      color: #fff
      background-color: #3b8070

  &--gray
    border-color: #35495e
    color: #35495e
    margin-right: 15px
    &:hover
      color: #fff
      background-color: #35495e
</style>
