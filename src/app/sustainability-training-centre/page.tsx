/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/app/sustainability-training-centre/page.tsx
 *
 * Description:
 * Sustainability and training centre page.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
import { ProgramPageTemplate } from '@/components/sections/ProgramPageTemplate'
import { programDetailPages } from '@/data/content'
import { createMetadata } from '@/lib/metadata'

const page = programDetailPages.sustainability

export const metadata = createMetadata('Sustainability - Training Centre', page.overview.title)

export default function SustainabilityTrainingCentrePage() {
  return (
    <ProgramPageTemplate
      heroLabel={page.heroLabel}
      heroTitle={page.heroTitle}
      overview={page.overview}
      impact={{ label: page.project.label, title: page.project.title, stats: page.project.stats }}
      campaign={page.campaign}
      cta={page.cta}
    />
  )
}
