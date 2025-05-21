import type { Context } from 'hono'
import { setCookie } from 'hono/cookie'

type Props = {
  token: string
  expires: Date
  secure: boolean
}

export const setTokenCookie = (c: Context, { token, expires, secure }: Props) => {
  return setCookie(c, 'token', token, {
    expires,
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
    secure
  })
}
