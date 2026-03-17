/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/app/our-children/page.tsx
 *
 * Description:
 * Our Children page highlighting facilities, impact story, and leadership team.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
import { Reveal } from '@/components/shared/Reveal'
import { CTABanner } from '@/components/sections/CTABanner'
import { HeroSection } from '@/components/sections/HeroSection'
import { FeatureCard } from '@/components/ui/FeatureCard'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { TeamCard } from '@/components/ui/TeamCard'
import { Check } from 'lucide-react'
import { childrenPage } from '@/data/content'
import { teamMembers } from '@/data/team'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata('Our Children', childrenPage.champions.body)

export default function OurChildrenPage() {
  const heroTitle = 'Meet The Children Whose Resilience, Hope, And Dreams Inspire Everything We Do'
  const championsTitle = 'The Children Of Fadhillah Orphanage And Multidome Relief Centre-Growing, Learning, And Thriving With Your Support'
  const storyTitle = "Shadiya And Nadiya's Journey With Kukua"

  return (
    <>
      <HeroSection
        label={childrenPage.hero.label}
        title={heroTitle}
        backgroundImage="/images/pages/img-1090.jpg"
        backgroundPosition="center 38%"
        centered
      />
      <section className="section-pad px-6 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.84fr_1.16fr]">
          <Reveal>
            <img src="/images/pages/img-1077.jpg" alt={championsTitle} className="shadow-outline h-[520px] w-full rounded-[24px] object-cover" />
          </Reveal>
          <Reveal delay={0.1} className="relative space-y-5">
            <span className="pointer-events-none absolute left-6 top-0 hidden text-[40px] font-semibold text-[#8ab7ac] md:block">+</span>
            <span className="pointer-events-none absolute right-4 top-6 hidden h-8 w-8 rounded-full bg-gold md:block" />
            <SectionLabel className="pl-6">{childrenPage.champions.label}</SectionLabel>
            <h2 className="max-w-4xl font-serif text-[58px] leading-[0.96]">{championsTitle}</h2>
            <p className="max-w-3xl text-brown/85">{childrenPage.champions.body}</p>
            <div className="shadow-outline grid overflow-hidden rounded-[24px] md:grid-cols-[0.86fr_1.14fr]">
              <div className="bg-brown-dark p-6 text-white">
                <div className="mb-4 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                  <Check className="h-4 w-4" />
                </div>
                <h3 className="font-serif text-[34px] text-white">Your Support Changes Lives</h3>
                <p className="mt-3 text-sm text-white/90">{childrenPage.champions.calloutBody}</p>
              </div>
              <div className="space-y-4 bg-[#91ab67] p-6">
                {childrenPage.stats.map((stat) => (
                  <div key={stat.label} className="border-b border-white/15 pb-3 last:border-0 last:pb-0">
                    <p className="font-serif text-[46px] leading-none text-white">
                      {'prefix' in stat && typeof stat.prefix === 'string' ? stat.prefix : ''}
                      {stat.value.toLocaleString()}
                      {stat.suffix}
                    </p>
                    <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.16em] text-white/88">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="bg-light-gray/65 px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <img src="/images/pages/image1.jpg" alt={storyTitle} className="shadow-outline h-[620px] w-full rounded-[24px] object-cover" />
          </Reveal>
          <Reveal delay={0.1} className="relative space-y-5">
            <span className="pointer-events-none absolute left-0 top-2 hidden text-[42px] font-semibold text-[#8ab7ac] md:block">+</span>
            <span className="pointer-events-none absolute right-4 top-10 hidden h-7 w-7 rounded-full bg-gold md:block" />
            <SectionLabel>{childrenPage.story.label}</SectionLabel>
            <h2 className="font-serif text-[54px] leading-[0.96]">{storyTitle}</h2>
            <p className="text-brown/85">{childrenPage.story.body}</p>
            <div className="grid gap-5 md:grid-cols-3">
              {childrenPage.story.features.map((feature) => (
                <FeatureCard key={feature.title} title={feature.title} description={feature.description} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section-pad px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl space-y-6">
          <SectionLabel>{childrenPage.leadership.label}</SectionLabel>
          <h2 className="max-w-4xl font-serif text-[30px] leading-tight md:text-[42px]">{childrenPage.leadership.title}</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {teamMembers.map((member) => (
              <Reveal key={member.name}>
                <TeamCard name={member.name} image={member.image} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTABanner title={childrenPage.cta.title} buttonLabel={childrenPage.cta.buttonLabel} href={childrenPage.cta.href} email={childrenPage.cta.email} />
    </>
  )
}
