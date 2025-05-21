import { eq } from 'drizzle-orm'
import { type Session, session } from '#schema'
import type { Database } from '#shared'

type Props = {
  id: Session['id']
}

export const deleteSessionById = (db: Database, { id }: Props) => {
  return db.http.delete(session).where(eq(session.id, id))
}
