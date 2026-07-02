# Project Brief: CAVERN

## Source Confidence

High for the project premise, platform, role, team, time span, and broad deliverable because they are present in `src/data/projects.ts` and `docs/CONTENT_INVENTORY.md`. Medium-high for process interpretation after the user provided the public dev log and YouTube level video. Medium for the detailed gameplay interpretation because the CAVERN contact sheet includes one readable system diagram and one strong in-room play photo, while the dev log provides additional process images and weekly development evidence.

Confirmed sources used: `docs/CONTENT_INVENTORY.md`, `assets/wix-originals/wix-assets-manifest.csv`, `docs/asset-contact-sheets/cavern.jpg`, `src/data/projects.ts`, `public/images/projects/cavern`, public dev log `https://projects.etc.cmu.edu/cavern/blog/`, and YouTube video `https://youtu.be/TGdCYzSnRDs`.

## Project One-Liner

CAVERN is a 3-5 player location-based co-op experience for a 270-degree CAVE projection system, using underwater discovery, shooting, tracking, and staged level beats to demonstrate the system's immersive multiplayer potential.

## Context

Confirmed: Project CAVERN was a semester-long ETC project for Steve Audia's C.A.V.E.R.N. system, an immersive projection environment with a 270-degree circular screen and a 20-foot-wide play area. The project used a CAVE projection system with omnidirectional stereoscopy and was intended to showcase the system's potential.

Confirmed: The deliverable was a cooperative multiplayer experience in the CAVERN projection system, with documentation for hand-off. The role listed for Yutao is LBE, Game Design, and Level Design.

Inferred: The experience needed to function both as a game and as a platform showcase. It had to make the 270-degree space, group presence, wide field of view, audio, and tracking feel valuable rather than incidental.

Confirmed public media:

- Dev log hub: `https://projects.etc.cmu.edu/cavern/blog/`
- YouTube level video: `https://youtu.be/TGdCYzSnRDs`, title from YouTube oEmbed: `cavern Lv1`.
- Dev log hub includes Week 1, Week 2, Week 3, Week 4, Week 5, Week 6, Week 7, Week 8, Week 10, Week 11, Week 12, Week 13, and Week 14 links.

## Design Problem

The design problem was to create a short, legible, high-impact multiplayer experience that uses a specialized projection room well. The game needed to account for constraints visible in the diagram: curved screens, stereo sound, Vive/Valve Index controllers, Vive trackers, limited support for more than two tracked players, no head tracking, and deviated shooting direction.

The design response appears to be a controlled, planned-route experience: slow player movement, fixed or guided route, visible UI indicators, and stage-based shooting/flashlight mechanics that keep the group oriented inside the wraparound screen.

## Audience / Use Case

Primary audience: visitors, clients, or stakeholders experiencing the CAVERN system as a location-based demo.

Player group: 3-5 players in a cooperative underwater scenario.

Use case: players stand inside the curved projection room, look across a shared underwater environment, use controllers or tracked inputs to interact, protect a ship, and progress through discovery, protection, and finale stages.

## My Role

Confirmed role: LBE, Game Design, Level Design.

Confirmed contributions:

- Researched location-based games and immersive experiences, then proposed multiple gameplay concepts to the client and team.
- Designed and tuned core mechanics, encounters, and level beats.
- Designed on-site playtests and surveys, collected feedback, documented player behavior, and adjusted the design.
- Composed dev logs and presentations and supported team task tracking.

## Key Contributions

- Shaped a cooperative underwater concept around the CAVERN room's panoramic screen and group play.
- Designed stage progression from exploration to protection to a darker finale with an added flashlight mechanic.
- Considered hardware constraints such as controller count, tracking limits, shooting direction, and backup plans.
- Used level design to keep player movement slow, guided, and readable inside a large shared projection space.
- Created or contributed to documentation that explains system affordances, mechanics, player goals, and level structure.

## System / Gameplay / Interaction Model

Player goal: cooperate in an underwater/submarine setting while preserving ship integrity and destroying contaminated corals or robotic monsters.

Core loop:

1. Players occupy a shared physical play area facing a 270-degree projected environment.
2. The experience moves them through a planned underwater route.
3. Players use controller-based shooting to interact with threats or targets.
4. UI indicators communicate status across the panoramic display.
5. Stage goals shift from discovery to protection to finale, introducing new pressure and a flashlight mechanic.

Mechanics and constraints visible in the diagram:

- Space: CAVE projection system, curved screens, omnidirectional stereoscopy, stereo sound.
- Input: Valve Index and Vive trackers/controllers; POGO pins are noted as a possible input for more than two players.
- Core mechanic: shooting.
- Stage 1: laser; discover the scene and destroy contaminated corals.
- Stage 2: projectile; protect the ship and shoot robotic monsters.
- Stage 3: add flashlight; scene goes dark.
- Player movement: fixed movement, planned route, slow movement speed, and steering.
- Goals/counters: no lose condition is indicated in one part of the diagram, with performance goals around destroying as many contaminated corals as possible and taking as little damage as possible via ship integrity count.
- Design risks: no head tracking and shooting direction deviation, with backup plans such as third-person shooting and fixed cannons.

## Process Story

The available assets suggest a process built around the physical installation first. The system diagram begins with the CAVERN room, controller/tracker constraints, and core mechanic feasibility, then maps those constraints into a staged underwater multiplayer flow. The in-room play photo confirms the experience reached the projected-room stage: multiple people stand inside the curved screen environment, with a visible UI at the top of the scene and underwater visuals surrounding them.

The best page story is therefore not just "we made an underwater shooter." It is "we designed for a rare room-scale display system, then made game and level decisions around what that room makes possible and what its hardware limits."

