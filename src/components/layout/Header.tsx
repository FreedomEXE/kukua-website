/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/components/layout/Header.tsx
 *
 * Description:
 * Sticky header with desktop dropdown navigation and donate call to action.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu } from 'lucide-react'
import { useMemo, useState } from 'react'
import { MobileNav } from '@/components/layout/MobileNav'
import { Button } from '@/components/ui/Button'
import { navItems } from '@/data/site'

export function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const activeRoots = useMemo(() => {
    return new Set(
      navItems
        .filter((item) => pathname === item.href || item.children?.some((child) => pathname === child.href))
        .map((item) => item.label),
    )
  }, [pathname])

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-white/25 bg-[#8ab7ac]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 md:px-10 lg:px-16">
          <Link href="/" className="shrink-0">
            <img src="/images/logo/kukua-logo.png" alt="Kukua logo" className="h-14 w-auto" />
          </Link>
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-[0.16em] ${activeRoots.has(item.label) ? 'text-white' : 'text-white/80'} hover:text-white`}
                >
                  {item.label}
                  {item.children?.length ? <ChevronDown className="h-4 w-4" /> : null}
                </Link>
                {item.children?.length ? (
                  <div className="invisible absolute left-0 top-full mt-3 min-w-[260px] translate-y-2 border border-brown-dark/10 bg-white p-3 opacity-0 shadow-soft transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} className="block px-3 py-2 text-sm text-brown hover:bg-cream hover:text-brown-dark">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Button href="/donate" className="hidden lg:inline-flex">
              Donate Now
            </Button>
            <button type="button" onClick={() => setMobileOpen(true)} className="lg:hidden" aria-label="Open navigation">
              <Menu className="h-7 w-7 text-white" />
            </button>
          </div>
        </div>
      </header>
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} items={navItems} />
    </>
  )
}
