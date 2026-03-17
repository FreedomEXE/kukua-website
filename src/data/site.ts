/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/data/site.ts
 *
 * Description:
 * Global navigation, contact, and footer data shared across the site.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
import type { ContactItem, LinkItem, NavItem } from '@/lib/types'

export const siteName = 'Kukua Orphanage'
export const siteEmail = 'kukuaorg@gmail.com'
export const instagramHref = '#'

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about-kukua',
    children: [
      { label: 'About Kukua', href: '/about-kukua' },
      { label: 'Our Children', href: '/our-children' },
    ],
  },
  {
    label: 'Programs & Initiatives',
    href: '/programs-initiatives',
    children: [
      { label: 'Ramadan At Kukua', href: '/ramadan-at-kukua' },
      { label: 'Food & Nutrition', href: '/food-nutrition' },
      { label: 'Urgent Needs Project', href: '/urgent-needs-project' },
      { label: 'Healthcare', href: '/healthcare' },
      { label: 'Education', href: '/education' },
      { label: 'Wheelchairs', href: '/wheelchairs' },
      { label: 'Water Wells', href: '/water-wells' },
    ],
  },
  {
    label: 'Our Impact',
    href: '/children-run-initiatives',
    children: [
      { label: 'Children Run Initiatives', href: '/children-run-initiatives' },
      { label: 'Sustainability - Training Centre', href: '/sustainability-training-centre' },
    ],
  },
  { label: 'Contact Us', href: '/contact-us' },
]

export const footerLinks: LinkItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Kukua', href: '/about-kukua' },
  { label: 'Our Impact', href: '/children-run-initiatives' },
  { label: 'Donate', href: '/donate' },
  { label: 'Programs & Initiatives', href: '/programs-initiatives' },
  { label: 'Contact Us', href: '/contact-us' },
]

export const topBarItems: ContactItem[] = [
  { kind: 'location', title: 'Location', value: 'Kukua, Tanzania & Canada' },
  { kind: 'email', title: 'Email', value: siteEmail, href: `mailto:${siteEmail}` },
]

export const contactCards: ContactItem[] = [
  { kind: 'phone', title: 'Telephone', value: '+1 416 123 4567 (Canada)', href: 'tel:+14161234567' },
  { kind: 'email', title: 'Email Us At', value: siteEmail, href: `mailto:${siteEmail}` },
  { kind: 'phone', title: 'Telephone', value: '+255 123 456 789 (Tanzania)', href: 'tel:+255123456789' },
]
