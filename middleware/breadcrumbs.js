export default ({ route, store }) => {
  // Take the last value (latest route child)
  const defaultBreadcrumbs = [{
    to: route.path,
    disabled: true,
    text: route.name === 'index' ? 'Home' : route.name.replace(/\-/g, ' ')
  }]
  const crumbs = route.meta.reduce((breadcrumbs, meta) => meta.breadcrumbs || breadcrumbs, defaultBreadcrumbs)
  store.commit('SET_BREADCRUMBS', crumbs)
}