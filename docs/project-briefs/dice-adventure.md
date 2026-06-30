# Project Brief: Dice Adventure

## Source Confidence

High for the project premise, role, team, time span, and core mechanics because they are present in `src/data/projects.ts` and the Wix content inventory. Medium-high for visual interpretation because the Dice Adventure contact sheet contains many readable research, paper prototype, rules, UI, and build screenshots. Lower for final research outcomes, study results, release status, and exact implementation details because those are not present in the available artifacts.

Confirmed sources used: `docs/CONTENT_INVENTORY.md`, `assets/wix-originals/wix-assets-manifest.csv`, `docs/asset-contact-sheets/diceadventure.jpg`, `src/data/projects.ts`, and `public/images/projects/dice-adventure`.

## Project One-Liner

Dice Adventure is a turn-based asymmetric co-op game designed for CMU HCII Human-Machine Teaming research, where three characters with different vision and dice constraints coordinate through partial information, pings, obstacles, altars, and gates.

## Context

Confirmed: In Summer 2022, Yutao was hired as a game designer by the ARL STRONG lab at CMU to design and develop an asymmetric co-op game for Human-Machine Teaming studies. The available copy describes Dice Adventure as a multiplayer asymmetric co-op game for research, with three characters: dwarf, human, and giant.

Inferred: The project needed to be more than a conventional entertainment prototype. The mechanics appear designed to produce observable collaboration patterns: who knows what, how players communicate when vision is limited, how they coordinate turn order and risk, and how human players might collaborate with AI agents.

## Design Problem

Confirmed: The design needed built-in communication without relying on voice, support for in-game learning and reflection, strategic decision-making, and asymmetry in how players gathered information.

Inferred: The central design challenge was translating research needs into a playable system that creates clear moments of uncertainty, coordination, and shared planning. The game had to make communication measurable enough for study while still feeling like a real co-op adventure.

## Audience / Use Case

Primary audience: research participants in Human-Machine Teaming studies.

Secondary audience: researchers and collaborators who need a controllable game environment for observing human-human and human-AI collaboration.

Use case: players take turns navigating a grid-based dungeon, share partial information through a pinning system, use character-specific dice and vision, solve obstacles, activate altars, fight monsters, and unlock a final gate.

## My Role

Confirmed role: Game Design, Level Design, Asymmetric Co-op.

Confirmed contributions:

- Researched existing co-op games and board games, then proposed several game concepts.
- Communicated with the collaborating research team to understand research needs and transform them into in-game features.
- Worked closely with the artist and programmer while helping manage project progress.
- Finished level designs and tutorial stages.
- Arranged playtests, collected feedback, and listed bugs.

## Key Contributions

- Turned research constraints into mechanics: asymmetrical vision, dice-based actions, non-verbal pinging, turn limits, and partial information.
- Designed character differentiation around dwarf, human, and giant roles, each with different vision and dice affordances.
- Created level and tutorial structures that introduce movement, obstacles, combat, altars, gates, and cooperation gradually.
- Used board-game and paper-prototype references to test the structure before the digital build.
- Documented UI and interaction states such as moving, confirming, canceling, and showing possible destinations.

## System / Gameplay / Interaction Model

Player goal: coordinate as a team to progress through dungeon rooms, overcome monsters and obstacles, activate altars, and open the final gate.

Core loop:

1. A character takes a turn with limited actions.
2. The player observes only the information available to that character.
3. Players communicate intent or uncertainty through pins such as danger, on my way, assist me, and unknown.
4. The active player moves on the grid, uses dice-based interactions, and resolves obstacles or enemies.
5. The team updates its shared plan based on newly revealed map information and remaining resources.

Mechanics:

- Three asymmetric characters: dwarf, human, and giant.
- Character-specific visibility ranges and dice sets.
- Turn-based action economy, shown by lightning-bolt action icons.
- Dice checks for obstacles and combat, such as rolling higher than a threshold to break a rock, rolling matching numbers to kill monsters, or rolling lower than a threshold to break a trap.
- Pinging system for non-verbal communication.
- Level elements including rocks, monsters, traps, altars, gates, and fog/unknown map areas.
- Tutorial and level progression from small rule examples to larger maze-like layouts.

## Process Story

