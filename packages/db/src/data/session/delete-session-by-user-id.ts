import { eq } from 'drizzle-orm'
import { type Session, session } from '#schema'
import type { Database } from '#shared'

type Props = {
  userId: Session['userId']
}

export const deleteSessionByUserId = (db: Database, { userId }: Props) => {
  return db.http.delete(session).where(eq(session.userId, userId))
}
