import { Exception, code, status } from '#shared'

export class InvalidGithubUser extends Exception {
  constructor(cause?: unknown) {
    super(status.badRequest, code.invalidGithubUser, 'Invalid github user', cause)
  }
}
