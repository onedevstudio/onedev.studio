<template>
  <fieldset class="form__fieldset">
    <legend class="form__legend">Público alvo</legend>

    <div class="form__group form__group--inline">
      <label class="form__label" for="budget_main_site_audience">Descreva quem será o público principal do site</label>
      <input class="form__field" name="budget_main_site_audience" id="budget_main_site_audience" placeholder="Sua resposta"/>
      <small>Descreva interesses, necessidades e o que mais souber a respeito.</small>
    </div>

    <div class="form__group form__group--inline">
      <label class="form__label" for="budget_secondary_site_audience">Qual é o público-alvo secundário e terciário?</label>
      <input class="form__field" name="budget_secondary_site_audience" id="budget_secondary_site_audience" placeholder="Sua resposta"/>
      <small>Descreva interesses, necessidades e o que mais souber a respeito.</small>
    </div>

    <div class="form__group form__group--inline">
      <label class="form__label" for="budget_audience_frequency">Com que frequência você espera que eles visitem o site?</label>
      <input class="form__field" name="budget_audience_frequency" id="budget_audience_frequency" placeholder="Sua resposta"/>
    </div>

    <div class="form__group form__group--inline">
      <label class="form__label" for="budget_technical_capacity">Qual a "capacidade técnica" de acesso de seus usuários?</label>
      <input class="form__field" name="budget_technical_capacity" id="budget_technical_capacity" placeholder="Sua resposta"/>
      <small>(navegador, velocidade de acesso, tempo de acesso diário, etc)</small>
    </div>
  </fieldset>
</template>

<script>
  export default {
  }
</script>
