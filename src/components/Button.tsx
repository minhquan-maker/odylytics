import type { ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'accent' | 'text'

type Props = {
  children: ReactNode
  variant?: Variant
  href?: string
  type?: 'button' | 'submit'
  size?: 'md' | 'sm'
  className?: string
  onClick?: () => void
  disabled?: boolean
}

export function Button({ children, variant = 'primary', href, type = 'button', size = 'md', className, onClick, disabled }: Props) {
  const classes = ['btn', `btn--${variant}`, size === 'sm' ? 'btn--sm' : '', className ?? ''].filter(Boolean).join(' ')
  if (href) {
    return (
      <a className={classes} href={href} onClick={onClick}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
