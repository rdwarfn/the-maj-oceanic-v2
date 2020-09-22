export const state = () => ({
  counter: 0,
  breadcrumbs: [],
  hero: {},
})

export const mutations = {
  SET_BREADCRUMBS (state, crumbs) {
    state.breadcrumbs = crumbs
  },
  SET_HERO (state, hero) {
    state.hero = hero
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