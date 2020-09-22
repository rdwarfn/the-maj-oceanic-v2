export default ({ route, store }) => {
  // Take the last value (latest route child)
  const heros = route.meta.reduce((hero, meta) => meta.hero || hero, {})
  store.commit('SET_HERO', heros)
}