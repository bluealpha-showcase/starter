import { Exception, code, status } from '#shared'

export class SendCodeExceeded extends Exception {
  constructor(cause?: unknown) {
    super(status.tooManyRequests, code.sendCodeExceeded, 'Send code exceeded', cause)
  }
}
