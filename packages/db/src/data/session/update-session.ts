import { eq } from 'drizzle-orm'
import { type Session, type UpdateSession, session } from '#schema'
import type { Database } from '#shared'

type Props = {
  id: Session['id']
  data: UpdateSession
}

export const updateSession = (db: Database, { id, data }: Props) => {
  return db.http.update(session).set(data).where(eq(session.id, id))
}
