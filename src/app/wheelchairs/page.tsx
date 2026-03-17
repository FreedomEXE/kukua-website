/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/app/wheelchairs/page.tsx
 *
 * Description:
 * Wheelchairs program page.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
import { ProgramPageTemplate } from '@/components/sections/ProgramPageTemplate'
import { programDetailPages } from '@/data/content'
import { createMetadata } from '@/lib/metadata'

const page = programDetailPages.wheelchairs

export const metadata = createMetadata('Wheelchairs', page.overview.title)

export default function WheelchairsPage() {
  return <ProgramPageTemplate heroLabel={page.heroLabel} heroTitle={page.heroTitle} overview={page.overview} impact={page.impact} cta={page.cta} />
}
