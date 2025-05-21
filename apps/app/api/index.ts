import { notFound, onError } from '@starter/api'
import { csrf } from 'hono/csrf'
import { logger } from 'hono/logger'
import { authMiddleware } from '#api/middlewares'
import { authRoutes, userRoutes } from '#api/routes'
import { factory } from '#api/shared'

const app = factory
  .createApp()
  .basePath('/api')
  .use(logger())
  .use(csrf())
  .route('/auth', authRoutes)
  .use(authMiddleware)
  .route('/user', userRoutes)
  .notFound(notFound)
  .onError(onError)

export type App = typeof app
export default app
