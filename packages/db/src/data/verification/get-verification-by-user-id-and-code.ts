import { and, eq } from 'drizzle-orm'
import { type Verification, verification } from '#schema'
import type { Database } from '#shared'

type Props = {
  userId: Verification['userId']
  code: Verification['code']
}

export const getVerificationByUserIdAndCode = (db: Database, { userId, code }: Props) => {
  return db.http.query.verification.findFirst({
    where: and(eq(verification.userId, userId), eq(verification.code, code))
  })
}
