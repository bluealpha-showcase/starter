import { Text as _Text } from '@react-email/components'
import type { ComponentProps } from 'react'

type Props = ComponentProps<typeof _Text>

export const Text = ({ className, ...props }: Props) => {
  return (
    <_Text
      className={`m-0 text-sm ${className}`}
      {...props}
    />
  )
}
