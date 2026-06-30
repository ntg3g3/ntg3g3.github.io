---
name: personal-website-migration
description: Migrate or rebuild a personal portfolio/indie-game website from Wix or another hosted builder into a self-owned static site. Use for planning, content inventory, visual replication, Astro/static-site implementation, image asset handling, SEO, responsive QA, and deployment handoff for taogames.online or similar portfolio sites.
---

# Personal Website Migration

## Workflow

Use this skill when rebuilding the taogames.online Wix site or maintaining its static replacement.

1. Inventory the live site before coding.
   - Capture pages, navigation, project list, media, external links, page titles, metadata, and any hidden functionality such as forms or embeds.
   - Treat Wix source code as non-portable. Rebuild the presentation and content, not Wix internals.

2. Choose the lightest stack that fits.
   - Prefer Astro for mostly static portfolio, archive, and about pages.
   - Add React islands only for genuinely interactive components.
   - Avoid Next.js unless the site needs server rendering, auth, API routes, dashboard features, or complex app behavior.

3. Keep content separate from layout.
   - Store project data in Astro content collections or typed data files.
   - Put reusable UI in components.
   - Put route-level pages in `src/pages`.
   - Put static assets that should be served unchanged in `public`.

4. Rebuild visually, then improve responsibly.
   - Match the existing site's brand signals, typography mood, navigation, project hierarchy, and spacing.
   - Improve accessibility, mobile layout, image loading, and SEO where it does not change the user's intended identity.
   - Do not introduce a marketing-style landing page unless the user asks for one.

5. Verify before deployment.
   - Run local build checks.
   - Preview desktop and mobile layouts.
   - Check links, images, metadata, and 404 behavior.
   - Document deployment settings and DNS changes.

## Reference Loading

Read `references/project-model.md` when planning or changing the project structure.
Read `references/agent-model.md` when splitting work across agents or chats.
