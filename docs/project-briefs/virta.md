# Project Brief: VirtA

## Source Confidence

High for title, route, role tags, and premise because they are confirmed in `docs/CONTENT_INVENTORY.md` and `src/data/projects.ts`. Medium-high for visual interpretation because `docs/asset-contact-sheets/virta.jpg` and `public/images/projects/virta` show context images, remote-meeting data, attention-point visualizations, UI components, code screenshots, and a storyboard. Medium for exact implementation details because code screenshots are visible but not readable enough to reconstruct architecture. Low for any claim about public release, tested outcomes, or measured effectiveness.

Confirmed sources used: `docs/CONTENT_INVENTORY.md`, `docs/asset-contact-sheets/INDEX.md`, `docs/asset-contact-sheets/virta.jpg`, `src/data/projects.ts`, and `public/images/projects/virta`.

## Project One-Liner

VirtA is an eye-tracking and attention-visualization concept for online conferences and classes, turning remote participants' gaze or attention patterns into a spatial, visual layer.

## Context

Confirmed: VirtA is listed as an Individual Project with Experience Design and Eye-Tracking tags. The project is described as an interactive program to visualize interaction and attention in online conferences.

Confirmed from assets: the page contains remote-meeting context imagery, Zoom-download data, a world/remote context map, attention-point visualizations on a black canvas, UI component boards, code/prototype screenshots, and storyboard panels about online class distraction and camera discomfort.

Inferred: The project was created during or in response to the surge in remote meetings/classes, likely around the COVID-era online learning context shown by Zoom data and remote class scenarios.

## Design Problem

Confirmed: The project visualizes interaction and attention in online conferences.

Inferred: The design problem was that online meetings hide many of the subtle social cues of in-person attention. Participants may be distracted, reluctant to turn on cameras, affected by poor internet, or unable to read whether others are engaged. VirtA explores whether gaze/attention data can create a shared visualization of engagement without requiring everyone to perform constant camera presence.

## Audience / Use Case

Primary audience: online class or conference participants, especially instructors, presenters, and students trying to understand attention dynamics.

Use case: during or after a remote session, the system records attention points and visualizes where people look or how their focus moves. Colored triangular markers and clusters become a readable map of collective attention.

Inferred secondary use case: reflection after a class or meeting, where the visualization helps people see whether focus was distributed, clustered, distracted, or uneven.

## My Role

Confirmed role tags: Individual Project, Experience Design, Eye-Tracking.

Inferred contributions from assets:

- Framed the online-meeting attention problem through visual research and storyboards.
- Designed a visualization language using triangular colored attention markers on a dark canvas.
- Built a software prototype with recording controls and code.
- Designed UI components and system diagrams for the interaction flow.
- Created scenario/storyboard boards to explain why attention visualization matters.

## Key Contributions

- Identified online meeting attention as a social and interaction-design problem, not only a technical tracking problem.
- Created a visual grammar for attention points, clusters, and movement.
- Connected contextual evidence, such as Zoom usage and remote conference platforms, with a prototype interface.
- Used storyboards to communicate user pain points: unstable internet, pets/household distractions, games, camera reluctance, and lower focus in remote settings.
- Showed implementation evidence through code and prototype screenshots.

## System / Gameplay / Interaction Model

Confirmed visual model:

1. The prototype has a black canvas with colored triangular markers.
2. A visible `start recording` control appears in at least one screenshot.
3. The markers appear to represent attention points, gaze samples, participants, or time-based focus traces.
4. UI component boards show controls for navigation, views, or point grouping.
5. Code screenshots indicate a working interactive prototype rather than only static mockups.

Inferred interaction loop:

1. A meeting/class begins.
2. The system records attention or gaze points.
3. Attention points are mapped into a shared visual field.
4. Clustering or color grouping helps show patterns over time.
5. A presenter, teacher, or participant reviews the visualization to understand engagement and distraction.

## Process Story

