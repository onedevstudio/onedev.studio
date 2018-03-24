import Vuex from 'vuex'

const imageShare = require('~/assets/images/share.png')

const Store = () => {
  return new Vuex.Store({
    state: {
      baseUrl: process.env.baseUrl,
      siteName: process.env.siteName,
      title: `${process.env.siteName} - ${process.env.shortDescription}`,
      description: process.env.description,
      shortDescription: process.env.shortDescription,
      imageShare: `${process.env.baseUrl}${imageShare}`,
      isLoading: false,
      showNavbar: false,
      formData: {},
      step: 0
    },
    mutations: {
      TOGGLE_LOADING (state) {
        state.isLoading = !state.isLoading
      },
      TOGGLE_NAVBAR (state) {
        state.showNavbar = !state.showNavbar
      },
      FORWARD_STEPS (state) {
        state.step++
      },
      BACKWARD_STEPS (state) {
        state.step--
      }
    }
  })
}

export default Store
