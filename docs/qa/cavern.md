Task ID: T-QA-CAVERN-001
Owner / Agent: PersonalWebsite Visual QA worker
Pages Checked:
- /projects/cavern/
Status: ready-for-review

Inputs:
- Local URL or built pages: read existing `dist/projects/cavern/index.html`; did not rebuild because this task only allows writing `docs/qa/cavern.md`.
- Screenshots: none provided; no new screenshots generated.
- Browser sizes: source/CSS review for desktop and mobile breakpoints, especially max-width 860px behavior.
- Related briefs/plans: `docs/project-briefs/cavern.md`, `docs/layout-plans/cavern.md`, `docs/WORK_QUEUE.md`, `docs/DECISIONS.md`, `docs/HANDOFF_TEMPLATE.md`.
- Implementation files reviewed: `src/data/projects.ts`, `src/pages/projects/[slug].astro`, `src/styles/global.css`, `public/images/projects/cavern`, existing `dist/projects/cavern/index.html`.

Findings:
- P0 blocking:
  - None found.
- P1 important:
  - Jump navigation includes stale anchors in the built CAVERN page. `dist/projects/cavern/index.html` shows `Dev Logs and Trailer` and `One-Page Game Design Document` links, but visual-section rendering suppresses `project.sections`, so those anchors do not exist in the page body. This likely comes from `src/pages/projects/[slug].astro` building nav links from `project.sections` whenever there are no `caseStudySections`, even when `visualSections` are present.
  - Mobile readability risk remains for the one-page design document. The design document is correctly promoted to a wide full-width visual with no `max-height` cap in wide sections, which is good for desktop. On phone-width layouts, however, the dense board will still shrink to viewport width with only the browser's native zoom; there is no explicit "open full size" or image link near the figure.
- P2 polish:
  - YouTube fallback exists as a hero-level `Open Video` button, but the embedded video section itself only has the iframe and caption. If the iframe is blocked, the fallback is not locally obvious at the point of failure. A small adjacent `Open on YouTube` link in the figure caption or video section would better match the layout plan.
  - The Dev Log section is text-only and relies on the hero button for action. This preserves a clean pass, but the section itself may feel like a dead-end after describing the weekly record. A local `View Dev Log` action would make the restored dev-log logic clearer.
  - `public/images/projects/cavern` still contains non-rendered residue assets (`gallery-03.webp`, `gallery-04.webp`) and duplicate/alternate room photos. They are not currently shown by the visual-section page, so this is an asset hygiene issue rather than a visible page bug.

Checks:
- Duplicate images:
  - Visible implementation does not repeat the installation photo in the body. Hero uses `cover.webp`; the visual sections use YouTube and `design-document.webp`. This is reasonable and avoids the cover/gallery duplicate problem called out in the brief.
  - Duplicate/alternate installation images remain in the asset folder (`cave-playtest.webp`, `gallery-02.webp`) but are not rendered on the CAVERN visual page.
- Missing images:
  - No visible required CAVERN image is missing from the source review. The page uses `cover.webp` and `design-document.webp`, both present in `public/images/projects/cavern`.
- Text overload:
  - No overload. The page is compact and evidence-led, consistent with the old Wix direction. If anything, it is slightly too sparse around dev log/action affordances, but that is preferable to turning it into a generic long case study.
- Oversized small diagrams:
  - None identified. The design document is dense and deserves the wide treatment.
- Unreadable dense diagrams:
  - Desktop source/CSS treatment looks appropriate because `.visual-story-wide .visual-story-media img` removes the normal max-height cap. Mobile remains a risk because the same dense board will scale down to a narrow screen without a dedicated full-size affordance.
- Layout gaps:
  - The old `sections` data is not visually rendered but still contributes navigation links in the built page. This is the clearest layout/interaction gap.
- Mobile overflow:
  - No obvious CSS overflow risk in reviewed source. The jump nav scrolls horizontally on mobile, and the hero collapses to one column below 860px. The design document's readability, not overflow, is the main mobile issue.
- Old Wix logic preserved:
  - Mostly yes. The page keeps the installation/space proof first, restores a Level 1 YouTube slot, gives the one-page game design document a prominent wide section, keeps text short, and includes public Dev Log and Open Video links.
  - Partially missing: the dev-log section itself does not contain a direct link or process strip, and the stale nav links make the restored old-page structure feel less intentional.

Recommended Fixes:
- Data/content:
  - Remove or ignore CAVERN `sections` while `visualSections` are active, or ensure those section anchors actually render. This can be fixed either in the CAVERN data or in the shared anchor-link logic.
  - Consider adding a local video-section fallback label/link: `Open on YouTube`.
  - Consider adding a local dev-log-section action: `View Dev Log`.
- CSS/layout:
  - Add a full-size affordance for dense diagrams on mobile, such as linking the image figure to the source image or adding an adjacent `Open full size` action for `design-document.webp`.
- Needs user decision:
  - None required for the current pass. A richer dev-log image strip would need main/user selection of which public dev-log images to migrate locally.

Verification:
- Build: not run; writing outside `docs/qa/cavern.md` was forbidden, and a build would update `dist`.
- Script: none run.
- Manual browser notes: no live browser session or screenshots in this worker pass. Findings are based on source, assets, CSS, and existing built HTML.
