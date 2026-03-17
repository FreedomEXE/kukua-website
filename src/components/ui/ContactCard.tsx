/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/components/ui/ContactCard.tsx
 *
 * Description:
 * Contact information card with icon and value link.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
import { Mail, MapPin, Phone } from 'lucide-react'
import type { ContactItem } from '@/lib/types'

type ContactCardProps = {
  item: ContactItem
}

const iconMap = {
  phone: Phone,
  email: Mail,
  location: MapPin,
} as const

export function ContactCard({ item }: ContactCardProps) {
  const Icon = iconMap[item.kind]
  const content = item.href ? (
    <a href={item.href} className="text-base text-brown hover:text-brown-dark">
      {item.value}
    </a>
  ) : (
    <span className="text-base text-brown">{item.value}</span>
  )

  return (
    <article className="surface-card shadow-outline flex h-full gap-4 p-6">
      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/70 text-brown-dark">
        <Icon className="h-5 w-5" />
      </span>
      <div className="space-y-2">
        <h4 className="font-serif text-2xl">{item.title}</h4>
        {content}
      </div>
    </article>
  )
}
