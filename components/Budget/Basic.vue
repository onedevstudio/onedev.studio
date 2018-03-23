<template>
  <fieldset class="form__fieldset">
    <legend class="form__legend">Dados básicos</legend>

    <div class="form__group form__group--inline">
      <label class="form__label" for="budget_name">Nome completo do resposável pelo site/projeto</label>
      <input
        class="form__field"
        name="budget_name"
        id="budget_name"
        v-model.trim="budget_name"
        placeholder="Sua resposta"/>
    </div>

    <div class="form__group form__group--inline">
      <label class="form__label" for="budget_email">Endereço de Email</label>
      <input
        class="form__field"
        name="budget_email"
        id="budget_email"
        v-model.trim="budget_email"
        placeholder="Sua resposta"/>
    </div>

    <div class="form__group form__group--inline">
      <label class="form__label" for="budget_project_name">Qual o nome do site/projeto?</label>
      <input
        class="form__field"
        name="budget_project_name"
        id="budget_project_name"
        v-model.trim="budget_project_name"
        placeholder="Sua resposta"/>
    </div>

    <div class="form__group form__group--inline">
      <label class="form__label" for="budget_company_performance">Setor de atuação da sua empresa/negócio</label>
      <input
        class="form__field"
        name="budget_company_performance"
        id="budget_company_performance"
        v-model.trim="budget_company_performance"
        placeholder="Sua resposta"/>
    </div>

    <div class="form__group form__group--inline">
      <label class="form__label" for="budget_market_time">Qual o tempo de mercado da empresa/negócio?</label>
      <select
        class="form__field"
        name="budget_market_time"
        v-model.trim="budget_market_time"
        id="budget_market_time">
        <option value="">Selecione sua resposta</option>
        <option value="Menos de 1 ano">Menos de 1 ano</option>
        <option value="Menos de 2 anos">Menos de 2 anos</option>
        <option value="2 anos">2 anos</option>
        <option value="3 anos">3 anos</option>
        <option value="4 anos">4 anos</option>
        <option value="Mais de 5 anos">Mais de 5 anos</option>
        <option value="Mais de 10 anos">Mais de 10 anos</option>
      </select>
    </div>

    <div class="form__group form__group--inline">
      <label class="form__label" for="budget_services_offered">Quais os produtos e/ou serviços oferecidos?</label>
      <input
        class="form__field"
        name="budget_services_offered"
        id="budget_services_offered"
        v-model.trim="budget_services_offered"
        placeholder="Sua resposta"/>
    </div>

    <div class="form__group">
      <label class="form__label" for="budget_site_address">Qual o endereço atual do site?</label>
      <input
        class="form__field"
        name="budget_site_address"
        id="budget_site_address"
        v-model.trim="budget_site_address"
        placeholder="Sua resposta"/>
      <small>(se não tiver deixe em branco)</small>
    </div>
  </fieldset>
</template>

<script>
  import { required, email, minLength } from 'vuelidate/lib/validators'

  export default {
    data () {
      return {
        'budget_name': '',
        'budget_email': '',
        'budget_project_name': '',
        'budget_company_performance': '',
        'budget_market_time': '',
        'budget_services_offered': '',
        'budget_site_address': ''
      }
    },
    validations: {
      budget_name: {
        required,
        minLength: minLength(5)
      },
      budget_email: {
        required,
        email
      },
      budget_project_name: {
        required,
        minLength: minLength(5)
      },
      budget_company_performance: {
        required,
        minLength: minLength(5)
      },
      budget_market_time: {
        required,
        minLength: minLength(5)
      },
      budget_services_offered: {
        required,
        minLength: minLength(5)
      },
      budget_site_address: {
        required,
        minLength: minLength(5)
      }
    }
  }
</script>
