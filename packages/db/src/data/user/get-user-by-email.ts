import { eq } from 'drizzle-orm'
import { type User, user } from '#schema'
import type { Database } from '#shared'

type Props = {
  email: NonNullable<User['email']>
}

export const getUserByEmail = (db: Database, { email }: Props) => {
  return db.http.query.user.findFirst({ where: eq(user.email, email) })
}
