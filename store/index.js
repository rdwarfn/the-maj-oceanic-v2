export const state = () => ({
  breadcrumbs: [],
  drawer: false,
  storage: process.env.BASE_STORAGE || 'https://backend.themajoceanic.com/media/'
})

export const mutations = {
  SET_BREADCRUMBS (state, crumbs) {
    state.breadcrumbs = crumbs
  },
  toggleDrawer (state) {
    state.drawer = !state.drawer
  },
  setDrawer (state, val) {
    state.drawer = val
  }
}
