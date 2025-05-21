import { Resend } from 'resend'

type Props = {
  key: string
}

export const createEmailClient = ({ key }: Props) => {
  return new Resend(key)
}

export type EmailClient = ReturnType<typeof createEmailClient>
