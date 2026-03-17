/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/components/sections/CTABanner.tsx
 *
 * Description:
 * Shared call-to-action banner used across major pages.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
import { Button } from '@/components/ui/Button'

type CTABannerProps = {
  title: string
  buttonLabel: string
  href: string
  email?: string
}

export function CTABanner({ title, buttonLabel, href, email }: CTABannerProps) {
  return (
    <section className="px-6 py-10 md:px-10 lg:px-16">
      <div className="mesh-panel shadow-outline mx-auto max-w-7xl border border-brown-dark/10 px-8 py-10 md:px-12 md:py-14">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <h2 className="max-w-4xl font-serif text-[30px] leading-tight md:text-[42px]">{title}</h2>
            {email ? (
              <a href={`mailto:${email}`} className="text-sm uppercase tracking-[0.18em] text-brown/75 hover:text-brown-dark">
                {email}
              </a>
            ) : null}
          </div>
          <Button href={href}>{buttonLabel}</Button>
        </div>
      </div>
    </section>
  )
}
