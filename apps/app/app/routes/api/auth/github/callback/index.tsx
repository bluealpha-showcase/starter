import { callbackSchema } from '@starter/auth/shared'
import { GithubCallbackFailed } from '@starter/exception/auth'
import { createFileRoute, redirect } from '@tanstack/react-router'
import { api } from '#app/shared'

export const Route = createFileRoute('/api/auth/github/callback/')({
  validateSearch: callbackSchema,
  beforeLoad: async ({ context: { queryClient }, search }) => {
    const response = await api.auth.github.callback.$get({ query: search })

    if (!response.ok) {
      throw new GithubCallbackFailed()
    }

    queryClient.clear()

    throw redirect({ to: '/', replace: true })
  }
})
