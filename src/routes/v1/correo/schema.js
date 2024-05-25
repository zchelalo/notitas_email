import Joi from 'joi'

const from = Joi.string()
const to = Joi.string()
const subject = Joi.string()
const html = Joi.string()

const sendCorreoSchema = Joi.object({
  from: from.required(),
  to: to.required(),
  subject: subject.required(),
  html: html.required()
})

export { sendCorreoSchema }