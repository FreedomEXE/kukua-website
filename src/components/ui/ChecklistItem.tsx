/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/components/ui/ChecklistItem.tsx
 *
 * Description:
 * Checklist row with a consistent circular check icon.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
import { Check } from 'lucide-react'

type ChecklistItemProps = {
  text: string
  tone?: 'default' | 'light'
}

export function ChecklistItem({ text, tone = 'default' }: ChecklistItemProps) {
  const iconClass = tone === 'light' ? 'bg-white/20 text-white' : 'bg-brown-dark text-white'
  const textClass = tone === 'light' ? 'text-white/95' : 'text-brown'

  return (
    <div className="flex items-start gap-3">
      <span className={`mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${iconClass}`}>
        <Check className="h-3.5 w-3.5" />
      </span>
      <span className={`text-sm leading-7 ${textClass}`}>{text}</span>
    </div>
  )
}
