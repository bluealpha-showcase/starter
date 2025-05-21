import { zValidator } from '@hono/zod-validator'
import { generateCode, verificationDuration } from '@starter/auth/shared'
import {
  createUser,
  createVerification,
  deleteVerificationByUserId,
  getUserByEmail
} from '@starter/db/data'
import { sendCodeEmail } from '@starter/email/send'
import { SendCodeExceeded } from '@starter/exception/auth'
import { z } from 'zod'
import { env, isLocal } from '#api/env'
import { db, emailClient, factory } from '#api/shared'

const sendCodeSchema = z.object({
  email: z.string().email()
})

export const sendCodeHandlers = factory.createHandlers(
  zValidator('json', sendCodeSchema),
  async c => {
    const { email } = c.req.valid('json')

    if (!isLocal) {
      const { success } = await c.env.AUTH_RATE_LIMITER.limit({ key: email })

      if (!success) {
        throw new SendCodeExceeded()
      }
    }

    let user = await getUserByEmail(db, { email })

    if (!user) {
      user = await createUser(db, { data: { email } })
    }

    await deleteVerificationByUserId(db, { userId: user.id })

    const code = generateCode()

    await createVerification(db, {
      data: { userId: user.id, code, expiresAt: new Date(Date.now() + verificationDuration) }
    })

    await sendCodeEmail(emailClient, { baseUrl: env.BASE_URL, email, code })

    return c.json({ message: `Code sent to ${email}` })
  }
)
