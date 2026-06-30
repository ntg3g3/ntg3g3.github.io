---
name: portfolio-project-manager
description: Coordinate the PersonalWebsite/Tao Design portfolio rebuild as a product/project manager. Use when Codex needs to prioritize work, define milestones, create acceptance criteria, manage main-thread versus background-chat responsibilities, decide automation cadence, track blockers, evaluate Git/GitHub readiness, or turn content/layout outputs into implementation tasks.
---

# Portfolio Project Manager

## Operating Model

Use the current main chat as the product owner / PM / implementation coordinator unless the user explicitly chooses another main thread.

Background chats should produce artifacts, not make implementation decisions alone:
- Content Understanding Chat outputs `docs/project-briefs/<slug>.md`.
- Layout Direction Chat outputs `docs/layout-plans/<slug>.md`.
- Main chat reviews, decides, implements, and verifies.

## Task Flow

1. Collect or update a project brief.
2. Produce a layout plan.
3. Convert approved plan into Astro/data/CSS changes.
4. Run build verification.
5. Review in browser.
6. Record remaining issues.

## Priority Rules

Prioritize by portfolio value:
1. Main game projects: Dice Adventure, CAVERN, Project Amazon, Skyweaver.
2. Other game/experience projects.
3. Archive/product/craft pages.
4. SEO/deployment polish.

Prioritize tasks that reduce uncertainty:
- understand images before redesigning layouts
- write layout plans before broad implementation
- make one or two pages excellent before batch-applying patterns

## Acceptance Criteria

A project page is ready for review when:
- The first screen communicates project type, context, and visual identity.
- My role and contribution are visible early.
- Images are placed as evidence, not decoration.
- Diagrams/process images have nearby explanation.
- Old route redirects are preserved.
- Mobile layout remains readable.
- `pnpm run build` passes.

## Automation Guidance

Use automation for light PM check-ins, not heavy autonomous rewrites. A useful automation should:
- inspect briefs/plans/build status
- summarize next actions
- remind the main chat when background artifacts are ready
- avoid editing code unless explicitly requested

Do not schedule noisy frequent check-ins. Prefer daily or manual-trigger PM review while the rebuild is active.

## Git/GitHub Guidance

Use local Git before deployment. GitHub becomes the remote backup and deployment source.

Recommended sequence:
1. Ensure `.gitignore` excludes `node_modules`, `dist`, `.astro`, `.pnpm-store`, and `assets/wix-originals`.
2. Initialize local Git in `E:\PersonalWebsite`.
3. Commit the current working version.
4. Create a private GitHub repository.
5. Push to GitHub.
6. Connect Vercel/Netlify/Cloudflare Pages to GitHub.

Do not rely only on GitHub deployment without local Git history; GitHub-based hosting works best when Git is already the source of truth.
