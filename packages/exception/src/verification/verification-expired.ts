import { Exception, code, status } from '#shared'

export class VerificationExpired extends Exception {
  constructor(cause?: unknown) {
    super(status.unauthorized, code.verificationExpired, 'Verification expired', cause)
  }
}
