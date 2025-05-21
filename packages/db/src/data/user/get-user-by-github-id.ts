import { eq } from 'drizzle-orm'
import { type User, user } from '#schema'
import type { Database } from '#shared'

type Props = {
  githubId: NonNullable<User['githubId']>
}

export const getUserByGithubId = (db: Database, { githubId }: Props) => {
  return db.http.query.user.findFirst({ where: eq(user.githubId, githubId) })
}
