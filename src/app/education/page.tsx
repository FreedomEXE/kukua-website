/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/app/education/page.tsx
 *
 * Description:
 * Education program page.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
import { ProgramPageTemplate } from '@/components/sections/ProgramPageTemplate'
import { programDetailPages } from '@/data/content'
import { createMetadata } from '@/lib/metadata'

const page = programDetailPages.education

export const metadata = createMetadata('Education', page.overview.title)

export default function EducationPage() {
  return <ProgramPageTemplate heroLabel={page.heroLabel} heroTitle={page.heroTitle} overview={page.overview} impact={page.impact} cta={page.cta} />
}
