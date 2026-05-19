/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/components/sections/StatsSection.tsx
 *
 * Description:
 * Shared dark statistics band with optional quote or action.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
import { Button } from '@/components/ui/Button'
import { StatCounter } from '@/components/ui/StatCounter'
import type { StatItem } from '@/lib/types'

type StatsSectionProps = {
  items: StatItem[]
  quote?: string
  action?: { label: string; href: string }
  variant?: 'dark' | 'cards'
}

export function StatsSection({ items, quote, action, variant = 'dark' }: StatsSectionProps) {
  if (variant === 'cards') {
    return (
      <section className="px-6 py-8 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className={`grid overflow-hidden rounded-xl bg-brown-dark shadow-outline ${items.length > 2 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
            {items.map((item) => (
              <div key={`${item.label}-${item.value}`} className="border-b border-white/10 p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
                <StatCounter {...item} className="[&>div]:text-3xl md:[&>div]:text-4xl [&>p]:text-[11px]" />
              </div>
            ))}
          </div>
          {quote || action ? (
            <div className="flex flex-col gap-5 border-t border-brown-dark/10 pt-6 md:flex-row md:items-center md:justify-between">
              {quote ? <p className="max-w-3xl font-serif text-xl text-brown-dark/90">{quote}</p> : <span />}
              {action ? <Button href={action.href}>{action.label}</Button> : null}
            </div>
          ) : null}
        </div>
      </section>
    )
  }

  return (
    <section className="bg-brown-dark px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className={`grid gap-10 ${items.length > 2 ? 'lg:grid-cols-3' : 'md:grid-cols-2'}`}>
          {items.map((item) => (
            <StatCounter key={`${item.label}-${item.value}`} {...item} />
          ))}
        </div>
        {quote || action ? (
          <div className="flex flex-col gap-5 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
            {quote ? <p className="max-w-3xl font-serif text-2xl text-gold">{quote}</p> : <span />}
            {action ? <Button href={action.href} className="border-white bg-white text-brown-dark hover:border-gold hover:bg-gold hover:text-white">{action.label}</Button> : null}
          </div>
        ) : null}
      </div>
    </section>
  )
}
