# Original Structure Audit: Dice Adventure

Task ID: T-AUDIT-DICE-001  
Owner / Agent: PersonalWebsite Content/Layout audit worker  
Date: 2026-07-01  
Status: ready-for-review

## Sources Reviewed

- `docs/WORK_QUEUE.md`
- `docs/DECISIONS.md`
- `docs/HANDOFF_TEMPLATE.md`
- `docs/project-briefs/dice-adventure.md`
- `docs/layout-plans/dice-adventure.md`
- `docs/qa/dice-adventure.md`
- `src/data/projects.ts`
- `dist/projects/dice-adventure/index.html`
- `docs/asset-contact-sheets/diceadventure.jpg`

No network sources were used.

## 1. Original Wix Narrative Order

The original Wix page appears to have been a long, image-led process case study rather than a text-first article. This order is inferred from the Dice Adventure contact sheet and confirmed where it matches the existing brief/layout plan.

1. Final playable prototype first.
   - Evidence: contact sheet item 2 shows the digital game UI with the rock dice prompt; item 9 shows the active-character state; items 26 and 28 show monster and trap dice prompts.
   - Inference: the old page likely opened with the final prototype because these digital screenshots are among the strongest early/final images and are used as the current cover.

2. Research and precedent mapping.
   - Evidence: item 13 is a broad reference/research board; item 15 is a Burgle Bros. reference slide; items 4, 18, 19, and 20 appear to be external board/video game references.
   - Inference: these were used to explain why turn-based co-op, board-game structures, partial information, and asymmetric roles were appropriate for a research game.

3. Paper/physical prototype and early map logic.
   - Evidence: item 16 shows a physical tabletop prototype with tiles and notes; item 12 shows grid maps; item 1 shows early route/grid sketches; item 22 shows a tabletop-like 3D prototype direction.
   - Inference: this was likely the bridge from reference study into the team's own playable structure.

4. Core rules and asymmetric system.
   - Evidence: item 17 shows character portraits with different vision ranges; item 6 shows dice faces/distributions; item 8 is a rule table; items 24 and 30 are rule/reference sheets; items 5 and 21 show the pinning system.
   - Inference: the Wix page probably treated these as major explanatory graphics, not small supporting thumbnails, because they carry the mechanics.

5. Level/tutorial progression.
   - Evidence: item 31 is a large level/tutorial overview; item 14 shows many level iterations; item 10 and item 11 show UI/state or level progression thumbnails; item 25 is a movement specification.
   - Inference: these images supported Yutao's level/tutorial design contribution and should remain readable.

6. Return to digital prototype examples.
   - Evidence: items 26 and 28 show final-style dice prompts for monster and trap interactions, matching item 2's rock prompt.
   - Inference: the page likely closed by showing how the abstract rules became digital UI feedback.

## 2. Original Wix Image Groups And Hierarchy

The contact sheet suggests several intentional image groups:

- Hero/final gameplay: item 2 should be large; items 9, 26, and 28 are related digital rule-prompt screenshots. They work as final proof, but item 2 is the strongest first image.
- Research/reference group: items 13 and 15 are primary research boards; items 4, 18, 19, and 20 are secondary reference images. These must be labeled as references, per D-006.
- Paper and tabletop prototype group: item 16 is the strongest own-process image; items 1, 12, 14, and 22 are supporting process/iteration images. Item 16 should not be visually or semantically treated as an external reference unless provenance says otherwise.
- System/rules group: items 24/30 and item 8 are large rule artifacts; items 17, 6, 5/21, 25, and 27 are smaller supporting mechanics/spec assets. The hierarchy should be large rule sheet/table first, then compact diagrams around it.
- Pinning group: items 5 and 21 are duplicate/near-duplicate pinning diagrams. Use one, but give it a focused role because pinning is central to Human-Machine Teaming.
- Level design group: item 31 and the optimized `level-progression.webp` should be wide; `gallery-01.webp` and contact item 14 can support iteration volume. These are dense diagrams and should not be cropped.
- Logo/site artifacts: items 7 and 29 are Tao logos and should not be used as Dice Adventure content.

## 3. Current Page Structure

Current source/build structure:

1. Hero: `cover.webp` with project summary and metadata.
2. Research: gallery with `research-board.webp`, `board-game-research-burgle.webp`, and `paper-prototype.webp`.
3. System: `final-system-rules.webp` wide, plus `character-vision.webp`.
4. Pinning: standalone section using compact `pinning-system.webp`.
5. Levels: wide `level-progression.webp`, plus `gallery-01.webp`.
6. Prototype: gallery with compact `movement-spec.webp`, `gallery-03.webp`, and `gallery-04.webp`.

