import type { Context } from 'hono'
import { setCookie } from 'hono/cookie'

type Props = {
  state: string
  secure: boolean
}

export const setStateCookie = (c: Context, { state, secure }: Props) => {
  return setCookie(c, 'github_oauth_state', state, {
    httpOnly: true,
    maxAge: 60 * 10,
    path: '/',
    sameSite: 'lax',
    secure
  })
}
