import type { Context } from 'hono'
import { deleteCookie } from 'hono/cookie'

type Props = {
  secure: boolean
}

export const deleteTokenCookie = (c: Context, { secure }: Props) => {
  return deleteCookie(c, 'token', {
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
    secure
  })
}
