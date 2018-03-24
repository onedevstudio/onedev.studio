import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import Vuelidate from 'vuelidate'
import WebFont from 'webfontloader'
import VueTyperPlugin from 'vue-typer'

Vue.use(Vuelidate)
Vue.use(VueTyperPlugin)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  lazyComponent: true
})

WebFont.load({
  google: {
    families: ['Roboto:300,400,500,700,900']
  }
})
