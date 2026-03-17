/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/app/urgent-needs-project/page.tsx
 *
 * Description:
 * Boys Home construction page with floor plans and building donation tiers.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
import { Reveal } from '@/components/shared/Reveal'
import { DonationGrid } from '@/components/sections/DonationGrid'
import { ProgramPageTemplate } from '@/components/sections/ProgramPageTemplate'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { buildingDonations } from '@/data/donations'
import { programDetailPages } from '@/data/content'
import { createMetadata } from '@/lib/metadata'

const page = programDetailPages.urgent

export const metadata = createMetadata('Urgent Needs Project', page.overview.title)

export default function UrgentNeedsProjectPage() {
  return (
    <ProgramPageTemplate
      heroLabel={page.heroLabel}
      heroTitle={page.heroTitle}
      overview={page.overview}
      impact={page.impact}
      extra={
        <>
          <section className="section-pad px-6 md:px-10 lg:px-16">
            <div className="mx-auto max-w-7xl space-y-6">
              <Reveal className="space-y-5">
                <SectionLabel>{page.floorPlans.label}</SectionLabel>
                <h2 className="font-serif text-[30px] leading-tight md:text-[42px]">{page.floorPlans.title}</h2>
                <p className="text-brown/85">{page.floorPlans.body}</p>
              </Reveal>
              <div className="grid gap-6 lg:grid-cols-3">
                {page.floorPlans.images.map((image, index) => (
                  <Reveal key={image} delay={index * 0.05}>
                    <img src={image} alt={`Floor plan ${index + 1}`} className="shadow-outline h-[300px] w-full object-cover" />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
          <section className="section-pad px-6 md:px-10 lg:px-16">
            <div className="mx-auto max-w-7xl space-y-8">
              <Reveal className="space-y-5">
                <SectionLabel>Support Our Cause</SectionLabel>
                <h2 className="font-serif text-[30px] leading-tight md:text-[42px]">Make a difference today by donating to our cause</h2>
              </Reveal>
              <DonationGrid items={buildingDonations} />
            </div>
          </section>
        </>
      }
      cta={page.cta}
    />
  )
}
