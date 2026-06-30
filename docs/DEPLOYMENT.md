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

Use Vercel or Netlify for the first public preview. Both are straightforward for Astro and support custom domains.

Cloudflare Pages is also a strong option if `taogames.online` will be managed through Cloudflare DNS.

## Vercel Settings

- Framework preset: Astro
- Build command: `pnpm run build`
- Output directory: `dist`
- Install command: `pnpm install`

The repository includes `vercel.json` for clean URLs and primary old-route redirects.

## Netlify Settings

- Build command: `pnpm run build`
- Publish directory: `dist`

The repository includes `public/_redirects`, which Astro copies into `dist`.

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
