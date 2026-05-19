/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/components/ui/ProgressBar.tsx
 *
 * Description:
 * Thin progress bar used inside donation cards.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

type ProgressBarProps = {
  value: number
  tone?: 'default' | 'light'
}

export function ProgressBar({ value, tone = 'default' }: ProgressBarProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, amount: 0.7 })

  return (
    <div ref={ref} className={`h-1.5 w-full overflow-hidden ${tone === 'light' ? 'bg-white/25' : 'bg-brown-dark/10'}`}>
      <motion.div
        className={`h-full ${tone === 'light' ? 'bg-white/70' : 'bg-gold'}`}
        initial={{ width: 0 }}
        animate={inView ? { width: `${value}%` } : { width: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  )
}
