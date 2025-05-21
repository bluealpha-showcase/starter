import { createUrl, setStateCookie } from '@starter/auth/github'
import { generateState } from '@starter/auth/shared'
import { isLocal } from '#api/env'
import { factory, githubClient } from '#api/shared'

export const githubHandlers = factory.createHandlers(c => {
  const state = generateState()
  const url = createUrl(githubClient, { state })
  setStateCookie(c, { state, secure: !isLocal })
  return c.json({ url })
})
