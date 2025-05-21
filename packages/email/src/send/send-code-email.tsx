import { render } from '@react-email/components'
import { CodeEmail } from '#emails'
import { type EmailClient, noreply, send } from '#shared'

type Props = {
  baseUrl: string
  email: string
  code: string
}

export const sendCodeEmail = async (client: EmailClient, { baseUrl, email, code }: Props) => {
  return send(client, {
    from: noreply,
    to: email,
    subject: 'Sign in to Starter',
    html: await render(
      <CodeEmail
        baseUrl={baseUrl}
        email={email}
        code={code}
      />
    )
  })
}
