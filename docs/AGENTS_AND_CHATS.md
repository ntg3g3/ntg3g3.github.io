# Agents And Chats

## Current Operating Model

The current main chat is the active control room.

Other chats/agents are useful, but they should not become silent parallel decision-makers. Their job is to produce bounded artifacts that the main chat reviews with Yutao before implementation.

Use these coordination files before starting or closing background work:
- `docs/WORK_QUEUE.md` for status, owner, next action, and blocker tracking.
- `docs/DECISIONS.md` for durable user-confirmed product and workflow decisions.
- `docs/HANDOFF_TEMPLATE.md` for background worker completion reports.

## Active / Background Boundary

### Main Build Chat

Status: active.

Owns:
- Product direction and user alignment.
- Final decisions after Yutao review.
- Implementation in Astro/data/CSS.
- Build checks, local preview checks, Git commits, and deployment.
- Final wording when there are conflicting interpretations.

Should not:
- Let worker artifacts directly become implementation without review.
- Batch-rearrange project pages before the relevant brief and layout plan are approved.

### Content Understanding Chat / Workers

Status: background, artifact-producing.

Owns:
- Reading old Wix pages, contact sheets, project images, diagrams, videos, and dev logs.
- Writing `docs/project-briefs/<slug>.md`.
- Separating confirmed facts from inferred meaning.
- Explaining `Original Wix Page Logic`.
- Identifying unclear team roles, missing links, and public-safety questions.

Does not own:
- Page implementation.
- Final copy decisions.
- Visual styling.
- Deployment.

Output:
- `docs/project-briefs/<slug>.md`

Completion rule:
- A content task is complete only when the brief explains what the major images mean and how the old page was arranged.

### Layout Direction Chat / Workers

Status: background, artifact-producing.

Owns:
- Turning approved briefs into layout plans.
- Deciding visual hierarchy, section order, image size, and text/image rhythm.
- Calling out implementation requirements such as YouTube embeds or gallery variants.

Does not own:
- Editing `src/` implementation files unless explicitly assigned.
- Deploying.
- Changing project facts.

Output:
- `docs/layout-plans/<slug>.md`

Completion rule:
- A layout plan is complete only when it can be reviewed by Yutao before page implementation.

### Visual QA Chat / Worker

Status: optional background.

Owns:
- Reviewing local screenshots after implementation.
- Checking whether the page still feels image-led and close to the original Wix logic.
- Flagging text overload, image cropping, mobile overflow, and misleading media placement.

Output:
- QA notes in `docs/` or concise findings in the main chat.

Does not own:
- Product decisions.
- Silent code changes unless specifically assigned a narrow fix.

### Deployment / DNS Chat

Status: optional background.

Owns:
- GitHub Pages status checks.
- Deployment notes.
- DNS/custom domain checklist.

Does not own:
- Portfolio content/layout decisions.

Output:
- `docs/DEPLOYMENT.md` updates or main-chat deployment summary.

## Skill Map

Use these project-local skills:

- `portfolio-content-interpreter`: content briefs and image interpretation.
- `case-study-layout-designer`: layout plans and visual hierarchy.
- `portfolio-project-manager`: prioritization, acceptance criteria, chat boundaries.
- `personal-website-migration`: Wix migration, static-site constraints, deployment handoff.

## Current Artifact Status

The canonical task and artifact status now lives in `docs/WORK_QUEUE.md`.

Do not infer current status only from this file or from chat history. Check the queue before assigning or resuming work.

## Decision Rules

1. Brief before layout.
2. Layout plan before implementation.
3. Main chat review before code changes.
4. User approval before major page relayout.
5. If a project has unclear team ownership, use conservative role wording.
6. If images are references, label them as references.
7. If media is external, keep a fallback link.
8. Durable user-confirmed direction must be recorded in `docs/DECISIONS.md`.
9. Background work must end with a handoff using `docs/HANDOFF_TEMPLATE.md`.

## Current Priority

Read `docs/WORK_QUEUE.md` for the live priority order.
