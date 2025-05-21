import { GitHub } from 'arctic'

type Props = {
  clientId: string
  clientSecret: string
}

export const createGithubClient = ({ clientId, clientSecret }: Props) => {
  return new GitHub(clientId, clientSecret, null)
}

export type GithubClient = ReturnType<typeof createGithubClient>
