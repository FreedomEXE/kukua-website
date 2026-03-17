/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/components/layout/Footer.tsx
 *
 * Description:
 * Footer with logo, quick links, contact details, and existing site copyright.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
import Link from 'next/link'
import { Instagram } from 'lucide-react'
import { footerLinks, instagramHref, siteEmail } from '@/data/site'

export function Footer() {
  return (
    <footer className="mt-12 border-t border-brown-dark/10 bg-[#b66a42] px-6 py-14 text-white md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="space-y-5">
          <img src="/images/logo/kukua-logo.png" alt="Kukua logo" className="h-16 w-auto" />
          <a href={`mailto:${siteEmail}`} className="inline-flex items-center text-sm text-white/90 hover:text-white">
            {siteEmail}
          </a>
        </div>
        <div className="space-y-5">
          <h4 className="font-serif text-4xl text-white">Quick Links</h4>
          <div className="grid gap-3 text-sm text-white/85">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-5">
          <h4 className="font-serif text-[30px] leading-tight text-white">Building Bridges, Creating Opportunities</h4>
          <p className="max-w-sm text-sm text-white/78">
            Empowering communities with resources, respect, and resilience for a brighter future.
          </p>
          <a href={instagramHref} className="inline-flex items-center gap-2 text-sm text-white/85 hover:text-white">
            <Instagram className="h-4 w-4" />
            Instagram
          </a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl border-t border-white/20 pt-6 text-xs uppercase tracking-[0.2em] text-white/45">
        Allright Reserved - Yellow octo llp
      </p>
    </footer>
  )
}
