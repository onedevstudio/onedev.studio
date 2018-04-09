<template>
  <div class="priceCard" :class="{ 'priceCard--popular': isPopular }">
    <span v-if="isPopular" class="priceCard__tip">* Mais Popular!</span>
    <div class="priceCard__header">
      <div>
        <span class="priceCard__price" v-text="`R$ ${calcDiscount(each, discount)}`"/>
        <span class="priceCard__name">
          {{ name }} <small v-if="!!discount">(com {{ discount }}% de desconto)</small>
        </span>
      </div>
    </div>
    <ul class="priceCard__features">
      <li v-for="(item, i) in features" :key="i" v-text="item"/>
    </ul>
    <div class="priceCard__footer">
      <a
        :href="purchaseLink"
        class="button priceCard__button"
        :class="{ 'button--secondary button--large': isPopular, 'button--default': !isPopular }"
        target="_blank"
        rel="nofollow">Contratar</a>
      <small>*<strong>{{ accessionRate }}</strong> de taxa de adesão no primeiro mês.</small>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        monthValue: 30
      }
    },
    props: {
      'name': {
        type: String,
        default: 'Recorrência Mensal'
      },
      'each': {
        type: Number,
        default: 1
      },
      'discount': {
        type: Number,
        default: 0
      },
      'features': {
        type: Array,
        default: () => {
          return [
            'FTPS',
            'PHP 7.0',
            'MySQL 5',
            '256MB de memória',
            '15GB de espaço em disco',
            'Até 5 contas de emails',
            'Certificado TLS/SSL (Let\'s Encrypt)'
          ]
        }
      },
      'isPopular': {
        type: Boolean,
        default: false
      },
      'purchaseLink': {
        type: String
      },
      'accessionRate': {
        type: String,
        default: 'R$ 10,00'
      }
    },
    methods: {
      calcDiscount (each, discount) {
        const _price = Number(this.monthValue * each)
        const _total = _price * ((100 - Number(discount)) / 100)

        return _total.toFixed(0)
      }
    }
  }
</script>

<style lang="stylus">
.priceCard
  max-width 360px
  background #fff
  margin 0 spacingSmall
  padding 0 0 spacingBase
  flex 1 0 percentage(1/3)
  .&:not(:last-child)
    margin-right 2.5rem /* 40/16 */

  &--popular
    transform translate3d(0, -15px, 0)
    .priceCard__header
      padding-top spacingBase

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

  .button.priceCard__button
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
</style>
