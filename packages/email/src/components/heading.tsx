import { Heading as _Heading } from '@react-email/components'
import { cn } from '@starter/ui/shared'
import type { ComponentProps } from 'react'

type Props = ComponentProps<typeof _Heading>

export const Heading = ({ className, ...props }: Props) => {
  return (
    <_Heading
      className={cn('m-0 font-medium', className)}
      {...props}
    />
  )
}
