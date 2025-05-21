import type { Code, Status } from '#shared'

export class Exception extends Error {
  readonly status: Status
  readonly code: Code

  constructor(status: Status, code: Code, message: string, cause?: unknown) {
    super(message, { cause })
    this.name = this.constructor.name
    this.status = status
    this.code = code
  }
}
