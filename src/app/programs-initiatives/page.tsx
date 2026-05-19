/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/app/programs-initiatives/page.tsx
 *
 * Description:
 * Programs and Initiatives overview page for Kukua's urgent needs work.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
import { Reveal } from '@/components/shared/Reveal'
import { CTABanner } from '@/components/sections/CTABanner'
import { HeroSection } from '@/components/sections/HeroSection'
import { ProgramCard } from '@/components/sections/ProgramCard'
import { StatsSection } from '@/components/sections/StatsSection'
import { ChecklistItem } from '@/components/ui/ChecklistItem'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { programCards } from '@/data/programs'
import { programsPage } from '@/data/content'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata('Programs & Initiatives', programsPage.vision.body)

export default function ProgramsInitiativesPage() {
  return (
    <>
      <HeroSection
        label={programsPage.hero.label}
        title={programsPage.hero.title}
        backgroundImage="/images/pages/programs-hero.jpg"
        backgroundPosition="center 60%"
      />
      <section className="section-pad px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.92fr]">
            <Reveal className="relative space-y-6">
              <span className="pointer-events-none absolute -left-8 -top-2 hidden text-[42px] font-semibold text-[#8ab7ac] md:block">+</span>
              <span className="pointer-events-none absolute right-2 top-6 hidden h-8 w-8 rounded-full bg-gold md:block" />
              <SectionLabel>{programsPage.vision.label}</SectionLabel>
              <h2 className="max-w-3xl font-serif text-[56px] leading-[0.96]">{programsPage.vision.title}</h2>
              <p className="max-w-3xl text-brown/85">{programsPage.vision.body}</p>
              <div className="shadow-outline grid overflow-hidden rounded-[22px] md:grid-cols-[1fr_1fr]">
                <div className="bg-brown-dark p-6 text-white">
                  <h3 className="font-serif text-[34px] text-white">{programsPage.vision.cardTitle}</h3>
                  <p className="mt-3 text-sm text-white/90">{programsPage.vision.cardBody}</p>
                </div>
                <div className="space-y-4 bg-[#91ab67] p-6">
                  {programsPage.vision.checklist.map((item) => (
                    <ChecklistItem key={item} text={item} tone="light" />
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <img src="/images/pages/img-1369.jpg" alt={programsPage.vision.title} className="shadow-outline h-[700px] w-full rounded-[24px] object-cover" />
            </Reveal>
          </div>
        </div>
      </section>
      <section className="relative bg-[#e8eee4] px-6 pb-16 pt-14 md:px-10 lg:px-16">
        <span className="pointer-events-none absolute left-[14%] top-10 hidden text-[44px] font-semibold text-[#8ab7ac] md:block">+</span>
        <span className="pointer-events-none absolute right-[18%] top-14 hidden h-7 w-7 rounded-full bg-gold md:block" />
        <div className="mx-auto max-w-7xl space-y-8">
          <Reveal className="space-y-5 text-center">
            <div className="flex items-center justify-center">
              <SectionLabel>Programs & Initiatives</SectionLabel>
            </div>
            <h2 className="font-serif text-[52px] leading-none">Our Urgent Needs</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {programCards.map((item, index) => (
              <Reveal key={item.href} delay={(index % 3) * 0.08} from={index % 2 === 0 ? 'left' : 'right'}>
                <ProgramCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 pb-8 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl space-y-6">
          <SectionLabel>{programsPage.impact.label}</SectionLabel>
          <h2 className="max-w-4xl font-serif text-[30px] leading-tight md:text-[42px]">{programsPage.impact.title}</h2>
          <p className="max-w-3xl text-brown/85">{programsPage.impact.body}</p>
        </div>
      </section>
      <StatsSection items={programsPage.impact.stats} action={{ label: 'Donate Now', href: '/donate' }} variant="cards" />
      <CTABanner title={programsPage.cta.title} buttonLabel={programsPage.cta.buttonLabel} href={programsPage.cta.href} email={programsPage.cta.email} />
    </>
  )
}
