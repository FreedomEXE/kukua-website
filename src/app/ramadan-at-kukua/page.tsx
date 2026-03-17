/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/app/ramadan-at-kukua/page.tsx
 *
 * Description:
 * Ramadan campaign page with a live-parity layout for overview, impact, and giving options.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
import { Check } from 'lucide-react'
import { Reveal } from '@/components/shared/Reveal'
import { CTABanner } from '@/components/sections/CTABanner'
import { DonationGrid } from '@/components/sections/DonationGrid'
import { HeroSection } from '@/components/sections/HeroSection'
import { Button } from '@/components/ui/Button'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ramadanDonations } from '@/data/donations'
import { programDetailPages } from '@/data/content'
import { createMetadata } from '@/lib/metadata'

const page = programDetailPages.ramadan

export const metadata = createMetadata('Ramadan At Kukua', page.overview.title)

export default function RamadanAtKukuaPage() {
  return (
    <>
      <HeroSection
        label={page.heroLabel}
        title={page.heroTitle}
        centered
        contentClassName="pt-40 lg:pt-44 pb-28 lg:pb-32"
        backgroundImage="/images/pages/img-1101.jpg"
        backgroundPosition="center 37%"
        overlayClassName="bg-[linear-gradient(100deg,rgba(164,213,205,0.76)_0%,rgba(164,213,205,0.68)_45%,rgba(22,28,25,0.54)_100%)]"
      />

      <section className="section-pad mt-10 px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl space-y-14">
          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <Reveal className="relative space-y-5">
              <span className="pointer-events-none absolute -left-8 top-10 hidden text-[40px] font-semibold text-[#8ab7ac] md:block">+</span>
              <SectionLabel>{page.overview.label}</SectionLabel>
              <h2 className="max-w-3xl font-serif text-[45px] leading-[1.05]">{page.overview.title}</h2>
            </Reveal>
            <div className="grid gap-5 md:grid-cols-2">
              {page.overview.body?.map((paragraph, index) => (
                <Reveal key={paragraph} delay={index * 0.05}>
                  <div className={`rounded-[18px] p-6 ${index === 0 ? 'bg-[#91ab67]' : 'bg-brown-dark'} text-white`}>
                    <p className="text-sm leading-relaxed text-white/95">{paragraph}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <img src="/images/pages/img-1049.jpg" alt={page.overview.title} className="shadow-outline h-[560px] w-full rounded-[24px] object-cover" />
            </Reveal>
            <Reveal delay={0.08} className="space-y-6">
              {page.overview.features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-gold shadow-outline">
                    <Check className="h-4 w-4" />
                  </span>
                  <div className="space-y-2">
                    <h3 className="font-serif text-[29px] leading-tight">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-brown/85">{feature.description}</p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#e8eee4] px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal className="space-y-6">
            <SectionLabel>{page.impact.label}</SectionLabel>
            <h2 className="max-w-3xl font-serif text-[45px] leading-[1.05]">{page.impact.title}</h2>
            <div className="mt-8 grid grid-cols-2 gap-8">
              {page.impact.stats.map((item) => (
                <div key={item.label} className="space-y-1">
                  <p className="font-serif text-[42px] leading-none text-gold-dark">
                    {'prefix' in item && typeof item.prefix === 'string' ? item.prefix : ''}
                    {item.value.toLocaleString()}
                    {item.suffix}
                  </p>
                  <p className="text-sm uppercase tracking-[0.14em] text-brown/75">{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <img src="/images/pages/img-0997-scaled.jpg" alt={page.impact.title} className="shadow-outline h-[420px] w-full rounded-[24px] object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="section-pad px-6 md:px-10 lg:px-16">
        <div className="mesh-panel shadow-outline mx-auto max-w-7xl border border-brown-dark/10 p-8 md:p-10">
          <Reveal className="space-y-5">
            <SectionLabel>{page.campaign.label}</SectionLabel>
            <h2 className="max-w-4xl font-serif text-[45px] leading-[1.05]">{page.campaign.title}</h2>
            <div className="grid gap-5 md:grid-cols-2">
              {page.campaign.prices.map((price) => (
                <div key={price.amount} className="surface-card p-5">
                  <p className="font-serif text-4xl text-gold-dark">{price.amount}</p>
                  <p className="mt-2 text-sm text-brown/85">{price.description}</p>
                </div>
              ))}
            </div>
            <p className="text-brown/85">{page.campaign.body}</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {page.campaign.checklist.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brown-dark text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm text-brown">{item}</span>
                </div>
              ))}
            </div>
            <Button href="/donate">{page.campaign.buttonLabel}</Button>
          </Reveal>
        </div>
      </section>

      <section className="section-pad px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl space-y-8">
          <Reveal className="space-y-5">
            <SectionLabel>Support Our Cause</SectionLabel>
            <h2 className="font-serif text-[45px] leading-[1.05]">Make a difference today by donating to our cause</h2>
          </Reveal>
          <DonationGrid items={ramadanDonations} />
        </div>
      </section>

      <CTABanner title={page.cta.title} buttonLabel={page.cta.buttonLabel} href={page.cta.href} email={page.cta.email} />
    </>
  )
}
