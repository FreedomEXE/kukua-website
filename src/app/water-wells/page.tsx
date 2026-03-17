/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/app/water-wells/page.tsx
 *
 * Description:
 * Water wells program page.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
import { ProgramPageTemplate } from '@/components/sections/ProgramPageTemplate'
import { programDetailPages } from '@/data/content'
import { createMetadata } from '@/lib/metadata'

const page = programDetailPages.water

export const metadata = createMetadata('Water Wells', page.overview.title)

export default function WaterWellsPage() {
  return <ProgramPageTemplate heroLabel={page.heroLabel} heroTitle={page.heroTitle} overview={page.overview} impact={page.impact} cta={page.cta} />
}
