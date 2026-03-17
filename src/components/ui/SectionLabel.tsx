/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/components/ui/SectionLabel.tsx
 *
 * Description:
 * Accent label used to identify sections across the site.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
type SectionLabelProps = {
  children: string
  className?: string
}

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <span className={`inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold ${className}`.trim()}>
      <span className="h-px w-8 bg-gold/50" />
      {children}
    </span>
  )
}
