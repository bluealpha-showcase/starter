import { createSession as _createSession } from '@starter/db/data'
import type { Session } from '@starter/db/schema'
import type { Database } from '@starter/db/shared'
import { encodeToken, sessionDuration } from '#shared'

type Props = {
  token: string
  userId: Session['userId']
}

export const createSession = (db: Database, { token, userId }: Props) => {
  const id = encodeToken({ token })
  return _createSession(db, {
    data: { id, userId, expiresAt: new Date(Date.now() + sessionDuration) }
  })
}
