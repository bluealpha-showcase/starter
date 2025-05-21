import { reset } from 'drizzle-seed'
import { env } from '#env'
import * as schema from '#schema'
import { createDatabase } from '#shared'

const db = createDatabase({ connection: env.DATABASE_URL })
await reset(db.http, schema)
