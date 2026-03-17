/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: tailwind.config.ts
 *
 * Description:
 * Tailwind configuration for the Kukua website design system.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-heading)'],
        sans: ['var(--font-body)'],
      },
      colors: {
        gold: 'var(--color-gold)',
        'gold-dark': 'var(--color-gold-dark)',
        'brown-dark': 'var(--color-brown-dark)',
        brown: 'var(--color-brown)',
        cream: 'var(--color-cream)',
        'light-gray': 'var(--color-light-gray)',
      },
      boxShadow: {
        soft: '0 24px 60px rgba(44, 41, 39, 0.12)',
        card: '0 14px 30px rgba(44, 41, 39, 0.08)',
      },
      backgroundImage: {
        'hero-wash': 'radial-gradient(circle at top left, rgba(251, 232, 166, 0.8), transparent 40%), linear-gradient(135deg, rgba(255,255,255,0.65), rgba(251, 232, 166, 0.2))',
      },
    },
  },
  plugins: [],
}

export default config
