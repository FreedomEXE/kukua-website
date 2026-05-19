/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/components/layout/TopBar.tsx
 *
 * Description:
 * Site-wide top bar for location, email, and Instagram placeholder.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
'use client'

import { Instagram, Mail, MapPin } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { instagramHref, topBarItems } from '@/data/site'

export function TopBar() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <div className="border-b border-brown-dark/15 bg-[#8ab7ac] px-6 py-2 text-[11px] uppercase tracking-[0.16em] text-white md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className={`${isHome ? 'hidden md:flex' : 'flex'} flex-col gap-3 md:flex-row md:flex-wrap md:items-center md:gap-5`}>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" />
            {topBarItems[0].value}
          </span>
          <a href={topBarItems[1].href} className="inline-flex items-center gap-2 hover:text-white/80">
            <Mail className="h-3.5 w-3.5" />
            {topBarItems[1].value}
          </a>
        </div>
        <a href={instagramHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white/80">
          <Instagram className="h-3.5 w-3.5" />
          Instagram
        </a>
      </div>
    </div>
  )
}
