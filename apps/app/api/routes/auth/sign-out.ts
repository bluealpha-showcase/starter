import { invalidateSession } from '@starter/auth/session'
import { deleteTokenCookie } from '@starter/auth/shared'
import { isLocal } from '#api/env'
import { authMiddleware } from '#api/middlewares'
import { db, factory } from '#api/shared'

export const signOutHandlers = factory.createHandlers(authMiddleware, async c => {
  await invalidateSession(db, { id: c.var.session.id })
  deleteTokenCookie(c, { secure: !isLocal })
  return c.json({ message: 'Sign out successful' })
})
