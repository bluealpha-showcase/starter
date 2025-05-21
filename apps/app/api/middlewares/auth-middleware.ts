import { validateToken } from '@starter/auth/session'
import { deleteTokenCookie, getTokenCookie, setTokenCookie } from '@starter/auth/shared'
import { Unauthorized } from '@starter/exception/auth'
import { isLocal } from '#api/env'
import { db, factory } from '#api/shared'

export const authMiddleware = factory.createMiddleware(async (c, next) => {
  const token = getTokenCookie(c)

  if (!token) {
    throw new Unauthorized()
  }

  const session = await validateToken(db, { token })

  if (!session) {
    deleteTokenCookie(c, { secure: !isLocal })
    throw new Unauthorized()
  }

  setTokenCookie(c, { token, expires: session.expiresAt, secure: !isLocal })

  c.set('session', session)

  return next()
})
