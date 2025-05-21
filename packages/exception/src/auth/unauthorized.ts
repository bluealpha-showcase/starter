import { Exception, code, status } from '#shared'

export class Unauthorized extends Exception {
  constructor(cause?: unknown) {
    super(status.unauthorized, code.unauthorized, 'Unauthorized', cause)
  }
}
