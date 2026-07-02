# Decisions

This log records durable product, content, workflow, and deployment decisions for the PersonalWebsite rebuild. Use it to avoid re-litigating settled direction across chats and agents.

## Decision Status

- `active`: Current direction.
- `superseded`: Replaced by a later decision.
- `pending`: Proposed but not confirmed.

## Active Decisions

### D-001: Main Chat Is The Control Room

- Status: active
- Date: 2026-06-30
- Decision: The current main chat remains the primary input area and final decision point.
- Reason: Background chats/agents are useful for briefs, plans, QA, and deployment checks, but the user wants a coherent product direction rather than silent parallel decisions.
- Implication: Workers produce artifacts and handoffs; the main chat approves and integrates.

### D-002: Preserve Old Wix Visual Logic

- Status: active
- Date: 2026-06-30
- Decision: The rebuild should preserve the original Wix site's project hierarchy, image-led rhythm, and sparse text style.
- Reason: The user does not want a generic new portfolio template.
- Implication: Text should provide context for image groups, not become the main body of the page.

### D-003: Images Are Evidence, Not Decoration

- Status: active
- Date: 2026-06-30
- Decision: Each image should appear once per page unless there is a deliberate reason to repeat it.
- Reason: Repeated images and generic galleries make the work feel less understood.
- Implication: Layout workers must assign each image a specific role such as hero, reference, mechanic, process, prototype, playtest, final, or archive.

### D-004: Diagrams Need Appropriate Scale

- Status: active
- Date: 2026-06-30
- Decision: Dense boards and detailed diagrams can be large; small schematic/UI elements should be compact.
- Reason: Oversized small images waste space, while undersized information-heavy boards become unreadable.
- Implication: Layout plans should specify `wide`, `compact`, gallery, or split placement based on image content.

### D-005: Use Mixed Section Rhythm

- Status: active
- Date: 2026-06-30
- Decision: Project pages should mix split layouts, full-width visual sections, compact diagrams, and occasional text bands.
- Reason: A repeated left-text/right-image format feels too uniform, but fully replacing it with only full-width sections loses useful structure.
- Implication: Layout Direction should design page-specific rhythm rather than applying one template everywhere.

### D-006: Reference Images Must Be Labeled

- Status: active
- Date: 2026-06-30
- Decision: Reference-game images may remain public, but captions must clearly label them as references and not project output.
- Reason: The user wants the research context visible without implying ownership of reference images.
- Implication: Dice Adventure research images and similar reference boards need conservative captions.

### D-007: Conservative Role Wording

- Status: active
- Date: 2026-06-30
- Decision: If team ownership or individual contribution is uncertain, use conservative wording or omit the claim.
- Reason: The portfolio should not overstate implementation or team responsibilities.
- Implication: Workers should flag unclear contribution claims instead of inventing them.

### D-008: Dice Adventure Role And Study Usage

- Status: active
- Date: 2026-06-30
- Decision: Dice Adventure should emphasize game design, system design, tutorial/level design, and playable prototype specification. Do not say the final output was used in the AI study.
- Reason: The user does not know how the lab owner used the final work, and the user did not implement the digital prototype.
- Implication: Avoid implementation claims and avoid final-study claims.

### D-009: Dice Adventure Name Correction

- Status: active
- Date: 2026-06-30
- Decision: Use `Phoebe Wang`, not `Pheobe Wang`.
- Reason: User confirmed the original spelling was a typo.
- Implication: Project data and docs should use the corrected spelling.

### D-010: CAVERN Public Links

- Status: active
- Date: 2026-06-30
- Decision: CAVERN can include the public dev log and YouTube Level 1 video.
- Links:
  - Dev log: `https://projects.etc.cmu.edu/cavern/blog/`
  - YouTube: `https://youtu.be/TGdCYzSnRDs`
- Implication: Keep a fallback external link when embedding video.

### D-011: Project Amazon Public Links And Role

- Status: active
- Date: 2026-06-30
- Decision: Project Amazon is a playable prototype with VR/projection demo. The user's contribution is experience design, system design, and game design, not technical implementation.
- Links:
  - Trailer: `https://youtu.be/3DMoqmmHwn4?si=Q7fIxKuM16rhXk2o`
  - Boat movement: `https://youtu.be/dXYntPw7LGI?si=WFt8_gQqMJ1WR2Wi`
  - Full playthrough: `https://vimeo.com/699960398?fl=pl&fe=cm`
- Implication: Do not invent team members. Use the user-supplied public video set unless a later stronger final demo asset is provided.

### D-012: Archive Treatment For Early Work

