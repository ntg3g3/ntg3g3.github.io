# Project Model

## Recommended Stack

Use Astro as the default framework for this project.

Rationale:
- The current site is primarily a portfolio and archive, which is static-first.
- Astro keeps JavaScript minimal by default.
- Pages, components, content collections, and static assets have clear ownership boundaries.
- It deploys cleanly to Vercel, Netlify, Cloudflare Pages, and GitHub Pages.

Use React only as isolated Astro islands if a component needs state or client-side interaction.

Avoid Next.js for the first version unless new requirements appear: login, server APIs, database-backed CMS, live dashboards, or complex app flows.

## Target Repository Structure

```text
PersonalWebsite/
  public/
    images/
      projects/
      site/
    favicon.svg
  src/
    assets/
    components/
      layout/
      project/
      navigation/
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
  astro.config.mjs
  package.json
  tsconfig.json
```

## Content Model

Represent each project with structured fields:
- `title`
- `slug`
- `year`
- `role`
- `summary`
- `description`
- `coverImage`
- `gallery`
- `platforms`
- `links`
- `tags`
- `featured`

Use content files when project descriptions are prose-heavy. Use a typed data file when the content is mostly short metadata.

## Pages

Home:
- First-screen identity signal: Tao Games / Tao / portfolio name.
- Featured projects.
- Short personal positioning.
- Clear links to Archive and About.

Archive:
- Complete project list.
- Filtering can wait unless the project count makes scanning difficult.

About:
- Bio, focus, contact links, selected experience, and social links.

Project detail pages:
- Add only if the current Wix site has enough detail per project or the user wants richer case studies.

## Assets

Keep original exported/downloaded images in `public/images/originals` if useful.
Place optimized web images in `public/images/projects` or `src/assets` depending on the framework pipeline.
Prefer descriptive filenames and stable slugs over Wix-generated names.

## Deployment

Recommended order:
1. Local build.
2. Deploy preview on Vercel or Netlify.
3. Connect custom domain.
4. Update DNS only after preview is approved.
5. Keep Wix active until the new domain routing is confirmed.
