import { CookieSetOptions } from 'universal-cookie/cjs/types'

export default {
  path: '/',
  maxAge: 2592000,
  domain: process.env.NODE_ENV !== 'development' ? 'alium.finance' : 'localhost',
  secure: process.env.NODE_ENV !== 'development',
  httpOnly: false,
  sameSite: 'lax',
} as CookieSetOptions
