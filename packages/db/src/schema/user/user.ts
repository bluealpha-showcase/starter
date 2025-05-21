import { relations } from 'drizzle-orm'
import { integer, pgTable, text } from 'drizzle-orm/pg-core'
import type { z } from 'zod'
import { session, verification } from '#schema'
import { createInsertSchema, createSelectSchema, createUpdateSchema, id, timestamps } from '#shared'

export const user = pgTable('user', {
  id,
  githubId: integer().unique(),
  email: text().unique(),
  ...timestamps
})

export const userRelations = relations(user, ({ many, one }) => ({
  sessions: many(session),
  verification: one(verification, {
    fields: [user.id],
    references: [verification.userId]
  })
}))

export const userSchema = createSelectSchema(user, {
  email: schema => schema.email()
})
export const newUserSchema = createInsertSchema(user, {
  email: schema => schema.email()
}).omit({ id: true, createdAt: true, updatedAt: true })
export const updateUserSchema = createUpdateSchema(user, {
  email: schema => schema.email()
}).omit({ id: true, createdAt: true, updatedAt: true })

export type User = z.infer<typeof userSchema>
export type NewUser = z.infer<typeof newUserSchema>
export type UpdateUser = z.infer<typeof updateUserSchema>
