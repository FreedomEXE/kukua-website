/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/app/food-nutrition/page.tsx
 *
 * Description:
 * Food and nutrition program page.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
import { ProgramPageTemplate } from '@/components/sections/ProgramPageTemplate'
import { programDetailPages } from '@/data/content'
import { createMetadata } from '@/lib/metadata'

const page = programDetailPages.food

export const metadata = createMetadata('Food & Nutrition', page.overview.title)

export default function FoodNutritionPage() {
  return <ProgramPageTemplate heroLabel={page.heroLabel} heroTitle={page.heroTitle} overview={page.overview} impact={page.impact} cta={page.cta} />
}
