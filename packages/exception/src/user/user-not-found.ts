import { Exception, code, status } from '#shared'

export class UserNotFound extends Exception {
  constructor(cause?: unknown) {
    super(status.notFound, code.userNotFound, 'User not found', cause)
  }
}
