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
import { Instagram, Mail, MapPin } from 'lucide-react'
import { instagramHref, topBarItems } from '@/data/site'

export function TopBar() {
  return (
    <div className="border-b border-brown-dark/15 bg-[#8ab7ac] px-6 py-2 text-[11px] uppercase tracking-[0.16em] text-white md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-5">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" />
            {topBarItems[0].value}
          </span>
          <a href={topBarItems[1].href} className="inline-flex items-center gap-2 hover:text-white/80">
            <Mail className="h-3.5 w-3.5" />
            {topBarItems[1].value}
          </a>
        </div>
        <a href={instagramHref} className="inline-flex items-center gap-2 hover:text-white/80">
          <Instagram className="h-3.5 w-3.5" />
          Instagram
        </a>
      </div>
    </div>
  )
}
