import { timestamp, uuid } from 'drizzle-orm/pg-core'
import { timestampConfig } from './configs'

export const id = uuid().primaryKey().defaultRandom()

export const timestamps = {
  createdAt: timestamp(timestampConfig).notNull().defaultNow(),
  updatedAt: timestamp(timestampConfig)
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date())
}
