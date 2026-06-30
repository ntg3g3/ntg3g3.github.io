# Wix Relayout Audit

Audit date: 2026-06-30

Purpose: track the gap between the original Wix project pages and the current Astro rebuild. The current goal is to preserve the original image-led Wix page structures, keep text sparse, and restore missing dynamic/video-like media where available.

Related video/embed scan: `docs/WIX_VIDEO_EMBED_SCAN.md`.
Related QA status: `docs/WIX_RELAYOUT_QA.md`.
Reusable verification script: `tools/verify-wix-relayout.ps1`.

## Direction

- Use the old Wix pages as layout references, not generic case-study templates.
- Images should carry the page; text should act as short context, labels, or connective explanation.
- Preserve the old Home / Game Projects / Experience Projects / Archive hierarchy.
- Keep Skyweaver visually dominant on Home, with Last Trigger as a newer public professional work signal.
- Do not create a page for the current unannounced project.

## Current Gap Summary

The raw Wix asset crawl has 441 downloaded files. Most current project folders only expose 5 optimized images, so many pages are still in a placeholder migration state rather than a faithful old-layout rebuild.

| Old Wix route | Current route / slug | Wix asset count | Current public files | Notes |
| --- | --- | ---: | ---: | --- |
| `/cavern` | `/projects/cavern/` | 5 | 7 | Expanded relayout with Space, Design, and Trailer sections; old dev-log/trailer slot is preserved, but no public URL was recovered. |
| `/projectamazon` | `/projects/project-amazon/` | 24 | 13 | First visual-section relayout completed with title screen, theme/context boards, projection setup, and route diagrams. |
| `/diceadventure` | `/projects/dice-adventure/` | 32 | 13 | Partially expanded, but still not faithful enough to the original Wix flow. |
| `/roblearnx` | `/projects/roblearnx/` | 4 | 6 | First visual-section relayout completed; low asset count means the page stays intentionally compact. |
| `/cyberland2021` | `/projects/cyberland-2021/` | 53 | 15 | First visual-section relayout completed with title, playtest, body-control, and level diagrams. |
| `/soulferry` | `/projects/soul-ferry/` | 28 | 19 | Expanded relayout with concept art, rowing interaction, route system, and recovered Final Video motion slot. |
| `/rememberme` | `/projects/remember-me/` | 25 | 16 | Expanded relayout with brainstorming, mechanics, models, and recovered Final Video motion slot. |
| `/bellum` | `/projects/bellum/` | 37 | 17 | First visual-section relayout completed with system overview, scenes, social UI, map, feedback, and portraits. |
| `/droppingsound3d` | `/projects/sound-drop/` | 17 | 17 | First visual-section relayout completed with prototype, process, experiment, and result visuals. |
| `/virta` | `/projects/virta/` | 22 | 17 | First visual-section relayout completed with meeting context, attention visualization, sketches, and implementation visuals. |
| `/wristx` | `/projects/wristx/` | 16 | 15 | First visual-section relayout completed with system, research, device, and flow visuals. |
| `/roominate` | `/projects/roominate/` | 39 | 26 | Expanded relayout with research, system, interface, six GIF loops, and final test/concept section. |
| `/drydock` | `/projects/in-city-short-distance-ferry-terminal/` | 54 | 16 | First visual-section relayout completed with site analysis, models, structure/material, and final render images. |
| `/affix` | `/projects/affix/` | 16 | 15 | First visual-section relayout completed with furniture system, connector, and final render visuals. |
| `/botto` | `/projects/botto/` | 18 | 19 | Expanded relayout with research, ideation, form/use, and recovered prototype motion section. |
| `/internprojects` | `/projects/product-design-intern/` | 24 | 17 | First visual-section relayout completed with selected renderings, charger series, scenes, and dimension views. |
| `/softgood` | `/projects/soft-goods-project/` | 34 | 17 | First visual-section relayout completed with concept, pattern, construction, and final use photos. |
| `/photography` | `/projects/photography/` | 10 | 12 | First visual-section relayout completed as a simple photo gallery page. |
| `/wood` | `/projects/woodcrafts/` | 27 | 17 | First visual-section relayout completed with folded object, toy mechanism, and game-board object groups. |
| `/metal` | `/projects/metalcrafts/` | 13 | 14 | First visual-section relayout completed with folded metal form gallery. |

