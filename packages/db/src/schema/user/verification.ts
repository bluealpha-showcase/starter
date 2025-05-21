import { relations } from 'drizzle-orm'
import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'
import type { z } from 'zod'
import { user } from '#schema'
import {
  actionsConfig,
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
  id,
  timestampConfig,
  timestamps
} from '#shared'

export const verification = pgTable('verification', {
  id,
  userId: uuid()
    .notNull()
    .references(() => user.id, actionsConfig)
    .unique(),
  code: text().notNull(),
  expiresAt: timestamp(timestampConfig).notNull(),
  ...timestamps
})

export const verificationRelations = relations(verification, ({ one }) => ({
  user: one(user, {
    fields: [verification.userId],
    references: [user.id]
  })
}))

export const verificationSchema = createSelectSchema(verification, {
  code: schema => schema.length(6)
})
export const newVerificationSchema = createInsertSchema(verification, {
  code: schema => schema.length(6)
}).omit({ id: true, createdAt: true, updatedAt: true })
export const updateVerificationSchema = createUpdateSchema(verification, {
  code: schema => schema.length(6)
}).omit({ id: true, createdAt: true, updatedAt: true })

export type Verification = z.infer<typeof verificationSchema>
export type NewVerification = z.infer<typeof newVerificationSchema>
export type UpdateVerification = z.infer<typeof updateVerificationSchema>
