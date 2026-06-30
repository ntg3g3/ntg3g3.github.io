# Layout Plan: Dice Adventure

## Layout Goal

Make Dice Adventure read as a research-driven game design case study, not just a game gallery. The page should show how Human-Machine Teaming research constraints became concrete mechanics: asymmetric vision, dice pools, non-verbal pings, tutorial levels, and observable co-op decisions.

The top third should answer: this is an asymmetric co-op research game, Yutao translated research needs into playable systems, and the visual evidence includes both process artifacts and final prototype screenshots.

## Recommended Section Order

1. Hero
2. Project summary + compact metadata
3. My Impact
4. Research Constraint
5. System Design
6. Level and Tutorial Design
7. Prototype Evolution
8. Final Demo
9. Reflection / Research Fit
10. Selected Evidence Gallery

## Section Direction

### 1. Hero

Use `public/images/projects/dice-adventure/cover.webp` as the main hero image.

Purpose:
- Establish the final digital prototype immediately.
- Show the turn-based UI, character state, hearts/actions, and dice-check prompt.
- Signal "game system for research" rather than a generic fantasy project.

Layout:
- Desktop: text 45%, image 55%.
- Keep title, subtitle, one-liner, and role visible without making the metadata compete with the image.
- Use the one-liner from the brief or a tightened version: "A turn-based asymmetric co-op game for CMU Human-Machine Teaming research, where players coordinate through partial information, pins, and character-specific dice."

Mobile:
- Stack text first, then hero image.
- Avoid cropping away the rule prompt in the hero screenshot.
- Keep hero image height stable; the current 16:10 crop may need `object-position` tuned toward the character and prompt.

### 2. Project Summary + Compact Metadata

Use the existing overview/facts pattern, but keep the prose tighter than the current three-paragraph data copy if implementation allows.

Content emphasis:
- Client / context: ARL STRONG lab at CMU / HCII research.
- Deliverable: multiplayer asymmetric co-op game for Human-Machine Teaming studies.
- Role: Game Design / Level Design / Asymmetric Co-op.
- Team and time span.

Layout:
- Desktop: summary 60%, metadata 40%.
- Mobile: summary first, facts second.
- Do not let "Original Route" take visual priority over role, deliverables, or team.

### 3. My Impact

Place before the deeper process sections.

Purpose:
- Hiring/review readers should see Yutao's contribution early.
- Impact items should be phrased as design actions, not task fragments.

Recommended emphasis:
- Research translation into mechanics.
- Character asymmetry and dice-rule system.
- Level/tutorial design.
- Playtest setup, feedback collection, bug tracking.
- Cross-discipline coordination with artist/programmer/research collaborators.

Layout:
- Desktop: two-column impact grid works.
- Mobile: single column; keep each item short enough that the section does not become a wall.

### 4. Research Constraint

Narrative role:
- Explain why the game needed partial information, non-verbal communication, strategic planning, and in-game learning.
- Connect the design problem to research observability.

Suggested visual:
- Use research/process material from the contact sheet only if higher-resolution source assets are available.
- Strong candidates from the brief: research board, Burgle Bros. reference, physical board-game reference.
- If only the current optimized webp files are used, this section can be text-led with a small callout instead of forcing a weak image.

Text/image ratio:
- 65% text / 35% image or callout.
- Do not present external game reference images as project outcomes.

Mobile:
- Put any reference collage below the text.
- Caption references clearly as inspiration / precedent analysis.

### 5. System Design

Narrative role:
- This is the core explanatory section.
- Show how research constraints became mechanics: three roles, different vision, dice sets, obstacle thresholds, and pings.

Primary visuals:
- Ping diagram from contact sheet items 5/21 if source asset is available.
- Character vision diagram from contact sheet item 17 if source asset is available.
- Rules table or one-page rule sheet from contact sheet items 8, 24, or 30 if source asset is available.
- Use `public/images/projects/dice-adventure/gallery-02.webp` for movement confirmation / possible destination UX.

Current optimized asset use:
- `gallery-02.webp`: movement-state diagram. Use as a UX sub-section visual.
- `gallery-03.webp`: combat dice rule.
- `gallery-04.webp`: trap dice rule.
- `cover.webp`: rock dice rule, already used in hero.

Layout:
- Prefer a repeated "mechanic + evidence" rhythm:
  - Text: "Partial information"
  - Image: vision or ping diagram
  - Text: "Dice checks"
  - Image pair: combat and trap screenshots
- Desktop: use 50/50 split for diagrams that need explanation; use a two-up image row for `gallery-03.webp` and `gallery-04.webp`.
- Mobile: stack each mechanic with its image directly below. Avoid two-up images on small screens.

Implementation note:
- If possible later, this section deserves page-specific rich layout rather than the generic `project.sections` card. It has enough evidence to justify custom case-study blocks.

