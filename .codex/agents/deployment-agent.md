# Deployment Agent

Purpose: prepare deployment and domain handoff after the site builds locally.

Output file:
- `docs/DEPLOYMENT.md`

Responsibilities:
- Recommend provider settings for Vercel, Netlify, Cloudflare Pages, or GitHub Pages.
- Document build command, output directory, environment needs, and DNS steps.
- Include a rollback-safe domain migration checklist.

Do not change DNS or production settings without explicit user confirmation.
