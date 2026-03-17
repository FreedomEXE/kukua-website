/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/components/sections/ProgramPageTemplate.tsx
 *
 * Description:
 * Shared section scaffold for the program detail pages.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
import { Reveal } from '@/components/shared/Reveal'
import { CTABanner } from '@/components/sections/CTABanner'
import { HeroSection } from '@/components/sections/HeroSection'
import { ChecklistItem } from '@/components/ui/ChecklistItem'
import { FeatureCard } from '@/components/ui/FeatureCard'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { StatCounter } from '@/components/ui/StatCounter'
import type { ReactNode } from 'react'
import type { FeatureItem, StatItem } from '@/lib/types'

type ProgramPageTemplateProps = {
  heroLabel: string
  heroTitle: string
  overview: {
    label: string
    title: string
    body?: readonly string[]
    features: readonly FeatureItem[]
  }
  impact?: {
    label: string
    title: string
    body?: string | readonly string[]
    image?: string
    stat?: StatItem
    stats?: readonly StatItem[]
    checklist?: readonly string[]
  }
  campaign?: {
    label: string
    title: string
    prices: readonly { amount: string; description: string }[]
    body: string
    checklist: readonly string[]
    buttonLabel: string
  }
  extra?: ReactNode
  cta: {
    title: string
    buttonLabel: string
    href: string
    email?: string
  }
}

export function ProgramPageTemplate({ heroLabel, heroTitle, overview, impact, campaign, extra, cta }: ProgramPageTemplateProps) {
  const impactBody = Array.isArray(impact?.body) ? impact?.body : impact?.body ? [impact.body] : []

  return (
    <>
      <HeroSection label={heroLabel} title={heroTitle} />
      <section className="section-pad px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl space-y-8">
          <Reveal className="space-y-5">
            <SectionLabel>{overview.label}</SectionLabel>
            <h2 className="max-w-4xl font-serif text-[30px] leading-tight md:text-[42px]">{overview.title}</h2>
            {overview.body?.map((paragraph) => (
              <p key={paragraph} className="max-w-3xl text-brown/85">
                {paragraph}
              </p>
            ))}
          </Reveal>
          <div className={`grid gap-6 ${overview.features.length > 4 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'}`}>
            {overview.features.map((feature) => (
              <Reveal key={feature.title}>
                <FeatureCard title={feature.title} description={feature.description} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {impact ? (
        <section className="px-6 py-8 md:px-10 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal className="space-y-5">
              <SectionLabel>{impact.label}</SectionLabel>
              <h2 className="max-w-3xl font-serif text-[30px] leading-tight md:text-[42px]">{impact.title}</h2>
              {impactBody.map((paragraph) => (
                <p key={paragraph} className="text-brown/85">
                  {paragraph}
                </p>
              ))}
              {impact.checklist?.length ? (
                <div className="grid gap-4 sm:grid-cols-2">
                  {impact.checklist.map((item) => (
                    <ChecklistItem key={item} text={item} />
                  ))}
                </div>
              ) : null}
              {impact.stat ? (
                <div className="surface-card shadow-outline inline-block p-6">
                  <StatCounter {...impact.stat} className="text-brown-dark [&>div]:text-brown-dark [&>p]:text-brown/75" />
                </div>
              ) : null}
              {impact.stats?.length ? (
                <div className={`grid gap-4 ${impact.stats.length > 2 ? 'md:grid-cols-2' : 'sm:grid-cols-2'}`}>
                  {impact.stats.map((item) => (
                    <div key={item.label} className="surface-card shadow-outline p-6">
                      <div className="font-serif text-4xl text-brown-dark">
                        {item.prefix}
                        {item.value.toLocaleString()}
                        {item.suffix}
                      </div>
                      <p className="mt-3 text-sm uppercase tracking-[0.18em] text-brown/70">{item.label}</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </Reveal>
            {impact.image ? (
              <Reveal delay={0.1}>
                <img src={impact.image} alt={impact.title} className="shadow-outline h-full min-h-[360px] w-full object-cover" />
              </Reveal>
            ) : null}
          </div>
        </section>
      ) : null}
      {campaign ? (
        <section className="section-pad px-6 md:px-10 lg:px-16">
          <div className="mesh-panel shadow-outline mx-auto max-w-7xl border border-brown-dark/10 p-8 md:p-10">
            <Reveal className="space-y-5">
              <SectionLabel>{campaign.label}</SectionLabel>
              <h2 className="max-w-4xl font-serif text-[30px] leading-tight md:text-[42px]">{campaign.title}</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {campaign.prices.map((price) => (
                  <div key={price.amount} className="surface-card p-5">
                    <p className="font-serif text-3xl text-brown-dark">{price.amount}</p>
                    <p className="mt-2 text-sm text-brown/85">{price.description}</p>
                  </div>
                ))}
              </div>
              <p className="text-brown/85">{campaign.body}</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {campaign.checklist.map((item) => (
                  <ChecklistItem key={item} text={item} />
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}
      {extra}
      <CTABanner title={cta.title} buttonLabel={cta.buttonLabel} href={cta.href} email={cta.email} />
    </>
  )
}
