# Original Structure Audit: CAVERN

Task ID: T-AUDIT-CAVERN-001  
Status: ready-for-review  
Scope: compare the original Wix CAVERN page logic against the current rebuilt page structure.

## Sources Reviewed

- `docs/WORK_QUEUE.md`
- `docs/DECISIONS.md`
- `docs/HANDOFF_TEMPLATE.md`
- `docs/project-briefs/cavern.md`
- `docs/layout-plans/cavern.md`
- `docs/qa/cavern.md`
- `src/data/projects.ts`
- `dist/projects/cavern/index.html`
- `docs/asset-contact-sheets/cavern.jpg`

No internet was used.

## 1. Original Wix Narrative Order

The original Wix route itself was not opened for this task. The structure below is inferred from the contact sheet plus the existing CAVERN brief and layout plan. Confidence is highest for the image inventory and lower for exact page ordering.

Confirmed from the contact sheet:

1. A non-project Tao/about-site screenshot appears first in the extracted assets.
2. Tao identity/logo images appear as separate extracted assets.
3. A dense one-page CAVERN design/system document appears as the main explanatory project artifact.
4. A large in-room projection/playtest photo appears as the strongest project evidence: multiple people stand inside the curved underwater projection space.
5. A second Tao logo appears at the end.

Inferred original project-page narrative:

1. Site/brand frame or shared Wix residue around the project page.
2. CAVERN project proof through the in-room projection image, likely the strongest visual above or near the top of the page.
3. A compact explanatory section using the one-page design document as the main system/mechanic artifact.
4. Sparse supporting copy rather than a long prose case study.
5. A video or trailer slot and/or external project links may have existed or belonged near the project evidence, based on the brief and current restored public links, but this is not directly visible in the contact sheet.

The old Wix logic appears evidence-led: the page likely depended on a small number of large artifacts rather than many small gallery items.

## 2. Original Wix Image Groups And Hierarchy

Original asset groups visible in `docs/asset-contact-sheets/cavern.jpg`:

| Group | Assets | Original Role | Hierarchy |
| --- | --- | --- | --- |
| Site residue / shared page chrome | Contact sheet item 1, old Tao/about screenshot | Not CAVERN-specific. Likely extracted from shared Wix page/site structure. | Should be excluded from the rebuilt CAVERN case study. |
| Identity residue | Contact sheet items 2 and 5, Tao logo | Site identity, not project evidence. | Should not compete with project visuals. |
| Core design document | Contact sheet item 3, one-page CAVERN design/system board | Explains the CAVERN room, constraints, input assumptions, gameplay stages, goals, and fallback plans. | Large, readable explanatory image. It should not be reduced to a small thumbnail. |
| Installation / playtest proof | Contact sheet item 4, in-room underwater projection photo | Shows the physical room, 270-degree display, group play, and final/prototype feel. | Highest-impact hero/final image. It should be the dominant first project signal. |

Inferred image hierarchy:

1. Largest/most immediate: in-room CAVERN photo.
2. Second-largest: one-page design document, still wide enough to read.
3. Excluded or background-only: logo and shared site screenshot.

The current optimized folder also contains `cave-playtest.webp`, `gallery-02.webp`, `gallery-03.webp`, and `gallery-04.webp`. Based on the brief and QA notes, these are either duplicate/alternate installation photos or residue assets; they should remain out of the curated CAVERN page unless deliberately assigned a role.

## 3. Current Page Structure

Current data in `src/data/projects.ts`:

1. Hero:
   - Title, subtitle, one-line summary, role/time/deliverable metadata.
   - Hero image: `/images/projects/cavern/cover.webp`.
   - External action: `Dev Log`.
2. Jump navigation:
   - `Space`
   - `Video`
   - `Design`
   - `Stages`
   - `Dev Log`
3. Visual sections:
   - `space`: text-only framing, "Designed for a wraparound room."
   - `video`: wide YouTube embed for `https://youtu.be/TGdCYzSnRDs`.
   - `design`: wide design document image at `/images/projects/cavern/design-document.webp`.
   - `stages`: text-only stage summary.
   - `devlog`: text-only development-record summary.
4. Legacy `sections` data still exists:
   - "Dev Logs and Trailer"
   - "One-Page Game Design Document"
   These do not appear as body sections in the current built page because `visualSections` drive the visible page.

Current built `dist/projects/cavern/index.html` confirms:

- The jump nav now points to the rendered `visualSections` anchors.
- The YouTube video is embedded as a responsive iframe.
- The design document image is wrapped in a full-size image link.
- The dev log action appears in the hero, not inside the dev log section itself.

## 4. Current Drift From Original Structure

The current page is broadly aligned with the original Wix direction, but several drifts remain:

1. The page adds a more authored case-study sequence than the contact sheet alone supports.
   - This is partly intentional and useful, but the old Wix evidence suggests an even more compact page centered on two project artifacts: installation photo and design board.
2. The first body section is text-only.
   - After the hero, the current page moves into a text-only "Space" section before showing video or the design document. The old Wix rhythm likely moved quickly from one strong visual proof to another.
3. The installation/playtest image appears only as hero.
   - The layout plan originally suggested returning to installation/playtest evidence after the system explanation. Current implementation does not return to the room image or a second installation evidence moment.
