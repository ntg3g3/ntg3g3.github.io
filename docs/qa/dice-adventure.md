Task ID: T-QA-DICE-001
Owner / Agent: PersonalWebsite Visual QA worker
Pages Checked:
- /projects/dice-adventure
Status: needs-review

Inputs:
- Local URL or built pages: `dist/projects/dice-adventure/index.html` was present and reviewed as built output.
- Screenshots: none provided; no browser screenshots captured.
- Browser sizes: inferred from `src/styles/global.css` desktop rules and the `@media (max-width: 860px)` mobile rules.
- Related briefs/plans:
  - `docs/project-briefs/dice-adventure.md`
  - `docs/layout-plans/dice-adventure.md`
  - `docs/DECISIONS.md`
  - `docs/WORK_QUEUE.md`

Findings:
- P0 blocking:
  - None found from static review.
- P1 important:
  - The Research section currently mixes external references and the paper prototype in one three-column gallery. The brief/layout plan asked for research/reference mapping first, then paper prototype and early boards as the next process step. This weakens the old Wix image-led logic because `paper-prototype.webp` is project process evidence, not a reference image.
  - Dense diagrams remain mobile-risky. `final-system-rules.webp`, `level-progression.webp`, and `gallery-01.webp` are correctly treated as large/wide on desktop, but on mobile they collapse to viewport width with no zoom/open affordance visible in the built HTML. These are exactly the images that carry rules and level-design evidence, so labels may become hard to read.
  - The planned Pinning System Focus section is not represented as its own section. `pinning-system.webp` appears only as a compact supporting image under System, even though the brief identifies pins as central to Human-Machine Teaming and non-verbal communication.
- P2 polish:
  - `movement-spec.webp` is compact inside a three-column Prototype gallery. This avoids oversizing a small schematic, but if the movement states are meant to be inspected, it may be too small on desktop and especially mobile.
  - `character-vision.webp` and `pinning-system.webp` are small/lightweight schematic assets and may look visually underpowered beside `final-system-rules.webp`; this is acceptable if intentional, but the page should avoid making them feel like full evidence boards.
  - The hero, combat prompt, and trap prompt are semantically related digital rule-prompt screenshots. They are not duplicates because each shows a different rule, but the final section depends on captions to make that distinction clear.

Checks:
- Duplicate images:
  - No exact duplicate image use found in `src/data/projects.ts` or the built HTML.
  - Semantic overlap exists between `level-progression.webp` and `gallery-01.webp`; acceptable because both support level/tutorial design, but captions should keep their roles distinct.
  - Semantic overlap exists between `cover.webp`, `gallery-03.webp`, and `gallery-04.webp`; acceptable because they show rock, monster, and trap dice rules respectively.
- Missing images:
  - `gallery-02.webp` exists in `public/images/projects/dice-adventure` but is not used. This appears intentional because `movement-spec.webp` covers a similar movement-spec role.
  - No broken Dice Adventure image paths found in the built HTML by static inspection.
- Text overload:
  - Text is concise and image-led. This matches D-002 and the Dice layout plan.
  - The metadata pill containing deliverables is long and may wrap awkwardly on narrow mobile, but it is not a content-overload problem.
- Oversized small diagrams:
  - No clear oversized small-diagram issue found. `pinning-system.webp` and `movement-spec.webp` use `span: compact`.
  - `character-vision.webp` is not marked compact, but appears in a normal split media grid; monitor visually because the asset is a small schematic.
- Unreadable dense diagrams:
  - Desktop treatment is mostly correct: dense system and level diagrams use `wide` where it matters.
  - Mobile readability remains the main risk for `final-system-rules.webp`, `level-progression.webp`, and `gallery-01.webp`.
- Layout gaps:
  - Current section order is Hero -> Research -> System -> Levels -> Prototype. This preserves most of the old Wix logic but compresses the planned Paper Prototype and Pinning System Focus sections.
  - Research references are labeled in copy/captions, but paper prototype being grouped with them makes the section less semantically clean.
- Mobile overflow:
  - CSS collapses sections to one column and uses horizontal scrolling for the jump nav, so obvious overflow risk is low.
  - The largest risk is not overflow but dense images becoming too small to read.
- Old Wix logic preserved:
  - Mostly preserved: final playable prototype appears first, references appear early, system rules are image-led, level/tutorial diagrams are large, and digital prototype screenshots close the page.
  - Partially weakened: paper prototype is not its own bridge between references and systems, and the pinning mechanic is not given the standalone focus requested by the layout plan.

Recommended Fixes:
- Data/content:
  - Split `paper-prototype.webp` out of the Research gallery into a Paper Prototype section, or at minimum move it after the reference images with a caption that clearly marks it as project process work.
  - Add or restore a Pinning System Focus section using `pinning-system.webp`, with one short caption about intent/uncertainty without voice-style information sharing.
  - Keep the current reference captions; they clearly use `Reference` language.
- CSS/layout:
  - Consider a mobile treatment for dense diagrams: allow tap-to-open, horizontal pan, or a larger image presentation for rule/level boards.
  - Consider keeping `movement-spec.webp` compact visually but not trapped in a three-column gallery if readability matters.
- Needs user decision:
  - Whether the page should show the paper prototype as a full process beat, or keep the current shorter four-section structure for brevity.
  - Whether dense diagrams need an inspectable/open image behavior across all project pages or only on Dice Adventure.

Verification:
- Build: not run.
- Script: no validation script run; no network commands run.
- Manual browser notes: no live browser opened. Reviewed built HTML, source data, page template, global CSS, image folder listing, brief, plan, work queue, and decisions.
