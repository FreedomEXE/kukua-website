/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/components/shared/Reveal.tsx
 *
 * Description:
 * Small motion wrapper used to fade and lift sections as they enter view.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  from?: 'up' | 'left' | 'right'
}

const offsets = {
  up: { opacity: 0, x: 0, y: 36 },
  left: { opacity: 0, x: -88, y: 0 },
  right: { opacity: 0, x: 88, y: 0 },
}

export function Reveal({ children, className, delay = 0, from = 'up' }: RevealProps) {
  return (
    <motion.div
      initial={offsets[from]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
