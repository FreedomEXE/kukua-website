/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/app/donate/page.tsx
 *
 * Description:
 * Donate page outlining the giving process and donation options.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
import { Reveal } from '@/components/shared/Reveal'
import { DonationGrid } from '@/components/sections/DonationGrid'
import { HeroSection } from '@/components/sections/HeroSection'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { buildingDonations } from '@/data/donations'
import { donatePage } from '@/data/content'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata('Donate', donatePage.hero.title)

export default function DonatePage() {
  return (
    <>
      <HeroSection
        label={donatePage.hero.label}
        title={donatePage.hero.title}
        backgroundImage="/images/pages/img-1101.jpg"
        backgroundPosition="62% 72%"
        centered
        overlayClassName="bg-[linear-gradient(100deg,rgba(164,213,205,0.76)_0%,rgba(164,213,205,0.7)_42%,rgba(33,33,33,0.54)_100%)]"
      />
      <section className="relative bg-[#e8eee4] px-6 pb-14 pt-24 md:px-10 lg:px-16">
        <span className="pointer-events-none absolute left-[14%] top-10 hidden text-[46px] font-semibold text-[#8ab7ac] md:block">+</span>
        <span className="pointer-events-none absolute right-[16%] top-16 hidden h-8 w-8 rounded-full bg-gold md:block" />
        <div className="mx-auto max-w-7xl space-y-12">
          <Reveal className="space-y-5 text-center">
            <div className="flex items-center justify-center">
              <SectionLabel>Support Our Cause</SectionLabel>
            </div>
            <h2 className="mx-auto max-w-4xl font-serif text-[40px] leading-[1.05] md:text-[45px]">Make a difference today by donating to our cause</h2>
          </Reveal>
          <div className="mt-16">
            <DonationGrid items={buildingDonations} />
          </div>
        </div>
      </section>
    </>
  )
}
