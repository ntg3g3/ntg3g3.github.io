# Agent And Chat Model

## Roles

Use one primary chat as the coordinator. It owns final decisions, integrates files, and keeps the user-facing status clear.

Use subagents only for bounded side work:
- Site inventory agent: inspect live pages, list content, media, links, and missing pieces.
- Architecture reviewer: review structure and identify over/under-engineering risks.
- Visual QA agent: compare desktop/mobile screenshots against the intended design.
- Deployment agent: prepare provider-specific deployment notes and DNS checklist.

## Suggested Chats

Main Build Chat:
- Scope, implementation, visual iteration, final deployment handoff.

Content Inventory Chat:
- Optional background thread for extracting live Wix content and building `docs/CONTENT_INVENTORY.md`.

Deployment Chat:
- Optional background thread for Vercel/Netlify/GitHub Pages setup notes after the build is stable.

## Coordination Rules

Do not let multiple agents edit the same files at the same time.
Prefer read-only agents for research and QA.
Give worker agents disjoint file ownership if implementation is split.
The coordinator should verify all returned work before treating it as done.
