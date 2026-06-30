# Agents And Chats

## Skill

Created project-local skill:

`E:\PersonalWebsite\.codex\skills\personal-website-migration`

Use it for Wix-to-static migration, content inventory, Astro structure, visual QA, and deployment handoff.

## Agent Roles

Primary coordinator:
- Owns the project direction.
- Writes and integrates final files.
- Keeps decisions consistent.

Architecture reviewer:
- Reviews whether the stack and structure are appropriate.
- Flags over-engineering or missing pieces.

Content inventory agent:
- Extracts current Wix pages, project content, images, and links.
- Produces `docs/CONTENT_INVENTORY.md`.

Visual QA agent:
- Checks desktop and mobile screenshots.
- Flags spacing, overflow, image, and navigation issues.

Deployment agent:
- Prepares deployment provider notes and DNS checklist.

## Chat Plan

Main chat:
- Continue here for the actual build.

Optional background chat: Content Inventory
- Use if live-site extraction becomes time-consuming.
- Output should be merged into `docs/CONTENT_INVENTORY.md`.

Optional background chat: Deployment
- Use after the site builds locally.
- Output should be merged into `docs/DEPLOYMENT.md`.

## Working Rule

Keep implementation centralized unless a task is clearly independent. Read-only agents are safe to run in parallel; editing agents need disjoint file ownership.
