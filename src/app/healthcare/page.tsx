/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/app/healthcare/page.tsx
 *
 * Description:
 * Healthcare program page.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
import { ProgramPageTemplate } from '@/components/sections/ProgramPageTemplate'
import { programDetailPages } from '@/data/content'
import { createMetadata } from '@/lib/metadata'

const page = programDetailPages.healthcare

export const metadata = createMetadata('Healthcare', page.overview.title)

export default function HealthcarePage() {
  return <ProgramPageTemplate heroLabel={page.heroLabel} heroTitle={page.heroTitle} overview={page.overview} impact={page.impact} cta={page.cta} />
}
