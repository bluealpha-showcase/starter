import { Exception, code, status } from '#shared'

export class GithubSignInFailed extends Exception {
  constructor(cause?: unknown) {
    super(status.internalServerError, code.githubSignInFailed, 'Github sign in failed', cause)
  }
}
