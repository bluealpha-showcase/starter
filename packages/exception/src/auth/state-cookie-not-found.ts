import { Exception, code, status } from '#shared'

export class StateCookieNotFound extends Exception {
  constructor(cause?: unknown) {
    super(status.badRequest, code.stateCookieNotFound, 'State cookie not found', cause)
  }
}
