import type { PgTimestampConfig, ReferenceConfig } from 'drizzle-orm/pg-core'

export const actionsConfig: ReferenceConfig['actions'] = {
  onDelete: 'cascade'
}

export const timestampConfig: PgTimestampConfig = {
  withTimezone: true
}
