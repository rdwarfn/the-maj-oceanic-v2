export const state = () => ({
  counter: 0,
  breadcrumbs: [],
  drawer: false,
})

export const mutations = {
  SET_BREADCRUMBS (state, crumbs) {
    state.breadcrumbs = crumbs
  },
  toggleDrawer (state) {
    state.drawer = !state.drawer
  },
  increment(state) {
    state.counter++
  },
  icrementAmount (state, payload) {
    state.counter += payload
  }
}

export const actions = {
  increment ({ commit }) {
    setTimeout(() => {
      commit('increment')
    }, 1000)
  },
  incrementAmount ({ commit }, payload) {
    setTimeout(() => {
      commit('icrementAmount', payload);
    }, 1000)
  }
}