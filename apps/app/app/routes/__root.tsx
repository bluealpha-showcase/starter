import { Button, Heading, Text } from '@starter/ui/components'
import type { QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

type Props = {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<Props>()({
  component: () => (
    <>
      <Outlet />
      <ReactQueryDevtools buttonPosition='top-right' />
      <TanStackRouterDevtools position='bottom-right' />
    </>
  ),
  errorComponent: ({ error }) => {
    return (
      <div className='mx-auto grid w-full max-w-md grid-cols-1 gap-8 py-32'>
        <div className='flex flex-col gap-2'>
          <Heading>An error occurred</Heading>
          <Text>{error.message}</Text>
        </div>
        <Button to='/'>Go back to home</Button>
      </div>
    )
  },
  notFoundComponent: () => {
    return (
      <div className='mx-auto grid w-full max-w-md grid-cols-1 gap-8 py-32'>
        <div className='flex flex-col gap-2'>
          <Heading>Page not found</Heading>
          <Text>The page you are looking for does not exist.</Text>
        </div>
        <Button to='/'>Go back to home</Button>
      </div>
    )
  }
})
