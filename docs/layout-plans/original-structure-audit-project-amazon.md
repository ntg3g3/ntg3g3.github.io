# Original Structure Audit: Project Amazon

Task ID: T-AUDIT-AMAZON-001  
Owner / Agent: PersonalWebsite Content/Layout audit worker  
Status: ready-for-review

## Files Reviewed

- `docs/WORK_QUEUE.md`
- `docs/DECISIONS.md`
- `docs/HANDOFF_TEMPLATE.md`
- `docs/project-briefs/project-amazon.md`
- `docs/layout-plans/project-amazon.md`
- `docs/qa/project-amazon.md`
- `src/data/projects.ts`
- `dist/projects/project-amazon/index.html`
- `docs/asset-contact-sheets/projectamazon.jpg`

No network access used. No implementation files changed.

## 1) Original Wix Narrative Order

The original Wix page appears to use a slide-deck / proposal-board rhythm: short text blocks and large presentation images carry most of the story. The exact DOM order is not available here, so the sequence below is inferred from the contact sheet ordering and confirmed against the project brief where possible.

1. `River` problem / concept framing. Contact sheet item 1 shows a slide titled "River" with bullets and sketches. Inference: the page opened by introducing the river as both setting and interaction metaphor.
2. Early interface / spatial concept. Item 2 shows a dark interface or VR scene with an "About Me" pop-up. Inference: an early prototype or interface example appeared near the top, before the complete project framing.
3. River landscape context. Item 3 is a wide river image with "River" text. This is a confirmed major setting image.
4. Project identity mark. Items 4 and 23 show the Project Amazon logo. Inference: the logo functioned as brand punctuation, not necessarily a full narrative section.
5. Theme summary. Item 5 summarizes four themes: River, Study Abroad Safety, Folk Tale, and Architecture. This is confirmed as the main thematic framing.
6. Projection / camera / screen setup. Items 6 and 7 show projection and hardware relationship diagrams. Inference: after themes, the old page explained the mixed-reality installation setup.
7. Full system layout board. Item 8 is a wide board containing UI regions, display panels, video transmission, map/minimap, and VR/location references. This is the central explanatory artifact.
8. Reference / example slides for learning themes. Items 9, 13, 14, 15, 16, and 17 show study-abroad safety, architecture, and folktale materials. Inference: the Wix page included more subject-matter research than the current rebuilt page.
9. Interaction and flow diagrams. Items 10, 11, 12, 21, and 22 appear to be tables, icon/state diagrams, screen flow, and page/storyboard mappings. Inference: these supported the system design after the main layout board.
10. Title screen / final prototype signal. Item 18 shows `PROJECT AMAZON` with Start / Exit. This is confirmed as a strong final/game-prototype image.
11. Route and map diagrams. Items 19 and 20 show route-map and tree-route / branching diagrams. Inference: route logic appeared after the conceptual and UI-system materials.
12. Content inventory / final board. Item 24 appears to be a content list or asset/script board. Inference: this was supporting documentation, likely near the end or in a process appendix.

## 2) Original Wix Image Groups And Hierarchy

The old structure appears to have several clear image families:

- Large setting / identity images: river landscape, title screen, and logo. These establish the project world and brand. The river landscape and title screen should be treated as large images; the logo should be compact or omitted unless needed as punctuation.
- Theme research group: theme summary, study-abroad safety, architecture, folktale, and related reference slides. These were likely shown as medium boards with sparse explanatory text.
- Mixed-reality setup group: projection concept diagrams and camera/screen relationship sketches. These should be medium to large depending on legibility, but should not overpower the main system board.
- Central system board: layout-board is the most important diagram and should be wide, readable, and uncropped.
- Route / progression group: route-map and tree-route-sketch belong together as a comparison between structured map and sketch/branch logic. Screen-flow can support this group but should not compete with the main system board.
- Supporting process boards: dense tables, icon/state rows, storyboard/page maps, and content lists. These appear smaller or appendix-like in the contact sheet and can be omitted or compressed if the rebuilt page needs to stay portfolio-readable.

## 3) Current Page Structure

Current source and built page show this structure:

1. Hero: `Project Amazon`, role, summary, and `title-screen.webp`.
2. Meta: `Experience Design / System Design / Game Design`.
3. Framing section: `theme-summary.webp` and `river-context.webp`.
4. Experience section: `projection-concept.webp` followed by wide `layout-board.webp`.
5. Route section: `route-map.webp`, `tree-route-sketch.webp`, and wide `screen-flow.webp`.
6. Videos section: YouTube tutorial and full playthrough embeds.

