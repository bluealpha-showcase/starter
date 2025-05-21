import { type NewVerification, verification } from '#schema'
import type { Database } from '#shared'

type Props = {
  data: NewVerification
}

export const createVerification = (db: Database, { data }: Props) => {
  return db.http.insert(verification).values(data)
}
