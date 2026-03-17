/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/data/donations.ts
 *
 * Description:
 * Donation tier data reused across the building, Ramadan, and donate pages.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
import type { DonationItem } from '@/lib/types'

export const buildingDonations: DonationItem[] = [
  {
    title: '1 Brick',
    amount: '$10',
    image: '/images/pages/brick.jpg',
    progress: 0,
    tag: 'Social',
  },
  {
    title: '1 Restroom',
    amount: '$2,000',
    image: '/images/pages/warm-stalls.jpg',
    progress: 0,
    tag: 'Social',
  },
  {
    title: '1 Bedroom',
    amount: '$5,000',
    image: '/images/pages/group-1.jpg',
    progress: 0,
    tag: 'Social',
  },
  {
    title: 'Office',
    amount: '$5,000',
    image: '/images/pages/child-portrait-2.jpg',
    progress: 0,
    tag: 'Social',
  },
  {
    title: 'Classroom/Madresa',
    amount: '$7,000',
    image: '/images/pages/school.jpg',
    progress: 0,
    tag: 'Social',
  },
  {
    title: 'Kitchen/Dining Hall',
    amount: '$10,000',
    image: '/images/pages/child-portrait-1.jpg',
    progress: 0,
    tag: 'Social',
  },
]

export const ramadanDonations: DonationItem[] = [
  {
    title: 'Iftar at Multidome',
    amount: '$250',
    description: '40 kids and 5-6 adults',
    image: '/images/pages/img-1290.jpg',
    progress: 0,
    tag: 'Social',
  },
  {
    title: 'Iftar at Fadhillah',
    amount: '$850',
    description: '218 kids and 12-15 adults',
    image: '/images/pages/img-1077.jpg',
    progress: 0,
    tag: 'Social',
  },
  {
    title: 'Sewing machine + Ramadhan groceries',
    amount: '$500',
    image: '/images/pages/img-1409.jpg',
    progress: 0,
    tag: 'Social',
  },
  {
    title: 'Quran sharif',
    amount: '$10',
    description: 'These will be distributed in Masjids by request only',
    image: '/images/pages/ayah.jpg',
    progress: 0,
    tag: 'Social',
  },
  {
    title: 'Prayer mats',
    amount: '$10',
    description: 'Will be distributed by request to places of work where workers currently pray',
    image: '/images/pages/prayer-mat.jpg',
    progress: 0,
    tag: 'Social',
  },
  {
    title: 'Eid clothes',
    amount: '$15',
    description: 'Abaya or Thobes',
    image: '/images/pages/img-1182.jpg',
    progress: 0,
    tag: 'Social',
  },
]
