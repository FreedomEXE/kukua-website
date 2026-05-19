/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/components/ui/Accordion.tsx
 *
 * Description:
 * Single-open accordion used for the FAQ section.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

type AccordionItem = {
  question: string
  answer: string
}

type AccordionProps = {
  items: AccordionItem[]
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index

        return (
          <div key={item.question} className="overflow-hidden rounded-[24px] shadow-outline">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className={`flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-300 ${
                isOpen ? 'bg-[#91ab67] text-white' : 'bg-gold text-white hover:bg-gold-dark'
              }`}
            >
              <span className="text-base font-bold">{item.question}</span>
              <ChevronDown className={`h-5 w-5 shrink-0 transition ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden rounded-b-[24px] bg-white"
                >
                  <p className="px-6 py-6 text-sm leading-7 text-brown/90">{item.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
