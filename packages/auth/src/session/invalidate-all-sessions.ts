import { deleteSessionByUserId } from '@starter/db/data'
import type { Session } from '@starter/db/schema'
import type { Database } from '@starter/db/shared'

type Props = {
  userId: Session['userId']
}

export const invalidateAllSessions = (db: Database, { userId }: Props) => {
  return deleteSessionByUserId(db, { userId })
}
