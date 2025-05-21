import { z } from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string().url()
})

const { success, data, error } = envSchema.safeParse(process.env)

if (!success) {
  throw new Error(error.message)
}

export const env = data
