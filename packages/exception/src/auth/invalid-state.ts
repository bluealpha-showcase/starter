import { Exception, code, status } from '#shared'

export class InvalidState extends Exception {
  constructor(cause?: unknown) {
    super(status.badRequest, code.invalidState, 'Invalid state', cause)
  }
}
