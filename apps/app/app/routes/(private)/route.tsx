import { Navigate, Outlet, createFileRoute, redirect } from '@tanstack/react-router'
import { userQueryOptions } from '#app/queries'

export const Route = createFileRoute('/(private)')({
  beforeLoad: async ({ context: { queryClient } }) => {
    const user = await queryClient.ensureQueryData(userQueryOptions)

    if (!user) {
      throw redirect({ to: '/sign-in' })
    }
  },
  component: () => <Outlet />,
  errorComponent: () => <Navigate to='/sign-in' />
})
