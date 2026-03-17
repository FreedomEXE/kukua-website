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
type ProgressBarProps = {
  value: number
  tone?: 'default' | 'light'
}

export function ProgressBar({ value, tone = 'default' }: ProgressBarProps) {
  return (
    <div className={`h-1.5 w-full ${tone === 'light' ? 'bg-white/25' : 'bg-brown-dark/10'}`}>
      <div className={`h-full transition-all duration-500 ${tone === 'light' ? 'bg-white/70' : 'bg-gold'}`} style={{ width: `${value}%` }} />
    </div>
  )
}
