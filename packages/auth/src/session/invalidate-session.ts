import { deleteSessionById } from '@starter/db/data'
import type { Session } from '@starter/db/schema'
import type { Database } from '@starter/db/shared'

type Props = {
  id: Session['id']
}

export const invalidateSession = (db: Database, { id }: Props) => {
  return deleteSessionById(db, { id })
}
