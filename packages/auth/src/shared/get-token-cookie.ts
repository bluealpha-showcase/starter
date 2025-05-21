import type { Context } from 'hono'
import { getCookie } from 'hono/cookie'

export const getTokenCookie = (c: Context) => {
  return getCookie(c, 'token')
}
