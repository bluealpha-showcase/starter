import { type NewSession, session } from '#schema'
import type { Database } from '#shared'

type Props = {
  data: NewSession
}

export const createSession = async (db: Database, { data }: Props) => {
  const [record] = await db.http.insert(session).values(data).returning()
  return record
}
