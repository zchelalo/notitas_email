import express from 'express'
import cors from 'cors'

import { config } from "./config/config.js"
import { routerApi } from './routes/index.js'
import { logErrors, errorHandler, boomErrorHandler } from './middlewares/error.handler.js'

const app = express()
const port = config.PORT

app.use(express.json())

const whitelist = ['http://notitas_back', 'http://notitas_auth']
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true)
    } else {
      callback(new Error('no permitido'))
    }
  }
}
app.use(cors(options))

routerApi(app)

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () => {
  console.log('Aplicación ejecutandose en el puerto', port)
})