/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/

# Kukua Update Log - 2026-05-18

## Mobile Spacing Pass

- Updated the mobile top bar spacing so location, email, and Instagram use the same vertical gap.
- Kept the desktop grouping intact: location and email remain grouped on the left, Instagram remains on the right.
- Verification target: `/water-wells/` at a 390px mobile viewport.

## Final Parity Pass Notes

- Captured `kukua.ca` and local Kukua pages with Playwright across desktop and mobile.
- Confirmed original Instagram URL: `https://www.instagram.com/kukuaorg/`.
- Adjusted shared colors toward the original green and gold values.
- Restored stronger scroll reveal behavior: sections now fade/lift in instead of rendering fully visible.
- Added directional reveal support for key imagery and animated donation progress bars.
- Matched original square button styling more closely.
- Updated homepage mobile hero/section heading sizes closer to the original.
- Updated homepage stat values to match the original count-up examples observed during the scrolled Playwright pass.
- Tightened the shared stats-card variant into a dark-green count-up band like the original home page.

## Pending Issues

- Playwright verification completed:
  - `kukua.ca` original captured across desktop and mobile.
  - Local `http://127.0.0.1:3001` captured and checked after edits.
  - Live `https://kukuaorg.ca/` opened successfully for a home-page sanity check.
  - Mobile home top bar visible text is now only `Instagram`.
  - Homepage stats verified from `0+` to `10,000+` on scroll.
- Build verification completed with `npm run build`.
- Add follow-up Kukua issues here as they come in.
