/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/app/layout.tsx
 *
 * Description:
 * Root app layout that loads fonts, global styles, and the site shell.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Kantumruy_Pro } from 'next/font/google'
import { Layout } from '@/components/layout/Layout'
import '@/styles/globals.css'

const headingFont = Kantumruy_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
})

const bodyFont = Kantumruy_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Kukua Orphanage',
  description: 'Kukua empowers children and communities in rural Tanzania through education, healthcare, nutrition, and clean water.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="font-[var(--font-body)] antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
