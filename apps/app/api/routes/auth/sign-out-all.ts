import { invalidateAllSessions } from '@starter/auth/session'
import { deleteTokenCookie } from '@starter/auth/shared'
import { isLocal } from '#api/env'
import { authMiddleware } from '#api/middlewares'
import { db, factory } from '#api/shared'

export const signOutAllHandlers = factory.createHandlers(authMiddleware, async c => {
  await invalidateAllSessions(db, { userId: c.var.session.userId })
  deleteTokenCookie(c, { secure: !isLocal })
  return c.json({ message: 'Sign out all successful' })
})
