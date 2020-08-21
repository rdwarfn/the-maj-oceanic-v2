export const state = () => ({
  counter: 0
})

export const mutations = {
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