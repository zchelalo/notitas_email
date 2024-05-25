import express from 'express'

import { router as correoRouter } from './correo/router.js'

function routerApi(app) {
  const router = express.Router()
  app.use('/v1', router)
  router.use('/correo', correoRouter)
}

export { routerApi }