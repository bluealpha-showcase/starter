import * as Headless from '@headlessui/react'
import { type LinkProps, Link as TanStackLink } from '@tanstack/react-router'
import { type ComponentPropsWithoutRef, type ForwardedRef, forwardRef } from 'react'

export const Link = forwardRef(function Link(
  props: LinkProps & ComponentPropsWithoutRef<'a'>,
  ref: ForwardedRef<HTMLAnchorElement>
) {
  return (
    <Headless.DataInteractive>
      <TanStackLink
        {...props}
        ref={ref}
      />
    </Headless.DataInteractive>
  )
})