## Dynamic Assets Found Locally

No `.mp4`, `.webm`, or `.mov` files are currently present in the downloaded Wix assets. The crawl did recover 9 `.gif` files. These have been copied into project public folders as source/recovery files, then converted into optimized animated WebP files for page use. The page motion payload is now 12.87 MB instead of 39.33 MB of GIFs.

| Original file | Original page | Source GIF | Page asset | Status |
| --- | --- | --- | --- | --- |
| `a04444_07739621e06247e5b14c612afca6cd50~mv2.gif` | `/roominate` | `/images/projects/roominate/interaction-01.gif` | `/images/projects/roominate/interaction-01.webp` | Optimized and connected |
| `a04444_0ec4d8f99979474fa7a9dbd74cb09a74~mv2.gif` | `/rememberme` | `/images/projects/remember-me/ar-loop.gif` | `/images/projects/remember-me/ar-loop.webp` | Optimized and connected |
| `a04444_2bc96a6fa270497bad6ec33f1ca920de~mv2.gif` | `/roominate` | `/images/projects/roominate/interaction-02.gif` | `/images/projects/roominate/interaction-02.webp` | Optimized and connected |
| `a04444_449c61aa8d1b4187a40635789da95ad8~mv2.gif` | `/roominate` | `/images/projects/roominate/interaction-03.gif` | `/images/projects/roominate/interaction-03.webp` | Optimized and connected |
| `a04444_722d38de74844d6cad9ca265fc98137d~mv2.gif` | `/roominate` | `/images/projects/roominate/interaction-04.gif` | `/images/projects/roominate/interaction-04.webp` | Optimized and connected |
| `a04444_769c385ee04e442f8d078709ae678ae7~mv2.gif` | `/soulferry` | `/images/projects/soul-ferry/vr-loop.gif` | `/images/projects/soul-ferry/vr-loop.webp` | Optimized and connected |
| `a04444_7d90df1e19604de39c1d47f6a8c326f0~mv2.gif` | `/botto` | `/images/projects/botto/prototype-loop.gif` | `/images/projects/botto/prototype-loop.webp` | Optimized and connected |
| `a04444_a8f7c186bd964c9ca6cc8c9ad2295a20~mv2.gif` | `/roominate` | `/images/projects/roominate/interaction-05.gif` | `/images/projects/roominate/interaction-05.webp` | Optimized and connected |
| `a04444_d090e8b149a243d8ab510b924b0b8c16~mv2.gif` | `/roominate` | `/images/projects/roominate/interaction-06.gif` | `/images/projects/roominate/interaction-06.webp` | Optimized and connected |

## Recommended Migration Order

1. Dice Adventure: first visual-section relayout completed; continue visual QA against old screenshots.
2. Roominate / Remember Me / Soul Ferry / BOTTO: motion assets restored, optimized to animated WebP, and expanded visual-section relayout completed against contact sheets.
3. Cyberland 2021 / Bellum / Drydock: first visual-section relayout completed; continue visual QA against contact sheets and old page screenshots.
4. Project Amazon / Soft Goods / Wood / Product Design Intern: first visual-section relayout completed; continue visual QA against contact sheets.
5. All old Wix project pages now have a visual-section relayout, restored local dynamic media, static/mobile verification, and desktop first-screen QA. Remaining items are optional polish: pixel-level live-Wix comparison, CAVERN private/unlisted trailer/dev-log confirmation if such a URL exists, and caption/image-crop refinements.

## Open Checks

- Re-run `tools/verify-wix-relayout.ps1 -Mobile` after any future project layout or CSS change.
- Live Wix detail-page scanning now covers all old project routes and found 0 confirmed YouTube/Vimeo/mp4/webm/mov/Wix video asset URLs; see `docs/WIX_VIDEO_EMBED_SCAN.md`.
- GIF assets are now retained as source files while pages use optimized animated WebP derivatives.
- Mobile viewport QA passed for all 20 old Wix project pages with no page-level horizontal overflow.
- Desktop first-screen QA passed for all 20 old Wix project pages with no obvious hero/title overlap or broken media.
- Keep future copy edits sparse and avoid adding new explanatory paragraphs unless they clarify a visual.
