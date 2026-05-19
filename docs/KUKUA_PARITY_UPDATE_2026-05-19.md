# Kukua parity update - 2026-05-19

## Home page fixes applied

- Rebuilt the "Rooted in Community, Built on Trust" section to match the original structure more closely:
  - original water-well/community image recovered from `kukua.ca`
  - translucent quote band over the image
  - text and CTA on the right
  - four-part timeline underneath, with the final "Future" item as the brown feature card
- Replaced the floorplan parallax image with the original black blueprint asset from `kukua.ca`.
- Rebuilt the FAQ section around the original layout:
  - left-side label and heading
  - original center photo recovered from `kukua.ca`
  - FAQ accordion overlapping the photo on desktop
  - restored tack-style x decoration and squiggle detail
- Removed the duplicate quote row below the stats band, since the original quote appears inside the story image overlay.
- Fixed mobile clipping in the story section caused by horizontal scroll state inside an overflow container.

## Assets recovered from the original site

- `public/images/pages/story-water-well.jpg`
- `public/images/pages/floorplan-original.png`
- `public/images/pages/faq-original.jpg`

## Verified

- `npm run build`
- Playwright desktop screenshots for Home story, floorplan, and FAQ sections
- Playwright mobile screenshot for Home story section

## Still pending for full site parity

- Continue a page-by-page pass against `kukua.ca`.
- For each page, compare structure, imagery, colors, typography, spacing, button behavior, scroll-triggered animation, and decorative details.
- Prioritize the WordPress/Elementor-style section assembly animations, donation-card motion, FAQ open/close behavior, and count-up stats where still missing.

## Page-by-page parity workflow

For each remaining page, do not submit from visual memory alone:

- Capture original desktop and mobile screenshots from `kukua.ca`.
- Capture matching local desktop and mobile screenshots.
- Extract original section images/backgrounds from the WordPress DOM before substituting assets.
- Compare section order, spacing, typography, colors, button behavior, decorative marks, and image crops.
- Verify motion patterns on scroll: count-up numbers, staggered cards, puzzle/assembled blocks, text reveal, image entrance, FAQ expansion, and parallax/background movement.
- Run `npm run build` before committing.
