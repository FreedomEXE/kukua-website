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
import { Button } from '@/components/ui/Button'
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
      <section className="bg-cream px-6 py-20 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)] lg:gap-16">
          <Reveal className="space-y-6">
            <SectionLabel>{donatePage.introduction.label}</SectionLabel>
            <h2 className="max-w-3xl font-serif text-[36px] leading-[1.08] md:text-[46px]">
              {donatePage.introduction.title}
            </h2>
            <p className="max-w-3xl text-lg leading-8 text-brown/85">{donatePage.introduction.body}</p>
            <Button href={donatePage.introduction.action.href} className="w-full sm:w-auto">
              {donatePage.introduction.action.label}
            </Button>
          </Reveal>

          <Reveal delay={0.1} className="surface-card border-l-4 border-l-gold p-7 shadow-card md:p-9">
            <p className="font-serif text-[28px] font-bold leading-tight text-brown-dark md:text-[32px]">100% volunteer-run.</p>
            <p className="mt-3 text-lg font-semibold text-brown">No administrative fees.</p>
            <p className="mt-5 text-base leading-7 text-brown/80">
              e-Transfer helps keep the donation process simple and directs more of every contribution toward Kukua&apos;s work.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="how-to-donate" className="scroll-mt-28 bg-white px-6 py-20 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-4xl space-y-5">
            <SectionLabel>{donatePage.instructions.label}</SectionLabel>
            <h2 className="font-serif text-[36px] leading-[1.08] md:text-[46px]">{donatePage.instructions.title}</h2>
            {donatePage.instructions.body.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-8 text-brown/85">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal className="mt-10 border border-gold/30 bg-cream px-6 py-7 shadow-card md:px-9">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brown/70">{donatePage.instructions.address.label}</p>
            <a
              href={donatePage.instructions.address.href}
              className="mt-2 inline-block break-all font-serif text-[25px] font-bold leading-tight text-brown-dark underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold md:text-[32px]"
            >
              {donatePage.instructions.address.value}
            </a>
            <p className="mt-3 text-sm text-brown/70">Select the address to open your email app, or press and hold to copy it on mobile.</p>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal className="surface-card p-7 shadow-card md:p-9">
              <h3 className="font-serif text-[28px] leading-tight">{donatePage.instructions.assistance.title}</h3>
              <p className="mt-4 leading-7 text-brown/80">{donatePage.instructions.assistance.body}</p>
              <Button href={donatePage.instructions.assistance.action.href} className="mt-6 w-full sm:w-auto">
                {donatePage.instructions.assistance.action.label}
              </Button>
            </Reveal>

            <Reveal delay={0.1} className="rounded-[18px] bg-[#e8eee4] p-7 md:p-9">
              <h3 className="font-serif text-[28px] leading-tight">{donatePage.instructions.why.title}</h3>
              <div className="mt-4 space-y-4 text-brown/80">
                {donatePage.instructions.why.body.map((paragraph) => (
                  <p key={paragraph} className="leading-7">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>

        </div>
      </section>

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
