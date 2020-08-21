export const state = () => ({
  list: []
})

export const mutations = {
  add (state, obj) {
    state.list.push (obj)
  }
}