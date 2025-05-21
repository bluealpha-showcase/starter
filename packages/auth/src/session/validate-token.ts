import { deleteSessionById, getSessionById, updateSession } from '@starter/db/data'
import type { Database } from '@starter/db/shared'
import { encodeToken, refreshDuration, sessionDuration } from '#shared'

type Props = {
  token: string
}

export const validateToken = async (db: Database, { token }: Props) => {
  const id = encodeToken({ token })

  const session = await getSessionById(db, { id })

  if (!session) {
    return null
  }

  if (Date.now() >= session.expiresAt.getTime()) {
    await deleteSessionById(db, { id })
    return null
  }

  if (Date.now() >= session.expiresAt.getTime() - refreshDuration) {
    const newExpiresAt = new Date(Date.now() + sessionDuration)
    session.expiresAt = newExpiresAt
    await updateSession(db, { id, data: { expiresAt: newExpiresAt } })
  }

  return session
}
