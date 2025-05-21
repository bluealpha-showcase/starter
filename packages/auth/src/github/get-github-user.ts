import { GetGithubUserFailed, InvalidGithubUser } from '@starter/exception/auth'
import type { OAuth2Tokens } from 'arctic'
import { githubUserSchema } from '#shared'

type Props = {
  tokens: OAuth2Tokens
}

export const getGithubUser = async ({ tokens }: Props) => {
  const response = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${tokens.accessToken()}`,
      'User-Agent': 'starter'
    }
  })

  if (!response.ok) {
    throw new GetGithubUserFailed(response)
  }

  const user = await response.json()

  const { success, data, error } = githubUserSchema.safeParse(user)

  if (!success) {
    throw new InvalidGithubUser(error)
  }

  return data
}
