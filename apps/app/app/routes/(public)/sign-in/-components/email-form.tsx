import { SendCodeFailed } from '@starter/exception/auth'
import { Button, Field, Input, Label } from '@starter/ui/components'
import { useAppForm } from '@starter/ui/shared'
import { useMutation } from '@tanstack/react-query'
import { z } from 'zod'
import { api } from '#app/shared'

const emailFormSchema = z.object({
  email: z.string().email()
})

type EmailForm = z.infer<typeof emailFormSchema>

type Props = {
  email: string
  setEmail: (email: string) => void
}

export const EmailForm = ({ email, setEmail }: Props) => {
  const { mutateAsync } = useMutation({
    mutationFn: async (json: EmailForm) => {
      const response = await api.auth['send-code'].$post({ json })

      if (!response.ok) {
        throw new SendCodeFailed()
      }

      return response.json()
    },
    onError: error => {
      console.error(error)
      alert(error.message)
    },
    onSuccess: (_, { email }) => {
      setEmail(email)
    }
  })

  const form = useAppForm({
    defaultValues: { email } satisfies EmailForm,
    validators: { onSubmit: emailFormSchema },
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
      <form.AppField name='email'>
        {field => (
          <Field>
            <Label htmlFor={field.name}>Email</Label>
            <Input
              autoFocus
              type='email'
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
            {isSubmitting ? 'Sending...' : 'Send code'}
          </Button>
        )}
      </form.Subscribe>
    </form>
  )
}
