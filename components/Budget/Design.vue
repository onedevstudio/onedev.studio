<template>
  <fieldset class="form__fieldset">
    <legend class="form__legend">Design</legend>

    <div class="form__group form__group--inline">
      <label class="form__label" for="budget_design01">Qual a aparência da identidade visual (design) esperada?</label>
      <ul class="form__list">
        <li>
          <input type="radio" name="budget_design" id="budget_design01" value="Tradicional"/>
          <label for="budget_design01">Tradicional</label>
        </li>
        <li>
          <input type="radio" name="budget_design" id="budget_design02" value="High-tech"/>
          <label for="budget_design02">High-tech</label>
        </li>
        <li>
          <input type="radio" name="budget_design" id="budget_design03" value="Artístico"/>
          <label for="budget_design03">Artístico</label>
        </li>
        <li>
          <input type="radio" name="budget_design" id="budget_design04" value="Clean"/>
          <label for="budget_design04">Clean</label>
        </li>
      </ul>
    </div>

    <div class="form__group form__group--inline">
      <label class="form__label" for="budget_brand_logo01">Possui sua marca (logo) em vetor ou alta resolução?</label>
      <ul class="form__list">
        <li>
          <input type="radio" name="budget_brand_logo" id="budget_brand_logo01" value="Sim, possuo"/>
          <label for="budget_brand_logo01">Sim, possuo</label>
        </li>
        <li>
          <input type="radio" name="budget_brand_logo" id="budget_brand_logo02" value="Não, preciso que faça isso por mim."/>
          <label for="budget_brand_logo02">Não, preciso que faça isso por mim.</label>
        </li>
        <li>
          <input type="radio" name="budget_brand_logo" id="budget_brand_logo03" value="Não sei o que é, por favor me explique."/>
          <label for="budget_brand_logo03">Não sei o que é, por favor me explique.</label>
        </li>
      </ul>
    </div>

    <div class="form__group">
      <label class="form__label" for="budget_brand_colors">Quais as cores atuais da empresa?</label>
      <input class="form__field" name="budget_brand_colors" id="budget_brand_colors" placeholder="Sua resposta"/>
    </div>
  </fieldset>
</template>

<script>
  export default {

  }
</script>
