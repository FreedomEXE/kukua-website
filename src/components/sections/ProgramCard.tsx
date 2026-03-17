/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/components/sections/ProgramCard.tsx
 *
 * Description:
 * Program overview card used on the Programs and Initiatives page.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
import Link from 'next/link'
import { Accessibility, ArrowUpRight, GraduationCap, HeartPulse, MoonStar, Soup, Waves } from 'lucide-react'
import type { ProgramCardItem } from '@/lib/types'

type ProgramCardProps = {
  item: ProgramCardItem
}

export function ProgramCard({ item }: ProgramCardProps) {
  const iconMap = {
    '/education': GraduationCap,
    '/water-wells': Waves,
    '/ramadan-at-kukua': MoonStar,
    '/wheelchairs': Accessibility,
    '/food-nutrition': Soup,
    '/healthcare': HeartPulse,
  } as const

  const Icon = iconMap[item.href as keyof typeof iconMap] ?? GraduationCap

  return (
    <article className="shadow-outline flex h-full flex-col rounded-[22px] bg-[#91ab67] p-8 text-center text-white">
      <div className="mx-auto rounded-full border border-white/30 p-3">
        <Icon className="h-6 w-6" />
      </div>
      <div className="mt-5 flex flex-1 flex-col space-y-4">
        <h3 className="font-serif text-[28px] leading-tight text-white">{item.title}</h3>
        <p className="text-sm leading-relaxed text-white/92">{item.description}</p>
        <Link
          href={item.href}
          className="mt-auto inline-flex items-center justify-center gap-2 self-center rounded-full bg-gold px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-gold-dark"
        >
          Know more
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  )
}
