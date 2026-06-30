# Deployment

## Current Build

Framework: Astro static site

Build command:

```powershell
pnpm run build
```

Output directory:

```text
dist
```

Node package manager:

```text
pnpm
```

## Recommended Provider

Use GitHub Pages first. This keeps the personal site on the same platform as the source repository and avoids adding a third-party hosting service before it is needed.

Vercel, Netlify, and Cloudflare Pages remain good fallback options if GitHub Pages cannot meet a later requirement.

## GitHub Pages Settings

Recommended repository shape:

```text
ntg3g3.github.io
```

That user-site repository publishes at the root path, which matches the current Astro config and makes a later `taogames.online` custom domain simpler.

Pages source:

```text
GitHub Actions
```

Workflow file:

```text
.github/workflows/deploy-github-pages.yml
```

The workflow installs dependencies with pnpm, runs `pnpm run build`, uploads `dist`, and deploys to GitHub Pages.

## Legacy Routes

GitHub Pages does not use `vercel.json` or Netlify `_redirects`. To keep old Wix URLs from breaking, the site generates static redirect pages from:

```text
src/data/legacyRedirects.ts
src/pages/[legacy].astro
```

These are HTML refresh redirects rather than server-side 301 redirects, but they keep visitors from landing on a broken page.

## Vercel Settings

- Framework preset: Astro
- Build command: `pnpm run build`
- Output directory: `dist`
- Install command: `pnpm install`

The repository includes `vercel.json` only as an optional fallback for Vercel.

## Netlify Settings

- Build command: `pnpm run build`
- Publish directory: `dist`

The repository includes `public/_redirects` only as an optional fallback for Netlify.

## Domain Migration

1. Deploy a preview URL first.
2. Review Home, Archive, About, and representative project pages.
3. Connect `taogames.online` in the hosting provider.
4. Update DNS records only after the preview is approved.
5. Keep Wix active until the new domain resolves correctly.
6. After the switch, test old routes such as `/projects-6`, `/about-9`, and project slugs.

## Do Not Deploy

The original Wix media library lives in:

```text
assets/wix-originals
```

Keep this out of public hosting. The deployed site only needs optimized files in:

```text
public/images/projects
```