The built file `dist/projects/dice-adventure/index.html` exists and reflects this structure. Images are clickable to open full size, which supports D-018 without visible utility links.

## 4. Current Drift

- Paper prototype drift: `paper-prototype.webp` is grouped under Research and captioned as a reference/inspiration image. If this is contact sheet item 16 or a related physical prototype, it should be framed as project process evidence, not an external precedent. This is the highest-priority drift.
- Missing paper-prototype beat: the old narrative likely had a distinct bridge from references to the team's own tabletop/paper prototype. The current page jumps from references directly to system rules.
- System compression: current System section uses the final rule sheet and character vision, but omits the dice matrix/rule table as separate visible beats. This may be acceptable for brevity, but it compresses the old Wix rule-building sequence.
- Pinning scale: Pinning is now restored as its own section, which fixes the older QA concern. However, the image remains compact; this is probably appropriate visually, but the surrounding copy should carry its importance.
- Level progression is mostly faithful: `level-progression.webp` is wide and followed by map planning. This preserves the original large-diagram logic.
- Final prototype closing is mostly faithful: combat and trap prompts close the page. The rock prompt is only in the hero, which is acceptable because it avoids repeating `cover.webp`.
- Some original visual breadth is reduced: reference images such as Mysterium/strategy-game screenshots, obstacle asset sheets, and early grids are omitted. This is a reasonable professional simplification if the page stays image-led and faithful to the major groups.

## 5. Recommended Faithful Adjustments

Respecting D-002, D-003, D-004, D-006, D-008, D-017, D-018, and D-019:

1. Split `paper-prototype.webp` out of Research into a distinct Paper Prototype / Tabletop Prototype section.
   - Place it after research references and before system rules.
   - Caption as project process if confirmed; if uncertain, use conservative language such as "Prototype/reference material used to reason about map logic and cooperation."

2. Keep Research strictly about external references.
   - Keep `research-board.webp` and `board-game-research-burgle.webp`.
   - Continue using "Reference" language so viewers do not read these as owned project output.

3. Preserve the current standalone Pinning section.
   - This is now aligned with D-017.
   - Keep the diagram compact or medium-sized, but make the section's copy emphasize intent, danger, uncertainty, and request signals as the key communication mechanic.

4. Consider adding one more system artifact only if the asset is available and readable.
   - Best candidates from the original Wix logic: dice matrix/rule table or final rule sheet alternate.
   - Do not add every contact-sheet item; the current page benefits from being more curated than the raw Wix recovery.

5. Keep dense diagrams clickable and wide.
   - Current clickable full-size behavior is good and matches D-018.
   - Do not add visible "Open full size" text.

6. Preserve conservative role/outcome language.
   - Keep Yutao's role as game/system/level/tutorial design and prototype specification.
   - Do not claim implementation ownership or final AI-study usage.
   - Keep `Phoebe Wang` spelling.

## Handoff

Task ID: T-AUDIT-DICE-001  
Owner / Agent: PersonalWebsite Content/Layout audit worker  
Date: 2026-07-01  
Status: ready-for-review

Scope:
- Pages / slugs: `dice-adventure`
- Files reviewed: listed in Sources Reviewed
- Files changed: `docs/layout-plans/original-structure-audit-dice-adventure.md`

Inputs Used:
- Briefs: `docs/project-briefs/dice-adventure.md`
- Layout plans: `docs/layout-plans/dice-adventure.md`
- Assets / screenshots: `docs/asset-contact-sheets/diceadventure.jpg`, current optimized Dice Adventure image set as referenced in `src/data/projects.ts`
- External links: none

Output:
- Artifact path: `docs/layout-plans/original-structure-audit-dice-adventure.md`
- Summary: The current page mostly preserves the old Wix image-led arc, but still drifts by treating the paper/tabletop prototype as research reference instead of a separate process bridge.

Key Findings:
- Confirmed facts: current build has Hero, Research, System, Pinning, Levels, and Prototype sections; Pinning is now standalone; images are clickable without visible utility links.
- Inferences: original Wix likely moved from final prototype to references, paper prototype, rules, level/tutorial diagrams, and final digital prompts.
- Uncertain / needs confirmation: whether `paper-prototype.webp` is Yutao/team process evidence, an external reference, or a mixed reference/prototype image.

Decisions Needed:
- Confirm the provenance/caption for `paper-prototype.webp`.
- Decide whether to add one more system/rules artifact or keep the current curated set.

Recommended Next Action:
- Main chat should split Paper Prototype into its own section if provenance supports it.
- User should confirm whether the physical tabletop image is project process work or reference material.

Verification:
- Build/checks run: none.
- Visual/mobile checks run: static source/build review plus contact-sheet inspection only.
- Known gaps: no browser screenshot pass; no implementation changes made.
