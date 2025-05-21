import { eq } from 'drizzle-orm'
import { type UpdateUser, type User, user } from '#schema'
import type { Database } from '#shared'

type Props = {
  id: User['id']
  data: UpdateUser
}

export const updateUser = (db: Database, { id, data }: Props) => {
  return db.http.update(user).set(data).where(eq(user.id, id))
}
