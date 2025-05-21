import { Divider, Heading } from '@starter/ui/components'
import { createFileRoute } from '@tanstack/react-router'
import { Layout } from './-components'

export const Route = createFileRoute('/(private)/')({
  component: () => {
    return (
      <Layout>
        <Heading>Dashboard</Heading>
        <Divider className='my-6' />
      </Layout>
    )
  }
})
