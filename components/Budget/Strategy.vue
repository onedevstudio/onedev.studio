<template>
  <fieldset class="form__fieldset">
    <legend class="form__legend">Estratégia da empresa</legend>
    <div class="form__group">
      <label class="form__label" for="budget_create_this_site">Por que você está criando esse site? O que você espera realizar?</label>
      <textarea class="form__field" name="budget_create_this_site" id="budget_create_this_site" placeholder="Sua resposta"/>
    </div>
    <div class="form__group form__group--inline">
      <label class="form__label" for="budget_offering_your_customer">O que você está oferendo ao seu público/cliente?</label>
      <textarea class="form__field" name="budget_offering_your_customer" id="budget_offering_your_customer" placeholder="Sua resposta"/>
    </div>
    <div class="form__group form__group--inline">
      <label class="form__label" for="budget_users_do_your_site">O que você espera que os usuários façam em seu site?</label>
      <textarea class="form__field" name="budget_users_do_your_site" id="budget_users_do_your_site" placeholder="Sua resposta"/>
    </div>
  </fieldset>
</template>

<script>
  export default {

  }
</script>
