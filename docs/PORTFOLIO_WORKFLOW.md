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
- Use for interpreting Dice Adventure and CAVERN first.
- Output: `docs/project-briefs/<slug>.md`.

Layout Direction Chat:
- Use after briefs exist.
- Output: `docs/layout-plans/<slug>.md`.

Implementation Chat:
- Main thread, currently this chat unless the user chooses another.
- Converts approved plans into Astro code.

Visual QA Chat:
- Use after implementation.
- Checks whether pages read like mature case studies.

## Main Input Area

Use the current main chat as the primary input/control room. Background chats should create briefs, layout plans, or QA notes; they should not become the source of product direction unless the user explicitly moves the main thread.

## Automation

Recommended automation:
- A daily PM check-in while the rebuild is active.
- It should inspect `docs/project-briefs`, `docs/layout-plans`, build status, and pending implementation tasks.
- It should report back to the main chat with a concise next-action list.
- It should not modify implementation files unless the user asks.

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

1. Rebuild Home to preserve the original Wix layout hierarchy.
2. Keep Skyweaver visually dominant until Last Trigger public assets are confirmed.
3. Rework Dice Adventure back toward its original image-led page structure.
4. Apply the same image-first migration approach to CAVERN and Project Amazon.
5. Only then tune case-study text and SEO.

Success criteria:
- The page feels like a faithful migration of Tao's old site, not a replacement template.
- Main project hierarchy matches professional relevance.
- Images carry the page; text is short and contextual.
- Old routes and public deployment continue to work.
