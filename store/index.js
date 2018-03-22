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
      imageShare,
      isLoading: false,
      showNavbar: false
    },
    mutations: {
      toggleLoading (state) {
        state.isLoading = !state.isLoading
      },
      toggleNavbar (state) {
        state.showNavbar = !state.showNavbar
      }
    }
  })
}

export default Store
