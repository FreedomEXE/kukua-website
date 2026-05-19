/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/components/ui/DonationCard.tsx
 *
 * Description:
 * Donation card with image, progress, pricing, and call to action.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
import Link from 'next/link'
import { ProgressBar } from '@/components/ui/ProgressBar'
import type { DonationItem } from '@/lib/types'

type DonationCardProps = {
  item: DonationItem
}

export function DonationCard({ item }: DonationCardProps) {
  return (
    <article className="shadow-outline overflow-hidden rounded-xl bg-gold">
      <div className="relative h-52 overflow-hidden">
        <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
        <span className="absolute left-4 top-4 rounded-full bg-black/30 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90">
          {item.tag ?? 'Social'}
        </span>
      </div>
      <div className="space-y-4 p-5">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65">
            <span>Collected</span>
            <span>{item.progress}%</span>
          </div>
          <ProgressBar value={item.progress} tone="light" />
        </div>
        <div className="space-y-2 text-white">
          <h3 className="font-serif text-[31px] leading-tight text-white">{item.title}</h3>
          {item.description ? <p className="text-sm text-white/85">{item.description}</p> : null}
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/90">Cost: {item.amount}</p>
        </div>
        <Link
          href="/donate"
          className="inline-flex w-full items-center justify-center rounded-none border border-white/90 bg-white px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-brown-dark transition hover:bg-cream"
        >
          Donate Now
        </Link>
      </div>
    </article>
  )
}