### 6. Level and Tutorial Design

Narrative role:
- Make Yutao's level design contribution concrete.
- Show progression from small examples to larger maze-like layouts and tutorial stages.

Primary visual:
- `public/images/projects/dice-adventure/gallery-01.webp`.

Additional recommended visuals if source assets are available:
- Contact sheet item 31: level/tutorial overview.
- Contact sheet item 12: two grid maps.
- Contact sheet item 14: iteration set of level screenshots.

Layout:
- Desktop: use a large full-width or 60/40 layout, because the grid diagrams need size.
- Place text close to the image: explain what readers should look for, such as character starts, obstacles, altars, and numbered targets.
- If multiple level images are available, use a horizontal process strip after the main explanation.

Mobile:
- Avoid fixed 16:10 cropping for dense diagrams; use contain-style display or a taller aspect ratio.
- Captions should identify the purpose of each map rather than repeat generic labels.

### 7. Prototype Evolution

Narrative role:
- Show the path from board-game research and paper prototype to digital implementation.

Suggested visuals:
- Physical board prototype photo from contact sheet item 16.
- Low-poly board environment from contact sheet item 22.
- Research board / precedent collage from contact sheet item 13.

Layout:
- Desktop: a three-step timeline or image-led sequence.
- Text/image ratio: 40% text / 60% process visuals.
- Keep this section lighter than System Design; it supports the process story but should not bury the mechanics.

Mobile:
- Convert timeline to stacked steps.
- Keep image captions short: "Paper prototype", "Intermediate board environment", "Digital prototype".

### 8. Final Demo

Narrative role:
- Return to the polished prototype after the process sections.
- Show how different obstacle types teach different dice conditions.

Visuals:
- `cover.webp`: rock, if not repeated too close to hero. If repeated, crop differently or omit.
- `gallery-03.webp`: combat / matching numbers.
- `gallery-04.webp`: trap / smaller-than threshold.

Layout:
- Desktop: two-up or three-up evidence row, with concise captions.
- Mobile: one image per row; captions under images.
- Avoid making this a generic gallery. Each screenshot should have a caption tied to a rule or interaction.

### 9. Reflection / Research Fit

Narrative role:
- Close with the design value: the game creates observable collaboration moments without claiming unavailable study results.

Content guardrails:
- Do not invent final study findings.
- Phrase outcomes around design intent and prototype affordances.
- Mention open questions only if useful: final study use, playable build, research hypotheses.

Layout:
- Text-led.
- Optional small callout: "Designed to make communication and uncertainty visible."

### 10. Selected Evidence Gallery

Purpose:
- Hold only leftovers that are still meaningful.
- The main images should already have appeared in context.

Recommended inclusion:
- Additional level maps, UI states, asset sheets, paper prototype images.

Avoid:
- Tao logo.
- External game screenshots unless clearly labeled as references.
- Any image that could imply ownership of reference material.

## Image Priority

1. `cover.webp`: hero / final prototype
2. `gallery-01.webp`: level and tutorial design
3. `gallery-02.webp`: movement UX / state diagram
4. `gallery-03.webp`: combat dice rule
5. `gallery-04.webp`: trap dice rule

High-value source assets to recover from originals if possible:
- Ping diagram
- Character vision diagram
- Rules table / one-page rule sheet
- Physical paper prototype photo
- Level/tutorial overview

## Text / Image Rhythm

- Hero: 45% text / 55% image.
- Overview: 60% text / 40% metadata.
- My Impact: text cards, no decorative image required.
- Research Constraint: 65% text / 35% reference/process visual.
- System Design: 50% text / 50% diagrams/screenshots.
- Level Design: 40% text / 60% large diagrams.
- Prototype Evolution: 40% text / 60% process visuals.
- Final Demo: image-led with short explanatory captions.
- Reflection: text-led.

## Navigation Labels

Keep jump-nav labels short:
- Impact
- Research
- System
- Levels
- Prototype
- Demo
- Reflection

## Mobile Notes

- All two-column sections should collapse to one column under the existing `860px` breakpoint.
- Dense grid diagrams should not use aggressive `object-fit: cover`; they need readable edges and labels.
- Put captions below images, not overlaid, for diagrams.
- Avoid pairing two screenshots side by side on mobile.
- Keep "My Impact" before long process content.
- The hero screenshot must retain the dice-rule prompt; losing it weakens the first-screen message.

## Implementation Scope Guidance

Do not force all of this into the current generic `project.sections` model if the page becomes prose-heavy. Dice Adventure is a strong candidate for richer page-specific case-study blocks or a future content-driven structure. For an interim implementation, data sections can be ordered according to this plan, but images should be placed near their explanatory text rather than left only in the bottom gallery.
