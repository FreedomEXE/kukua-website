/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/

# Home Parity Audit - 2026-05-18

## Scope

This pass compares the original `https://kukua.ca/` Home page against the local Next.js implementation and fixes the highest-impact gaps called out in review.

## Original Behaviors Observed

- Sections are assembled from multiple animated pieces, not a single simple card.
- The "Build a Future, Brick by Brick" block is a large image composition with a brown overlay card.
- Counters animate from zero when the stat band enters view.
- Story and donation-help sections use image + text layouts, not plain text panels.
- The floor-plan area uses a large layered background treatment.
- FAQ uses a centered image with the accordion layered beside it; the active item turns green and closed items are brown pills.
- Program cards enter on scroll and have stronger motion/hover treatment.

## Fixes Completed In This Pass

- Mobile top bar now shows only Instagram on all pages, not just Home.
- Home "Build a Future" section now uses a large image plus overlay card and directional reveal motion.
- Home "Rooted in Community" section now includes an image and quote block before timeline cards.
- Home "How Your Donation Helps" section now uses an image + text/list layout.
- Home floor-plan section now has a title band plus large parallax-style floor-plan background.
- Home FAQ section now uses a three-column original-style layout with image, pill accordion, and green active state.
- Shared FAQ accordion now has smoother expand/collapse timing and original-like active/closed colors.
- Shared buttons now have hover lift/shadow animation.
- Programs & Initiatives cards now stagger in with directional reveal motion and hover lift.
- Programs impact counters now count from `0+` to real values on scroll.

## Playwright Verification

- Captured original and local Home sections under `.qa/home-audit/`.
- Captured post-fix Home and Programs sections under `.qa/home-pass-1b/`.
- Verified mobile top bar on `/about-kukua/` shows only `Instagram`.
- Verified Programs impact counter changes from `0+Volunteer Hours Logged` to `10,000+Volunteer Hours Logged`.
- `npm run build` passes.

## Remaining Work

- Continue page-by-page parity. Next recommended target: Programs & Initiatives full page, then About Kukua.
- Record short scroll videos for motion comparison, not only static screenshots.
- For every page, create a section map before implementation: original section, current section, layout gap, animation gap, image gap, priority.
