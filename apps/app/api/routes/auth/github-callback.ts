import { zValidator } from '@hono/zod-validator'
import { getGithubUser, getStateCookie, validateCode } from '@starter/auth/github'
import { createSession } from '@starter/auth/session'
import { callbackSchema, generateToken, setTokenCookie } from '@starter/auth/shared'
import { createUser, getUserByGithubId } from '@starter/db/data'
import { InvalidState, StateCookieNotFound } from '@starter/exception/auth'
import { isLocal } from '#api/env'
import { db, factory, githubClient } from '#api/shared'

export const githubCallbackHandlers = factory.createHandlers(
  zValidator('query', callbackSchema),
  async c => {
    const { code, state } = c.req.valid('query')

    const storedState = getStateCookie(c)

    if (!storedState) {
      throw new StateCookieNotFound()
    }

    if (storedState !== state) {
      throw new InvalidState()
    }

    const tokens = await validateCode(githubClient, { code })

    const githubUser = await getGithubUser({ tokens })

    let user = await getUserByGithubId(db, { githubId: githubUser.id })

    if (!user) {
      user = await createUser(db, { data: { githubId: githubUser.id, email: githubUser.email } })
    }

    const token = generateToken()
    const session = await createSession(db, { token, userId: user.id })
    setTokenCookie(c, { token, expires: session.expiresAt, secure: !isLocal })

    return c.json({ message: 'Github callback successful' })
  }
)
