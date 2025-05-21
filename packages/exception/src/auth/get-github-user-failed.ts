import { Exception, code, status } from '#shared'

export class GetGithubUserFailed extends Exception {
  constructor(cause?: unknown) {
    super(status.internalServerError, code.getGithubUserFailed, 'Get github user failed', cause)
  }
}
