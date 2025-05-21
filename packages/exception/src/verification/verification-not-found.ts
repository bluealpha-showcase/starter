import { Exception, code, status } from '#shared'

export class VerificationNotFound extends Exception {
  constructor(cause?: unknown) {
    super(status.notFound, code.verificationNotFound, 'Verification not found', cause)
  }
}
