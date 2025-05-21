import { Exception, code, status } from '#shared'

export class VerifyCodeFailed extends Exception {
  constructor(cause?: unknown) {
    super(status.internalServerError, code.verifyCodeFailed, 'Verify code failed', cause)
  }
}
