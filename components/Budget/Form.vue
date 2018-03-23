<template>
  <form
    @submit.prevent="submitBudget"
    name="budget"
    action="/orcamento"
    class="form"
    netlify-honeypot="bot-field"
    method="post"
    netlify>

    <input type="hidden" name="form-name" value="Budget"/>

    <div class="form__group hidden">
      <label>Don’t fill this out if you're human: <input name="bot-field"/></label>
    </div>

    <fieldset-basic v-if="$store.state.step === 0"/>

    <fieldset-strategy v-if="$store.state.step === 1"/>

    <fieldset-general v-if="$store.state.step === 2"/>

    <fieldset-target v-if="$store.state.step === 3"/>

    <fieldset-content v-if="$store.state.step === 4"/>

    <fieldset-design v-if="$store.state.step === 5"/>

    <fieldset-informations v-if="$store.state.step === 6"/>

    <div class="form__group form__group--footer">
      <p><small>Página {{ ($store.state.step + 1) }} de 7</small></p>
      <div class="form__buttons">
        <button class="button button--default" @click="backward" type="button" v-if="$store.state.step > 0">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"/></svg>
          voltar
        </button>

        <button class="button button--primary" type="submit" v-if="$store.state.step === 6">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"/></svg>
          Enviar Briefing
        </button>

        <button class="button button--secondary" @click="forward" type="button" v-if="$store.state.step < 6">
          Próxima etapa
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
  // import { required, email, minLength } from 'vuelidate/lib/validators'

  export default {
    methods: {
      async submitBudget () {
        await this.$axios.post(`/orcamento`, this.$data)
          .then(response => console.log(response.data))
          .catch(error => console.log(error))
          // console.log(JSON.stringify(this.$data))
      },
      forward () {
        this.$store.commit('FORWARD_STEPS')
      },
      backward () {
        this.$store.commit('BACKWARD_STEPS')
      }
    },
    components: {
      FieldsetBasic: () => import('~/components/Budget/Basic'),
      FieldsetStrategy: () => import('~/components/Budget/Strategy'),
      FieldsetGeneral: () => import('~/components/Budget/General'),
      FieldsetTarget: () => import('~/components/Budget/Target'),
      FieldsetContent: () => import('~/components/Budget/Content'),
      FieldsetDesign: () => import('~/components/Budget/Design'),
      FieldsetInformations: () => import('~/components/Budget/Informations')
    }
  }
</script>

<style lang="stylus">
.form
  &__fieldset
    +above(tablet)
      position relative
  &__group
    padding 0 spacingSmall
    +above(tablet)
      &--inline
        display inline-block
        vertical-align top
        max-width 50%
    &--footer
      padding-bottom spacingLarge
      position relative
      p
        display block
        vertical-align middle
        text-align center
        line-height 53px
        font-size 1.125rem
        opacity 0.7
        color lighten(#000, 40%)
        width 100%
        margin 0
      .button
        position absolute
        top 0
        svg
          line-height 1
          vertical-align middle
          display inline-block
          position relative
          top -2px
        &:focus
          outline none
        &--primary,
        &--secondary
          margin-left spacingSmall
          right 0
          float right
        &--default
          margin-right spacingSmall
          left 0
          float left
  .hidden
    display none
</style>
