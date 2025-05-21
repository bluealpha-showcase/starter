import { status } from '@starter/exception/shared'
import { UserNotFound } from '@starter/exception/user'
import { queryOptions } from '@tanstack/react-query'
import { api } from '#app/shared'

export const userQueryOptions = queryOptions({
  queryKey: ['user'],
  queryFn: async () => {
    const response = await api.user.$get()

    if (!response.ok) {
      if (response.status === status.unauthorized) {
        return null
      }

      throw new UserNotFound(response)
    }

    const { user } = await response.json()
    return user
  }
})
