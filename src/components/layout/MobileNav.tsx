/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/components/layout/MobileNav.tsx
 *
 * Description:
 * Mobile slide-out navigation with grouped links for the Kukua site.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
'use client'

import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, X } from 'lucide-react'
import { useState } from 'react'
import type { NavItem } from '@/lib/types'

type MobileNavProps = {
  open: boolean
  onClose: () => void
  items: NavItem[]
}

export function MobileNav({ open, onClose, items }: MobileNavProps) {
  const [expanded, setExpanded] = useState<string | null>(null)
  const mobileItems = [...items, { label: 'Donate', href: '/donate' }]

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-brown-dark/40 lg:hidden"
            aria-label="Close navigation overlay"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed right-0 top-0 z-50 flex h-full w-[88vw] max-w-sm flex-col bg-cream px-6 py-6 shadow-soft lg:hidden"
          >
            <div className="mb-8 flex items-center justify-between">
              <img src="/images/logo/kukua-logo.png" alt="Kukua logo" className="h-12 w-auto" />
              <button type="button" onClick={onClose} className="text-brown-dark" aria-label="Close navigation">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="space-y-4">
              {mobileItems.map((item) => (
                <div key={item.label} className="border-b border-brown-dark/10 pb-4">
                  <div className="flex items-center justify-between gap-3">
                    <Link href={item.href} onClick={onClose} className="font-serif text-2xl text-brown-dark">
                      {item.label}
                    </Link>
                    {item.children?.length ? (
                      <button
                        type="button"
                        onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                        aria-label={`Toggle ${item.label} submenu`}
                      >
                        <ChevronDown className={`h-5 w-5 transition ${expanded === item.label ? 'rotate-180' : ''}`} />
                      </button>
                    ) : null}
                  </div>
                  {item.children?.length && expanded === item.label ? (
                    <div className="mt-3 space-y-2 pl-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className="block text-sm uppercase tracking-[0.16em] text-brown/80"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </nav>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  )
}