## Original Wix Page Logic

The old CAVERN page appears to be compact and evidence-led rather than a long written case study. The contact sheet has only two strong project assets: a dense one-page design/system document and a large in-room playtest/final photo. That means the original page logic likely depended on scale and proof:

- Start with the CAVERN room/photo because it immediately explains the unusual platform: multiple players standing inside a wraparound underwater projection with shared UI.
- Use the one-page design document as the explanatory core. It contains the platform constraints, hardware/input assumptions, player count, movement model, stages, goals, and backup plans.
- Keep text short around the diagram because the diagram is doing the heavy explanatory work.
- Preserve a slot for trailer/dev-log links. Public URLs are now confirmed for the dev log hub and a Level 1 YouTube video.
- Avoid filling the page with generic game-project copy. CAVERN's story is "designing for a 270-degree CAVE system" first, and underwater shooting/protection mechanics second.

For the rebuild, the correct rhythm is: immersive room hero -> public Level 1 video -> system constraints diagram -> stage/mechanic explanation -> dev-log process strip -> installation/playtest evidence -> dev-log link. The page should not become a generic gallery with repeated duplicate images.

## Visual Asset Interpretation

| Asset | Type | What It Shows | Recommended Use |
| --- | --- | --- | --- |
| `public/images/projects/cavern/cover.webp` | `hero`, `playtest`, `final` | A strong in-room photo of five people standing inside the 270-degree CAVERN projection space. The underwater scene wraps around the room, and a top UI shows ship/object status. This immediately communicates location-based immersion and group play. | Best hero image. Use first because it proves the project exists in a physical immersive room, not just on a monitor. |
| `public/images/projects/cavern/gallery-01.webp` | `diagram`, `mechanic`, `context` | A one-page system/gameplay diagram. It explains the CAVERN space, curved screens, stereo/ODS setup, input devices, player count constraints, shooting mechanic, three-stage structure, player movement model, goals, and backup plans. | Essential process/mechanic image. Use near the top after context, ideally cropped or zoomable because it is dense. |
| `public/images/projects/cavern/gallery-02.webp` | `playtest`, `final`, `hero` | Same core in-room projection photo as the cover, slightly different crop/size. Shows group silhouettes, underwater scene, and UI. | Duplicate of cover. Keep as fallback, but do not use both unless one is needed for a gallery thumbnail. |
| `public/images/projects/cavern/gallery-03.webp` | `discard` | A screenshot of the old Tao Design website/about carousel, not project-specific CAVERN content. | Do not use for the CAVERN case study. It is site migration residue, not project evidence. |
| `public/images/projects/cavern/gallery-04.webp` | `discard` | A black square with no visible project content. | Do not use. Remove from future curated gallery if implementation is later updated. |
| Contact sheet item 1 / `a04444_1a7b...png` | `discard` | Old site/about screenshot. It appears in many routes as shared site content. | Do not use as project content. |
| Contact sheet item 2 and 5 / Tao logo | `discard` | Tao Design identity/logo asset. | Do not use except site branding. |
| Contact sheet item 3 / `a04444_6332...jpg` | `diagram`, `mechanic`, `context` | The CAVERN project one-page diagram, including space constraints, controller plan, shooting mechanic, player route, three-stage level design, and goals. | Use prominently for process/mechanics. This is the best explanatory artifact. |
| Contact sheet item 4 / `a04444_f1fd...jpg` | `hero`, `playtest`, `final` | In-room photo of players inside the underwater CAVERN projection. Shows scale, group play, and final installation feel. | Use as hero/final image. Strongest visual asset for the project. |
| `https://youtu.be/TGdCYzSnRDs` | `video`, `prototype`, `final` | YouTube video titled `cavern Lv1`. Public moving footage of the Level 1 experience. | Use near the top after the hero, as the main motion proof of the experience. Render as responsive YouTube embed with a fallback link. |
| `https://projects.etc.cmu.edu/cavern/blog/` | `process`, `documentation` | Public ETC dev log hub with weekly posts and process images. | Use as an external process link and, if assets are later migrated, as the source for a small weekly process strip. |

## Page Sections To Build

1. Hero: use the in-room CAVERN photo with a one-liner about a 3-5 player underwater co-op experience for a 270-degree projection system.
2. Level Video: embed `cavern Lv1` as the first motion proof, with a fallback YouTube link.
3. Platform Context: explain the CAVERN room, curved screens, ODS/stereo setup, and why this was a location-based design challenge.
4. Design Constraints: show hardware/input limits, no head tracking, shooting deviation, and backup plans.
5. Gameplay Structure: explain the underwater route, shooting interaction, ship protection, contaminated coral, robotic monsters, and flashlight finale.
6. Dev Log Process: link the public dev log hub and optionally show selected process images after they are migrated locally.
7. Playtest / Installation: use the in-room photo to discuss on-site testing, player behavior, feedback, and iteration, staying within confirmed evidence.

## Missing Information / Questions

- Confirmed public Level 1 video: `https://youtu.be/TGdCYzSnRDs`.
- Confirmed public dev log hub: `https://projects.etc.cmu.edu/cavern/blog/`.
- What does ODS stand for in the original project copy, and should the page spell it out for non-technical readers?
- Was the final player count three, four, five, or variable?
- Which input scheme shipped: Valve Index controllers, Vive trackers, POGO pins, fixed cannons, or another backup plan?
- Were there measurable playtest findings or client feedback that can be quoted?
- Can `gallery-03.webp` and `gallery-04.webp` be removed from the curated CAVERN image set in a later implementation pass?
