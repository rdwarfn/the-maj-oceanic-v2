import { $fetch } from 'ohmyfetch/node'

const baseURL = process.env.BASE_URL || 'https://backend.themajoceanic.com'

export function instance (url, params = {}) {
  return $fetch(url, {
    baseURL,
    params
  })
}

export function getPage (url) {
  return instance(`api/pages/${url}`)
}

export function getNav () {
  return this.$axios.$get('/api/navigations')
}
