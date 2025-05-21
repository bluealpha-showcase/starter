import { factory } from '#api/shared'
import { getUserHandlers } from './get-user'

export const userRoutes = factory.createApp().get('/', ...getUserHandlers)
