/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/components/sections/HeroSection.tsx
 *
 * Description:
 * Reusable hero section supporting simple titles and image collage layouts.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
import { Reveal } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/Button'
import { SectionLabel } from '@/components/ui/SectionLabel'

type HeroSectionProps = {
  label?: string
  title: string
  description?: string
  accent?: string
  actions?: { label: string; href: string }[]
  backgroundImage?: string
  backgroundPosition?: string
  overlayClassName?: string
  centered?: boolean
  contentClassName?: string
}

export function HeroSection({
  label,
  title,
  description,
  accent,
  actions,
  backgroundImage,
  backgroundPosition = 'center',
  overlayClassName,
  centered = false,
  contentClassName = '',
}: HeroSectionProps) {
  const parts = accent ? title.split(accent) : [title]
  const sectionClass = 'relative overflow-hidden border-b border-brown-dark/10'
  const contentPadClass = centered
    ? 'relative mx-auto max-w-7xl px-6 pb-32 pt-32 md:px-10 lg:px-16 lg:pb-40 lg:pt-40'
    : 'relative mx-auto max-w-7xl px-6 pb-28 pt-24 md:px-10 lg:px-16 lg:pb-36 lg:pt-32'
  const finalContentClass = `${contentPadClass} ${contentClassName}`.trim()

  return (
    <section className={sectionClass}>
      <img
        src={backgroundImage ?? '/images/pages/children-2.jpg'}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: backgroundPosition }}
      />
      <div
        className={`absolute inset-0 ${
          overlayClassName ??
          'bg-[linear-gradient(100deg,rgba(138,183,172,0.72)_0%,rgba(138,183,172,0.64)_44%,rgba(24,30,28,0.58)_100%)]'
        }`}
      />
      <div className={finalContentClass}>
        <Reveal className={`space-y-7 ${centered ? 'text-center' : ''}`}>
          {label ? (
            centered ? (
              <div className="flex justify-center">
                <SectionLabel>{label}</SectionLabel>
              </div>
            ) : (
              <SectionLabel>{label}</SectionLabel>
            )
          ) : null}
          <h1 className={`font-serif text-[35px] leading-[1.2] text-white sm:text-[52px] lg:text-[60px] ${centered ? 'mx-auto max-w-5xl' : 'max-w-5xl'}`}>
            {accent ? (
              <>
                {parts[0]}
                <span className="text-brown-dark">{accent}</span>
                {parts[1]}
              </>
            ) : (
              title
            )}
          </h1>
          {description ? <p className={`text-base text-white/95 sm:text-lg ${centered ? 'mx-auto max-w-3xl' : 'max-w-3xl'}`}>{description}</p> : null}
          {actions?.length ? (
            <div className={`flex flex-wrap gap-4 ${centered ? 'justify-center' : ''}`}>
              {actions.map((action) => (
                <Button key={action.href} href={action.href}>
                  {action.label}
                </Button>
              ))}
            </div>
          ) : null}
        </Reveal>
      </div>
      <div className="hero-swoop" />
    </section>
  )
}
