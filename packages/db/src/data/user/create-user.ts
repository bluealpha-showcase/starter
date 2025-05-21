import { type NewUser, user } from '#schema'
import type { Database } from '#shared'

type Props = {
  data: NewUser
}

export const createUser = async (db: Database, { data }: Props) => {
  const [record] = await db.http.insert(user).values(data).returning()
  return record
}
