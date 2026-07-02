# Project Brief: Cyberland 2021

## Source Confidence

Confirmed: old route `/cyberland2021`, current project data, `docs/CONTENT_INVENTORY.md`, `docs/asset-contact-sheets/cyberland2021.jpg`, and current assets in `public/images/projects/cyberland-2021`.

Inferred: exact rules, team structure, and technical implementation details are inferred from diagrams and photos. No awards, release state, or performance metrics are confirmed.

## Project One-Liner

A cooperative asymmetric platform game where body tracking turns player poses into level traversal on a large projected stage.

## Context

Confirmed: listed as Game Design / Level Design / Body Tracking. The content inventory says it is a co-op asymmetric platform game using body tracking, with stages that push players to pose playfully.

Confirmed from images: the project used a projected room or stage, side-view platform visuals, pose / obstacle diagrams, and live playtest photos with players standing in front of the screen.

## Design Problem

Confirmed: the project explores body tracking as a controller for platforming.

Inferred: the design challenge was to make full-body movement legible, funny, and mechanically necessary, while still presenting a readable 2D platform level to both the active player and observers.

## Audience / Use Case

Confirmed from playtest photos: designed for a room-scale public / class demo where players perform in front of a projection.

Inferred: the audience includes both players and spectators; the game likely benefits from visible, exaggerated poses.

## My Role

Confirmed: Game Design / Level Design / Body Tracking.

Inferred from assets: Yutao likely worked on body-pose mechanics, obstacle design, level diagrams, and playtest presentation. Exact technical ownership is not confirmed.

## Key Contributions

- Confirmed: designed body-tracking platform mechanics.
- Confirmed: created level / obstacle diagrams explaining how poses interact with platforms, lasers, sun-like hazards, springs, and vertical barriers.
- Confirmed: documented playtests / staged demonstrations in a projection room.
- Inferred: tuned levels around the readability of human silhouettes against a 2D side-view game space.

## System / Gameplay / Interaction Model

Confirmed from diagrams: the player body is mapped onto a gridded play area. Obstacles include blue vertical detection lines, orange horizontal hazards, a sun-like circular hazard, blocks / stairs, and spring-like elements. Player pose appears to create or avoid collisions with these obstacles.

Confirmed from gameplay-sideview: the game uses a side-view platform composition with character(s), platforms, and obstacles.

Inferred core loop: players observe a platform obstacle, physically pose / move to match a required silhouette or avoid hazards, trigger traversal changes, and advance through a sequence of levels.

## Process Story

1. Establish visual tone with Cyberland title art and colorful abstract environment images.
2. Define the body-as-controller concept through simple pose diagrams.
3. Translate poses into level components: stairs, blocks, springs, vertical scan lines, sun hazard, and horizontal bars.
4. Build side-view gameplay screens and level layouts.
5. Validate the experience in a projected playtest room, where player silhouettes and stage photos communicate the embodied nature of the project.

## Visual Asset Interpretation

| Asset | Type | What It Shows | Recommended Use |
| --- | --- | --- | --- |
| `title-screen.webp` | hero, final | Cyberland 2021 title screen with colorful character / city graphics. | Main hero or opening image. |
| `cover.webp` | hero, final | Cover art from the home/project card. | Thumbnail or secondary hero. |
| `gameplay-sideview.webp` | final, mechanic | Side-view platform screen with player, environment, and obstacles. | Early proof of game format after hero. |
| `body-tracking-diagram.webp` | diagram, mechanic | Human silhouette in a grid with vertical detection lines and hazards. | Large mechanic explanation; avoid cropping. |
| `gesture-level-diagram.webp` | diagram, mechanic | Gesture-to-level interaction diagram. | Pair with body-tracking diagram. |
| `pose-obstacle-diagram.webp` | diagram, mechanic | Player pose interacting with a block / obstacle setup. | Mechanic subsection. |
| `interaction-diagram.webp` | diagram, mechanic | Simplified body interaction beat. | Supporting diagram. |
| `level-design-diagram.webp` | diagram, process | Level layout with hazards and grid. | Use as a wide "level design" image. |
| `playtest-stage-01.webp` | playtest, final | Player in front of projected Cyberland screen. | Use to show actual embodied setup. |
| `playtest-stage-02.webp` | playtest | Dark projection-room playtest photo. | Pair with stage-01/03 in a compact trio. |
| `playtest-stage-03.webp` | playtest | Player silhouette / gesture against screen. | Good evidence of public physical play. |
| `gallery-01.webp` to `gallery-04.webp` | supporting | Additional environment, concept, or reference images. | Use only if they support tone; do not lead with them. |

## Original Wix Page Logic

The original page reads as a progression from fantasy / cyber visual identity into embodied interaction logic. It first shows title art and colorful final / mood images to establish what the world feels like. It then uses a dense run of diagrams to teach the viewer how body tracking works: the body is mapped to a grid, poses intersect with obstacles, and level elements force specific movements. Near the end, multiple dark-room photos confirm that this was not only a screen concept but a projection-stage experience.

The old layout likely alternated big visual moments with rows of diagram boards. Big images should be title-screen, gameplay-sideview, level-design-diagram, and playtest photos. The pose diagrams should be grouped as a readable mechanic strip, because each diagram explains one part of the control vocabulary.

The rebuild should avoid long prose. The project's strongest evidence is visual: pose diagrams plus playtest photos. Text should label the mechanic and then get out of the way.

## Page Sections To Build

1. Hero: title-screen + one-line body-tracking platform premise.
2. What players do: gameplay-sideview plus short role / control description.
3. Body as controller: grouped mechanic diagrams.
4. Level design: wide level-design-diagram.
5. Stage proof: playtest-stage photo grid.
6. Optional mood gallery: only a few environment / cover images.

## Missing Information / Questions

- How many players and what made the cooperation asymmetric?
- What body-tracking technology was used?
- What was Yutao's exact split between level design, game design, and technical implementation?
- Are there videos of the playtest that should replace or accompany still photos?
