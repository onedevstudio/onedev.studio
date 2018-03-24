<template>
  <form
    @submit.prevent="submitBudget"
    name="budget"
    action="/orcamento"
    class="form"
    netlify-honeypot="bot-field"
    method="post"
    netlify>

    <div class="form__group hidden">
      <label><input name="bot-field" v-model.trim="bot_field"/></label>
    </div>

    <fieldset class="form__fieldset">
      <legend class="form__legend">Formulário de orçamento</legend>

      <alert/>

      <div class="form__group">
        <label class="form__label" for="budget_name">Nome completo do resposável pelo site/projeto</label>
        <input
          type="text"
          class="form__field"
          :class="{ 'form__field--error': $v.budget_name.$error }"
          name="budget_name"
          id="budget_name"
          @input="$v.budget_name.$touch()"
          v-model.trim="budget_name"
          placeholder="Ex.: Bruce Wayne"/>
        <label for="budget_name" class="form__alert" v-if="!$v.budget_name.required && $v.budget_name.$error">Esse campo é obrigatório.</label>
        <label for="budget_name" class="form__alert" v-if="!$v.budget_name.minLength">O seu <strong>Nome</strong> deve ter pelo menos <strong>{{$v.budget_name.$params.minLength.min}}</strong> letras.</label>
      </div>

      <div class="form__group">
        <label class="form__label" for="budget_email">Endereço de Email</label>
        <input
          type="email"
          class="form__field"
          name="budget_email"
          id="budget_email"
          :class="{ 'form__field--error': $v.budget_email.$error }"
          @input="$v.budget_email.$touch()"
          v-model.trim="budget_email"
          placeholder="Ex.: bruce@waynetech.org"/>
        <label for="budget_email" class="form__alert" v-if="!$v.budget_email.required && $v.budget_email.$error">Esse campo é obrigatório.</label>
        <label for="budget_email" class="form__alert" v-if="!$v.budget_email.email">Esse campo precisa ser um <strong>Email</strong> válido.</label>
      </div>

      <div class="form__group">
        <label class="form__label" for="budget_project_name">Qual o nome do site/projeto? <small>(opcional)</small></label>
        <input
          type="text"
          class="form__field"
          name="budget_project_name"
          id="budget_project_name"
          :class="{ 'form__field--error': $v.budget_project_name.$error }"
          v-model.trim="budget_project_name"
          placeholder="Ex.: Lojinha de venda dos produtos da Wayne Tech"/>
      </div>

      <div class="form__group">
        <label class="form__label" for="budget_site_address">Qual o endereço atual do site? <small>(opcional)</small></label>
        <input
          type="text"
          class="form__field"
          name="budget_site_address"
          id="budget_site_address"
          :class="{ 'form__field--error': !$v.budget_site_address.url }"
          v-model.trim="budget_site_address"
          placeholder="Ex.: http://waynetech.org"/>
        <label for="budget_site_address" class="form__alert" v-if="!$v.budget_site_address.url">Esse campo precisa ser uma <strong>URL</strong> válida.</label>
      </div>

      <div class="form__group">
        <label class="form__label">Quais serviços você precisa?</label>
        <label class="form__alert" v-if="!$v.budget_services.required && $v.budget_services.$error">A seleção dos <strong>Serviços</strong> obrigatória.</label>
        <ul class="form__list" :class="{ 'form__list--error': $v.budget_services.$error }">
          <li>
            <input
              type="checkbox"
              name="budget_services[]"
              @change="$v.budget_services.$touch()"
              v-model.trim="budget_services"
              id="budget_services_remodelar" value="Remodelar meu site atual"/>
            <label for="budget_services_remodelar">Remodelar meu site atual</label>
          </li>
          <li>
            <input
              type="checkbox"
              name="budget_services[]"
              @change="$v.budget_services.$touch()"
              v-model.trim="budget_services"
              id="budget_services_hotsite" value="Hotsite/Landing page (tela única)"/>
            <label for="budget_services_hotsite">Hotsite/Landing page <small>(tela única)</small></label>
          </li>
          <li>
            <input
              type="checkbox"
              name="budget_services[]"
              @change="$v.budget_services.$touch()"
              v-model.trim="budget_services"
              id="budget_services_site" value="Site Institucional"/>
            <label for="budget_services_site">Site Institucional</label>
          </li>
          <li>
            <input
              type="checkbox"
              name="budget_services[]"
              @change="$v.budget_services.$touch()"
              v-model.trim="budget_services"
              id="budget_services_loja" value="E-commerce/Loja Virtual"/>
            <label for="budget_services_loja">E-commerce/Loja Virtual</label>
          </li>
          <li>
            <input
              type="checkbox"
              name="budget_services[]"
              @change="$v.budget_services.$touch()"
              v-model.trim="budget_services"
              id="budget_services_blog" value="Blog/Site de notícias"/>
            <label for="budget_services_blog">Blog/Site de notícias</label>
          </li>
          <li>
            <input
              type="checkbox"
              name="budget_services[]"
              @change="$v.budget_services.$touch()"
              v-model.trim="budget_services"
              id="budget_services_psd_to_html" value="Design (PSD, sketch) para HTML"/>
            <label for="budget_services_psd_to_html">Design (PSD, sketch) para HTML</label>
          </li>
          <li>
            <input
              type="checkbox"
              name="budget_services[]"
              @change="$v.budget_services.$touch()"
              v-model.trim="budget_services"
              id="budget_services_psd_to_wp" value="Design (PSD, sketch) para WordPress"/>
            <label for="budget_services_psd_to_wp">Design (PSD, sketch) para WordPress</label>
          </li>
          <li>
            <input
              type="checkbox"
              name="budget_services[]"
              @change="$v.budget_services.$touch()"
              v-model.trim="budget_services"
              id="budget_services_html_to_wp" value="HTML para WordPress"/>
            <label for="budget_services_html_to_wp">HTML para WordPress</label>
          </li>
          <li>
            <input
              type="checkbox"
              name="budget_services[]"
              @change="$v.budget_services.$touch()"
              v-model.trim="budget_services"
              id="budget_services_consultoria" value="Consultoria Design/Desenvolvimento"/>
            <label for="budget_services_consultoria">Consultoria <small>(Design/Desenvolvimento)</small></label>
          </li>
          <li>
            <input
              type="checkbox"
              name="budget_services[]"
              @change="$v.budget_services.$touch()"
              v-model.trim="budget_services"
              id="budget_services_outros" value="Outros serviços"/>
            <label for="budget_services_outros">Outros serviços</label>
          </li>
        </ul>
      </div>

      <div class="form__group">
        <label class="form__label" for="budget_site_obs">Conte-nos um pouco sobre as suas necessidades</label>
        <textarea
          class="form__field"
          name="budget_site_obs"
          id="budget_site_obs"
          :class="{ 'form__field--error': $v.budget_site_obs.$error }"
          @input="$v.budget_site_obs.$touch()"
          v-model.trim="budget_site_obs"
          placeholder="Sua resposta"/>
        <label for="budget_site_obs" class="form__alert" v-if="!$v.budget_site_obs.required && $v.budget_site_obs.$error">O seu <strong>Comentário</strong> sobre o projeto é obrigatório.</label>
        <label for="budget_site_obs" class="form__alert" v-if="!$v.budget_site_obs.minLength">O seu <strong>Comentário</strong> deve ter pelo menos <strong>{{$v.budget_site_obs.$params.minLength.min}}</strong> letras.</label>
      </div>

      <div class="form__group form__group--footer">
        <button class="button button--primary button--large" type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"/></svg>
          Solicitar orçamento
        </button>
      </div>
    </fieldset>
  </form>
