import { relations } from 'drizzle-orm'
import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'
import type { z } from 'zod'
import { user } from '#schema'
import {
  actionsConfig,
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
  timestampConfig,
  timestamps
} from '#shared'

export const session = pgTable('session', {
  id: text().primaryKey(),
  userId: uuid()
    .notNull()
    .references(() => user.id, actionsConfig),
  expiresAt: timestamp(timestampConfig).notNull(),
  ...timestamps
})

export const sessionRelations = relations(session, ({ one }) => ({
  user: one(user, {
    fields: [session.userId],
    references: [user.id]
  })
}))

export const sessionSchema = createSelectSchema(session)
export const newSessionSchema = createInsertSchema(session).omit({
  createdAt: true,
  updatedAt: true
})
export const updateSessionSchema = createUpdateSchema(session).omit({
  createdAt: true,
  updatedAt: true
})

export type Session = z.infer<typeof sessionSchema>
export type NewSession = z.infer<typeof newSessionSchema>
export type UpdateSession = z.infer<typeof updateSessionSchema>
