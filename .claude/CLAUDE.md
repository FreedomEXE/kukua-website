# Kukua Website — Project Configuration

## Project Overview
Full clone of kukua.ca — a nonprofit orphanage website for Kukua, supporting orphans in rural Tanzania. Built as a Next.js 14 static site with Tailwind CSS.

## Stack
- Next.js 14 (App Router, static export)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)
- React Hook Form (contact form)

## Design
- Fonts: DM Serif Display (headings) + Poppins (body)
- Colors: Warm gold (#fbe8a6), dark brown (#2c2927), cream (#f2f1e5)
- Buttons: Outline style, square corners, 600 weight
- Aesthetic: Warm, clean, nonprofit

## File Header
Every file must include the Freedom_EXE copyright header.

## Key Rules
- All images are in `/public/images/` — already downloaded
- Use `next/image` for all images
- Static export for Vercel deployment
- All "Donate Now" buttons link to `/donate`
- Mobile-first responsive design
- Framer Motion for scroll-triggered animations
