/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/app/children-run-initiatives/page.tsx
 *
 * Description:
 * Children-run initiatives page.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
import { ProgramPageTemplate } from '@/components/sections/ProgramPageTemplate'
import { programDetailPages } from '@/data/content'
import { createMetadata } from '@/lib/metadata'

const page = programDetailPages.childrenRun

export const metadata = createMetadata('Children Run Initiatives', page.overview.title)

export default function ChildrenRunInitiativesPage() {
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
