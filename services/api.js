import { $fetch } from 'ohmyfetch/node'

const baseURL = process.env.BASE_URL

function instance (url, params = {}) {
  return $fetch(url, {
    baseURL,
    params
  })
}

export function getNavigation () {
  return instance('api/navigations/')
}

function getNav () {
  return this.$axios.$get('/api/navigations')
}

export {
  getNav
}
