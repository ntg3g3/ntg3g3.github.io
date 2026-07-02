# Original Wix Structure Audit: Priority Pages

Task ID: T-AUDIT-001  
Owner: Main Build Chat, synthesized from page-level audit workers  
Status: ready-for-review  
Date: 2026-06-30

## Scope

Pages:
- `dice-adventure`
- `cavern`
- `project-amazon`

Inputs:
- `docs/layout-plans/original-structure-audit-dice-adventure.md`
- `docs/layout-plans/original-structure-audit-cavern.md`
- `docs/layout-plans/original-structure-audit-project-amazon.md`
- `docs/DECISIONS.md`
- `docs/WORK_QUEUE.md`
- Current generated pages in `dist/projects`
- Original contact sheets in `docs/asset-contact-sheets`

No implementation files were changed for this audit synthesis.

## Cross-Page Direction

The priority pages should move closer to the original Wix logic in three ways:

1. Preserve original narrative order where it is clear from contact sheets and briefs.
2. Preserve original image grouping and large-versus-small hierarchy.
3. Keep the rebuild more image-led than text-led, with words acting as connective tissue.

This does not mean copying Wix mechanics or recreating every old image. The page should still be curated, public-safe, and current-career appropriate.

## Dice Adventure

### Original Structure Summary

The original Wix page appears to follow this arc:

1. Final playable prototype / digital prompt proof.
2. External research and reference mapping.
3. Board-game inspiration around co-op, roles, map logic, and uncertainty.
4. Core rule system: roles, dice, vision, obstacles, and communication.
5. Level/tutorial progression.
6. Return to digital prototype prompts.

### Current Alignment

Current page already has:
- Strong prototype hero.
- Reference section with clear reference captions.
- Standalone `Pinning` section.
- Wide level progression diagram.
- Prototype prompt screenshots at the end.
- Click-to-open images without visible utility text.

### Important Correction

The Dice worker recommended treating `paper-prototype.webp` as a Paper Prototype / Tabletop Prototype section. That conflicts with Yutao's confirmed correction: this image is not Tao's paper prototype; it is another game used as inspiration.

Decision: keep `paper-prototype.webp` in the reference/inspiration family unless the user later provides a different confirmed process image.

### Recommended Adjustment

Do not create a Paper Prototype section from `paper-prototype.webp`.

Instead:
- Keep the current Research / Reference section, but consider renaming or sequencing it as `Research and inspiration`.
- Keep `paper-prototype.webp` captioned as inspiration/reference.
- Preserve the new standalone Pinning section.
- If the page still feels too compressed, add another confirmed own-process image only after provenance is clear.

## CAVERN

### Original Structure Summary

The CAVERN contact sheet is compact. It suggests the original page depended on a few strong artifacts rather than many images:

1. In-room projection/playtest photo as the main proof.
2. Video/trailer or dynamic proof, based on restored public video and local docs.
3. One-page design/system document as the main explanation.
4. Sparse supporting copy.

### Current Alignment

Current page already has:
- Installation/space hero.
- YouTube Level 1 embed.
- Wide design document.
- Dev log link.
- Conservative role language.
- No stale jump anchors in the current build.

### Current Drift

The current first body section is text-only (`Space`) before the reader reaches the video and design document. This slows down the original Wix rhythm, which seems more like:

`visual proof -> motion proof -> system proof`

### Recommended Adjustment

Make CAVERN more compact:

- Merge the current `Space` text into the hero summary or remove the text-only section.
- Move the video and design document closer to the top.
- Keep the design document large.
- Avoid adding a generic gallery from leftover CAVERN assets.
- Decide later whether the Dev Log section needs a local action; do not add visible YouTube utility links.

## Project Amazon

### Original Structure Summary

The original Wix page appears to use a slide-deck rhythm:

1. River / setting / problem framing.
2. Learning themes: River, Study Abroad Safety, Folk Tale, Architecture.
3. Projection / VR / mixed-reality setup.
4. Central system layout board.
5. Interaction, route, screen flow, and progression diagrams.
6. Final/prototype proof and videos.

### Current Alignment

Current page already has:
- `title-screen.webp` as hero.
- Conservative role wording.
- Theme summary and river context.
- Projection/VR setup and wide system board.
- Paired route diagrams with wide screen flow.
- Tutorial and playthrough embeds after system/route evidence.

### Current Drift

The old Wix page seems to give more visual weight to the learning-theme research around:

- Study Abroad Safety
- Architecture
- Folk Tale
- River

The current page compresses this into one theme summary plus river context. That is clean, but may lose some of the original conceptual framing.

### Recommended Adjustment

Add one compact `Learning themes` or `Research themes` row after the current framing section, if the available images can be mapped cleanly.

Constraints:
- Do not create a slide dump.
- Do not over-explain with paragraphs.
- Keep it as a small visual bridge from theme framing into projection/system design.
- Keep `title-screen.webp` as the trial hero for now.
- Do not add final demo language until the direct uploaded video source is provided.

## Proposed Next Implementation Pass

Recommended order:

1. CAVERN: compress or remove the text-only `Space` section so video/design evidence appears sooner.
2. Project Amazon: add a compact learning-theme row if the source images are clearly mapped.
3. Dice Adventure: keep current structure, only refine naming/captioning around `Research and inspiration`; do not turn the inspiration image into a paper prototype.

## Needs User Review

Questions for Yutao:

1. For CAVERN, should the page be very compact like the old Wix page, with video/design document almost immediately after hero?
2. For Project Amazon, should we restore a small row for `Study Abroad Safety / Architecture / Folk Tale`, or keep the current cleaner version?
3. For Dice Adventure, is `Research and inspiration` a better section label than `Research and references`?

## Handoff

Task ID: T-AUDIT-001  
Owner / Agent: Main Build Chat  
Status: ready-for-review

Scope:
- Pages / slugs: `dice-adventure`, `cavern`, `project-amazon`
- Files reviewed: page-level audit docs, queue, decisions, current build, contact-sheet evidence
- Files changed: `docs/layout-plans/original-structure-audit-priority.md`

Output:
- A synthesized implementation direction for restoring original Wix structure while respecting user-confirmed corrections.

Key Findings:
- Dice is close, but the worker's paper-prototype recommendation conflicts with user-confirmed provenance and should not be implemented.
- CAVERN should probably become more compact and visual-first.
- Project Amazon may benefit from one small restored learning-theme row.

Recommended Next Action:
- Get user approval on the three questions above, then implement only the accepted adjustments.
