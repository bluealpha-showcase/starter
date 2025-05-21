import { Body, Container, Head, Html, Preview, Tailwind } from '@react-email/components'
import type { PropsWithChildren } from 'react'
import { Heading } from '#components'

type Props = PropsWithChildren<{
  preview: string
  title: string
}>

export const Layout = ({ preview, title, children }: Props) => {
  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Tailwind>
        <Body className='bg-zinc-50 py-12 font-sans text-zinc-900'>
          <Container className='max-w-lg rounded-md border border-zinc-100 border-solid bg-white px-6 py-8'>
            <Heading
              as='h1'
              className='mb-6 text-xl'>
              {title}
            </Heading>
            {children}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
