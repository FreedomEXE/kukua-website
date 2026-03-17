/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/components/layout/Layout.tsx
 *
 * Description:
 * Shared page frame that wraps the top bar, header, content, and footer.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
import type { ReactNode } from 'react'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { TopBar } from '@/components/layout/TopBar'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="page-shell min-h-screen">
      <TopBar />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
