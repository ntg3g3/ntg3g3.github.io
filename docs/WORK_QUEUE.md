# Work Queue

This is the single source of truth for PersonalWebsite task status across the main chat, background chats, sub-agents, and automations.

## Status Legend

- `backlog`: Known work, not ready or not prioritized.
- `ready`: Inputs exist and a worker can start.
- `in-progress`: Someone is actively working on it.
- `needs-review`: Artifact or implementation exists and needs main-thread or Yutao review.
- `approved`: Reviewed and accepted as direction.
- `implemented`: Reflected in `src/` or deployed content.
- `verified`: Build/QA checks passed.
- `blocked`: Cannot move without user input, missing asset, missing link, or public-safety confirmation.

## Ownership Rules

- Main Build Chat owns final decisions, implementation integration, verification, Git, and deployment.
- Content Understanding workers own only `docs/project-briefs/<slug>.md`.
- Layout Direction workers own only `docs/layout-plans/<slug>.md`.
- Visual QA workers should write findings to `docs/qa/<slug>.md` or return concise notes to the main chat.
- Deployment workers own `docs/DEPLOYMENT.md` and deployment checklists only.
- No background worker should edit `src/` unless the main chat explicitly assigns a narrow implementation task.

## Current Milestones

| Milestone | Status | Owner | Next Action | Notes |
| --- | --- | --- | --- | --- |
| Recover Wix content and assets | verified | Main + Content | Keep raw originals out of deploy path | Optimized images live under `public/images/projects`. |
| Project briefs for old Wix pages | needs-review | Content workers | Review briefs as needed before further relayout | All old Wix detail pages have briefs, but quality varies by page. |
| Sitewide standards pass | verified | Main Build Chat | Deploy verified build | 20 legacy project pages, Home/About/Archive, image refs, mobile overflow, and build checks passed. |
| Priority relayout pass | needs-review | Main Build Chat | Review local browser feedback for Dice, CAVERN, Project Amazon | Current changes are local unless deployed later. |
| Multi-agent operating layer | in-progress | Main Build Chat | Use this queue plus `DECISIONS` and `HANDOFF_TEMPLATE` for future delegation | Created to reduce single-thread drift. |
| Original Wix structure re-audit | verified | Main Build Chat | Accepted adjustments implemented for CAVERN and Project Amazon; Dice paper-prototype recommendation rejected per user-confirmed provenance | Preserve narrative order, image grouping, and layout rhythm as much as possible. |
| Git checkpoint | verified | Main Build Chat | Push verified checkpoint | Commit `d09cf31` created for the sitewide pass. |
| Public deploy update | in-progress | Main Build Chat / Deployment | Push `main` to trigger GitHub Pages | User has asked to continue toward deployment; GitHub Pages workflow exists. |

## Project Queue

| Project | Brief | Layout Plan | Implementation | QA | Owner | Next Action | Blocker / Note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Home / project hierarchy | partial | homepage-card | partial | needs-review | Main Build Chat | Browser-review homepage hierarchy before deploy | Skyweaver remains largest public work signal; Last Trigger is a public-safe professional card. |
| Skyweaver | partial | backlog | partial | backlog | Main Build Chat | Preserve as major public work signal | External public work page; no deep case study yet. |
| Last Trigger | needs-review | homepage-card | partial | needs-review | Main Build Chat | Keep homepage-only unless more public-safe material is added | Current unannounced project must not be shown. |
| Dice Adventure | approved | approved | implemented | needs-review | Main Build Chat | Browser-review image set after `docs/qa/dice-adventure-image-review.md` cleanup | Do not claim final AI study usage; role is game design, not implementation. |
| CAVERN | approved | approved | implemented | verified | Main Build Chat | Browser-review the more compact hero-to-video-to-design-document rhythm | Dev log and YouTube restored; conservative team/role wording. |
| Project Amazon | approved | approved | implemented | verified | Main Build Chat | Browser-review the trial `title-screen.webp` hero, restored learning themes, and route layout | Do not invent team members; role is experience/system/game design. |
| RoblearnX | needs-review | batch baseline | baseline | needs-review | Main Build Chat | Verify compact baseline in browser/mobile | Lower priority than main game projects. |
| Cyberland 2021 | needs-review | batch baseline | baseline | needs-review | Main Build Chat | Verify body-tracking diagram readability | Lower priority. |
| Soul Ferry | needs-review | batch baseline | baseline | needs-review | Main Build Chat | Verify concept/interaction/VR rhythm | Lower priority. |
| Remember Me | needs-review | batch baseline | baseline | needs-review | Main Build Chat | Verify sketch/object/AR/final-loop order | Lower priority. |
| Bellum | needs-review | batch baseline | baseline | needs-review | Main Build Chat | Verify misinformation system and feedback grouping | Lower priority. |
| Sound Drop | needs-review | batch baseline | baseline | needs-review | Main Build Chat | Verify chart and experiment image readability | Lower priority. |
| Virta | needs-review | batch baseline | baseline | needs-review | Main Build Chat | Verify attention visualization progression | Lower priority. |
| WristX | needs-review | batch baseline | baseline | needs-review | Main Build Chat | Verify wearable/system/product evidence grouping | Lower priority. |
| Roominate | needs-review | batch baseline | baseline | needs-review | Main Build Chat | Verify long page and motion-loop grouping | Lower priority but asset-heavy. |
| In-city Short Distance Ferry Terminal | needs-review | archive-gallery | baseline | needs-review | Main Build Chat | Verify archive/process-gallery balance | Lower priority. |
| Affix | needs-review | archive-gallery | baseline | needs-review | Main Build Chat | Verify archive/product-gallery balance | Lower priority. |
| Botto | needs-review | archive-gallery | baseline | needs-review | Main Build Chat | Verify archive/product-gallery balance | Lower priority. |
| Product Design Intern | needs-review | archive-gallery | baseline | needs-review | Main Build Chat | Verify gallery-forward treatment | Early work; keep explanation minimal. |
| Soft Goods Project | needs-review | archive-gallery | baseline | needs-review | Main Build Chat | Verify gallery-forward treatment | Early work; keep explanation minimal. |
| Photography | needs-review | archive-gallery | baseline | needs-review | Main Build Chat | Verify gallery-only page has no explanatory prose | User explicitly requested no explanation. |
| Woodcrafts | needs-review | archive-gallery | baseline | needs-review | Main Build Chat | Verify gallery-forward treatment | Early work; keep explanation minimal. |
| Metalcrafts | needs-review | archive-gallery | baseline | needs-review | Main Build Chat | Verify metal-looking folded object grouping | Early work; keep explanation minimal. |

