<template>
  <fieldset class="form__fieldset">
    <legend class="form__legend">Outras informações</legend>

    <div class="form__group form__group--inline">
      <label class="form__label" for="budget_site_maintenance01">A manutenção do site pode ser tratada pela sua equipe ou por você?</label>
      <ul class="form__list">
        <li>
          <input type="radio" name="budget_site_maintenance" id="budget_site_maintenance01" value="Sim"/>
          <label for="budget_site_maintenance01">Sim</label>
        </li>
        <li>
          <input type="radio" name="budget_site_maintenance" id="budget_site_maintenance02" value="Não"/>
          <label for="budget_site_maintenance02">Não</label>
        </li>
        <li>
          <input type="radio" name="budget_site_maintenance" id="budget_site_maintenance03" value="Talvez"/>
          <label for="budget_site_maintenance03">Talvez</label>
        </li>
      </ul>
    </div>

    <div class="form__group form__group--inline">
      <label class="form__label" for="budget_hosting01">Você tem um servidor para hospedar o seu site?</label>
      <ul class="form__list">
        <li>
          <input type="radio" name="budget_hosting" id="budget_hosting01" value="Sim, tenho"/>
          <label for="budget_hosting01">Sim, tenho</label>
        </li>
        <li>
          <input type="radio" name="budget_hosting" id="budget_hosting02" value="Não, precisarei contratar um."/>
          <label for="budget_hosting02">Não, precisarei contratar um.</label>
        </li>
        <li>
          <input type="radio" name="budget_hosting" id="budget_hosting03" value="Não sei o que é, por favor me explique."/>
          <label for="budget_hosting03">Não sei o que é, por favor me explique.</label>
        </li>
      </ul>
    </div>

    <div class="form__group">
      <label class="form__label" for="budget_domain">Você já registrou um nome de domínio para seu site? Se sim, qual é?</label>
      <input class="form__field" name="budget_domain" id="budget_domain" placeholder="Sua resposta"/>
    </div>

    <div class="form__group">
      <label class="form__label" for="budget_obs">Observações adicionais</label>
      <textarea class="form__field" name="budget_obs" id="budget_obs" placeholder="Sua resposta"/>
    </div>

    <div class="form__group">
      <div netlify-recaptcha/>
    </div>
  </fieldset>
</template>

<script>
  export default {

  }
</script>
