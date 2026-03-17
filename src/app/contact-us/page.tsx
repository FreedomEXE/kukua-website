/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/app/contact-us/page.tsx
 *
 * Description:
 * Contact page with canonical email and message form.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
import { Reveal } from '@/components/shared/Reveal'
import { ContactForm } from '@/components/sections/ContactForm'
import { HeroSection } from '@/components/sections/HeroSection'
import { ContactCard } from '@/components/ui/ContactCard'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { contactPage } from '@/data/content'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata('Contact Us', contactPage.form.title)

export default function ContactUsPage() {
  return (
    <>
      <HeroSection label={contactPage.hero.label} title={contactPage.hero.title} />
      <section className="section-pad px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl space-y-8">
          <Reveal className="space-y-4">
            <SectionLabel>{contactPage.info.label}</SectionLabel>
            <h2 className="font-serif text-[30px] leading-tight md:text-[42px]">{contactPage.info.title}</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {contactPage.info.cards.map((item) => (
              <Reveal key={`${item.kind}-${item.value}`}>
                <ContactCard item={item} />
              </Reveal>
            ))}
          </div>
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <Reveal className="space-y-4">
              <SectionLabel>{contactPage.form.label}</SectionLabel>
              <h2 className="font-serif text-[30px] leading-tight md:text-[42px]">{contactPage.form.title}</h2>
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
