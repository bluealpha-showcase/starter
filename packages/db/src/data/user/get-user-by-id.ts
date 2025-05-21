import { eq } from 'drizzle-orm'
import { type User, user } from '#schema'
import type { Database } from '#shared'

type Props = {
  id: User['id']
}

export const getUserById = (db: Database, { id }: Props) => {
  return db.http.query.user.findFirst({ where: eq(user.id, id) })
}
