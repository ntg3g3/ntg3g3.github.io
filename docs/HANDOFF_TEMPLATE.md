# Handoff Template

Use this template whenever a background chat, sub-agent, or automation hands work back to the main PersonalWebsite chat.

The goal is to make every handoff reviewable, bounded, and safe to integrate.

## Standard Handoff

```text
Task ID:
Owner / Agent:
Date:
Status: ready-for-review | blocked | complete | needs-user-decision

Scope:
- Pages / slugs:
- Files reviewed:
- Files changed:

Inputs Used:
- Briefs:
- Layout plans:
- Assets / screenshots:
- External links:

Output:
- Artifact path:
- Summary:

Key Findings:
- Confirmed facts:
- Inferences:
- Uncertain / needs confirmation:

Decisions Needed:
- Decision 1:
- Decision 2:

Recommended Next Action:
- Main chat should:
- User should:

Verification:
- Build/checks run:
- Visual/mobile checks run:
- Known gaps:
```

## Content Understanding Handoff

Use this when producing or updating `docs/project-briefs/<slug>.md`.

```text
Task ID:
Owner / Agent:
Slug:
Status:

Files Changed:
- docs/project-briefs/<slug>.md

Source Material:
- Original Wix route:
- Contact sheet:
- Public links:
- Image folder:

Brief Coverage:
- Original Wix Page Logic:
- Major image roles:
- Confirmed project facts:
- User contribution:
- Public-safety concerns:

Needs Main Review:
- Claims that may be too strong:
- Missing assets or links:
- Questions for Yutao:

Recommended Next Action:
- Approve brief for layout
- Revise brief
- Block pending user input
```

## Layout Direction Handoff

Use this when producing or updating `docs/layout-plans/<slug>.md`.

```text
Task ID:
Owner / Agent:
Slug:
Status:

Files Changed:
- docs/layout-plans/<slug>.md

Inputs:
- Approved brief:
- User decisions:
- Image/contact-sheet references:

Layout Proposal:
- Hero:
- Section order:
- Image sizing:
- Text density:
- Mobile behavior:

Preserved From Old Wix:
- Visual rhythm:
- Important image groups:
- Original narrative logic:

Intentional Changes:
- Simplifications:
- Reordered sections:
- Removed/reduced text:

Implementation Notes:
- Data changes needed:
- Component/CSS changes needed:
- Video/embed needs:

Needs Main Review:
- Risky wording:
- Potential image ownership/reference labels:
- Questions for Yutao:
```

## Visual QA Handoff

Use this after implementation or screenshots.

```text
Task ID:
Owner / Agent:
Pages Checked:
Status:

Inputs:
- Local URL or built pages:
- Screenshots:
- Browser sizes:
- Related briefs/plans:

Findings:
- P0 blocking:
- P1 important:
- P2 polish:

Checks:
- Duplicate images:
- Missing images:
- Text overload:
- Oversized small diagrams:
- Unreadable dense diagrams:
- Layout gaps:
- Mobile overflow:
- Old Wix logic preserved:

Recommended Fixes:
- Data/content:
- CSS/layout:
- Needs user decision:

Verification:
- Build:
- Script:
- Manual browser notes:
```

## Deployment Handoff

Use this before or after deployment.

```text
Task ID:
Owner / Agent:
Status:

Build Source:
- Branch:
- Commit:
- Local build result:

Deployment Target:
- Provider:
- URL:
- Workflow:

Checks:
- Build logs:
- Public URL reachable:
- Old redirects:
- Images/videos:
- Mobile smoke test:

Rollback:
- Previous known-good commit:
- Action needed if deployment fails:

Needs User Decision:
- Custom domain:
- DNS change:
- Public/private repo change:
```

## Review Outcomes

The main chat should close each handoff with one of these outcomes:

- `approved`: Artifact can guide implementation.
- `revise`: Worker should update the artifact with specific changes.
- `blocked`: Waiting for user input, missing asset, or public-safety decision.
- `implemented`: Changes are in `src/` or deployment docs.
- `verified`: Build/QA has passed.

When a handoff outcome changes, update `docs/WORK_QUEUE.md`. If the handoff settles a durable product rule, update `docs/DECISIONS.md`.