- Status: active
- Date: 2026-06-30
- Decision: Woodcrafts, Metalcrafts, Photography, Soft Goods, and Product Design Intern are early work and should be treated as archive/gallery pages with minimal explanation.
- Reason: They are older projects and should not compete with main game/experience work.
- Implication: Photography needs no explanation; keep it as a gallery.

### D-013: Metal-Looking Folded Objects Belong In Metalcrafts

- Status: active
- Date: 2026-06-30
- Decision: Metal-looking folded craft objects should be grouped under Metalcrafts, not Woodcrafts.
- Implication: Asset placement and gallery captions should follow material identity.

### D-014: Professional Weighting

- Status: active
- Date: 2026-06-30
- Decision: Skyweaver remains the largest public work-project signal for now. Last Trigger can be added after public-safe content is prepared. The current unannounced project should not be shown.
- Reason: The user has two work projects now, but one is not public.
- Implication: Home hierarchy should eventually include Last Trigger if content is safe and useful.

### D-015: GitHub Pages Is Acceptable

- Status: active
- Date: 2026-06-30
- Decision: A public GitHub repository and GitHub Pages hosting are acceptable for this personal website. The site can use the default GitHub Pages domain instead of moving `taogames.online`.
- Reason: The user is comfortable with a public repo and wants low-cost hosting.
- Implication: Vercel is not required unless a later feature needs it. Do not add a `CNAME` file or change DNS unless the user later requests a custom domain.

### D-016: Deployment Requires Explicit User Request

- Status: active
- Date: 2026-06-30
- Decision: Do not deploy new local changes unless the user asks.
- Reason: The user is actively reviewing layout changes.
- Implication: Build and verify locally first; deploy later.

### D-017: Priority QA Fix Decisions

- Status: active
- Date: 2026-06-30
- Decision: For the first QA pass, correct Dice Adventure's mislabeled `paper-prototype.webp` as inspiration/reference material, make Dice Adventure's pinning system a重点 interaction section, add click-to-open image access for dense diagrams, and try Project Amazon's `title-screen.webp` as the detail hero.
- Reason: These items were confirmed by Yutao after reviewing the QA findings.
- Implication: Keep the "inspiration" caption conservative; do not treat the referenced board game as Tao's paper prototype. Images may open full size by clicking the image itself, but do not add visible `Open full size` text.

### D-018: Avoid Visible Utility Links In Case Study Media

- Status: active
- Date: 2026-06-30
- Decision: Do not show visible `Open full size` text for images or `Open on YouTube` text beside embedded videos.
- Reason: The user wants pages to read like portfolio case studies, not UI tools.
- Implication: Images can be clickable for full-size viewing; YouTube embeds should rely on the native YouTube component controls.

### D-019: Re-Audit Against Original Wix Structure

- Status: active
- Date: 2026-06-30
- Decision: Before further broad relayout, review the original Wix pages again and preserve their narrative order, image grouping, and layout rhythm as much as possible.
- Reason: Current pages are improving, but still risk drifting into a new template rather than a faithful migration.
- Implication: Future content/layout workers should compare against old Wix routes, contact sheets, and original page logic before proposing changes.

### D-020: Priority Re-Audit Implementation

- Status: active
- Date: 2026-06-30
- Decision: Implement the accepted original-structure audit changes by making CAVERN more compact and visual-first, and restoring a compact Project Amazon learning-themes bridge. Do not implement the Dice worker's suggestion to treat `paper-prototype.webp` as Tao's paper/tabletop prototype.
- Reason: Yutao confirmed the re-audit direction, while also previously clarified that Dice's `paper-prototype.webp` is inspiration/reference from another game.
- Implication: CAVERN should move quickly from hero to video and design document. Project Amazon can show theme research, but only as a small visual bridge, not a slide dump.

## Pending Decisions

### P-001: Last Trigger Placement

- Status: pending
- Question: Should Last Trigger appear on the home page, game projects page, or as a dedicated project page?
- Needed Input: Public-safe brief and available images/video.

### P-002: Final Project Amazon Uploaded Demo

- Status: pending
- Question: Where is the directly uploaded Final Video Demo asset?
- Needed Input: File path or public URL from the user.

### P-003: Source Data Refactor Timing

- Status: pending
- Question: When should `src/data/projects.ts` be split into per-project files?
- Suggested Direction: Do it after the current priority relayout is accepted, before broad parallel implementation.

## Update Rules

1. Record durable user confirmations here, not only in chat.
2. If a decision affects task status, update `docs/WORK_QUEUE.md`.
3. If a decision supersedes another, mark the old decision `superseded` and link the replacement.
4. Keep claims public-safe and conservative when facts are uncertain.
