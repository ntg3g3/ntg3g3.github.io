Task ID: T-QA-AMAZON-001
Owner / Agent: PersonalWebsite Visual QA worker
Pages Checked:
- `/projects/project-amazon/`
Status: needs-review

Inputs:
- Local URL or built pages: reviewed `dist/projects/project-amazon/index.html`
- Screenshots: none provided; no browser screenshot pass run
- Browser sizes: inferred from current responsive CSS only; no live desktop/mobile viewport capture
- Related briefs/plans:
  - `docs/project-briefs/project-amazon.md`
  - `docs/layout-plans/project-amazon.md`
  - `docs/DECISIONS.md`
  - `docs/WORK_QUEUE.md`

Findings:
- P0 blocking:
  - None found from static review.
- P1 important:
  - Hero image currently uses `/images/projects/project-amazon/cover.webp`; the approved layout plan recommends `title-screen.webp` as the preferred first project signal. Because this page needs to read as a playable VR/projection prototype, the title screen may communicate "game/prototype" more directly than the generic cover. If `cover.webp` is intentionally identical to `title-screen.webp`, this should be confirmed; otherwise, consider switching the detail hero image.
  - The video embeds render after the system diagrams, which matches the plan, but the embedded video figures do not include explicit `Open on YouTube` fallback links. The hero buttons link to the same videos, but once a viewer reaches the video section the fallback is not local to the embeds.
  - Route/progression images are placed as a three-column gallery on desktop. `route-map.webp`, `tree-route-sketch.webp`, and `screen-flow.webp` are diagrammatic, so their labels and structure may be hard to read at one-third width. The layout plan called for route map and tree sketch as a paired comparison, with screen flow below or alongside if helpful.
- P2 polish:
  - `projection-concept.webp` appears as a full-width figure in the wide section before the layout board. If its source image is small or label-heavy, it may feel oversized compared with its information density; check in browser.
  - The page does not currently reserve a placeholder or note for the missing directly uploaded Final Video Demo. That is acceptable for public polish, but the pending asset should stay tracked as a content gap.
  - `title-screen.webp` exists in the asset folder but does not appear in the built page, while `gallery-01.webp` appears to match `cover.webp` by file size. This is not automatically wrong, but it is worth checking whether the strongest final/title asset is being left unused.

Checks:
- Duplicate images:
  - Built page uses `cover.webp`, `theme-summary.webp`, `river-context.webp`, `projection-concept.webp`, `layout-board.webp`, `route-map.webp`, `tree-route-sketch.webp`, and `screen-flow.webp` once each.
  - No duplicate image source appears in the built Project Amazon HTML.
- Missing images:
  - All referenced Project Amazon images exist in `public/images/projects/project-amazon`.
  - `title-screen.webp` exists but is not used by the built detail page.
- Text overload:
  - Text is short and image-led. It preserves the old deck-like rhythm without turning into a generic long case study.
- Oversized small diagrams:
  - Possible risk for `projection-concept.webp`; needs browser check because the section variant makes it full-width.
- Unreadable dense diagrams:
  - Possible risk for route/progression gallery because three diagrams are shown in equal thirds on desktop.
  - `layout-board.webp` is correctly marked wide and should be the strongest central system image.
- Layout gaps:
  - Section order matches the intended logic: framing, experience setup, route, videos.
  - Video section appears after system and route diagrams, which helps the videos read as prototype evidence.
- Mobile overflow:
  - CSS stacks `.visual-story-media` to one column under 860px, so no obvious static overflow risk.
  - The hero title uses a large mobile clamp; "Project Amazon" should fit, but screenshot verification is still recommended.
- Old Wix logic preserved:
  - Mostly preserved. The page moves from learning themes and river context into projection/VR system diagrams, route diagrams, and videos.
  - The main potential loss is that the preferred title screen/final prototype signal is not currently shown in the page body.

Recommended Fixes:
- Data/content:
  - Consider using `title-screen.webp` as the hero image for Project Amazon, or add it as the first visual if `cover.webp` must remain the card/thumbnail image.
  - Add local fallback links in video captions or below each embed, e.g. `Open on YouTube`, especially for embedded YouTube failures.
  - Keep copy conservative; current copy correctly avoids unconfirmed team names and technical implementation claims.
- CSS/layout:
  - Give route/progression diagrams more room: make route map and tree sketch a two-up comparison and place screen flow as a wide or separate supporting figure.
  - Browser-check whether `projection-concept.webp` should be compact rather than full-width.
- Needs user decision:
  - Whether `title-screen.webp` should replace `cover.webp` in the detail hero.
  - Final Video Demo source remains pending before adding the direct uploaded demo.

Verification:
- Build: not run by this worker; existing `dist/projects/project-amazon/index.html` was read.
- Script: none run.
- Manual browser notes: no live browser pass; findings are based on docs, current source, asset folder, built HTML, and responsive CSS review.
