# Personal Website Rebuild Blueprint

## Goal

Rebuild `https://www.taogames.online/` from a Wix-hosted personal portfolio into a self-owned static website that can deploy on a free or low-cost host.

## Reference Model

The project should follow the mature static-site model used by Astro portfolio starters and Astro's official project conventions:
- `src/pages` for routes.
- `src/components` for reusable UI.
- `src/content` or `src/data` for project content.
- `public` for static files served unchanged.
- provider-specific deployment kept thin and documented.

## Chosen Stack

Astro is the default choice.

Why:
- The current website is mostly static content.
- It keeps the shipped JavaScript small.
- It is easy to deploy on Vercel, Netlify, Cloudflare Pages, or GitHub Pages.
- It supports content-driven project pages cleanly.

Use React only if a specific interactive component needs it.

## Planned Structure

```text
PersonalWebsite/
  public/
    images/
      projects/
      site/
  src/
    components/
      layout/
      navigation/
      project/
    content/
      projects/
    data/
    layouts/
    pages/
      index.astro
      archive.astro
      about.astro
      404.astro
    styles/
      global.css
  docs/
    PROJECT_BLUEPRINT.md
    AGENTS_AND_CHATS.md
    CONTENT_INVENTORY.md
    DEPLOYMENT.md
```

## Build Phases

1. Content inventory
   - Record current pages, project names, descriptions, images, links, and metadata.

2. Static site scaffold
   - Create Astro project files and baseline layout.

3. Visual rebuild
   - Recreate navigation, home, archive, about, and project cards.

4. Asset migration
   - Download or replace Wix-hosted images.
   - Rename and optimize assets.

5. QA
   - Check desktop/mobile layouts, links, image loading, accessibility basics, and build output.

6. Deploy
   - Deploy preview first.
   - Connect `taogames.online` only after approval.

## Initial Deployment Preference

Vercel or Netlify is the easiest first deployment path.
Cloudflare Pages is also strong if DNS will be managed through Cloudflare.
GitHub Pages is viable but slightly less convenient for modern build previews.
