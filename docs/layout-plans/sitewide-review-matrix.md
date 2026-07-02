# Sitewide Review Matrix

Status: active working matrix for the goal: review every page with the new workflow and deploy after verification.

## Review Standard

Each page must satisfy:

- Brief exists for project detail pages.
- Original Wix page logic is documented where the page came from Wix.
- Visual asset roles are understood before layout changes.
- Layout uses images as evidence, not decoration.
- Text is sparse unless the old page relied on text as primary evidence.
- Reference images are labeled as reference material.
- Old routes continue to resolve.
- Build and image checks pass.
- Deployment waits until reviewed pages are accepted.

## Top-Level Pages

| Page | Current Status | Required Work Before Deploy |
| --- | --- | --- |
| Home `/` | needs-review | Recheck project hierarchy after priority pages settle. Skyweaver remains the main public work signal; Last Trigger stays as a public-safe professional card. |
| About `/about/` | implemented | Public contact info and current positioning verified; confidential current project stays out. |
| Archive `/archive/` | needs-rework | Archive intro is still explanatory. New standard prefers visual archive/gallery treatment and minimal explanation. |
| Project detail template `/projects/[slug]/` | implemented | Template supports visual sections, metadata, impacts, image click-through, YouTube/Vimeo embeds. Needs final QA after content changes. |
| Legacy routes `/<legacy>` | verified by script | Keep redirect/legacy route coverage in final verification. |

## Priority Pages

| Project | Brief | Layout Plan | Current Implementation | Current Blocker |
| --- | --- | --- | --- | --- |
| Skyweaver | partial | missing | External/public work feature only | Need decide whether to keep as external signal or create deeper public-safe page. |
| Last Trigger | exists | homepage-card | Home card only | Keep as public-safe homepage signal; no full detail page until more confirmed material exists. |
| Dice Adventure | exists | exists + asset map | implemented but unstable direction | Need image-by-image review: Wix document-screenshot assets may need demotion, cropping, or gallery placement. |
| CAVERN | exists | exists | implemented | Needs browser review against compact old-page rhythm. |
| Project Amazon | exists | exists | implemented | Needs decision log sync for new trailer/boat movement/Vimeo links and browser review. |

## Remaining Game / Experience Pages

| Project | Brief | Layout Plan | Current Implementation | Required Work |
| --- | --- | --- | --- | --- |
| RoblearnX | exists | batch baseline | baseline visual section | Accepted as compact baseline unless stronger assets are added. |
| Cyberland 2021 | exists | batch baseline | baseline visual sections | Preserve body-tracking/control diagram logic. |
| Soul Ferry | exists | batch baseline | baseline visual sections | Preserve atmospheric VR/process rhythm. |
| Remember Me | exists | batch baseline | baseline visual sections | Confirm AR/memory narrative order. |
| Bellum | exists | batch baseline | baseline visual sections | Verify old-page strategy/combat image roles. |
| Sound Drop | exists | batch baseline | baseline visual sections | Verify experience/audio interaction images. |
| VirtA | exists | batch baseline | baseline visual sections | Verify attention/product-experience image roles. |
| WristX | exists | batch baseline | baseline visual sections | Verify wearable/interaction evidence. |
| Roominate | exists | batch baseline | baseline visual sections | Many assets and motion refs require careful grouping. |

## Archive Pages

| Project | Brief | Layout Plan | Current Implementation | Required Work |
| --- | --- | --- | --- | --- |
| In-City Short-distance Ferry Terminal | exists | missing | baseline visual sections | Decide whether archive case-study or gallery treatment. |
| AFFIX | exists | missing | baseline visual sections | Archive/gallery plan. |
| BOTTO | exists | missing | baseline visual sections | Archive/gallery plan. |
| Product Design Intern | exists | archive-gallery needed | baseline visual sections | Minimal explanation; gallery-forward. |
| Soft Goods Project | exists | archive-gallery needed | baseline visual sections | Minimal explanation; gallery-forward. |
| Photography | exists | archive-gallery needed | baseline visual sections | No explanation beyond title/category; gallery only. |
| Woodcrafts | exists | archive-gallery needed | baseline visual sections | Gallery-forward; early work de-emphasized. |
| Metalcrafts | exists | archive-gallery needed | baseline visual sections | Ensure metal-looking folded objects are here; gallery-forward. |

## Immediate Execution Order

1. Dice Adventure image-by-image review table and cleanup.
2. Archive gallery layout plan and implementation for archive pages.
3. Verify the batch baseline plan for remaining game/experience pages.
4. Home/About hierarchy and public-safe copy pass.
5. Build, route, image, mobile checks.
6. Git checkpoint.
7. Deploy to GitHub Pages after explicit deploy step.
