---
name: case-study-layout-designer
description: Design and refine long-form portfolio case-study page layouts for Tao Design. Use when Codex needs to convert a project brief into an Astro page structure, decide visual hierarchy, arrange diagrams/screenshots/process images, tune typography/spacing, or make project pages feel like mature game and interaction design portfolio case studies rather than generic web cards.
---

# Case Study Layout Designer

## Purpose

Use this skill after a project brief exists. The goal is to make project pages feel like authored design case studies: clear, image-led, readable, and specific to the project type.

## Inputs

Read as needed:
- `docs/project-briefs/<slug>.md`
- `src/pages/projects/[slug].astro`
- `src/data/projects.ts`
- `src/data/projectGalleries.ts`
- `src/styles/global.css`
- `public/images/projects/<slug>`

## Layout Principles

- Lead with the project's strongest visual and a concise design framing.
- Make the first screen answer: what is this, what kind of work is it, and why should I keep reading?
- Keep project pages long-form, closer to the original Wix case studies than generic portfolio cards.
- Use section rhythm: visual statement, explanatory text, visual evidence, reflection.
- Use diagrams and process images near the text that explains them.
- Avoid dumping all images into a generic gallery when images have different meanings.
- Keep repeated metadata compact: deliverables, time span, team, role.
- Emphasize `My Impact` prominently for hiring/review readers.

## Recommended Case Study Structure

Default structure:

```text
Hero
Project summary + metadata
My Impact
Problem / Context
System or gameplay model
Process sections
Final concept / outcome
Gallery or selected evidence
Reflection / next steps
```

Do not force every project into every section. Choose the sections that match available evidence.

## Layout Patterns

Game project:
- Hero gameplay/result image
- Metadata panel
- My Impact
- Core loop or mechanic explanation
- Level/system/process visuals
- Final demo/gallery

Research prototype:
- Research context
- Prototype goal
- Study or collaboration constraints
- Interaction model
- Evidence and iteration

Industrial/product design:
- Final object/render first
- User problem
- Form/function decisions
- Prototypes and materials
- Final artifact and reflection

Photography/craft archive:
- Visual-first page
- Short context
- Dense image grid
- Minimal process text unless meaningful

## Astro Implementation Guidance

- Prefer data-driven sections in `src/data/projects.ts` only until content grows too large.
- If a project becomes prose-heavy, migrate to a dedicated content file later.
- Create reusable components only when at least two project pages need the same complex structure.
- Keep page-specific richness possible; not every project page should look identical.
- Ensure mobile layouts collapse cleanly and image captions do not crowd.

## QA Checklist

Before considering a project page improved:
- The hero image is relevant and not awkwardly cropped.
- The top third of the page clearly communicates project type and value.
- My role/contribution is visible without scrolling too far.
- Images are not interchangeable decoration; each section uses visuals as evidence.
- Long sections are broken with headings, metadata, or images.
- Mobile layout avoids cramped two-column text.
- Build passes.
