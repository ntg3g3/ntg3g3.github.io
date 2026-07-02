# Portfolio Workflow

## Goal

Migrate the original Wix portfolio structure into a self-owned static site, then update project weighting to match Yutao's current career stage.

The site should not feel like a brand-new generic portfolio template. It should preserve the old site's image-led layout rhythm, project hierarchy, and light text style while improving hosting, maintainability, image quality, and current professional positioning.

## Skills

`portfolio-content-interpreter`
- Reads old pages, screenshots, diagrams, and assets.
- Produces project briefs in `docs/project-briefs`.

`case-study-layout-designer`
- Turns briefs into layout plans.
- Produces page plans in `docs/layout-plans`.

`personal-website-migration`
- Keeps migration, asset, SEO, deployment, and static-site constraints aligned.

`portfolio-project-manager`
- Coordinates priorities, background chats, automations, acceptance criteria, and Git/GitHub readiness.

## Chats / Agents

Content Understanding Chat:
- Use for interpreting every migrated Wix detail page before another relayout pass.
- Output: `docs/project-briefs/<slug>.md`.
- Each brief must include `Original Wix Page Logic`: the old page's narrative order, image grouping, large-versus-small image emphasis, and why the page was likely arranged that way.
- Briefs should read image content directly where possible, including diagram labels, board layouts, UI text, gameplay screenshots, and process artifacts. File names alone are not enough.

Layout Direction Chat:
- Use after briefs exist.
- Output: `docs/layout-plans/<slug>.md`.
- A layout plan should not be created for a project until the project brief explains the original page logic and visual asset roles.

Implementation Chat:
- Main thread, currently this chat unless the user chooses another.
- Converts approved plans into Astro code.

Visual QA Chat:
- Use after implementation.
- Checks whether pages read like mature case studies.

## Main Input Area

Use the current main chat as the primary input/control room. Background chats should create briefs, layout plans, or QA notes; they should not become the source of product direction unless the user explicitly moves the main thread.

Coordination files:
- `docs/WORK_QUEUE.md`: live task status, owners, next actions, and blockers.
- `docs/DECISIONS.md`: durable product, content, workflow, and deployment decisions.
- `docs/HANDOFF_TEMPLATE.md`: required format for worker/sub-agent completion reports.

Before assigning background work, check `docs/WORK_QUEUE.md`. After receiving worker output, update the queue and record any durable decision in `docs/DECISIONS.md`.

## Automation

Recommended automation:
- A daily PM check-in while the rebuild is active.
- It should inspect `docs/project-briefs`, `docs/layout-plans`, build status, and pending implementation tasks.
- It should report back to the main chat with a concise next-action list.
- It should not modify implementation files unless the user asks.
- It should use `docs/WORK_QUEUE.md` as the source of task status and flag conflicts between the queue, docs, and implementation.

## Version Control

This project should become a Git repository before deployment. GitHub-based hosting is the right end state, but local Git should be initialized first so the work has checkpoints before connecting a deployment provider.

## Current Direction

Primary layout reference:
- Keep the original Wix site's structure and visual logic.
- Use large images and sparse text.
- Let words provide context for image groups rather than become the main content.
- Preserve the old Home / Game Projects / Experience Projects / Archive hierarchy.

Professional weighting:
- Skyweaver remains the largest public work-project signal.
- Last Trigger / previous IGG work can be added after public-safe name, imagery, and links are confirmed.
- The current unannounced project should not be shown as a project page.
- Resume information can update About and positioning, but confidential project details stay off the site.

## Implementation Priority

1. Complete project briefs for all old Wix project detail pages.
2. Review those briefs as a set to recover the original portfolio-wide display logic.
3. Create or update layout plans from the briefs, starting with Dice Adventure, CAVERN, Project Amazon, and the highest-value public work projects.
4. Implement the relayout from approved plans, preserving sparse text and image-led storytelling.
5. Re-run build, route, image, desktop, and mobile checks.

## Relayout Gate

Do not batch-rearrange project pages only from the current `visualSections` data. A page is ready for relayout only when:

- `docs/project-briefs/<slug>.md` exists.
- It includes `Original Wix Page Logic`.
- Its visual asset table explains what each major image communicates, not just where it is stored.
- The proposed layout plan states which parts of the old Wix rhythm are preserved, simplified, or intentionally changed.
- Text remains contextual and sparse unless the original page clearly used text as primary evidence.

Success criteria:
- The page feels like a faithful migration of Tao's old site, not a replacement template.
- Main project hierarchy matches professional relevance.
- Images carry the page; text is short and contextual.
- Old routes and public deployment continue to work.
