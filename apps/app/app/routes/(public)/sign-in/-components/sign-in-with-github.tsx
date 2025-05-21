import { GithubSignInFailed } from '@starter/exception/auth'
import { Button } from '@starter/ui/components'
import { useMutation } from '@tanstack/react-query'
import { api } from '#app/shared'
import { GithubIcon } from '.'

export const SignInWithGithub = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const response = await api.auth.github.$get()

      if (!response.ok) {
        throw new GithubSignInFailed()
      }

      return response.json()
    },
    onError: error => {
      console.error(error)
      alert(error.message)
    },
    onSuccess: ({ url }) => {
      window.location.href = url
    }
  })

  return (
    <Button
      outline
      onClick={() => mutate()}
      disabled={isPending}>
      <GithubIcon className='size-4 stroke-current' />
      {isPending ? 'Signing in with Github...' : 'Sign in with Github'}
    </Button>
  )
}
