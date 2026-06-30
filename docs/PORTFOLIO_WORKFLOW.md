# Portfolio Workflow

## Goal

Move from a functional static site to a portfolio that understands and presents each project clearly.

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

## Pilot

Pilot projects:
1. Dice Adventure
2. CAVERN

Success criteria:
- Project page explains what the project is in the first screen.
- My role is visible early.
- Diagrams and process images are placed near the text they support.
- Page feels closer to the original Wix case-study style than a generic card/detail layout.
