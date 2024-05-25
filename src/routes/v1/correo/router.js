import express from 'express'

import { CorreoService } from './service.js'
import { validatorHandler } from '../../../middlewares/validator.handler.js'
import { sendCorreoSchema } from './schema.js'

const router = express.Router()
const service = new CorreoService()

router.post('/', validatorHandler(sendCorreoSchema, 'body'), async (req, res, next) => {
  try {
    const infoCorreo = req.body
    const correo = await service.sendCorreo(infoCorreo)
    res.json(correo)
  } catch (error) {
    next(error)
  }
})

export { router }