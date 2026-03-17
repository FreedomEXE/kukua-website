/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/components/ui/FeatureCard.tsx
 *
 * Description:
 * Reusable feature card for program and story sections.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
import type { ReactNode } from 'react'

type FeatureCardProps = {
  title: string
  description: string
  icon?: ReactNode
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <article className="surface-card shadow-outline h-full p-6">
      <div className="space-y-4">
        {icon ? <div className="text-brown-dark">{icon}</div> : null}
        <h4 className="font-serif text-2xl">{title}</h4>
        <p className="text-sm text-brown/85">{description}</p>
      </div>
    </article>
  )
}
