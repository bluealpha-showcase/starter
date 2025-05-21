import { Exception, code, status } from '#shared'

export class GithubCallbackFailed extends Exception {
  constructor(cause?: unknown) {
    super(status.internalServerError, code.githubCallbackFailed, 'Github callback failed', cause)
  }
}
