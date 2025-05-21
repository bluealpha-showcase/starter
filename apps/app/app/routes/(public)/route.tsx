import { AuthLayout } from '@starter/ui/components'
import { Outlet, createFileRoute, redirect } from '@tanstack/react-router'
import { userQueryOptions } from '#app/queries'

export const Route = createFileRoute('/(public)')({
  beforeLoad: async ({ context: { queryClient } }) => {
    const user = await queryClient.ensureQueryData(userQueryOptions)

    if (user) {
      throw redirect({ to: '/' })
    }
  },
  component: () => (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  )
})
