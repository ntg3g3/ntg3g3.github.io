# Git And GitHub Plan

## Recommendation

Initialize local Git before deploying or connecting GitHub.

GitHub-based hosting is the right destination, but Git should become the local source of truth first. That gives the project checkpoints before deployment automation starts.

## Why Git Is Needed

- The project now has many generated and hand-edited files.
- Case-study rewriting will involve iterative design changes.
- Background chats may produce artifacts at different times.
- Deployment providers work best when connected to a GitHub repository.
- Rollback becomes much safer once each good state is committed.

## What Not To Commit

Already covered by `.gitignore`:

```text
node_modules/
dist/
.astro/
.tmp-appdata/
.pnpm-store/
assets/wix-originals/
```

The optimized deployable images in `public/images/projects` should be committed.

## Suggested Sequence

1. Confirm current site builds.
2. Initialize local Git in `E:\PersonalWebsite`.
3. Create the first commit.
4. Create a private GitHub repository.
5. Push the local repository to GitHub.
6. Connect Vercel/Netlify/Cloudflare Pages to GitHub.

## First Commit Scope

Include:
- Astro source files
- project-local skills and agents
- docs and workflow files
- optimized public images
- package files and lockfile

Exclude:
- raw Wix originals
- dependencies
- build output
