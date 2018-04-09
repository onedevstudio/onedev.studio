<template>
  <div class="container">
    <MetaTags :title="pageTitle" :description="pageDescription" :url="pageUrl"/>
    <div class="pricing">
      <h1 class="pricing__title">Hospedagem básica</h1>
      <div class="pricing__cards">
        <pricing-table
          v-for="(table, i) in tables" :key="i"
          :name="table.name"
          :discount="table.discount"
          :each="table.each"
          :isPopular="table.isPopular"
          :purchaseLink="table.purchaseLink"
          :accessionRate="table.accessionRate"
          />
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
        tables: [
          {
            'name': 'Pagamento Mensal',
            'discount': 0,
            'each': 1,
            'isPopular': false,
            'purchaseLink': 'http://pag.ae/bhw6vch',
            'accessionRate': 'R$ 10,00'
          },
          {
            'name': 'Pagamento Anual',
            'discount': 15,
            'each': 12,
            'isPopular': true,
            'purchaseLink': 'http://pag.ae/bgw6vp8',
            'accessionRate': 'R$ 30,00'
          },
          {
            'name': 'Pagamento Semestral',
            'discount': 10,
            'each': 6,
            'isPopular': false,
            'purchaseLink': 'http://pag.ae/bgw6vnr',
            'accessionRate': 'R$ 15,00'
          }
        ]
      }
    },
    components: {
      MetaTags: () => import('~/components/MetaTags'),
      PricingTable: () => import('~/components/PricingTable')
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
    align-items flex-start
</style>
