<template>
  <div class="container--small">
    <form
      @submit.prevent="submitBudget"
      name="budget"
      action="/orcamento/criacao-de-sites-blogs-portais-lojas-virtuais"
      class="form"
      netlify-honeypot="bot-field"
      method="post"
      netlify>

      <fieldset class="form__fieldset">
        <legend class="form__legend">Formulário de orçamento</legend>

        <alert/>

        <div class="form__group" v-if="!$store.state.alert.message">
          <label class="form__label" for="name.$params.minLength.min}}</strong> letras.</label>
        </div>

        <div class="form__group" v-if="!$store.state.alert.message">
          <label class="form__label" for="email.email">Esse campo precisa ser um <strong>Email</strong> válido.</label>
        </div>

        <div class="form__group" v-if="!$store.state.alert.message">
          <label class="form__label" for="project_name"
            placeholder="Ex.: Lojinha de venda dos produtos da Wayne Tech"/>
        </div>

        <div class="form__group" v-if="!$store.state.alert.message">
          <label class="form__label" for="site_address.url">Esse campo precisa ser uma <strong>URL</strong> válida.</label>
        </div>

        <div class="form__group" v-if="!$store.state.alert.message">
          <label class="form__label">Quais serviços você precisa?</label>
          <label class="form__alert" v-if="!$v.services_loja" value="E-commerce/Loja Virtual"/>
              <label for="services_loja">E-commerce/Loja Virtual</label>
            </li>
            <li>
              <input
                type="checkbox"
                name="services[]"
                @change="$v.services.$touch()"
                v-model.trim="services"
                id="services_blog" value="Blog/Site de notícias"/>
              <label for="services_blog">Blog/Site de notícias</label>
            </li>
            <li>
              <input
                type="checkbox"
                name="services[]"
                @change="$v.services.$touch()"
                v-model.trim="services"
                id="services_psd_to_html" value="Design (PSD, sketch) para HTML"/>
              <label for="services_psd_to_html">Design (PSD, sketch) para HTML</label>
            </li>
            <li>
              <input
                type="checkbox"
                name="services[]"
                @change="$v.services.$touch()"
                v-model.trim="services"
                id="services_psd_to_wp" value="Design (PSD, sketch) para WordPress"/>
              <label for="services_psd_to_wp">Design (PSD, sketch) para WordPress</label>
            </li>
            <li>
              <input
                type="checkbox"
                name="services[]"
                @change="$v.services.$touch()"
                v-model.trim="services"
                id="services_html_to_wp" value="HTML para WordPress"/>
              <label for="services_html_to_wp">HTML para WordPress</label>
            </li>
            <li>
              <input
                type="checkbox"
                name="services[]"
                @change="$v.services.$touch()"
                v-model.trim="services"
                id="services_consultoria" value="Consultoria Design/Desenvolvimento"/>
              <label for="services_consultoria">Consultoria <small>(Design/Desenvolvimento)</small></label>
            </li>
            <li>
              <input
                type="checkbox"
                name="services[]"
                @change="$v.services.$touch()"
                v-model.trim="services"
                id="services_outros" value="Outros serviços"/>
              <label for="services_outros">Outros serviços</label>
            </li>
          </ul>
        </div>

        <div class="form__group" v-if="!$store.state.alert.message">
          <label class="form__label" for="observation.$params.minLength.min}}</strong> letras.</label>
        </div>

        <div class="form__group form__group--footer">
          <button class="button button--primary button--large" type="submit" v-if="!$store.state.alert.message">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"/></svg>
            Solicitar orçamento
          </button>
          <a href="#" v-if="$store.state.alert.message" @click="$store.commit('SET_ALERT', { type: 'default', message: null })">&#10229; voltar</a>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
  import { required, email, url, minLength } from 'vuelidate/lib/validators'

  export default {
    data () {
      return {
        'bot_field': '',
        'name': '',
        'email': '',
        'project_name': '',
        'site_address': '',
        'services': [],
        'observation': ''
      }
    },
    validations: {
      name: {
        required,
        minLength: minLength(5)
      },
      email: {
        required,
        email,
        minLength: minLength(5)
      },
      project_name: {
        minLength: minLength(5)
      },
      site_address: {
        url,
        minLength: minLength(5)
      },
      services: {
        required
      },
      observation: {
        required,
        minLength: minLength(5)
      }
    },
    methods: {
      encode (data) {
        return Object.keys(data)
          .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
          .join('&')
      },
      async submitBudget () {
        if (this.isValid) {
          const data = {
            'form-name': 'budget',
            'name': this.name,
            'email': this.email,
            'project_name': this.project_name,
            'site_address': this.site_address,
            'services': this.services,
            'observation': this.observation
          }
          await fetch(`${this.$store.state.baseUrl}/orcamento/criacao-de-sites-blogs-portais-lojas-virtuais`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: this.encode(data)
          })
            .then(response => {
              console.log(response.data)
              this.$store.commit('SET_ALERT', {
                type: 'success',
                message: 'Formulário enviado com sucesso, aguarde o retorno de nossa equipe.'
              })
            })
            .catch(err => {
              console.error(err)
              this.$store.commit('SET_ALERT', {
                type: 'error',
                message: 'Oops, ocorreu um erro ao enviar o formulário, aguarde alguns minutos e tente novamente.'
              })
            })
            console.log(JSON.stringify(this.$data))
            console.log(JSON.stringify(data))
        } else {
          this.$v.$touch()
        }
      },
      forward () {
        this.$store.commit('FORWARD_STEPS')
      },
      backward () {
        this.$store.commit('BACKWARD_STEPS')
      }
    },
    computed: {
      isValid () {
        return (!this.$v.name.$invalid &&
          !this.$v.email.$invalid &&
          !this.$v.services.$invalid &&
          !this.$v.observation.$invalid)
      }
    },
    components: {
      Alert: () => import('~/components/Alert')
    }
  }
</script>

<style lang="stylus">
.form
  &__fieldset
    margin-bottom spacingBase
    +above(tablet)
      position relative
      margin-bottom spacingLarge
  &__group
    padding 0 spacingSmall
    +above(tablet)
      &--inline
        display inline-block
        vertical-align top
        max-width 50%
    &--footer
      position relative
      .button
        width 100%
        display block
        svg
          line-height 1
          vertical-align middle
          display inline-block
          position relative
          top -2px
        &:focus
          outline none
  .hidden
    display none
</style>
