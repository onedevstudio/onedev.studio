<template>
  <fieldset class="form__fieldset">
    <legend class="form__legend">Conteúdo</legend>

    <div class="form__group form__group--inline">
      <label class="form__label" for="budget_content_responsibility">Quem será o responsável pela geração do conteúdo do site?</label>
      <input class="form__field" name="budget_content_responsibility" id="budget_content_responsibility" placeholder="Sua resposta"/>
      <small>(se não tiver deixe em branco)</small>
    </div>

    <div class="form__group form__group--inline">
      <label class="form__label" for="budget_content_responsibility01">Caso não tenha quem cuide do conteúdo do site, gostaria de serviços adicionais para gerar?</label>
      <ul class="form__list">
        <li>
          <input type="radio" name="budget_content_responsibility" id="budget_content_responsibility01" value="Sim, por favor."/>
          <label for="budget_content_responsibility01">Sim, por favor.</label>
        </li>
        <li>
          <input type="radio" name="budget_content_responsibility" id="budget_content_responsibility02" value="Não, obrigado."/>
          <label for="budget_content_responsibility02">Não, obrigado.</label>
        </li>
      </ul>
    </div>
  </fieldset>

</template>

<script>
  export default {

  }
</script>
