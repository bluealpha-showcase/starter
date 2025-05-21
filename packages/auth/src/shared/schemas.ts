import { z } from 'zod'

export const callbackSchema = z.object({
  code: z.string(),
  state: z.string()
})

export const githubUserSchema = z.object({
  id: z.number(),
  email: z.string().email().nullable()
})
