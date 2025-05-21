import { env as _env } from 'cloudflare:workers'
import { z } from 'zod'

export const envSchema = z.object({
  BASE_URL: z.enum([
    'http://localhost:5173',
    'https://dev.starter.samyvs.com',
    'https://starter.samyvs.com'
  ]),
  DATABASE_URL: z.string().url(),
  ENVIRONMENT: z.enum(['local', 'development', 'production']),
  GITHUB_CLIENT_ID: z.string(),
  GITHUB_CLIENT_SECRET: z.string(),
  RESEND_API_KEY: z.string()
})

const { success, data, error } = envSchema.safeParse(_env)

if (!success) {
  throw new Error(error.message)
}

export const env = data

export const isLocal = env.ENVIRONMENT === 'local'
export const isDevelopment = env.ENVIRONMENT === 'development'
export const isProduction = env.ENVIRONMENT === 'production'
