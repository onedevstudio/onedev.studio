
<template>
  <div class="container--small">
    <form
      @submit.prevent="submitBudget"
      name="budget"
      action="/orcamento"
      class="form"
      netlify-honeypot="bot-field"
      method="post"
      netlify>

      <fieldset class="form__fieldset">
        <legend class="form__legend">Formulário de orçamento</legend>

        <alert/>

        <div class="form__group" v-if="!$store.state.alert.message">
          <label class="form__label" for="name">Nome completo do resposável pelo site/projeto</label>
          <input
            type="text"
            class="form__field"
            :class="{ 'form__field--error': $v.name.$error }"
            name="name"
            id="name"
            @input="$v.name.$touch()"
            v-model.trim="name"
            placeholder="Ex.: Bruce Wayne"/>
          <label for="name" class="form__alert" v-if="!$v.name.required && $v.name.$error">Esse campo é obrigatório.</label>
          <label for="name" class="form__alert" v-if="!$v.name.minLength">O seu <strong>Nome</strong> deve ter pelo menos <strong>{{$v.name.$params.minLength.min}}</strong> letras.</label>
        </div>

        <div class="form__group" v-if="!$store.state.alert.message">
          <label class="form__label" for="email">Endereço de Email</label>
          <input
            type="email"
            class="form__field"
            name="email"
            id="email"
            :class="{ 'form__field--error': $v.email.$error }"
            @input="$v.email.$touch()"
            v-model.trim="email"
            placeholder="Ex.: bruce@waynetech.org"/>
          <label for="email" class="form__alert" v-if="!$v.email.required && $v.email.$error">Esse campo é obrigatório.</label>
          <label for="email" class="form__alert" v-if="!$v.email.email">Esse campo precisa ser um <strong>Email</strong> válido.</label>
        </div>

        <div class="form__group" v-if="!$store.state.alert.message">
          <label class="form__label" for="project_name">Qual o nome do site/projeto? <small>(opcional)</small></label>
          <input
            type="text"
            class="form__field"
            name="project_name"
            id="project_name"
            :class="{ 'form__field--error': $v.project_name.$error }"
            v-model.trim="project_name"
            placeholder="Ex.: Lojinha de venda dos produtos da Wayne Tech"/>
        </div>

        <div class="form__group" v-if="!$store.state.alert.message">
          <label class="form__label" for="site_address">Qual o endereço atual do site? <small>(opcional)</small></label>
          <input
            type="text"
            class="form__field"
            name="site_address"
            id="site_address"
            :class="{ 'form__field--error': !$v.site_address.url }"
            v-model.trim="site_address"
            placeholder="Ex.: http://waynetech.org"/>
          <label for="site_address" class="form__alert" v-if="!$v.site_address.url">Esse campo precisa ser uma <strong>URL</strong> válida.</label>
        </div>

        <div class="form__group" v-if="!$store.state.alert.message">
          <label class="form__label">Quais serviços você precisa?</label>
          <label class="form__alert" v-if="!$v.services.required && $v.services.$error">A seleção dos <strong>Serviços</strong> é obrigatória.</label>
          <ul class="form__list" :class="{ 'form__list--error': $v.services.$error }">
            <li>
              <input
                type="checkbox"
                name="services[]"
                @change="$v.services.$touch()"
                v-model.trim="services"
                id="services_remodelar" value="Remodelar meu site atual"/>
              <label for="services_remodelar">Remodelar meu site atual</label>
            </li>
            <li>
              <input
                type="checkbox"
                name="services[]"
                @change="$v.services.$touch()"
                v-model.trim="services"
                id="services_hotsite" value="Hotsite/Landing page (tela única)"/>
              <label for="services_hotsite">Hotsite/Landing page <small>(tela única)</small></label>
            </li>
            <li>
              <input
                type="checkbox"
                name="services[]"
                @change="$v.services.$touch()"
                v-model.trim="services"
                id="services_site" value="Site Institucional"/>
              <label for="services_site">Site Institucional</label>
            </li>
            <li>
              <input
                type="checkbox"
                name="services[]"
                @change="$v.services.$touch()"
                v-model.trim="services"
                id="services_loja" value="E-commerce/Loja Virtual"/>
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
          <label class="form__label" for="notes">Conte-nos um pouco sobre as suas necessidades</label>
          <textarea
            class="form__field"
            name="notes"
            id="notes"
            :class="{ 'form__field--error': $v.notes.$error }"
            @input="$v.notes.$touch()"
            v-model.trim="notes"
            placeholder="Sua resposta"/>
          <label for="notes" class="form__alert" v-if="!$v.notes.required && $v.notes.$error">O seu <strong>Comentário</strong> sobre o projeto é obrigatório.</label>
          <label for="notes" class="form__alert" v-if="!$v.notes.minLength">O seu <strong>Comentário</strong> deve ter pelo menos <strong>{{$v.notes.$params.minLength.min}}</strong> letras.</label>
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
        'notes': ''
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
      notes: {
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
          await fetch(`${this.$store.state.baseUrl}/orcamento`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: this.encode({
              'form-name': 'budget',
              'name': this.name,
              'email': this.email,
              'project_name': this.project_name,
              'site_address': this.site_address,
              'services': this.services,
              'notes': this.notes
            })
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
          !this.$v.notes.$invalid)
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
