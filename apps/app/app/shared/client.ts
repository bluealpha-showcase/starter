import { hc } from 'hono/client'
import type { App } from '#api'

export const { api } = hc<App>('/')
