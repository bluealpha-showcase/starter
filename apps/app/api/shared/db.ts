import { createDatabase } from '@starter/db/shared'
import { env } from '#api/env'

export const db = createDatabase({ connection: env.DATABASE_URL })
