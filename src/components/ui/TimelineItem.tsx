/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/components/ui/TimelineItem.tsx
 *
 * Description:
 * Timeline item component used for milestone and story sections.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
type TimelineItemProps = {
  year?: string
  title: string
  description?: string
}

export function TimelineItem({ year, title, description }: TimelineItemProps) {
  return (
    <article className="surface-card shadow-outline relative p-6">
      <div className="mb-4 flex items-center gap-3">
        {year ? (
          <span className="inline-flex min-w-[72px] items-center justify-center bg-brown-dark px-3 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white">
            {year}
          </span>
        ) : null}
        <div className="h-px flex-1 bg-brown-dark/10" />
      </div>
      <h4 className="font-serif text-2xl">{title}</h4>
      {description ? <p className="mt-3 text-sm text-brown/85">{description}</p> : null}
    </article>
  )
}