</template>

<script>
  import { required, email, url, minLength } from 'vuelidate/lib/validators'

  export default {
    data () {
      return {
        'bot_field': '',
        'budget_name': '',
        'budget_email': '',
        'budget_project_name': '',
        'budget_site_address': '',
        'budget_services': [],
        'budget_site_obs': ''
      }
    },
    validations: {
      budget_name: {
        required,
        minLength: minLength(5)
      },
      budget_email: {
        required,
        email,
        minLength: minLength(5)
      },
      budget_project_name: {
        minLength: minLength(5)
      },
      budget_site_address: {
        url,
        minLength: minLength(5)
      },
      budget_services: {
        required
      },
      budget_site_obs: {
        required,
        minLength: minLength(5)
      }
    },
    methods: {
      async submitBudget () {
        if (this.isValid) {
          await this.$axios.post(`${this.$store.baseUrl}/orcamento/criacao-de-sites-blogs-portais-lojas-virtuais`, {
            'form-name': 'Budget',
            'bot-field': this.bot_field,
            'budget_name': this.budget_name,
            'budget_email': this.budget_email,
            'budget_project_name': this.budget_project_name,
            'budget_site_address': this.budget_site_address,
            'budget_services': this.budget_services,
            'budget_site_obs': this.budget_site_obs
          })
            .then(response => {
              console.log(response.data)
              this.$store.commit('SET_ALERT', {
                type: 'success',
                message: 'Formulário enviado com sucesso, aguarde o retorno de nossa equipe.'
              })
              this.budget_name = null
              this.budget_email = null
              this.budget_project_name = null
              this.budget_site_address = null
              this.budget_services = []
              this.budget_site_obs = null
            })
            .catch(err => {
              console.error(err)
              this.$store.commit('SET_ALERT', {
                type: 'error',
                message: 'Oops, ocorreu um erro ao enviar o formulário, aguarde alguns minutos e tente novamente.'
              })
            })
            // console.log(JSON.stringify(this.$data))
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
        return (!this.$v.budget_name.$invalid &&
          !this.$v.budget_email.$invalid &&
          !this.$v.budget_services.$invalid &&
          !this.$v.budget_site_obs.$invalid)
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
