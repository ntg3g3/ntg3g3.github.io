---
name: portfolio-content-interpreter
description: Interpret game, interaction design, UX, product design, and research portfolio content for Tao Design. Use when Codex needs to understand old Wix project pages, screenshots, diagrams, system maps, process images, game mechanic diagrams, playtest artifacts, or visual assets and turn them into structured case-study briefs for the PersonalWebsite project.
---

# Portfolio Content Interpreter

## Purpose

Use this skill before rewriting or redesigning a project page. The goal is to understand what the project is, what each visual asset communicates, and what Yutao's contribution should be on the portfolio page.

## Inputs

Prefer raw project artifacts:
- Old route such as `/diceadventure` or `/cavern`
- `docs/CONTENT_INVENTORY.md`
- `assets/wix-originals/wix-assets-manifest.csv`
- Contact sheets in `docs/asset-contact-sheets`
- Current project data in `src/data/projects.ts`
- Current optimized images in `public/images/projects/<slug>`

## Output

Create or update:

```text
docs/project-briefs/<slug>.md
```

Use this structure:

```markdown
# Project Brief: <Title>

## Source Confidence

## Project One-Liner

## Context

## Design Problem

## Audience / Use Case

## My Role

## Key Contributions

## System / Gameplay / Interaction Model

## Process Story

## Visual Asset Interpretation

| Asset | Type | What It Shows | Recommended Use |
| --- | --- | --- | --- |

## Page Sections To Build

## Missing Information / Questions
```

## Interpretation Rules

- Separate confirmed facts from inferred meaning.
- Name the image's communicative role, not just its file name.
- For game projects, identify player goal, core loop, mechanics, constraints, roles, and progression.
- For research projects, identify research question, experimental need, prototype function, study context, and evidence.
- For product/industrial design projects, identify user problem, form/function decision, prototyping process, and final artifact.
- Do not invent awards, metrics, release status, collaborators, tools, or outcomes not supported by artifacts.
- Preserve Yutao's voice as a designer: concrete, reflective, and process-aware.

## Visual Asset Types

Classify images as one or more:
- `hero`: strongest first impression
- `context`: explains setting, client, system, or problem
- `mechanic`: explains rules, inputs, states, or player decisions
- `process`: sketches, ideation, research, whiteboards, paper prototype
- `diagram`: architecture, flow, system map, layout, pipeline
- `prototype`: in-progress build or testable artifact
- `playtest`: users interacting, observation, feedback evidence
- `final`: polished outcome, final screen, final object, trailer still
- `supporting`: useful but secondary
- `discard`: duplicate, logo-only, too low-value, or confusing

## Brief Quality Bar

A good brief lets another agent build the page without re-opening every artifact. It should answer:
- What is this project?
- Why did it exist?
- What did Yutao personally do?
- How does the system/game/product work?
- Which images should appear where, and why?
- What is still uncertain?
