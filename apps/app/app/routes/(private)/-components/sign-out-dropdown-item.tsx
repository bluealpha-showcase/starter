import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/16/solid'
import { SignOutFailed } from '@starter/exception/auth'
import { DropdownItem, DropdownLabel } from '@starter/ui/components'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { api } from '#app/shared'

export const SignOutDropdownItem = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const response = await api.auth['sign-out'].$post()

      if (!response.ok) {
        throw new SignOutFailed()
      }

      return response.json()
    },
    onError: error => {
      console.error(error)
      alert(error.message)
    },
    onSuccess: async () => {
      queryClient.clear()
      await navigate({ to: '/sign-in', replace: true })
    }
  })

  return (
    <DropdownItem
      onClick={() => mutate()}
      disabled={isPending}>
      <ArrowRightStartOnRectangleIcon />
      <DropdownLabel>{isPending ? 'Signing out...' : 'Sign out'}</DropdownLabel>
    </DropdownItem>
  )
}
