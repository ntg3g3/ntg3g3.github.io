# Layout Plan: CAVERN

## Layout Goal

Make CAVERN read as a location-based experience design case study. The page should foreground the rare physical platform first: a 270-degree CAVE projection room with group play, controller/tracking constraints, and an underwater co-op experience designed around what the room can and cannot do.

The top third should answer: this is a 3-5 player immersive multiplayer demo for a specialized projection system, Yutao designed mechanics/levels around platform constraints, and the strongest evidence is the in-room play photo plus the system/gameplay diagram.

## Recommended Section Order

1. Hero
2. Project summary + compact metadata
3. My Impact
4. Platform Context
5. Design Constraints
6. Gameplay Structure
7. Level Design
8. Playtest / Installation
9. Handoff / Dev Logs / Trailer
10. Reflection

## Section Direction

### 1. Hero

Use `public/images/projects/cavern/cover.webp` as the hero image.

Purpose:
- Prove immediately that this is a physical room-scale projection experience.
- Show scale, group participation, wraparound underwater visuals, and UI.
- Avoid making the project look like a normal screen-based game.

Layout:
- Desktop: image-led, roughly 40% text / 60% image.
- Title and one-liner should sit beside the image, not in a small card.
- Suggested one-liner: "A 3-5 player underwater co-op experience designed for a 270-degree CAVE projection system."

Image handling:
- Preserve the silhouettes, projected environment, and room curvature.
- Avoid crop positions that turn the image into an abstract blue background.

Mobile:
- Stack title/summary first, then the in-room image.
- Use a taller image crop if needed so the people and wraparound screen remain readable.

### 2. Project Summary + Compact Metadata

Use the current overview/facts pattern, but keep it concise.

Content emphasis:
- Platform: Steve Audia's C.A.V.E.R.N. system.
- Space: 270-degree circular screen, 20-foot-wide play area, omnidirectional stereoscopy.
- Deliverable: cooperative multiplayer experience and documentation for hand-off.
- Role: LBE / Game Design / Level Design.
- Team and time span.

Layout:
- Desktop: summary 60%, metadata 40%.
- Mobile: summary first, facts after.
- Spell out technical terms where possible; if ODS remains unexplained, avoid leaning on it as a primary hook.

### 3. My Impact

Place before platform/process detail.

Purpose:
- Make Yutao's role visible before the page becomes hardware-heavy.
- Frame contributions around design decisions, not only production support.

Recommended emphasis:
- Researched location-based games and immersive experiences.
- Proposed concepts to client/team.
- Designed and tuned core mechanics, encounters, and level beats.
- Designed on-site playtests and surveys.
- Documented player behavior and adjusted design.
- Wrote dev logs/presentations and supported task tracking.

Layout:
- Desktop: two-column impact grid works.
- Mobile: single column.
- Keep each item direct and active.

### 4. Platform Context

Narrative role:
- Explain the CAVERN room as the design material.
- Help readers understand why this was a location-based design challenge rather than a standard game.

Primary visual:
- `public/images/projects/cavern/gallery-01.webp`, the one-page system/gameplay diagram.

Layout:
- Desktop: text 40%, diagram 60%.
- The diagram is dense, so it should be large, possibly full-width after a short intro paragraph.
- Add a caption guiding attention to curved screens, player count, controllers/trackers, planned route, and stage structure.

Mobile:
- Do not crop the diagram to 16:10 if it makes text unreadable.
- Consider a full-width diagram with a short caption and a follow-up bullet/callout summarizing the key constraints.

### 5. Design Constraints

Narrative role:
- Make the platform limitations part of the design story.
- Constraints from the brief: curved screens, stereo/ODS setup, controller/tracker limits, limited support for more than two tracked players, no head tracking, and shooting direction deviation.

Visual:
- Reuse a cropped/zoomed portion of `gallery-01.webp` if implementation supports image crops.
- If crop support is not available, keep this text-led and refer to the previous diagram.

Layout:
- Use a compact constraint matrix:
  - Physical space
  - Tracking/input
  - Player count
  - Aiming/shooting
  - Backup plans
- Desktop: two columns of short text blocks.
- Mobile: single column.

Content guardrail:
- Avoid claiming which backup input shipped unless confirmed.
- Present backup plans as design considerations.

### 6. Gameplay Structure

Narrative role:
- Explain the underwater co-op flow and how the experience stays legible for a group in a wraparound room.

Content:
- Players occupy a shared physical space facing a panoramic underwater scene.
- The experience moves through a planned route.
- Shooting interaction targets contaminated corals / robotic monsters.
- UI indicators communicate status across the display.
- The stage goals move from discovery to protection to a darker finale with flashlight mechanic.

