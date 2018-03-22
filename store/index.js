import Vuex from 'vuex'

const Store = () => {
  return new Vuex.Store({
    state: {
      baseUrl: process.env.baseUrl,
      title: `${process.env.title} - ${process.env.shortDescription}`,
      description: `${process.env.description}`,
      imageShare: `${process.env.imageShare}`,
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
