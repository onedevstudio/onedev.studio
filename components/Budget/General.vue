<template>
  <fieldset class="form__fieldset">
    <legend class="form__legend">Descrição geral do site</legend>

    <div class="form__group form__group--inline">
      <label class="form__label" for="budget_site_resources00">Que recursos ele terá?</label>
      <ul class="form__list">
        <li>
          <input type="checkbox" name="budget_site_resources[]" id="budget_site_resources00" value="Nenhum recurso"/>
          <label for="budget_site_resources00">Nenhum recurso</label>
        </li>
        <li>
          <input type="checkbox" name="budget_site_resources[]" id="budget_site_resources01" value="Páginas sobre, contato e localização"/>
          <label for="budget_site_resources01">Páginas sobre, contato e localização</label>
        </li>
        <li>
          <input type="checkbox" name="budget_site_resources[]" id="budget_site_resources02" value="Página de notícias"/>
          <label for="budget_site_resources02">Página de notícias</label>
        </li>
        <li>
          <input type="checkbox" name="budget_site_resources[]" id="budget_site_resources03" value="Blog empresarial/pessoal"/>
          <label for="budget_site_resources03">Blog empresarial/pessoal</label>
        </li>
        <li>
          <input type="checkbox" name="budget_site_resources[]" id="budget_site_resources04" value="Página de vídeos"/>
          <label for="budget_site_resources04">Página de vídeos</label>
        </li>
        <li>
          <input type="checkbox" name="budget_site_resources[]" id="budget_site_resources05" value="Página com galeria de fotos/imagens"/>
          <label for="budget_site_resources05">Página com galeria de fotos/imagens</label>
        </li>
        <li>
          <input type="checkbox" name="budget_site_resources[]" id="budget_site_resources06" value="Catálogo e orçamento produtos"/>
          <label for="budget_site_resources06">Catálogo e orçamento produtos</label>
        </li>
        <li>
          <input type="checkbox" name="budget_site_resources[]" id="budget_site_resources07" value="Catálogo e venda de produtos"/>
          <label for="budget_site_resources07">Catálogo e venda de produtos</label>
        </li>
        <li>
          <input type="checkbox" name="budget_site_resources[]" id="budget_site_resources08" value="Formulário para envio de contato"/>
          <label for="budget_site_resources08">Formulário para envio de contato</label>
        </li>
      </ul>
    </div>

    <div class="form__group form__group--inline">
      <br/>
      <ul class="form__list">
        <li>
          <input type="checkbox" name="budget_site_resources[]" id="budget_site_resources09" value="Formulários Especiais"/>
          <label for="budget_site_resources09">Formulários Especiais</label>
        </li>
        <li>
          <input type="checkbox" name="budget_site_resources[]" id="budget_site_resources10" value="Compartilhamento nas redes sociais"/>
          <label for="budget_site_resources10">Compartilhamento nas redes sociais</label>
        </li>
        <li>
          <input type="checkbox" name="budget_site_resources[]" id="budget_site_resources11" value="Integração com Google Maps"/>
          <label for="budget_site_resources11">Integração com Google Maps</label>
        </li>
        <li>
          <input type="checkbox" name="budget_site_resources[]" id="budget_site_resources12" value="Sistema de ticket de suporte"/>
          <label for="budget_site_resources12">Sistema de ticket de suporte</label>
        </li>
        <li>
          <input type="checkbox" name="budget_site_resources[]" id="budget_site_resources13" value="Integração com Chat online"/>
          <label for="budget_site_resources13">Integração com Chat online</label>
        </li>
        <li>
          <input type="checkbox" name="budget_site_resources[]" id="budget_site_resources14" value="SEO avançado"/>
          <label for="budget_site_resources14">SEO avançado</label>
        </li>
        <li>
          <input type="checkbox" name="budget_site_resources[]" id="budget_site_resources15" value="Captação de email marketing integrado"/>
          <label for="budget_site_resources15">Captação de email marketing integrado</label>
        </li>
      </ul>
    </div>

    <div class="form__group form__group--inline">
      <label class="form__label" for="budget_site_type01">Que tipo de site ele será?</label>
      <ul class="form__list">
        <li>
          <input type="radio" name="budget_site_type" id="budget_site_type01" value="Site Institucional"/>
          <label for="budget_site_type01">Site Institucional <small>(divulgação da minha marca/empresa)</small></label>
        </li>
        <li>
          <input type="radio" name="budget_site_type" id="budget_site_type02" value="Loja virtual"/>
          <label for="budget_site_type02">Loja virtual <small>(e-commerce)</small></label>
        </li>
        <li>
          <input type="radio" name="budget_site_type" id="budget_site_type03" value="Blog"/>
          <label for="budget_site_type03">Blog</label>
        </li>
        <li>
          <input type="radio" name="budget_site_type" id="budget_site_type04" value="Fórum"/>
          <label for="budget_site_type04">Fórum</label>
        </li>
        <li>
          <input type="radio" name="budget_site_type" id="budget_site_type05" value="Site/Portal de notícias"/>
          <label for="budget_site_type05">Site/Portal de notícias</label>
        </li>
        <li>
          <input type="radio" name="budget_site_type" id="budget_site_type06" value="Hotsite"/>
          <label for="budget_site_type06">Hotsite <small>(site de apresentação de um produto e/ou serviço)</small></label>
        </li>
        <li>
          <input type="radio" name="budget_site_type" id="budget_site_type07" value="Landing page"/>
          <label for="budget_site_type07">Landing page <small>(uma página para captação de leads/cadastros)</small></label>
        </li>
        <li>
          <input type="radio" name="budget_site_type" id="budget_site_type08" value="Aplicativo mobile"/>
          <label for="budget_site_type08">Aplicativo mobile <small>(ex.: WhatsApp)</small></label>
        </li>
        <li>
          <input type="radio" name="budget_site_type" id="budget_site_type09" value="Aplicação web"/>
          <label for="budget_site_type09">Aplicação web</label>
        </li>
      </ul>
    </div>

    <div class="form__group form__group--inline">
      <label class="form__label" for="budget_total_pages">Quantas páginas você imagina que o site deve ter?</label>
      <ul class="form__list">
        <li>
          <input type="radio" name="budget_total_pages" id="budget_total_pages01" value="Apenas 1 página"/>
          <label for="budget_total_pages01">Apenas 1 página</label>
        </li>
        <li>
          <input type="radio" name="budget_total_pages" id="budget_total_pages02" value="Entre 2 a 5 páginas"/>
          <label for="budget_total_pages02">Entre 2 a 5 páginas</label>
        </li>
        <li>
          <input type="radio" name="budget_total_pages" id="budget_total_pages03" value="Entre 5 a 10 páginas"/>
          <label for="budget_total_pages03">Entre 5 a 10 páginas</label>
        </li>
        <li>
          <input type="radio" name="budget_total_pages" id="budget_total_pages04" value="Mais de 10 páginas"/>
          <label for="budget_total_pages04">Mais de 10 páginas</label>
        </li>
      </ul>
    </div>

    <div class="form__group">
      <label class="form__label" for="budget_competitors_websites">Cite abaixo os sites dos seus concorrentes e/ou sites que te inspiraram a construir o seu</label>
      <textarea class="form__field" name="budget_competitors_websites" id="budget_competitors_websites" placeholder="Sua resposta"/>
    </div>
  </fieldset>
</template>

<script>
  export default {
  }
</script>
