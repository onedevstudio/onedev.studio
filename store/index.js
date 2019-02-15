import Vuex from 'vuex'

const Store = () => {
  return new Vuex.Store({
    state: {
      isLoading: false
    },
    mutations: {
      TOGGLE_LOADING (state) {
        state.isLoading = !state.isLoading
      }
    }
  })
}

export default Store
