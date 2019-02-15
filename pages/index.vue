<template>
  <section class="Hero">
    <div class="Hero__inner">
      <c-logo />
      <h1 class="Hero__title" v-text="`Onedev.studio`" />
      <h2 class="Hero__subtitle" v-text="`{ Um estúdio de desenvolvimento web de um homem só }`" />
      <nav class="Hero__links">
        <a href="https://nandomoreira.me/portfolio" target="_blank" class="button button--green">
          <span>Projetos</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-external-link"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
          </svg>
        </a>
        <a href="https://github.com/onedevstudio" target="_blank" class="button button--grey">
          <span>GitHub</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-github"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
        </a>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  components: {
    CLogo: () => import('~/components/Logo')
  }
}
</script>

<style lang="stylus">
.Hero
  margin 0 auto
  min-height 100vh
  display flex
  justify-content center
  align-items center
  text-align center
  padding 0 1.875rem /* 30/16 */

  &__title
    font-family 'Montserrat', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
    display block
    font-weight 800
    font-size 2.5rem /* 40/16 */
    color #35495e
    letter-spacing 1px
    text-transform uppercase
    +above(mobileLarge)
      font-size 3.125rem /* 50/16 */
    +above(tablet)
      font-size 5rem /* 80/16 */
    +above(tabletLarge)
      font-size 6.25rem /* 100/16 */

  &__subtitle
    font-weight 300
    font-size 1.25rem /* 20/16 */
    color #526488
    word-spacing 5px
    padding-bottom 15px
    text-transform lowercase
    +above(mobileLarge)
      font-size 1.375rem /* 22/16 */
    +above(tablet)
      font-size 2rem /* 32/16 */
    +above(tabletLarge)
      font-size 2.625rem /* 42/16 */

  &__links
    padding-top 15px
    .button
      width 100%
      display block
      margin 10px 0
      +above(tablet)
        width 200px
        display inline-block
</style>
