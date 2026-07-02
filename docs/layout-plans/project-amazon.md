# Layout Plan: Project Amazon

Status: pending user review. Do not implement until approved.

## Intent

Project Amazon should read as a playable VR/projection education prototype. It should keep the old Wix proposal-deck rhythm, but no longer sound like a concept-only page. The page should show how Yutao designed an experience/system/game flow that turns cultural and environmental learning themes into a mixed-reality journey.

Confirmed public media:

- Trailer: `https://youtu.be/3DMoqmmHwn4?si=Q7fIxKuM16rhXk2o`
- Boat movement: `https://youtu.be/dXYntPw7LGI?si=WFt8_gQqMJ1WR2Wi`
- Full playthrough: `https://vimeo.com/699960398?fl=pl&fe=cm`
- Gameplay screenshot: `public/images/projects/project-amazon/return-to-base.png`

## Page Rhythm

The old Wix logic should become:

1. Theme and setting.
2. Learning purpose.
3. Projection/VR setup.
4. Interaction/system board.
5. Route/progression diagrams.
6. Playable result screenshot.
7. Trailer, boat movement, and full playthrough videos.

Videos should come after the system diagrams, because the diagrams teach viewers how to read the demo.

## Sections

### 1. Hero: Title / Setting

Preferred hero:
- `public/images/projects/project-amazon/title-screen.webp`

Alternate hero:
- `river-context.webp` if the page should feel less game-menu-like and more immersive.

Recommended:
- Use title screen as the first project signal.
- Use river context immediately after it as the setting image.

Copy direction:
- Title: `Project Amazon`
- Role: `Experience Design / System Design / Game Design`
- One-liner: `A playable VR/projection learning prototype built around Amazon-region themes, route-based exploration, and shared projection context.`

Do not emphasize technical implementation as Yutao's contribution.

### 2. Learning Themes

Visual:
- `theme-summary.webp`

Purpose:
- Explain the old page's River / Study Abroad Safety / Folk Tale / Architecture framing.

Layout:
- Medium-large board with one short paragraph.

Copy direction:
- `The prototype turns cultural, environmental, and travel-safety themes into an embodied learning route.`

### 3. Setting / River Context

Visual:
- `river-context.webp`

Purpose:
- Give the page a sense of place and travel before diagrams appear.

Layout:
- Large atmospheric image.
- Minimal caption.

### 4. Projection And VR Setup

Visual:
- `projection-concept.webp`

Purpose:
- Show that this is a mixed-reality setup, not a standard screen game.

Layout:
- 50/50 split or full-width diagram if labels need size.

Copy direction:
- Projection provides shared context.
- VR provides embodied viewpoint.
- The system links the player's location to shared visual information.

### 5. Interaction System Board

Visual:
- `layout-board.webp`

Purpose:
- This is the central explanatory asset.
- It contains visual UI, pop-up windows, drag-and-drop, video transmission, holo map / mini map, and VR player location.

Layout:
- Full-width large board.
- No aggressive crop.
- One caption that guides what to look for.

### 6. Route And Progression

Visuals:
- `route-map.webp`
- `tree-route-sketch.webp`
- Optional `screen-flow.webp`

Purpose:
- Show the journey structure and progression logic.

Layout:
- Route map and tree sketch as a paired comparison.
- Screen flow below or alongside if it helps.

Copy direction:
- Learning content is triggered along a route instead of being shown as static cards.

### 7. Playable Result

Visual:
- `return-to-base.png`

Purpose:
- Show that the route and boat movement became a playable journey with readable return/base feedback.

Layout:
- Wide image after route/system diagrams.
- Short caption only.

### 8. Demo Videos

Videos:
- Trailer: `https://youtu.be/3DMoqmmHwn4?si=Q7fIxKuM16rhXk2o`
- Boat movement: `https://youtu.be/dXYntPw7LGI?si=WFt8_gQqMJ1WR2Wi`
- Full playthrough: `https://vimeo.com/699960398?fl=pl&fe=cm`

Layout:
- Two responsive 16:9 embeds.
- Desktop: two-column only if width is enough; otherwise stack.
- Mobile: always stack.

Labels:
- `Trailer`
- `Boat movement`
- `Full playthrough`

Fallback:
- Do not show visible external utility links; the video component is enough.

### 9. Closing

Purpose:
- Close with the page's main design value.

Copy direction:
- Yutao designed the experience, system, and game flow for a playable VR/projection learning demo.
- Keep team attribution blank/conservative unless source text is found.

## Implementation Guardrails

- Support YouTube and Vimeo embeds.
- Do not invent team member names.
- Do not emphasize technical implementation as Yutao's role.
- Keep the old deck-like image rhythm.
- Diagrams must be readable.
- Videos should appear after the system diagrams, not as the first thing on the page.
