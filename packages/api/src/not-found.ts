import { status } from '@starter/exception/shared'
import type { NotFoundHandler } from 'hono'

export const notFound: NotFoundHandler = c => {
  return c.json({ ok: false, message: 'Not Found' }, status.notFound)
}