4. The dev log section is text-only and has no local action.
   - This is cleaner than overloading the page, but the section feels less actionable than the hero button. It partially weakens the restored dev-log logic.
5. Legacy CAVERN `sections` remain in data while visual sections are active.
   - They are not currently visible in the built page, so this is not a visible user-facing bug. It is still content drift because stale section copy can confuse future workers or revive old gallery assumptions.
6. The old Wix asset group included residue images, and the current asset folder still contains residue/duplicate files.
   - The visible page handles this well by not rendering them. Future gallery work should continue to exclude them.

Outdated QA note:

- `docs/qa/cavern.md` reports stale jump-nav anchors in an older built page. The current `dist/projects/cavern/index.html` reviewed for this task shows the jump nav now matches `visualSections`, so this should not be treated as an active CAVERN page issue unless a fresh build proves otherwise.

## 5. Recommended Faithful Adjustments

These recommendations follow `DECISIONS.md`, especially D-002, D-003, D-004, D-005, D-007, D-010, D-018, and D-019.

Highest priority:

1. Preserve the current hero and wide design-document treatment.
   - The rebuilt page already honors the two original project artifacts: installation proof first, dense design board large and clickable.
2. Move the page rhythm closer to "visual proof -> motion proof -> system proof."
   - Consider removing or compressing the text-only `space` section, or merging it into the hero/meta area so the reader reaches video and design evidence faster.
3. Add a local dev-log action inside the `devlog` section only if it can be done without visible utility clutter.
   - D-018 says not to show visible "Open on YouTube" text beside embedded videos. A restrained case-study-style `Dev Log` action in the dev-log section may still be appropriate, but the main chat should decide the exact treatment.
4. Clean or ignore legacy `sections` in a future implementation pass.
   - Do not let old `sections` reintroduce generic gallery copy or stale anchors. This is lower visual priority because it is not currently rendered.

Medium priority:

5. Consider a short closing return to the installation context.
   - The old Wix contact sheet makes the in-room photo the main proof. A final sentence or compact image return could reinforce that the design board resulted in a physical-room experience. Avoid repeating the same image unless the repeat has a clear role.
6. Keep the current conservative role language.
   - Do not add stronger implementation, technical, or team ownership claims without user confirmation.
7. Keep the YouTube embed and dev-log link because D-010 explicitly allows them.
   - The video is a good expansion beyond the contact sheet and helps preserve the old Wix video-component feel.

Do not do:

- Do not use the Tao logo, about-page screenshot, black square, or other site residue as CAVERN project evidence.
- Do not add a generic image gallery just because extra files exist.
- Do not shrink the design document into a small card; it is the central explanatory artifact.
- Do not invent specific shipped input hardware or playtest findings beyond the confirmed/conservative copy.

## 6. Handoff

Task ID: T-AUDIT-CAVERN-001  
Owner / Agent: PersonalWebsite Content/Layout audit worker  
Date: 2026-06-30  
Status: ready-for-review

Scope:
- Pages / slugs: `cavern`
- Files reviewed: `docs/WORK_QUEUE.md`, `docs/DECISIONS.md`, `docs/HANDOFF_TEMPLATE.md`, `docs/project-briefs/cavern.md`, `docs/layout-plans/cavern.md`, `docs/qa/cavern.md`, `src/data/projects.ts`, `dist/projects/cavern/index.html`, `docs/asset-contact-sheets/cavern.jpg`
- Files changed: `docs/layout-plans/original-structure-audit-cavern.md`

Inputs Used:
- Briefs: `docs/project-briefs/cavern.md`
- Layout plans: `docs/layout-plans/cavern.md`
- Assets / screenshots: `docs/asset-contact-sheets/cavern.jpg`
- External links: none opened; public links were read only from local docs/data

Output:
- Artifact path: `docs/layout-plans/original-structure-audit-cavern.md`
- Summary: The current CAVERN page mostly preserves the old Wix evidence-led structure: installation hero, restored video, and wide design document. Remaining drift is mainly text-section pacing, a text-only dev-log section, and stale hidden legacy `sections` data.

Key Findings:
- Confirmed facts: Contact sheet has only two meaningful CAVERN project visuals: one design/system board and one in-room projection photo. Current built page uses the in-room image as hero, embeds the Level 1 video, and links the design document full-size.
- Inferences: The original Wix page likely used a compact visual-first rhythm with the room photo and design board carrying most of the story.
- Uncertain / needs confirmation: Exact original Wix section order and whether the video/trailer appeared directly on the original Wix CAVERN page are inferred from local docs, not confirmed from the live route.

Decisions Needed:
- Should the text-only `space` section be merged upward so the page reaches video and design evidence faster?
- Should the dev-log section include its own local action, or is the hero `Dev Log` button enough under D-018?

Recommended Next Action:
- Main chat should: Use this audit to guide a small faithful adjustment pass, prioritizing rhythm and data cleanup over broad redesign.
- User should: Confirm whether CAVERN should remain very compact like the original Wix page or keep the current slightly more authored case-study framing.

Verification:
- Build/checks run: none; this task was documentation-only.
- Visual/mobile checks run: contact sheet visual review and existing built HTML review only.
- Known gaps: No browser screenshot pass and no live Wix route review.
