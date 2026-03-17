# Kukua Website

Static Next.js build for the Kukua website clone. The project reproduces the live site structure and content with reusable components, responsive layouts, and visual-tuning support through Playwright.

## Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Playwright

## Available Scripts

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Project Structure

```text
src/app           App Router pages
src/components    Shared UI, layout, and section components
src/data          Copy, program, donation, team, and FAQ content
src/lib           Shared types and metadata helpers
public/images     Site imagery used across all pages
```

## Notes

- The site is structured for static export.
- Local visual QA assets and Vercel link metadata are intentionally excluded from Git.
- Content and image mappings were built from the provided spec and then tightened with screenshot comparison against the live site.
