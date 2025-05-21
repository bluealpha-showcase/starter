import { VerifyCodeFailed } from '@starter/exception/auth'
import { Heading } from '@starter/ui/components'
import { createFileRoute, redirect } from '@tanstack/react-router'
import { z } from 'zod'
import { api } from '#app/shared'
import { Forms } from './-components'

const validateSearch = z.object({
  email: z.string().email().optional(),
  code: z.string().length(6).optional()
})

export const Route = createFileRoute('/(public)/sign-in/')({
  validateSearch,
  beforeLoad: async ({ context: { queryClient }, search: { email, code } }) => {
    if (email && code) {
      const response = await api.auth['verify-code'].$post({ json: { email, code } })

      if (!response.ok) {
        throw new VerifyCodeFailed()
      }

      queryClient.clear()

      throw redirect({ to: '/', replace: true })
    }
  },
  component: () => {
    return (
      <div className='grid w-full max-w-sm grid-cols-1 gap-8'>
        <Heading>Sign in to your account</Heading>
        <Forms />
      </div>
    )
  }
})
