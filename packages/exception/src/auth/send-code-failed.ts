import { Exception, code, status } from '#shared'

export class SendCodeFailed extends Exception {
  constructor(cause?: unknown) {
    super(status.internalServerError, code.sendCodeFailed, 'Send code failed', cause)
  }
}
