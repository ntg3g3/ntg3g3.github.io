# Layout Plan: Dice Adventure

Status: pending user review. Do not implement until approved.

## Intent

Dice Adventure should read as an image-led research game design page. The page should show how Yutao translated Human-Machine Teaming research needs into playable systems: partial information, asymmetric characters, dice constraints, non-verbal pins, level/tutorial progression, and final prototype feedback.

Do not claim final AI-study use or research outcomes. Yutao does not have that information, and lab use depends on the lab owner.

Do not frame Yutao as the implementation owner. The page should emphasize game design, system design, level/tutorial design, research-to-mechanic translation, playtest support, and coordination with artist/programmer/research collaborators.

## Page Rhythm

The old Wix page logic should be preserved:

1. Final playable prototype first.
2. Research/reference mapping second.
3. Paper prototype and early level boards.
4. Final concept/rule sheets as large readable images.
5. Level/tutorial progression as large diagrams.
6. Digital prototype screenshots as the closing proof.

Words should connect image groups, not become the main content.

## Sections

### 1. Hero: Final Prototype

Use `public/images/projects/dice-adventure/cover.webp`.

Layout:
- Desktop: text 40-45%, image 55-60%.
- Mobile: text first, image second.
- Keep the dice prompt visible. Do not crop away `ROLL LARGER THAN 5 TO BREAK THE ROCK`.

Copy direction:
- Title: `Dice Adventure`
- Subtitle: `HCII Research | Summer 2022`
- One-liner: `A turn-based asymmetric co-op game where players coordinate through partial information, pins, and character-specific dice.`
- Role line: `Game Design / Level Design / Asymmetric Co-op`

Avoid:
- A long intro paragraph.
- Any claim about final study deployment.

### 2. Research References

Purpose:
- Explain why turn-based and board-game references were useful for research-oriented co-op design.
- Make clear that external game images are references, not Yutao's work.

Visuals:
- Board-game/co-op-game reference boards from recovered Wix assets.
- Include visible labels like `Reference` or `Precedent Study`.

Layout:
- One large research board if readable.
- Optional row of smaller reference images below.
- Captions must say `Reference image` or `Precedent study`, not just game names.

Copy direction:
- One short paragraph: the team studied turn-based co-op, asymmetric information, and board-game systems because those mechanics are easier to control, observe, and prototype.

### 3. Paper Prototype

Purpose:
- Show the project was first tested as a board-game-like system before the digital prototype.

Visuals:
- Physical paper prototype photo.
- Early grid/map sketches.

Layout:
- One large paper prototype image.
- Smaller process images beside or below it.

Copy direction:
- Mention testing map logic, character movement, dice conditions, and cooperation before digital production.

### 4. Core System

This should be the densest and most important section.

Visuals to prioritize:
- Character vision diagram.
- Dice distribution / dice matrix.
- Rule table / final concept sheet.
- Pinning system diagram.

Layout:
- Full-width or near-full-width diagrams.
- Break into short subgroups:
  - `Asymmetric Vision`
  - `Character Dice`
  - `Obstacle Rules`
  - `Pinning System`
- Do not squeeze these into small equal gallery cards.

Copy direction:
- Keep text to brief interpretive captions.
- Explain what the viewer should look for in each diagram.

### 5. Pinning System Focus

Purpose:
- Emphasize the communication mechanic, because it is central to the Human-Machine Teaming framing.

Visual:
- Four-direction pin diagram: Danger / On My Way / Assist Me / Unknown.

Layout:
- Large centered diagram with one short text block.

Copy direction:
- `Pins let players communicate intent and uncertainty without relying on full voice-style information sharing.`

### 6. Level And Tutorial Design

Purpose:
- Make Yutao's level design contribution concrete.

Visuals:
- `public/images/projects/dice-adventure/gallery-01.webp`
- Level/tutorial overview if available from source assets.
- Map iterations and grid layouts.

Layout:
- Full-width wide diagrams.
- Captions below images.
- Avoid `object-fit: cover`; diagrams need readable edges and labels.

Copy direction:
- Explain that tutorial stages introduce movement, obstacles, altars, gates, and cooperation step by step.

### 7. Digital Prototype Rules

Purpose:
- Return to the playable digital prototype and show how abstract rules became UI feedback.

Visuals:
- `gallery-03.webp`: combat / matching dice.
- `gallery-04.webp`: trap / roll smaller than threshold.
- Optionally repeat `cover.webp` only if used with a different crop or as part of a three-rule row.

Layout:
- Desktop: two or three large screenshots in a row.
- Mobile: stacked screenshots.

Copy direction:
- Each caption should name the rule: rock, monster, trap.

### 8. Reflection

Purpose:
- Close with design value, not unconfirmed outcomes.

Copy direction:
- The page can say the game was designed to create observable moments of planning, uncertainty, and coordination.
- Do not say the game was ultimately used in an AI study.
- Do not invent findings.

## Required Data Changes Later

- Correct team spelling: `Phoebe Wang`.
- Reference images need a `reference` or `caption` treatment that distinguishes them from project output.
- Consider adding a media/layout field for larger diagram display instead of relying on the current equalized visual section grid.

## Implementation Guardrails

- Text should be shorter than the current page.
- Major diagrams should be larger.
- Reference images must be labeled.
- No implementation ownership claim.
- No final study outcome claim.
- Keep team/role conservative.
