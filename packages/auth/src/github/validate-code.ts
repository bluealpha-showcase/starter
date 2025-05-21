import type { GithubClient } from '#github'

type Props = {
  code: string
}

export const validateCode = (client: GithubClient, { code }: Props) => {
  return client.validateAuthorizationCode(code)
}
