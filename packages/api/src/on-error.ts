import { Exception, status } from '@starter/exception/shared'
import type { ErrorHandler } from 'hono'

export const onError: ErrorHandler = (err, c) => {
  console.error(err)

  if (err instanceof Exception) {
    return c.json({ ok: false, message: err.message }, err.status)
  }

  return c.json({ ok: false, message: 'Internal Server Error' }, status.internalServerError)
}
