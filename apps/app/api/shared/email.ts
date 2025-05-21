import { createEmailClient } from '@starter/email/shared'
import { env } from '#api/env'

export const emailClient = createEmailClient({ key: env.RESEND_API_KEY })
