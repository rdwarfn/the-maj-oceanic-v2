import {
  createIPX,
  createIPXMiddleware
} from 'ipx'

const TMO_IMAGE_URL = 'https://backend.themajoceanic.com/media'

const ipx = createIPX({
  domains: [
    TMO_IMAGE_URL
  ]
})

const middleware = createIPXMiddleware(ipx)

export default (req, res) => {
  req.url = `/${TMO_IMAGE_URL}${req.url}`

  return middleware(req, res)
}
