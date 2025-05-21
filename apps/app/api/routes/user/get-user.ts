import { getUserById } from '@starter/db/data'
import { db, factory } from '#api/shared'

export const getUserHandlers = factory.createHandlers(async c => {
  const user = await getUserById(db, { id: c.var.session.userId })
  return c.json({ user })
})
