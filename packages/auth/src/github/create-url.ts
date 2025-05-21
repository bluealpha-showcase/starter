import type { GithubClient } from '#github'

type Props = {
  state: string
}

export const createUrl = (client: GithubClient, { state }: Props) => {
  return client.createAuthorizationURL(state, [])
}
