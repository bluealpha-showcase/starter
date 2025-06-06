import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import { forwardRef } from 'react'
import { TouchTarget } from './button'
import { Link } from './link'

type AvatarProps = {
  src?: string | null
  square?: boolean
  initials?: string
  alt?: string
  className?: string
}

export function Avatar({
  src = null,
  square = false,
  initials,
  alt = '',
  className,
  ...props
}: AvatarProps & React.ComponentPropsWithoutRef<'span'>) {
  return (
    <span
      data-slot='avatar'
      {...props}
      className={clsx(
        className,
        // Basic layout
        'inline-grid shrink-0 align-middle [--avatar-radius:20%] *:col-start-1 *:row-start-1',
        '-outline-offset-1 outline outline-black/10 dark:outline-white/10',
        // Border radius
        square
          ? 'rounded-(--avatar-radius) *:rounded-(--avatar-radius)'
          : 'rounded-full *:rounded-full'
      )}>
      {initials && (
        <svg
          className='size-full select-none fill-current p-[5%] font-medium text-[48px] uppercase'
          viewBox='0 0 100 100'
          aria-hidden={alt ? undefined : 'true'}>
          <title>{alt}</title>
          <text
            x='50%'
            y='50%'
            alignmentBaseline='middle'
            dominantBaseline='middle'
            textAnchor='middle'
            dy='.125em'>
            {initials}
          </text>
        </svg>
      )}
      {src && (
        <img
          className='size-full'
          src={src}
          alt={alt}
        />
      )}
    </span>
  )
}

export const AvatarButton = forwardRef(function AvatarButton(
  {
    src,
    square = false,
    initials,
    alt,
    className,
    ...props
  }: AvatarProps &
    (
      | Omit<Headless.ButtonProps, 'as' | 'className'>
      | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'className'>
    ),
  ref: React.ForwardedRef<HTMLElement>
) {
  const classes = clsx(
    className,
    square ? 'rounded-[20%]' : 'rounded-full',
    'relative inline-grid focus:not-data-focus:outline-hidden data-focus:outline-2 data-focus:outline-offset-2 data-focus:outline-blue-500'
  )

  return 'to' in props ? (
    <Link
      {...(props as Omit<React.ComponentPropsWithoutRef<typeof Link>, 'className'>)}
      className={classes}
      ref={ref as React.ForwardedRef<HTMLAnchorElement>}>
      <TouchTarget>
        <Avatar
          src={src}
          square={square}
          initials={initials}
          alt={alt}
        />
      </TouchTarget>
    </Link>
  ) : (
    <Headless.Button
      {...(props as Omit<Headless.ButtonProps, 'as' | 'className'>)}
      type='button'
      className={classes}
      ref={ref as React.ForwardedRef<HTMLButtonElement>}>
      <TouchTarget>
        <Avatar
          src={src}
          square={square}
          initials={initials}
          alt={alt}
        />
      </TouchTarget>
    </Headless.Button>
  )
})
