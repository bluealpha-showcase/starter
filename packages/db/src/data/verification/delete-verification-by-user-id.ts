import { eq } from 'drizzle-orm'
import { type Verification, verification } from '#schema'
import type { Database } from '#shared'

type Props = {
  userId: Verification['userId']
}

export const deleteVerificationByUserId = (db: Database, { userId }: Props) => {
  return db.http.delete(verification).where(eq(verification.userId, userId))
}
