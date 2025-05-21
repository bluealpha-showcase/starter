import { drizzle as drizzleHttp } from 'drizzle-orm/neon-http'
import { drizzle as drizzleWebsockets } from 'drizzle-orm/neon-serverless'
import * as schema from '#schema'

type Props = {
  connection: string
}

export const createDatabase = ({ connection }: Props) => {
  const config = {
    connection,
    schema,
    casing: 'snake_case',
    logger: true
  } as const

  const http = drizzleHttp(config)
  const websockets = drizzleWebsockets(config)

  return { http, websockets }
}

export type Database = ReturnType<typeof createDatabase>