This current structure respects the major approved direction from `DECISIONS.md`: it keeps role wording conservative, uses the title screen as the detail hero, avoids invented team attribution, keeps videos after system diagrams, and uses clickable images without visible utility links.

## 4) Current Drift From Original Wix Logic

- The current page compresses the original research/theme buildup. The Wix contact sheet gives separate visual weight to River, Study Abroad Safety, Architecture, Folk Tale, and take-home gift/story concepts. Current page keeps only the theme summary plus river context.
- The original Wix page seems to show more intermediate interaction/state artifacts before or around the route section. Current page keeps only projection-concept, layout-board, route-map, tree-route-sketch, and screen-flow.
- The original contact sheet suggests the title screen may have appeared after research/system material as a final prototype signal. Current page uses it as the hero. This is an intentional and reasonable portfolio adjustment because D-017 specifically supports trying `title-screen.webp` as the detail hero.
- The original page likely had more brand/logo punctuation. Current page does not use the logo image. This is acceptable unless the main chat wants a more faithful old-site visual rhythm.
- The current route section is structurally better than the older QA note feared: source and built HTML use `variant: "pair"` and make `screen-flow.webp` wide. Remaining risk is only visual legibility in browser, not structural placement.
- The final directly uploaded video demo remains absent because its source is still pending in `DECISIONS.md` P-002. Current YouTube embeds are correctly placed as playable prototype evidence.

## 5) Recommended Faithful Adjustments

Highest priority:

- Restore a little more of the original theme/research cadence without turning the page into a slide dump. Add one compact row or subsection after the current framing section for Study Abroad Safety, Architecture, and Folk Tale if clean assets are already available in `public/images/projects/project-amazon` or can be mapped from existing `gallery-*` images. Label these as learning themes, not final gameplay screens.

Recommended:

- Keep `title-screen.webp` as hero because it matches D-017 and makes the page read as a playable prototype. Do not revert to `cover.webp`.
- Keep `layout-board.webp` as the central wide artifact. It is the strongest system-design evidence.
- Keep route-map and tree-route-sketch paired. Keep `screen-flow.webp` wide or directly below them so it reads as process support.
- Consider adding a compact Project Amazon logo only if the page needs old-Wix identity punctuation. It should not displace the title screen, river image, or layout-board.
- If using `gallery-02.webp`, `gallery-03.webp`, or `gallery-04.webp`, first confirm what each corresponds to in the contact sheet. `gallery-04.webp` appears to share size/bytes with `river-context.webp`, so avoid accidental duplication.
- Do not add visible "Open on YouTube" or "Open full size" text; D-018 says utility links should not appear visibly in the case-study media.
- Do not add final demo language until the direct video source is provided. Keep the current Tutorial / Full Playthrough section as proof of playable flow.

## 6) Handoff

Task ID: T-AUDIT-AMAZON-001  
Owner / Agent: PersonalWebsite Content/Layout audit worker  
Date: 2026-06-30  
Status: ready-for-review

Scope:
- Pages / slugs: `project-amazon`
- Files reviewed: listed above
- Files changed: `docs/layout-plans/original-structure-audit-project-amazon.md`

Inputs Used:
- Briefs: `docs/project-briefs/project-amazon.md`
- Layout plans: `docs/layout-plans/project-amazon.md`
- Assets / screenshots: `docs/asset-contact-sheets/projectamazon.jpg`
- External links: none opened; no network used

Output:
- Artifact path: `docs/layout-plans/original-structure-audit-project-amazon.md`
- Summary: Current page broadly preserves the old Wix logic, especially title screen, theme framing, projection/VR setup, system board, route diagrams, and videos. Main drift is that the original subject-matter research/theme section has been compressed.

Key Findings:
- Confirmed facts: current source and built page use `title-screen.webp` as hero; current page places videos after system/route diagrams; role wording is conservative.
- Inferences: original Wix likely gave separate visual weight to River, Study Abroad Safety, Architecture, Folk Tale, and take-home/story concepts based on contact sheet sequence.
- Uncertain / needs confirmation: exact old Wix DOM order; mapping of `gallery-*` files to contact-sheet slides; direct final demo video source.

Decisions Needed:
- Whether main chat wants to restore one compact learning-theme/research row from the old Wix page.
- Whether the logo should appear as small identity punctuation or remain unused.

Recommended Next Action:
- Main chat should review whether to add a compact theme/research row before any implementation changes.
- User should provide the direct Final Video Demo source if that video should be included.

Verification:
- Build/checks run: none; this was a documentation-only audit.
- Visual/mobile checks run: static review of source, built HTML, QA note, and contact sheet only.
- Known gaps: no browser screenshot pass; no original live Wix route access; no network used by instruction.