Visual:
- `gallery-01.webp` can anchor this section if not already overused.
- If later assets or trailer frames are recovered, use them here.

Layout:
- Desktop: image 55%, text 45% if using a visual; otherwise text-led with a small stage-flow diagram.
- A simple three-stage flow would work well:
  - Stage 1: discover scene / laser / contaminated corals
  - Stage 2: protect ship / projectile / robotic monsters
  - Stage 3: flashlight / dark finale

Mobile:
- Stage flow becomes stacked cards or short rows.
- Avoid long paragraphs; the experience structure should scan quickly.

### 7. Level Design

Narrative role:
- Connect Yutao's level design role to the staged route and physical movement constraints.

Content:
- Slow, guided movement.
- Fixed/planned route.
- Stage pacing from discovery to pressure to finale.
- Readability across a large shared screen.
- Ship integrity and target destruction as status goals.

Visual:
- Use the system diagram if it shows the route/stages clearly.
- If additional dev-log or GDD assets are recovered, use them here.

Layout:
- Desktop: 50/50, with diagram or stage sketch beside explanatory text.
- Mobile: text first, image second, because the section explains design reasoning.

### 8. Playtest / Installation

Narrative role:
- Return to the real room and show the experience in use.
- Discuss on-site playtests, surveys, observed player behavior, and iteration, staying within confirmed evidence.

Visual:
- Use `cover.webp` or `gallery-02.webp`.
- Because `gallery-02.webp` duplicates the cover, only reuse it if the crop/aspect ratio helps this section. Otherwise use a text-led section with the hero image already carrying the visual proof.

Layout:
- Desktop: large image band or 60% image / 40% text.
- Mobile: full-width image with concise caption.

Content guardrail:
- Do not invent playtest findings.
- Say "designed on-site playtests and surveys" and "documented player behavior" unless more specific findings are available.

### 9. Handoff / Dev Logs / Trailer

Narrative role:
- Acknowledge the original page linked dev logs and a trailer, while avoiding dead or unconfirmed links.

Content:
- Documentation for hand-off.
- Dev logs/presentations.
- Trailer placeholder if public URL is later confirmed.

Layout:
- Compact callout or short section, not a major visual break unless media becomes available.
- If final links are found later, this can become a media/embed section.

Mobile:
- Keep links/buttons full-width only if there are confirmed URLs.

### 10. Reflection

Narrative role:
- Close with what the case study demonstrates: designing for a specific physical system, balancing spectacle with legibility, and making group coordination work under hardware constraints.

Layout:
- Text-led.
- Optional short takeaway line: "The room was not just a display surface; it shaped the mechanics, pacing, and level route."

## Image Priority

1. `cover.webp`: hero / installation proof
2. `gallery-01.webp`: platform context, constraints, gameplay structure
3. `gallery-02.webp`: duplicate in-room photo, use only as fallback or if crop differs meaningfully
4. `gallery-03.webp`: discard; old Tao Design website/about carousel, not CAVERN evidence
5. `gallery-04.webp`: discard; black square / no useful visible content

## Text / Image Rhythm

- Hero: 40% text / 60% image.
- Overview: 60% text / 40% metadata.
- My Impact: text cards.
- Platform Context: 40% text / 60% diagram, or short intro plus full-width diagram.
- Design Constraints: text-led matrix, with optional diagram crop.
- Gameplay Structure: balanced, or stage-flow-led if no additional visual exists.
- Level Design: 50% text / 50% diagram or route/stage visual.
- Playtest / Installation: image-led.
- Handoff: compact text/link area.
- Reflection: text-led.

## Navigation Labels

Keep jump-nav labels short:
- Impact
- Platform
- Constraints
- Gameplay
- Level Design
- Playtest
- Handoff
- Reflection

## Mobile Notes

- The hero photo must preserve people + screen curvature; avoid narrow crops that lose the installation context.
- Dense diagrams should not be forced into the current gallery image crop if that makes labels unreadable.
- Use stacked sections below `860px`; no cramped two-column constraint matrix.
- Keep captions outside images, especially for the diagram.
- If the one-page diagram is too small on mobile, add a short text summary immediately after it so readers still get the point.
- Do not show `gallery-03.webp` or `gallery-04.webp` as CAVERN project evidence.

## Implementation Scope Guidance

CAVERN can work with the current data-driven page only as a first pass, but it needs curated image placement. The bottom gallery should not blindly show all four gallery images because two are non-project or unusable. A later implementation should either curate `projectGalleries` for CAVERN or allow per-section media so the hero photo and system diagram appear near the explanations they support.