## Ready-To-Delegate Tasks

Use the task blocks below when starting background work.

### T-QA-001: Priority Page Visual QA

- Owner: Visual QA worker
- Scope: `/projects/dice-adventure`, `/projects/cavern`, `/projects/project-amazon`
- Inputs: `docs/project-briefs/*.md`, `docs/layout-plans/*.md`, current local site or screenshots
- Allowed files: `docs/qa/priority-pages.md`
- Forbidden files: `src/`, `public/`, `.github/`
- Output: Concrete findings grouped by page and severity
- Definition of Done: Calls out duplicate images, oversized/undersized diagrams, text overload, mobile risks, and places where old Wix logic is lost
- Needs main-thread decision: Any proposed content change or major layout change

### T-CONTENT-001: Last Trigger Public-Safe Brief

- Owner: Content Understanding worker
- Scope: Last Trigger only
- Inputs: resume facts, public Google Play PDF/link, `public/images/projects/last-trigger`
- Allowed files: `docs/project-briefs/last-trigger.md`
- Forbidden files: `src/`, `public/`, deployment files
- Output: Public-safe brief with confirmed facts and uncertain items separated
- Definition of Done: Does not mention confidential current work; distinguishes public store facts from inferred role details
- Needs main-thread decision: Whether/where to place Last Trigger on home and projects pages

### T-LAYOUT-001: Archive Gallery Plan

- Owner: Layout Direction worker
- Scope: `woodcrafts`, `metalcrafts`, `photography`, `soft-goods-project`, `product-design-intern`
- Inputs: related briefs and image folders
- Allowed files: `docs/layout-plans/archive-gallery.md`
- Forbidden files: `src/`, `public/`
- Output: One shared archive/gallery layout plan with project-specific notes
- Definition of Done: Photography has no explanatory text; early work is visually preserved but de-emphasized
- Needs main-thread decision: Any homepage/archive hierarchy change

### T-AUDIT-001: Original Wix Structure Re-Audit For Priority Pages

- Owner: Content Understanding + Layout Direction workers
- Scope: `dice-adventure`, `cavern`, `project-amazon`
- Inputs: original Wix routes if reachable, `docs/asset-contact-sheets`, `docs/project-briefs`, `docs/layout-plans`, current local pages
- Allowed files: `docs/layout-plans/original-structure-audit-priority.md`
- Forbidden files: `src/`, `public/`, deployment files
- Output: Comparison of original Wix narrative structure versus current rebuilt page structure
- Definition of Done: For each page, list original section order, image grouping, large/small image hierarchy, current drift, and recommended faithful adjustments
- Needs main-thread decision: Any implementation change that departs from the original Wix structure for professional-positioning reasons

## Update Rules

1. Every background task must end with a handoff using `docs/HANDOFF_TEMPLATE.md`.
2. The main chat updates this file after accepting, rejecting, or revising a worker artifact.
3. If a task changes `src/`, it must include a build or verification note before moving to `verified`.
4. If user feedback changes direction, record the durable decision in `docs/DECISIONS.md` and update affected queue rows.
