import type { Session } from '@starter/db/schema'
import { createFactory } from 'hono/factory'

type Props = {
  Bindings: Env
  Variables: {
    session: Session
  }
}

export const factory = createFactory<Props>()
