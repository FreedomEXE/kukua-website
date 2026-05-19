/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/components/ui/Button.tsx
 *
 * Description:
 * Shared primary button component for links and button actions.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
import Link from 'next/link'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  href?: string
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const baseClassName =
  'inline-flex items-center justify-center gap-2 rounded-none border border-gold bg-gold px-4 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white transition duration-300 hover:-translate-y-0.5 hover:border-gold-dark hover:bg-gold-dark hover:shadow-card active:translate-y-0'

export function Button({ children, href, className = '', type = 'button', ...props }: ButtonProps) {
  const classes = `${baseClassName} ${className}`.trim()

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}
