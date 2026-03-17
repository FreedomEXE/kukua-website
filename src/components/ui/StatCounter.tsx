/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/components/ui/StatCounter.tsx
 *
 * Description:
 * Animated statistic block that counts up when scrolled into view.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
'use client'

import { animate, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type StatCounterProps = {
  value: number
  label: string
  prefix?: string
  suffix?: string
  className?: string
  tone?: 'light' | 'dark'
}

export function StatCounter({ value, label, prefix = '', suffix = '', className = '', tone = 'light' }: StatCounterProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [displayValue, setDisplayValue] = useState('0')

  useEffect(() => {
    if (!inView) {
      return
    }

    const controls = animate(0, value, {
      duration: value > 999 ? 1.4 : 0.9,
      ease: 'easeOut',
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest).toLocaleString())
      },
    })

    return () => controls.stop()
  }, [inView, value])

  return (
    <div ref={ref} className={`space-y-3 ${className}`.trim()}>
      <div className={`font-serif text-4xl md:text-5xl ${tone === 'light' ? 'text-white' : 'text-brown-dark'}`}>
        {prefix}
        <span>{displayValue}</span>
        {suffix}
      </div>
      <p className={`text-sm uppercase tracking-[0.18em] ${tone === 'light' ? 'text-white/70' : 'text-brown/70'}`}>{label}</p>
    </div>
  )
}
