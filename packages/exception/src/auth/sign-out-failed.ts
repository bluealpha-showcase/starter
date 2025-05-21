import { Exception, code, status } from '#shared'

export class SignOutFailed extends Exception {
  constructor(cause?: unknown) {
    super(status.internalServerError, code.signOutFailed, 'Sign out failed', cause)
  }
}
