<template>
  <section class="container">
    <div itemscope itemtype="http://schema.org/Organization">
      <span itemprop="name" class="visually-hidden">OneDev studio</span>
      <span itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
        <span itemprop="streetAddress" class="visually-hidden">Pinheirinho</span><br>
        <span itemprop="addressLocality" class="visually-hidden">Curitiba</span><br>
        <span itemprop="addressRegion" class="visually-hidden">Paraná</span>
        <span itemprop="postalCode" class="visually-hidden">81825310</span>
      </span>
      <span itemprop="telephone" class="visually-hidden">+55 41 984401163</span>
      <logo />
      <h2 class="description"></ Um estúdio de desenvolvimento web de um homem só ></h2>
      <div class="links">
        <nuxt-link to="/contato" class="button button--green">Contato</nuxt-link>
        <nuxt-link to="/orcamento" class="button button--gray">Orçamento</nuxt-link>
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

.visually-hidden
  position: absolute
  border: 0
  clip: rect(0,0,0,0)
  width: 1px
  height: 1px
  margin: -1px
  padding: 0
  overflow: hidden
</style>
