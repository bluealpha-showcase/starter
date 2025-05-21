import type { EmailClient } from '#shared'

type Props = {
  from: string
  to: string
  subject: string
  html: string
}

export const send = (client: EmailClient, props: Props) => {
  return client.emails.send(props)
}
