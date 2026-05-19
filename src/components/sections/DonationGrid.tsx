/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/components/sections/DonationGrid.tsx
 *
 * Description:
 * Responsive grid wrapper for donation cards.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
import { Reveal } from '@/components/shared/Reveal'
import { DonationCard } from '@/components/ui/DonationCard'
import type { DonationItem } from '@/lib/types'

type DonationGridProps = {
  items: DonationItem[]
}

export function DonationGrid({ items }: DonationGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => (
        <Reveal key={`${item.title}-${item.amount}`} delay={(index % 3) * 0.08}>
          <DonationCard item={item} />
        </Reveal>
      ))}
    </div>
  )
}
