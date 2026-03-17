/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/lib/types.ts
 *
 * Description:
 * Shared type definitions used across Kukua page data and reusable components.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
import type { ReactNode } from 'react'

export type LinkItem = {
  label: string
  href: string
}

export type NavItem = LinkItem & {
  children?: LinkItem[]
}

export type StatItem = {
  value: number
  prefix?: string
  suffix?: string
  label: string
}

export type ChecklistEntry = {
  text: string
}

export type FeatureItem = {
  title: string
  description: string
  icon?: ReactNode
}

export type TimelineEntry = {
  year?: string
  title: string
  description?: string
}

export type ContactItem = {
  title: string
  value: string
  href?: string
  kind: 'phone' | 'email' | 'location'
}

export type DonationItem = {
  title: string
  amount: string
  image: string
  description?: string
  progress: number
  tag?: string
}

export type ProgramCardItem = {
  title: string
  description: string
  href: string
  image: string
}

export type HeroContent = {
  label?: string
  title: string
  description?: string
  actions?: LinkItem[]
  backgroundImage?: string
  collageImages?: string[]
}

export type PageMeta = {
  title: string
  description: string
}
