import { Button as _Button } from '@react-email/components'
import { cn } from '@starter/ui/shared'
import type { ComponentProps } from 'react'

type Props = ComponentProps<typeof _Button>

export const Button = ({ className, ...props }: Props) => {
  return (
    <_Button
      className={cn('rounded-md bg-zinc-900 px-4 py-2 text-sm text-zinc-50', className)}
      {...props}
    />
  )
}
