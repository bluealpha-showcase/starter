import { eq } from 'drizzle-orm'
import { type Session, session } from '#schema'
import type { Database } from '#shared'

type Props = {
  id: Session['id']
}

export const getSessionById = (db: Database, { id }: Props) => {
  return db.http.query.session.findFirst({ where: eq(session.id, id) })
}
