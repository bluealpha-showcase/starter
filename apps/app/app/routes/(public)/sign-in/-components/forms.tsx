import { Divider } from '@starter/ui/components'
import { useState } from 'react'
import { CodeForm, EmailForm, SignInWithGithub } from '.'

export const Forms = () => {
  const [email, setEmail] = useState('')

  if (email) {
    return (
      <CodeForm
        email={email}
        setEmail={setEmail}
      />
    )
  }

  return (
    <>
      <EmailForm
        email={email}
        setEmail={setEmail}
      />
      <Divider />
      <SignInWithGithub />
    </>
  )
}