The original page appears to start from the social context of remote meetings. The first meaningful images are not code screens, but participant photos, global meeting context, and a Zoom data chart. This grounds the project in a widespread behavioral shift.

The next layer moves into user problems through storyboards: poor internet, pets becoming attention anchors, students playing games, people becoming drowsy, and resistance to camera-on participation. After that, the page introduces the prototype: attention points on a black field, UI components, system diagrams, and code views. This order matters because the visualization only makes sense after the viewer understands the social problem.

## Visual Asset Interpretation

| Asset | Type | What It Shows | Recommended Use |
| --- | --- | --- | --- |
| `meeting-context.webp` | hero, context | Polaroid-style remote meeting participant collage. | Use as top context image or paired with the one-liner. |
| `cover.webp` / `gallery-02.webp` | hero, prototype | Original project cover image from the Wix page. | Use as alternate hero if the page wants a more abstract visual. |
| `global-context.webp` | context, diagram | World map and remote participants/conference context. | Use in context section, not as final output. |
| `zoom-data.webp` | context, research | Zoom daily downloads chart and remote-work usage numbers. | Use as compact evidence beside context copy. |
| `research-context.webp` | context | Additional research/context board for online meetings. | Use as supporting context if readable. |
| `storyboard.webp` | process, context | Scenarios about unstable internet, pets, distraction, group focus, and camera reluctance. | Use large; this is the clearest problem-framing image. |
| `user-scenario.webp` | process, context | Scenario board with users and speech bubbles. | Use after storyboard or as secondary scenario evidence. |
| `attention-points-01.webp` | prototype, final | Sparse colored triangular points on black canvas. | Use as simple visual intro to the system language. |
| `attention-points-02.webp` | prototype, final | Clustered colored triangular attention visualization with recording control. | Use wide as main prototype image. |
| `system-diagram.webp` | diagram | Compact system/control diagram. | Use with concise caption explaining data-to-visual loop. |
| `ui-components.webp` | prototype, diagram | Interface components and controls. | Use as a detail image after main visualization. |
| `prototype-code-view.webp` | prototype, process | Code editor with prototype preview. | Use as implementation proof, smaller than visualization assets. |
| `sketch-board.webp` | process | Early sketching and visual thinking board. | Use in process section. |
| `gallery-01.webp`, `gallery-03.webp`, `gallery-04.webp` | supporting | Additional cover/prototype/context stills. | Use sparingly; avoid diluting the main attention story. |

## Original Wix Page Logic

Confirmed from the contact sheet: the old page begins with large contextual visuals and black-background attention visualizations, then includes prototype/code screenshots, UI component boards, global context, storyboard/scenario images, and a Zoom data chart. Several site-logo/about assets appear in the sheet but are not part of the project story.

Inferred layout logic: VirtA's page is a progression from "why online attention is hard" to "how attention can become visible." It should not begin with a dense product explanation. The old layout uses big visual blocks to move through:

1. Remote participants and online-meeting context.
2. Abstract attention points as the core visual identity.
3. Prototype evidence: code, controls, UI components.
4. Storyboard evidence that explains user pain.
5. Data/context chart to anchor the moment in remote-work growth.

The strongest images are high contrast: black canvases with colored triangular markers. These should be treated as large rhythm-setting figures. Text should be brief and explanatory, mostly telling the viewer what the visualization represents.

## Page Sections To Build

1. Remote attention problem: meeting collage plus one short framing paragraph.
2. Scenario/storyboard: why online classes and conferences lose social attention cues.
3. Attention visualization: large black-canvas marker images.
4. Prototype system: UI components, recording control, code/prototype view.
5. Reflection: what the system reveals and what remains uncertain about privacy, consent, and usefulness.

## Missing Information / Questions

- What eye-tracking hardware or software did VirtA use?
- Did the prototype capture real gaze data, simulated data, or manually generated attention points?
- Was the system intended for live meetings, post-session review, or both?
- Were any users tested with the prototype?
- How should the page address privacy/consent around attention tracking?
