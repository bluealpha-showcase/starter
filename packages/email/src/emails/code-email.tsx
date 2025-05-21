import { Section } from '@react-email/components'
import { Button, Layout, Text } from '#components'

type Props = {
  baseUrl: string
  email: string
  code: string
}

export default function CodeEmail({ baseUrl, email, code }: Props) {
  return (
    <Layout
      preview={`Your code is ${code}`}
      title='Your sign in code for Starter'>
      <Button
        href={`${baseUrl}/sign-in?email=${email}&code=${code}`}
        className='mb-6'>
        Sign in to Starter
      </Button>
      <Section className='mb-4'>
        <Text className='text-xs text-zinc-700'>
          This link and code will be valid for the next 10 minutes. If the link does not work, you
          can use the code directly:
        </Text>
      </Section>
      <Text className='w-fit rounded-md bg-zinc-100 px-2 py-1 font-mono font-semibold text-zinc-700 tracking-widest'>
        {code}
      </Text>
    </Layout>
  )
}

CodeEmail.PreviewProps = {
  baseUrl: 'http://localhost:5173',
  email: 'sam@samyvs.com',
  code: '123456'
} satisfies Props
