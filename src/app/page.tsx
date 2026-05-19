/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/app/page.tsx
 *
 * Description:
 * Home page for the Kukua website.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
import { Reveal } from '@/components/shared/Reveal'
import { CTABanner } from '@/components/sections/CTABanner'
import { ContactForm } from '@/components/sections/ContactForm'
import { DonationGrid } from '@/components/sections/DonationGrid'
import { StatsSection } from '@/components/sections/StatsSection'
import { Accordion } from '@/components/ui/Accordion'
import { Button } from '@/components/ui/Button'
import { ChecklistItem } from '@/components/ui/ChecklistItem'
import { ContactCard } from '@/components/ui/ContactCard'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { TimelineItem } from '@/components/ui/TimelineItem'
import { buildingDonations } from '@/data/donations'
import { faqItems } from '@/data/faq'
import { homePage } from '@/data/content'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata('Home', homePage.hero.description)

export default function HomePage() {
  const titleParts = homePage.hero.title.split(homePage.hero.accent)

  return (
    <>
      <section className="relative overflow-hidden border-b border-brown-dark/10">
        <img
          src="/images/pages/img-1605.jpg"
          alt="Kukua volunteers"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(164,213,205,0.78)_0%,rgba(164,213,205,0.67)_44%,rgba(24,30,28,0.54)_100%)]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-20 md:px-10 lg:px-16 lg:pb-40 lg:pt-32">
          <div className="max-w-4xl space-y-6">
            <h1 className="font-serif text-[35px] leading-[1.08] text-white md:text-[60px] lg:text-[60px]">
              {titleParts[0]}
              <span className="text-brown-dark">{homePage.hero.accent}</span>
              {titleParts[1]}
            </h1>
            <p className="max-w-3xl text-lg text-white/95">{homePage.hero.description}</p>
            <Button href="/programs-initiatives" className="rounded-none px-6 py-2.5 text-xs tracking-[0.1em]">
              Our Initiatives
            </Button>
          </div>
        </div>
        <div className="hero-swoop" />
      </section>
      <section className="section-pad px-6 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <Reveal className="relative space-y-5">
            <span className="pointer-events-none absolute -left-8 -top-1 hidden text-[42px] font-semibold text-[#8ab7ac] md:block">+</span>
            <span className="pointer-events-none absolute right-8 top-6 hidden h-8 w-8 rounded-full bg-gold md:block" />
            <SectionLabel>{homePage.vision.label}</SectionLabel>
            <h2 className="max-w-3xl font-serif text-[30px] leading-[1.05] md:text-[45px]">{homePage.vision.title}</h2>
            <p className="text-brown/85">{homePage.vision.body}</p>
            <div className="shadow-outline grid max-w-2xl overflow-hidden rounded-[22px] md:grid-cols-[1fr_1fr]">
              <div className="bg-brown-dark p-6 text-white">
                <h3 className="font-serif text-4xl text-white">{homePage.vision.cardTitle}</h3>
                <p className="mt-3 text-sm text-white/90">{homePage.vision.cardBody}</p>
              </div>
              <div className="space-y-3 bg-[#91ab67] p-6">
                {homePage.vision.checklist.map((item) => (
                  <ChecklistItem key={item} text={item} tone="light" />
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} from="right">
            <img src="/images/pages/img-1182.jpg" alt={homePage.vision.title} className="shadow-outline h-[600px] w-full rounded-[24px] object-cover" />
          </Reveal>
        </div>
      </section>
      <section className="section-pad px-6 pt-8 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.98fr_1.02fr]">
          <Reveal className="relative self-end" from="left">
            <img src="/images/pages/img-0991.jpg" alt={homePage.buildFuture.title} className="shadow-outline h-[540px] w-full rounded-[24px] object-cover md:h-[640px]" />
            <div className="absolute bottom-8 left-4 right-4 max-w-[390px] rounded-[22px] bg-gold p-6 text-white shadow-soft md:-left-10 md:bottom-14 md:right-auto md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Urgent Need</p>
              <h3 className="mt-3 font-serif text-[28px] leading-tight text-white">{homePage.buildFuture.title}</h3>
              <p className="mt-4 text-base leading-7 text-white/92">{homePage.buildFuture.body}</p>
            </div>
          </Reveal>
          <Reveal className="relative space-y-5 self-center" from="right">
            <span className="pointer-events-none absolute -left-7 -top-1 hidden text-[40px] font-semibold text-[#8ab7ac] md:block">+</span>
            <span className="pointer-events-none absolute right-5 top-4 hidden h-7 w-7 rounded-full bg-gold md:block" />
            <SectionLabel>{homePage.whyThisMatters.label}</SectionLabel>
            <h2 className="max-w-3xl font-serif text-[30px] leading-[1.05] md:text-[45px]">{homePage.whyThisMatters.title}</h2>
            <p className="text-brown/85">{homePage.whyThisMatters.body}</p>
            <div className="space-y-4">
              {homePage.whyThisMatters.checklist.map((item) => (
                <ChecklistItem key={item} text={item} />
              ))}
            </div>
            <div className="flex flex-wrap items-end gap-5">
              <Button href={homePage.whyThisMatters.action.href}>{homePage.whyThisMatters.action.label}</Button>
              <img src="/images/pages/group-1.jpg" alt="Kukua volunteers" className="shadow-outline h-44 w-64 rounded-[18px] object-cover" />
            </div>
          </Reveal>
        </div>
      </section>
      <StatsSection items={homePage.stats.items} quote={homePage.stats.quote} variant="cards" />
      <section className="relative bg-[#e8eee4] px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="relative" from="left">
            <img src="/images/pages/img-1235.jpg" alt="Kukua impact story" className="shadow-outline h-[430px] w-full rounded-[24px] object-cover" />
            <div className="absolute left-8 top-8 max-w-[430px] bg-gold/88 p-8 text-white shadow-soft">
              <p className="font-serif text-xl text-white">{homePage.stats.quote}</p>
            </div>
          </Reveal>
          <Reveal className="space-y-5 self-center" from="right">
            <SectionLabel>{homePage.story.label}</SectionLabel>
            <h2 className="max-w-3xl font-serif text-[30px] leading-tight md:text-[42px]">{homePage.story.title}</h2>
            <p className="max-w-3xl text-brown/85">{homePage.story.body}</p>
            <Button href={homePage.story.action.href}>{homePage.story.action.label}</Button>
          </Reveal>
        </div>
        <div className="mx-auto mt-12 grid max-w-7xl gap-6 lg:grid-cols-4">
          {homePage.story.timeline.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08} from={index % 2 === 0 ? 'left' : 'right'}>
              <TimelineItem title={item.title} description={item.description} />
            </Reveal>
          ))}
        </div>
      </section>
      <section className="section-pad px-6 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal from="left">
            <img src="/images/pages/img-0997-scaled.jpg" alt={homePage.donationHelp.title} className="shadow-outline h-[520px] w-full rounded-[24px] object-cover" />
          </Reveal>
          <Reveal className="relative space-y-6 self-center" from="right">
            <span className="pointer-events-none absolute right-10 top-0 hidden h-7 w-7 rounded-full bg-gold md:block" />
            <SectionLabel>{homePage.donationHelp.label}</SectionLabel>
            <h2 className="max-w-3xl font-serif text-[30px] leading-tight md:text-[42px]">{homePage.donationHelp.title}</h2>
            {homePage.donationHelp.body.map((paragraph) => (
              <p key={paragraph} className="max-w-3xl text-brown/85">
                {paragraph}
              </p>
            ))}
            <div className="grid gap-4 sm:grid-cols-2">
              {homePage.donationHelp.checklist.map((item) => (
                <ChecklistItem key={item} text={item} />
              ))}
            </div>
            <Button href={homePage.donationHelp.action.href}>{homePage.donationHelp.action.label}</Button>
          </Reveal>
        </div>
      </section>
      <section className="bg-[#e8eee4] px-6 py-12 text-center md:px-10 lg:px-16">
        <Reveal className="mx-auto max-w-4xl space-y-4">
          <div className="flex justify-center">
            <SectionLabel>{homePage.floorPlans.label}</SectionLabel>
          </div>
          <h2 className="font-serif text-[30px] leading-tight md:text-[42px]">{homePage.floorPlans.title}</h2>
          <p className="text-brown/85">{homePage.floorPlans.body}</p>
          <Button href={homePage.floorPlans.action.href}>{homePage.floorPlans.action.label}</Button>
        </Reveal>
      </section>
      <section className="floor-plan-parallax" aria-label="Floor plan preview">
        <div className="sr-only">{homePage.floorPlans.title}</div>
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
      <section className="paper-bg px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_0.6fr_1fr]">
          <Reveal className="space-y-5" from="left">
            <SectionLabel>{homePage.faq.label}</SectionLabel>
            <h2 className="font-serif text-[30px] leading-tight md:text-[42px]">{homePage.faq.title}</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <img src="/images/pages/children-2.jpg" alt="Kukua volunteers with children" className="h-[430px] w-full object-cover shadow-outline" />
          </Reveal>
          <Reveal delay={0.1} from="right">
            <Accordion items={faqItems.map((item) => ({ question: item.question, answer: item.answer }))} />
          </Reveal>
        </div>
      </section>
      <CTABanner title={homePage.banner.title} buttonLabel={homePage.banner.buttonLabel} href={homePage.banner.href} />
      <section className="px-6 py-8 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl space-y-4">
          <SectionLabel>{homePage.donateNow.label}</SectionLabel>
          <h2 className="font-serif text-[30px] leading-tight md:text-[42px]">{homePage.donateNow.title}</h2>
        </div>
      </section>
      <section className="section-pad px-6 pt-8 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl space-y-8">
          <Reveal className="space-y-4">
            <SectionLabel>{homePage.contact.infoLabel}</SectionLabel>
            <h2 className="font-serif text-[30px] leading-tight md:text-[42px]">{homePage.contact.infoTitle}</h2>
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {homePage.contact.cards.map((item) => (
              <Reveal key={`${item.kind}-${item.value}`}>
                <ContactCard item={item} />
              </Reveal>
            ))}
          </div>
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <Reveal className="space-y-4">
              <SectionLabel>{homePage.contact.formLabel}</SectionLabel>
              <h2 className="font-serif text-[30px] leading-tight md:text-[42px]">{homePage.contact.formTitle}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
