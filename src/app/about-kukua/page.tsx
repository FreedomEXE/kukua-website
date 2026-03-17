/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/app/about-kukua/page.tsx
 *
 * Description:
 * About Kukua page describing mission, vision, milestones, and the volunteer team.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
import { Reveal } from '@/components/shared/Reveal'
import { CTABanner } from '@/components/sections/CTABanner'
import { HeroSection } from '@/components/sections/HeroSection'
import { Button } from '@/components/ui/Button'
import { ChecklistItem } from '@/components/ui/ChecklistItem'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { TeamCard } from '@/components/ui/TeamCard'
import { TimelineItem } from '@/components/ui/TimelineItem'
import { aboutPage } from '@/data/content'
import { teamMembers } from '@/data/team'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata('About Kukua', aboutPage.intro.body)

export default function AboutKukuaPage() {
  const [wellsStat, ...remainingStats] = aboutPage.stats
  const heroTitle = 'Bridging Hope & Opportunity For Children & Communities'
  const introTitle = "Learn More About Our Mission, Values, And The Impact We've Made"
  const visionTitle = 'We Believe In Standing Alongside Communities, Not Changing Them'

  return (
    <>
      <HeroSection
        label={aboutPage.hero.label}
        title={heroTitle}
        backgroundImage="/images/pages/img-1003.jpg"
        backgroundPosition="center 42%"
        centered
        overlayClassName="bg-[linear-gradient(100deg,rgba(164,213,205,0.76)_0%,rgba(164,213,205,0.68)_45%,rgba(22,28,25,0.54)_100%)]"
      />
      <section className="section-pad mt-32 px-6 pt-[11rem] md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="relative">
            <img src="/images/pages/img-1023.jpg" alt={aboutPage.intro.title} className="shadow-outline h-[620px] w-full rounded-[24px] object-cover" />
            <div className="absolute bottom-8 left-8 rounded-[14px] bg-gold px-8 py-5 text-white shadow-card">
              <p className="text-lg font-semibold">We&apos;re Making A Difference</p>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="relative space-y-5">
            <span className="pointer-events-none absolute -left-7 -top-2 hidden text-[40px] font-semibold text-[#8ab7ac] md:block">+</span>
            <span className="pointer-events-none absolute right-6 top-4 hidden h-8 w-8 rounded-full bg-gold md:block" />
            <SectionLabel>About Us</SectionLabel>
            <h2 className="max-w-3xl font-serif text-[45px] leading-[1.05]">{introTitle}</h2>
            <p className="max-w-3xl text-brown/85">{aboutPage.intro.body}</p>
            <div className="space-y-2">
              <p className="font-serif text-[54px] leading-none text-gold-dark">
                {wellsStat.value.toLocaleString()}
              </p>
              <p className="text-base font-semibold uppercase tracking-[0.12em] text-brown-dark">{wellsStat.label}</p>
            </div>
            <div className="flex flex-wrap items-end gap-4">
              <Button href="/donate" className="rounded-none px-5 py-2 text-xs tracking-[0.12em]">
                Donate Now
              </Button>
              <img src="/images/pages/group-1.jpg" alt="Kukua impact" className="shadow-outline h-36 w-60 rounded-[18px] object-cover" />
            </div>
          </Reveal>
        </div>
      </section>
      <section className="px-6 pb-10 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[6px] bg-brown-dark px-8 py-7">
          <div className="grid gap-8 md:grid-cols-3">
            {remainingStats.map((item) => (
              <div key={item.label} className="space-y-2">
                <p className="font-serif text-[50px] leading-none text-white">
                  {item.prefix}
                  {item.value.toLocaleString()}
                </p>
                <p className="text-base font-semibold uppercase tracking-[0.12em] text-white/90">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad px-6 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
          <Reveal className="relative space-y-5">
            <span className="pointer-events-none absolute -left-8 -top-1 hidden text-[40px] font-semibold text-[#8ab7ac] md:block">+</span>
            <span className="pointer-events-none absolute right-6 top-4 hidden h-8 w-8 rounded-full bg-gold md:block" />
            <SectionLabel>{aboutPage.vision.label}</SectionLabel>
            <h2 className="font-serif text-[45px] leading-[1.05]">{visionTitle}</h2>
            <p className="text-brown/85">{aboutPage.vision.body}</p>
            <div className="shadow-outline grid max-w-2xl overflow-hidden rounded-[22px] md:grid-cols-[1fr_1fr]">
              <div className="bg-brown-dark p-6 text-white">
                <h3 className="font-serif text-4xl text-white">{aboutPage.vision.cardTitle}</h3>
                <p className="mt-3 text-sm text-white/90">{aboutPage.vision.cardBody}</p>
              </div>
              <div className="space-y-3 bg-[#91ab67] p-6">
                {aboutPage.vision.checklist.map((item) => (
                  <ChecklistItem key={item} text={item} tone="light" />
                ))}
              </div>
            </div>
            <p className="font-serif text-2xl text-brown-dark">{aboutPage.vision.quote}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <img src="/images/pages/img-1409.jpg" alt={aboutPage.vision.title} className="shadow-outline h-[700px] w-full rounded-[24px] object-cover" />
          </Reveal>
        </div>
      </section>
      <section className="section-pad px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl space-y-6">
          <SectionLabel>{aboutPage.timeline.label}</SectionLabel>
          <h2 className="max-w-4xl font-serif text-[30px] leading-tight md:text-[42px]">{aboutPage.timeline.title}</h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {aboutPage.timeline.items.map((item) => (
              <Reveal key={`${item.year}-${item.title}`}>
                <TimelineItem year={item.year} title={item.title} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl space-y-6">
          <SectionLabel>{aboutPage.team.label}</SectionLabel>
          <h2 className="font-serif text-[30px] leading-tight md:text-[42px]">{aboutPage.team.title}</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {teamMembers.map((member) => (
              <Reveal key={member.name}>
                <TeamCard name={member.name} image={member.image} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTABanner title={aboutPage.cta.title} buttonLabel={aboutPage.cta.buttonLabel} href={aboutPage.cta.href} email={aboutPage.cta.email} />
    </>
  )
}
