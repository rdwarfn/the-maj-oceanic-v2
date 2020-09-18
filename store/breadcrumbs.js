const getDefaultState = () => {
  return {
    items: [],
  }
}

export const state = () => getDefaultState();

export const mutations = {
  add (state, { text, href }) {
    const ctx = state.items.findIndex(c => c.text === text)
    if (ctx < 0) {
      state.items.push ({ text, href })
    }
  },
  remove (state, context) {
    state.items.splice(state.items.findIndex(context))
  },
  reset (state) {
    Object.assign(state, getDefaultState())
  }
}
