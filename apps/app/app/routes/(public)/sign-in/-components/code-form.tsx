import { VerifyCodeFailed } from '@starter/exception/auth'
import { Button, Field, Input, Label } from '@starter/ui/components'
import { useAppForm } from '@starter/ui/shared'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { z } from 'zod'
import { api } from '#app/shared'

const codeFormSchema = z.object({
  email: z.string().email(),
  code: z.string().length(6)
})
type CodeForm = z.infer<typeof codeFormSchema>

type Props = {
  email: string
  setEmail: (email: string) => void
}

export const CodeForm = ({ email, setEmail }: Props) => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { mutateAsync } = useMutation({
    mutationFn: async (json: CodeForm) => {
      const response = await api.auth['verify-code'].$post({ json })

      if (!response.ok) {
        throw new VerifyCodeFailed()
      }

      return response.json()
    },
    onError: error => {
      console.error(error)
      alert(error.message)
    },
    onSuccess: async () => {
      queryClient.clear()
      await navigate({ to: '/', replace: true })
    }
  })

  const form = useAppForm({
    defaultValues: { email, code: '' } satisfies CodeForm,
    validators: { onSubmit: codeFormSchema },
    onSubmit: ({ value }) => mutateAsync(value)
  })

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }}
      className='grid grid-cols-1 gap-8'>
      <form.AppField name='code'>
        {field => (
          <Field>
            <Label htmlFor={field.name}>Code</Label>
            <Input
              autoFocus
              id={field.name}
              name={field.name}
              onBlur={field.handleBlur}
              onChange={e => field.handleChange(e.target.value)}
            />
          </Field>
        )}
      </form.AppField>
      <form.Subscribe selector={state => [state.canSubmit, state.isSubmitting]}>
        {([canSubmit, isSubmitting]) => (
          <Button
            type='submit'
            className='w-full'
            disabled={!canSubmit}>
            {isSubmitting ? 'Verifying...' : 'Verify code'}
          </Button>
        )}
      </form.Subscribe>
      <Button
        outline
        className='w-full'
        onClick={() => setEmail('')}>
        Go back
      </Button>
    </form>
  )
}
