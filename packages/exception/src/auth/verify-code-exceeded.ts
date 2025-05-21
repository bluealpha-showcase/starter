import { Exception, code, status } from '#shared'

export class VerifyCodeExceeded extends Exception {
  constructor(cause?: unknown) {
    super(status.tooManyRequests, code.verifyCodeExceeded, 'Verify code exceeded', cause)
  }
}
