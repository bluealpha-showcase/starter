import { zValidator } from '@hono/zod-validator'
import { createSession } from '@starter/auth/session'
import { generateToken, setTokenCookie } from '@starter/auth/shared'
import {
  deleteVerificationById,
  getUserByEmail,
  getVerificationByUserIdAndCode
} from '@starter/db/data'
import { VerifyCodeExceeded } from '@starter/exception/auth'
import { UserNotFound } from '@starter/exception/user'
import { VerificationExpired, VerificationNotFound } from '@starter/exception/verification'
import { z } from 'zod'
import { isLocal } from '#api/env'
import { db, factory } from '#api/shared'

const verifyCodeSchema = z.object({
  email: z.string().email(),
  code: z.string().length(6)
})

export const verifyCodeHandlers = factory.createHandlers(
  zValidator('json', verifyCodeSchema),
  async c => {
    const { email, code } = c.req.valid('json')

    if (!isLocal) {
      const { success } = await c.env.AUTH_RATE_LIMITER.limit({ key: email })

      if (!success) {
        throw new VerifyCodeExceeded()
      }
    }

    const user = await getUserByEmail(db, { email })

    if (!user) {
      throw new UserNotFound()
    }

    const verification = await getVerificationByUserIdAndCode(db, { userId: user.id, code })

    if (!verification) {
      throw new VerificationNotFound()
    }

    if (Date.now() >= verification.expiresAt.getTime()) {
      throw new VerificationExpired()
    }

    const { id, userId } = verification

    await deleteVerificationById(db, { id })

    const token = generateToken()
    const session = await createSession(db, { token, userId })
    setTokenCookie(c, { token, expires: session.expiresAt, secure: !isLocal })

    return c.json({ message: 'Verify code successful' })
  }
)
