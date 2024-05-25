import boom from '@hapi/boom'
import nodemailer from 'nodemailer'

import { config } from '../../../config/config.js'

class CorreoService {
  constructor(){}

  async sendCorreo(infoCorreo){
    try {
      const transporter = nodemailer.createTransport({
        host: config.EMAIL_SERVER,
        port: config.EMAIL_PORT,
        secure: config.EMAIL_SECURE === 'true' ? true : false,
        auth: {
          user: config.EMAIL_USER,
          pass: config.EMAIL_PASS
        }
      })
  
      await transporter.sendMail(infoCorreo)
  
      return { message: 'Correo enviado' }
    } catch (error) {
      boom.badImplementation('Error al enviar el correo', error)
    }
  }

}

export { CorreoService }