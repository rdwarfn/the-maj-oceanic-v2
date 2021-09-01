
function getNav () {
  return this.$axios.$get('/api/navigations')
}

export {
  getNav
}
