import { createGithubClient } from '@starter/auth/github'
import { env } from '#api/env'

export const githubClient = createGithubClient({
  clientId: env.GITHUB_CLIENT_ID,
  clientSecret: env.GITHUB_CLIENT_SECRET
})
