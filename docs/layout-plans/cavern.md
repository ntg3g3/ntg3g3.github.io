# Layout Plan: CAVERN

Status: pending user review. Do not implement until approved.

## Intent

CAVERN should read as a location-based experience design page for a rare physical platform. The main story is not "underwater shooter"; it is "designing a 3-5 player co-op experience around a 270-degree CAVE projection system, its spatial affordances, and its hardware constraints."

New public media changes the page direction:

- Dev log hub: `https://projects.etc.cmu.edu/cavern/blog/`
- YouTube video: `https://youtu.be/TGdCYzSnRDs`
- YouTube title from oEmbed: `cavern Lv1`

## Page Rhythm

The old Wix page was compact and evidence-led. With the dev log and video restored, the rebuilt rhythm should be:

1. In-room installation hero.
2. Level 1 video as immediate motion proof.
3. Platform/system diagram.
4. Stage/mechanic explanation.
5. Dev log process strip or dev log link.
6. Installation/playtest evidence.

## Sections

### 1. Hero: Installation Proof

Use `public/images/projects/cavern/cover.webp`.

Layout:
- Desktop: image-led, around 35-40% text / 60-65% image.
- Mobile: title and one-liner first, then image.

Image handling:
- Preserve the people, curved screen, and underwater projection.
- Do not crop it into an abstract blue background.

Copy direction:
- Title: `CAVERN`
- Subtitle: `Semester Project | Spring 2023`
- One-liner: `A 3-5 player underwater co-op experience designed for a 270-degree CAVE projection system.`
- Role: `LBE / Game Design / Level Design`

### 2. Video: Cavern Lv1

Embed `https://youtu.be/TGdCYzSnRDs`.

Purpose:
- Restore the old Wix video-component feel.
- Show motion and level experience before the reader gets deep into system details.

Layout:
- Large 16:9 responsive iframe.
- Caption: `Level 1 video: public CAVERN prototype footage.`
- Include fallback link: `Open on YouTube`.

Technical requirement later:
- Add YouTube embed support to the project data/page renderer.
- Accept `youtu.be`, `watch?v=`, and `embed` formats.
- No autoplay.

### 3. Platform Context

Purpose:
- Explain the room as the design material.

Visual:
- `public/images/projects/cavern/design-document.webp` or `gallery-01.webp` depending on current asset naming.

Layout:
- Short text introduction.
- Then large readable system diagram, preferably full-width.

Copy direction:
- Explain 270-degree projection, group play, physical play area, tracking/input constraints, and why a planned route matters.
- Avoid overusing unexplained terms like `ODS`; either explain them or keep them secondary.

### 4. Design Constraints

Purpose:
- Make constraints visible as design drivers.

Content:
- Curved screen and wide field of view.
- Multiple local players.
- Controller/tracker constraints.
- No or limited head tracking.
- Shooting direction deviation / backup plans.
- Need for slow, legible route pacing.

Layout:
- Compact constraint matrix.
- Text-led, with optional cropped detail from the system diagram if implementation supports it.

Guardrail:
- Do not claim exactly which backup input shipped unless confirmed.

### 5. Gameplay Structure

Purpose:
- Explain how the underwater co-op game is staged.

Suggested three-part structure:
- `Stage 1`: discover scene / destroy contaminated corals.
- `Stage 2`: protect ship / shoot robotic monsters.
- `Stage 3`: dark finale / flashlight.

Layout:
- Three simple columns on desktop.
- Stacked rows on mobile.
- Keep it visual and short.

### 6. Dev Log Process

Purpose:
- Use the public ETC dev log as process evidence without overloading the page.

Confirmed dev log pages:
- Week 1: `https://projects.etc.cmu.edu/cavern/week-1/`
- Week 2: `https://projects.etc.cmu.edu/cavern/week1wee2/`
- Week 3: `https://projects.etc.cmu.edu/cavern/week-3/`
- Week 4: `https://projects.etc.cmu.edu/cavern/week-4/`
- Week 5: `https://projects.etc.cmu.edu/cavern/week-5/`
- Week 6: `https://projects.etc.cmu.edu/cavern/week-6/`
- Week 7: `https://projects.etc.cmu.edu/cavern/week-7/`
- Week 8: `https://projects.etc.cmu.edu/cavern/week-8/`
- Week 10: `https://projects.etc.cmu.edu/cavern/week-9/`
- Week 11: `https://projects.etc.cmu.edu/cavern/week-11/`
- Week 12: `https://projects.etc.cmu.edu/cavern/week-12/`
- Week 13: `https://projects.etc.cmu.edu/cavern/week-13/`
- Week 14: `https://projects.etc.cmu.edu/cavern/week-14/`

Layout option A, conservative:
- One compact callout with a `View Dev Log` button.

Layout option B, richer:
- A short horizontal strip of 4-6 selected dev-log images after downloading/optimizing them locally.
- Suggested process beats: early concept / storyboard / prototype screenshot / level iteration / final presentation.

Recommendation:
- Start with option A if we want a clean pass.
- Upgrade to option B only after we choose specific images from the dev log.

### 7. Installation / Playtest

Purpose:
- Return to the room after explaining the system.

Visual:
- Reuse in-room image only if a different crop feels meaningful.
- Otherwise keep this section short and rely on the hero + video.

Copy direction:
- Say Yutao designed on-site playtests/surveys and documented player behavior only if kept in existing confirmed copy.
- Avoid invented playtest findings.

### 8. Closing

Purpose:
- Leave the reader with the design lesson.

Copy direction:
- `The room was not just a display surface; it shaped the mechanics, pacing, and level route.`

## Implementation Guardrails

- Do not show non-project residue images (`gallery-03.webp`, black square, site logo) as project evidence.
- Add YouTube embed support before implementing this plan.
- Keep text compact.
- If dev-log images are used, download/optimize local copies rather than hotlinking many WordPress images.
- Keep CAVERN team/role wording conservative. Do not add Kevin or uncertain ownership.
