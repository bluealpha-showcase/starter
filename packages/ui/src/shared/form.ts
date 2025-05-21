import { createFormHook } from '@tanstack/react-form'
import { fieldContext, formContext } from '#shared'

export const { useAppForm } = createFormHook({
  fieldComponents: {},
  fieldContext,
  formComponents: {},
  formContext
})
