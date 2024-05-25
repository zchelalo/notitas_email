import { config as conf } from 'dotenv'

conf()

const config = {
  ENV: process.env.NODE_ENV || 'dev',
  PORT: process.env.PORT || 3000,
  
  EMAIL_SERVER: process.env.EMAIL_SERVER,
  EMAIL_PORT: process.env.EMAIL_PORT,
  EMAIL_SECURE: process.env.EMAIL_SECURE,
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS
}

export { config }