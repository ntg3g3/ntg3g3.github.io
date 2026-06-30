# Wix Relayout QA

QA date: 2026-06-30

Purpose: verify progress toward the goal of re-laying out all old Wix project pages with the old image-led structure and restoring missing dynamic media.

## Scope Checked

All old Wix internal project pages now have `visualSections` in `src/data/projects.ts`.

Covered old project routes:

- `/cavern`
- `/projectamazon`
- `/diceadventure`
- `/roblearnx`
- `/cyberland2021`
- `/soulferry`
- `/rememberme`
- `/bellum`
- `/droppingsound3d`
- `/virta`
- `/wristx`
- `/roominate`
- `/drydock`
- `/affix`
- `/botto`
- `/internprojects`
- `/softgood`
- `/photography`
- `/wood`
- `/metal`

## Automated Checks Passed

Last build command:

```powershell
pnpm run build
```

Result:

- `astro check`: 0 errors, 0 warnings, 0 hints
- `astro build`: passed
- Static pages generated: 46

Static integrity checks:

- `visualSections` count in `src/data/projects.ts`: 20
- Project pages checked in `dist/projects`: 20
- Project pages missing `.visual-story-section`: 0
- Image references found in `src/data/projects.ts`: 207
- Missing image files from those references: 0
- Old Wix legacy routes expected: 22
- Missing generated legacy routes: 0

Reusable verifier:

```powershell
powershell -ExecutionPolicy Bypass -File E:\PersonalWebsite\tools\verify-wix-relayout.ps1
powershell -ExecutionPolicy Bypass -File E:\PersonalWebsite\tools\verify-wix-relayout.ps1 -Mobile
```

Latest verifier result:

- Static verifier: passed
- Old project pages: 20
- Visual-section blocks: 20
- Image refs: 207
- Optimized motion WebP refs: 9
- Recovered GIF source files: 9
- Missing images: 0
- Embed scan rows: 15
- Strong media hits: 0
- Mobile verifier: passed
- Mobile pages checked: 20
- Mobile width: 390
- Mobile overflow count: 0

## Dynamic Media Status

Recovered local motion assets:

- 9 GIF files recovered from Wix original assets
- 9 GIF files copied into `public/images/projects/...` as source/recovery files
- 9 optimized animated WebP derivatives generated for page use
- Animated WebP files connected to Roominate, Soul Ferry, Remember Me, and BOTTO visual sections
- Motion asset payload changed from 39.33 MB of GIFs to 12.87 MB of animated WebP files

No local `.mp4`, `.webm`, or `.mov` files are present in the downloaded Wix asset set.

Live Wix video/embed scan:

- Initial scan completed for the first five pages before Wix HTTP 429 rate limiting.
- Follow-up scan completed for the remaining 15 old project routes.
- No confirmed YouTube, Vimeo, mp4, webm, mov, or Wix video asset URL found in extracted URLs.
- See `docs/WIX_VIDEO_EMBED_SCAN.md` for scan evidence and remaining manual checks.

## Visual QA Status

Completed:

- Data-level check that every old internal project now uses the image-led visual-section template.
- Static build check that every generated project page contains the visual-section structure.
- Missing-image check for all project image references.
- Legacy route generation check.
- Representative desktop browser screenshot QA for Dice Adventure, Roominate, Project Amazon, and Photography from the static build output.
- Dice Adventure desktop hero reviewed: title, metadata, concise framing text, and hero media no longer overlap.
- Mobile CSS adjusted so the primary navigation uses fixed equal columns and the project section navigation scrolls horizontally instead of wrapping/clipping.
- Remember Me expanded desktop screenshot reviewed after adding brainstorming, mechanics, models, and recovered Final Video motion section.
- Roominate expanded desktop screenshot reviewed after adding research, system, interface, motion loops, and final test/concept section.
- Soul Ferry expanded desktop screenshot reviewed after adding concept art, rowing interaction, route system, and recovered Final Video motion section.
- BOTTO expanded desktop screenshot reviewed after adding research, ideation, form/use, and recovered prototype motion section.
- Desktop first-screen screenshot contact sheet reviewed for all 20 old Wix project pages; no obvious hero/title overlap, broken media, or first-screen layout failure found.
- CDP mobile viewport check completed for all 20 old Wix project pages at 390px width: `overflow_count=0`.
- CAVERN visual relayout expanded from one section to Space / Design / Trailer so the old dev-log/trailer reference is preserved on the page even though no public URL has been recovered.

Not blocking completion:

- Pixel-level manual comparison against live Wix page layout.
- Further caption-density and image-crop polish.

Reason:

- The local environment has a partial Node `playwright` package but cannot resolve `playwright-core`.
- Python browser automation packages (`playwright`, `selenium`, `pyppeteer`) are not installed.
- Chrome command-line screenshot capture works for desktop-sized pages.
- Chrome command-line mobile capture appears to crop a wider layout instead of rendering a true 390px responsive viewport, so mobile screenshots from that method are not treated as final evidence.
- Chrome DevTools Protocol was used instead for mobile verification because it reports the actual 390px viewport and page scroll width.

## Remaining QA Needed

Optional future polish:

1. Review especially long visual pages for spacing, caption density, and image crop quality.
2. Manually verify CAVERN trailer/dev-log references if a private or unlisted public URL exists outside the crawl.
3. Re-run `tools/verify-wix-relayout.ps1 -Mobile` after future project layout or CSS changes.