The project appears to move through four design layers. First, the team researched existing cooperative games and board games, visible in comparison boards and board-game reference images. Second, the team prototyped the concept as a physical board game and grid layout, using character tokens, tiles, dice, and hand-drawn or printed maps. Third, the design became a system of clear rules: vision limits, dice distributions, ping categories, obstacle conditions, and movement controls. Finally, the concept was implemented as a Unity-style digital prototype with a top-down 3D dungeon, UI for turns/actions/health, and large contextual overlays teaching dice interactions.

This is a strong page candidate for a process-first case study: research constraints -> paper prototype -> mechanics -> level/tutorial design -> playable demo.

## Visual Asset Interpretation

| Asset | Type | What It Shows | Recommended Use |
| --- | --- | --- | --- |
| `public/images/projects/dice-adventure/cover.webp` | `hero`, `mechanic`, `final` | Digital gameplay screenshot with the active character, hearts, actions left, altar state, and a large rule prompt for breaking a rock with a die roll greater than 5. It communicates the final game format and the dice-check mechanic immediately. | Best hero candidate for the current optimized set. Use early because it explains both theme and system at a glance. |
| `public/images/projects/dice-adventure/gallery-01.webp` | `diagram`, `mechanic`, `process` | A collection of level layouts on square grids, showing black unexplored/blocked areas, character start positions, obstacles, enemies, altars, and numbered interaction targets. It reads as level progression and encounter planning. | Use in a level design/process section. Not ideal as hero because it is dense and not polished, but excellent for explaining Yutao's level work. |
| `public/images/projects/dice-adventure/gallery-02.webp` | `diagram`, `mechanic` | A control-state diagram for moving, confirming, canceling movement, and showing possible destinations. It explains the interaction model and how movement preview/confirmation reduces accidental choices. | Use in a mechanics or UX section. Strong supporting diagram for interaction design. |
| `public/images/projects/dice-adventure/gallery-03.webp` | `mechanic`, `final` | Digital gameplay screenshot teaching combat: roll matching numbers, specifically 2/5/6, to kill monsters. It shows the same UI language as the cover but for enemies instead of obstacles. | Use after the cover as a mechanics example. Good for a paired image set with rock/trap dice checks. |
| `public/images/projects/dice-adventure/gallery-04.webp` | `mechanic`, `final` | Digital gameplay screenshot teaching trap interaction: roll smaller than 3 to break the trap. It shows how different obstacle types invert or vary the dice condition. | Use in a rules/mechanics section, not as a standalone hero because it duplicates the cover format. |
| Contact sheet item 1 / `a04444_022a85...png` | `process`, `diagram` | Early grid sketches with simple routes, letters, and markers. Likely paper or digital planning for map layout and encounter placement. | Use only if showing earliest level ideation. Otherwise supporting or omit because it is hard to read. |
| Contact sheet item 4 / `a04444_1e1a0...png` | `context`, `process` | Board-game reference photo with notes, likely used during competitive/co-op game research. | Use in a research/process section if the page discusses precedent analysis. Not final-facing enough for hero. |
| Contact sheet item 5 and 21 / ping diagram | `mechanic`, `diagram` | Four communication pins: Danger, On My Way, Assist Me, and Unknown, arranged around a central marker. This is one of the clearest artifacts explaining non-verbal collaboration. | Highly recommended for the mechanic section. It directly supports the Human-Machine Teaming research angle. |
| Contact sheet item 6 / dice grid | `mechanic`, `diagram` | A matrix of dice faces, likely comparing dice sets or probability distributions. | Use if explaining character-specific dice pools. Needs caption because the artifact alone does not state the design rule. |
| Contact sheet item 8 / rules table | `mechanic`, `diagram` | A table comparing characters and outcomes for rocks, monsters, and traps, including thresholds such as greater/smaller/matching values. | Strong mechanics diagram. Use to show how character asymmetry and obstacle rules were systematized. |
| Contact sheet item 9 / "You are" screenshot | `final`, `prototype` | Digital game view identifying the active player/character in the dungeon UI. | Good supporting image for UI clarity, but less compelling than the current cover. |
| Contact sheet item 10 / small UI board thumbnails | `process`, `diagram` | A wide set of interface or level-state thumbnails, likely design iterations. | Use only in a process collage. Too small/dense as a main image. |
| Contact sheet item 11 / stage thumbnails | `process`, `prototype` | Narrow sequence of small gameplay/prototype captures, possibly tutorial or state progression. | Supporting only; too small to carry a section. |
| Contact sheet item 12 / two grid maps | `process`, `diagram` | Hand/planning maps with colored character markers and paths. | Good for level design process if cropped or enlarged. |
| Contact sheet item 13 / research board | `process`, `context` | A broad research/ideation board with many game references and grouped notes. | Good evidence of research breadth, but should be cropped or used as a small process image. |
| Contact sheet item 14 / many level screenshots | `process`, `diagram` | A collection of level iterations or map states with grid layouts. | Use for showing iteration volume. Not suitable as hero. |
| Contact sheet item 15 / Burgle Bros. reference | `context`, `process` | Reference slide about Burgle Bros. as a cooperative board game for 1-4 players, with notes on movement and shared planning. | Good for research/process if the page mentions precedent studies. |
| Contact sheet item 16 / physical prototype photo | `process`, `prototype`, `playtest` | A table photo of a paper/board prototype with tiles and notes. It shows the game was tested physically before digital development. | Strong process image. Use to bridge research and digital implementation. |
| Contact sheet item 17 / character vision diagram | `mechanic`, `diagram` | Character portraits next to grids, likely showing different vision ranges for dwarf, human, and giant. | Highly recommended. This explains the asymmetry better than most assets. |
| Contact sheet item 18 / polished fantasy terrain | `context`, `supporting` | A colorful fantasy island/hex terrain image. It may be a mood reference or external inspiration rather than the actual prototype. | Use cautiously or omit unless provenance is confirmed. It could misrepresent the final game style. |
| Contact sheet item 19 / strategy game screenshot | `context`, `supporting` | Screenshot from another tactics/board-like game interface, likely reference material. | Omit or use only in a research collage with clear labeling as reference, not project output. |
| Contact sheet item 20 / physical board-game table | `context`, `process` | Photo of a tabletop game setup labeled Mysterium. Likely inspiration for asymmetric information or cooperative deduction. | Use only as research reference, not as a project outcome. |
| Contact sheet item 22 / low-poly board environment | `prototype`, `process` | 3D tabletop-like environment with characters, trees, rocks, and board tiles. Looks like an intermediate prototype direction. | Good process image if explaining visual/prototype evolution. |
| Contact sheet item 23 / pixel icons | `process`, `supporting` | A sheet of small pixel/object icons or tile concepts. | Supporting asset-development image; use only if discussing production pipeline. |
| Contact sheet item 24 and 30 / one-page rule sheets | `diagram`, `mechanic` | Printable rule/reference sheets with characters, dice, and object interactions. | Excellent for a system design section. Consider using one cleaned/cropped version. |
| Contact sheet item 25 / movement specification | `diagram`, `mechanic` | More detailed movement-state specification with keyboard inputs and possible destinations. Same concept as optimized `gallery-02.webp`. | Use optimized `gallery-02.webp`; this can be omitted as duplicate unless higher resolution is needed. |
| Contact sheet item 27 / obstacle asset sheet | `supporting`, `process` | Individual assets for monster, rock, and trap. | Supporting only. Useful if discussing collaboration with artist/programmer, but not essential. |
| Contact sheet item 29 / Tao logo | `discard` | Portfolio/logo asset, not project-specific content. | Do not use on the project page except site branding. |
| Contact sheet item 31 / level/tutorial overview | `diagram`, `process` | A structured map of tutorial/level progression using grids and colored blocks. | Strong page asset for tutorial/level design. Use in process or level-design section. |

## Page Sections To Build

1. Hero: use the current cover screenshot and a concise one-liner about asymmetric co-op for Human-Machine Teaming research.
2. Research Constraint: explain why the game needed partial information, non-verbal communication, strategic decisions, and measurable cooperation.
3. System Design: show the three-character asymmetry, dice checks, obstacle types, and ping communication.
4. Level and Tutorial Design: use grid layouts and progression maps to show how levels taught mechanics and created collaboration.
5. Prototype Evolution: show board-game references, paper prototype, and digital implementation.
6. Final Demo: show the polished gameplay screenshots for rock, monster, and trap interactions.
7. Reflection / Research Fit: discuss how the design creates observable moments of coordination without inventing study results.

## Missing Information / Questions

- What were the final study goals and research hypotheses from the HCII / ARL STRONG collaborators?
- Was the game ultimately used with participants or AI agents? If yes, what outcomes can be shared publicly?
- Which parts did Yutao personally implement versus design/specify?
- Are there playable build links, demo videos, or final reports that should be included?
- Which reference images are safe to show publicly as inspiration, and which should be omitted to avoid implying ownership?
- Was "Pheobe Wang" the intended spelling in the team list, or should it be "Phoebe Wang"?
