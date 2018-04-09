<template>
  <div class="pricing container">
    <MetaTags :title="pageTitle" :description="pageDescription" :url="pageUrl"/>
    <h1 class="pricing__title">Hospedagem básica</h1>
    <div class="pricing__cards">
      <div class="pricing__priceCard alpha">
        <div class="pricing__header">
          <div>
            <span class="pricing__price" v-text="`R$ ${monthValue}`"/>
            <span class="pricing__name">Recorrência Mensal</span>
          </div>
        </div>
        <ul class="pricing__features">
          <li>FTPS</li>
          <li>PHP 7.0</li>
          <li>MySQL 5</li>
          <li>256MB de memória</li>
          <li>15GB de espaço em disco</li>
          <li>Até 5 contas de emails</li>
          <li>Certificado TLS/SSL (Let's Encrypt)</li>
        </ul>
        <div class="pricing__footer">
          <a :href="monthLink" class="button button--default pricing__button" target="_blank" rel="nofollow">Contratar</a>
          <small>*<strong>R$ 10,00</strong> de taxa de adesão no primeiro mês.</small>
        </div>
      </div>
      <div class="pricing__priceCard pricing__priceCard--popular">
        <span class="pricing__tip">* Mais Popular!</span>
        <div class="pricing__header">
          <div>
            <span class="pricing__price" v-text="`R$ ${yearValue}`"/>
            <span class="pricing__name">Recorrência Anual <small>(com 15% de desconto)</small></span>
          </div>
        </div>
        <ul class="pricing__features">
          <li>FTPS</li>
          <li>PHP 7.0</li>
          <li>MySQL 5</li>
          <li>256MB de memória</li>
          <li>15GB de espaço em disco</li>
          <li>Até 5 contas de emails</li>
          <li>Certificado TLS/SSL (Let's Encrypt)</li>
        </ul>
        <div class="pricing__footer">
          <a :href="yearLink" class="button button--secondary pricing__button" target="_blank" rel="nofollow">Contratar</a>
          <small>*<strong>R$ 15,00</strong> de taxa de adesão no primeiro mês.</small>
        </div>
      </div>
      <div class="pricing__priceCard">
        <div class="pricing__header">
          <div>
            <span class="pricing__price" v-text="`R$ ${semesterValue}`"/>
            <span class="pricing__name">Recorrência Semestral <small>(com 10% de desconto)</small></span>
          </div>
        </div>
        <ul class="pricing__features">
          <li>FTPS</li>
          <li>PHP 7.0</li>
          <li>MySQL 5</li>
          <li>256MB de memória</li>
          <li>15GB de espaço em disco</li>
          <li>Até 5 contas de emails</li>
          <li>Certificado TLS/SSL (Let's Encrypt)</li>
        </ul>
        <div class="pricing__footer">
          <a :href="semesterLink" class="button button--default pricing__button" target="_blank" rel="nofollow">Contratar</a>
          <small>*<strong>R$ 30,00</strong> de taxa de adesão no primeiro mês.</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        pageTitle: `Hospedagem básica | ${this.$store.state.title}`,
        pageDescription: `Hospedagem básica de sites institucionais, lojas virtuais, blogs, portais e aplicações web | ${this.$store.state.title}`,
        pageUrl: `${this.$store.state.baseUrl}/hospedagem`,
        monthLink: 'http://pag.ae/bhw6vch',
        semesterLink: 'http://pag.ae/bgw6vnr',
        yearLink: 'http://pag.ae/bgw6vp8',
        monthValue: 0,
        semesterValue: 0,
        yearValue: 0
      }
    },
    mounted () {
      this.monthValue = 30
      this.semesterValue = this.discount(6, 10)
      this.yearValue = this.discount(12, 15)
    },
    methods: {
      discount (each, discount) {
        const _price = Number(this.monthValue * each)
        const _total = _price * ((100 - Number(discount)) / 100)

        return _total.toFixed(0)
      }
    },
    components: {
      MetaTags: () => import('~/components/MetaTags')
    }
  }
</script>

<style lang="stylus">
.pricing
  padding 8.75rem 0

  .pricing__title
    text-align center
    color #fff
    margin-bottom spacingLarge

  &__cards
    display flex
    justify-content space-around
    // align-items stretch
    align-items flex-start

  &__header
    color #fff
    background-color primaryColor
    font-family fontFamilyHeading
    min-height 14.6875rem /* 235/16 */
    display flex
    justify-content center
    align-items center
    span
      display block
      text-align center
      margin-bottom spacingSmall

  &__footer
    text-align center
    small
      display block
      margin spacingSmall 0 spacingMini
      opacity 0.5

  &__price
    font-size 3.25rem
    font-weight 300
    padding spacingBase 0 spacingMini

  &__name
    font-size 1.25rem
    font-weight 400
    padding 0 0 spacingSmall
    small
      display block
      opacity .75

  &__features
    list-style none
    text-align center
    color secondaryColor
    padding spacingSmall 0
    margin 0
    li
      margin 0 spacingLarge
      padding spacingMini spacingSmall
      display block
      &:not(:last-child)
        border .0625rem solid rgba(#000, .1)
        border-top 0
        border-left 0
        border-right 0

  .button.pricing__button
    text-align center
    display block
    max-width 12.5rem
    margin spacingSmall auto

  &__tip
    color rgba(secondaryColor, .75)
    padding 4px spacingSmall
    font-family fontFamilyHeading
    text-align center
    font-weight 300
    display block
    position absolute
    font-size .875rem /* 14/16 */
    top 15px
    right -15px
    background-color #fff

  &__priceCard
    max-width 360px
    background #fff
    margin 0 spacingSmall
    padding 0 0 spacingBase
    flex 1 0 percentage(1/3)
    .&:not(:last-child)
      margin-right 2.5rem /* 40/16 */

    &--popular
      transform translate3d(0, -15px, 0)
      .pricing__header
        padding-top spacingBase
</style>
