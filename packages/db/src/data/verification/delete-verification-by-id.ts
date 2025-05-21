import { eq } from 'drizzle-orm'
import { type Verification, verification } from '#schema'
import type { Database } from '#shared'

type Props = {
  id: Verification['id']
}

export const deleteVerificationById = (db: Database, { id }: Props) => {
  return db.http.delete(verification).where(eq(verification.id, id))
}
