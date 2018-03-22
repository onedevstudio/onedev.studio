<template>
  <form name="contact" action="/" class="form" netlify-honeypot="bot-field" method="post" netlify>
    <input type="hidden" name="form-name" value="contact"/>
    <p class="form__hidden"><label>Don’t fill this out: <input name="bot-field"/></label></p>
    <div class="form__group">
      <label class="form__label" for="name">Name:</label>
      <input class="form__field" name="name" id="name"/>
    </div>
    <div class="form__group">
      <label class="form__label" for="email">Email:</label>
      <input class="form__field" name="email" id="email"/>
    </div>
    <div class="form__group">
      <label class="form__label" for="message">Message:</label>
      <textarea class="form__field" name="message" id="message"/>
    </div>
    <div class="form__group">
      <input class="button button--primary" type="submit" value="Send message"/>
    </div>
  </form>
</template>

<script>
  export default {
  }
</script>

<style lang="stylus">
</style>
