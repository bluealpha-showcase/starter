import type { Context } from 'hono'
import { getCookie } from 'hono/cookie'

export const getStateCookie = (c: Context) => {
  return getCookie(c, 'github_oauth_state')
}
