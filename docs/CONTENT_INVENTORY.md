# Content Inventory: taogames.online

Inventory date: 2026-06-29  
Source site: https://www.taogames.online/  
Scope: Content and migration-risk inventory only. No implementation/code changes.

## Summary

The current site is a Wix / Wix Thunderbolt portfolio for Tao Design / Yutao Huang. It is primarily a static portfolio with:

- A home page focused on game and experience projects.
- An archive page focused on past product, UX, art, and craft projects.
- An About navigation item whose metadata exists, but whose visible content needs manual confirmation because one crawl returned archive content for the About URL.
- Multiple project-detail routes linked from cards.
- Wix-hosted images and social preview assets.
- No confirmed form submission, ecommerce, membership, blog, or server-side feature in the initial crawl.

Wix source/runtime code should be treated as non-portable. The migration should preserve the content, visual identity, navigation, project hierarchy, images, links, and metadata, not Wix internals.

## Confirmed Pages and Routes

| Page | Current URL | Confirmed title / metadata | Notes |
| --- | --- | --- | --- |
| Home | `/` | `Home | Tao Design` | Main game portfolio page. Includes intro, featured game projects, experience projects, footer contact. |
| Archive | `/projects-6` | `Archive | Tao Design Portfolio` | Past projects page. Includes product design, architecture, UX/design internship, craft, photography. |
| About | `/about-9` | `About | Tao Design Portfolio` in metadata | Navigation and metadata confirmed. Visible About body needs manual confirmation; one HTML-text extraction returned Archive body content, likely a Wix/static-render artifact or crawl issue. |

## Navigation

Visible navigation on confirmed pages:

- Brand / header text: `Design works`, `Tao Design`
- Primary nav: `Home`, `Archive`, `About`
- Mobile/dropdown support text from Wix: `More`, `Use tab to navigate through the menu items.`
- Accessibility anchors visible in extracted text: `top of page`, `bottom of page`

Suggested migration routes:

- `/` for Home
- `/archive/` for Archive, with redirect from `/projects-6`
- `/about/` for About, with redirect from `/about-9`
- Preserve old project slugs as redirects or canonical routes during migration.

## Site-Wide Footer / Contact

Visible footer/contact text:

- `yutao.huang.tao@gmail.com`
- `2368688169`
- `(c) 2022 by Yutao Huang.`

Migration risk:

- Confirmed updated public contact details: Gmail and current phone number.
- Confirm whether copyright year should stay `2022` for historical fidelity or update to a current range.

## Home Page Content

### Intro

Visible text:

> Hello! I'm Tao, a dedicated game designer specializing in game design and experience design.

> After graduating from the Entertainment Technology Center at Carnegie Mellon University, I've devoted 10 months in the development of 'Skyweaver,' an innovative web3 trading card game, channeling my passion for crafting unique and fun gaming experiences.

Visible CTA/section text:

- `About Me`
- `Game Projects`

### Game Projects

| Project | Current route / external link | Visible role/tags | Visible description / notes | Confirmed media clue |
| --- | --- | --- | --- | --- |
| Skyweaver | External: `https://www.skyweaver.net/`; external article: `https://www.skyweaver.net/news/draft-mode-deep-dive` | `Junior Game Designer`; `Genre: Strategy TCG`; `Platform: PC (Browser), Mobile (iOS, Android)` | Draft Mode documentation, card-pool learning curve, 150+ boons, event-system redesign, QA, Quest redesign proposal, external collaboration on SFX/music/tutorial page, hero ability/card feedback. | Portrait-like image: `WeChat Image_20211210115553.jpg`; wide image: `ss2.jpg` |
| CAVERN | `/cavern` | `LBE, Game Design, Level Design` | Designed an experience for a 270-degree CAVE projection system featuring ODS to showcase its potential. | `IMG_8237.jpg` |
| Project Amazon | `/projectamazon` | `Semester Project, Game Design, Experience Design` | Designed a transformational experience combining projection and VR for education. | `Home Page.png` |
| Dice Adventure | `/diceadventure` | `Game Design, Level Design, Asymmetric Co-op` | Asymmetric co-op game for HCII Human Machine Teaming studies. | `Background.png` |
| RoblearnX | `/roblearnx` | `Semester Project, Educational Game Design, Research Project` | Research on educational games in Roblox and learning assessment. | `image 38.png` |
| Cyberland 2021 | `/cyberland2021` | `Game Design, Level Design, Body Tracking` | Co-op asymmetric platform game using body tracking; stages push players to pose playfully. | `Cover.png` |
| Soul Ferry | `/soulferry` | `Game Design, Experience Design, Virtual Reality` | VR experience about the Netherland; uses indirect control to guide player experience. | `Screenshot 2021-10-18 141733.png` |
| Remember Me | `/rememberme` | `Game Design, Augmented Reality` | Story-based AR experience about Alzheimer and memory loss. | `Remember Me_Poster.jpg` |
| Bellum | `/bellum` | `Game Design` | Story-based strategy/puzzle game about fake news, misinformation, and polarization. | `WeChat Screenshot_20201229235442.png` |

### Experience Projects

| Project | Current route | Visible role/tags | Visible description / notes | Confirmed media clue |
| --- | --- | --- | --- | --- |
| Sound Drop | `/droppingsound3d` | `Research Project, Experience Design, Hand-Tracking` | Immersive space enabling players to edit sound more interactively and intuitively. | `WeChat Screenshot_20201108141031_edited.jpg` |
| VirtA | `/virta` | `Individual Project, Experience Design, Eye-Tracking` | Interactive program to visualize interaction and attention in online conferences. | `WeChat Screenshot_20201226202834_edited.jpg` |
| WristX | `/wristx` | `Individual Project, System Design, 3D Modeling` | System/product to assist rehabilitation for people with Carpel-tunnel Syndrome. | `11112131_edited.jpg` |
| Roominate | `/roominate` | `Experience Design, System Design, Internet of Things` | Co-living system for tracking chores and managing shared space more efficiently. | Route confirmed; image URL not fully captured before rate limit. |

## Archive Page Content

Intro text:

> Here are some projects that I did in the past, including product design, UX design and art practices. They aren't game projects but they also show some of my skills and interests.

| Project | Current route | Visible description / notes | Confirmed media clue |
| --- | --- | --- | --- |
| In-City Short-distance Ferry Terminal | `/drydock` | Three-person architecture project; site-specific design for abandoned dry dock No.4 in south Boston; self-sufficient, eco-friendly, educational. | `22.jpg` |
| AFFIX | `/affix` | Two-person system design project aiming to create a new approach to easy-to-assemble furniture. | `_edited.png` |
| BOTTO | `/botto` | Independent product for a better outdoor workout experience. | `pieces_71.png` |
| Product Design Intern | `/internprojects` | Renderings and product designs from Huidu Design internship, Summer 2019. | Chinese-named image `%E5%9C%BA%E6%99%AF.jpg` |
| Soft Goods Project | `/softgood` | First soft goods design project; a vest transformable into a tote bag. | `IMG_4694.jpg` |
| Photography | `/photography` | Collection of photos the author is proud of. | `IMG_2618_polarr.jpg` |
| Woodcrafts | `/wood` | Collection of wood works. | `_edited.jpg` |
| Metalcrafts | `/metal` | Collection of metal works. | `IMG_3730.jpg` |

## Media and Asset Inventory

### Site Identity / Social Assets

- Favicon / touch icon: `a04444_f29102729c8f4e659e7bcef345dd8f79~mv2.png` served in 32, 180, and 192 px variants.
- Header/logo-like image: `a04444_2bc5d0d311564923b232f2bccd9119b1~mv2.png` / filename `21213.png`.
- Social preview image: `a04444_1a7b19678fac4c70bda6e04cb65a9d69~mv2.png`, served as large Open Graph/Twitter preview.

### Project Images

All confirmed images are hosted under `https://static.wixstatic.com/media/` with Wix transformation paths. During migration, download the original/highest practical image assets, rename them into stable project-oriented filenames, and avoid depending on Wix transform URLs.

Confirmed filenames / source clues:

- `WeChat Image_20211210115553.jpg`
- `ss2.jpg`
- `IMG_8237.jpg`
- `Home Page.png`
- `Background.png`
- `image 38.png`
- `Cover.png`
- `Screenshot 2021-10-18 141733.png`
- `Remember Me_Poster.jpg`
- `WeChat Screenshot_20201229235442.png`
- `WeChat Screenshot_20201108141031_edited.jpg`
- `WeChat Screenshot_20201226202834_edited.jpg`
- `11112131_edited.jpg`
- `22.jpg`
- `_edited.png`
- `pieces_71.png`
- `%E5%9C%BA%E6%99%AF.jpg`
- `IMG_4694.jpg`
- `IMG_2618_polarr.jpg`
- `_edited.jpg`
- `IMG_3730.jpg`

### Video / Interactive Assets

No video assets were confirmed in the initial Home/Archive/About crawl. Detail pages may still contain embedded videos, galleries, iframes, or downloadable files and should be checked individually.

## External Links

Confirmed content links:

- `https://www.skyweaver.net/`
- `https://www.skyweaver.net/news/draft-mode-deep-dive`

System/runtime links observed but not content to preserve:

- `static.wixstatic.com`
- `static.parastorage.com`
- `siteassets.parastorage.com`
- `panorama.wixapps.net`
- Wix/Sentry/runtime URLs

Migration note: preserve user-facing external project links; do not preserve Wix runtime links except as temporary source references for asset download.

## SEO and Social Preview

### Home

- Title: `Home | Tao Design`
- Description: `Tao Design - Yutao Huang's Online Portfolio Page`
- Open Graph title: `Home | Tao Design`
- Open Graph description: `Tao Design - Yutao Huang's Online Portfolio Page`
- Open Graph URL: `https://www.taogames.online`
- Open Graph image: Wix-hosted large preview image.
- Twitter card: `summary_large_image`
- Twitter title/description/image mirror the Open Graph data.

### Archive

- Title: `Archive | Tao Design Portfolio`
- Open Graph title: `Archive | Tao Design Portfolio`
- Open Graph URL: `https://www.taogames.online/projects-6`
- Open Graph image: same large Wix-hosted preview image.
- Twitter card: `summary_large_image`
- Twitter title/image present.
- No meta description was confirmed in the extracted output.

### About

- Title: `About | Tao Design Portfolio`
- Open Graph title: `About | Tao Design Portfolio`
- Open Graph URL: `https://www.taogames.online/about-9`
- Open Graph image: same large Wix-hosted preview image.
- Twitter card: `summary_large_image`
- Twitter title/image present.
- No meta description was confirmed in the extracted output.

Migration recommendations:

- Keep or improve page-specific titles.
- Add page-specific descriptions for Archive and About if the owner approves.
- Use a downloaded local copy of the social preview image instead of referencing Wix.
- Preserve canonical old URLs with redirects if the new site uses cleaner paths.

## Hidden Functionality / Embeds

Initial crawl signals:

- Wix generator/runtime present: `Wix.com Website Builder`, Wix Thunderbolt.
- Wix site features include platform, stores/session/member APIs in runtime bundle, but no user-facing store/member/login/form behavior was confirmed on the visible pages.
- `pageHtmlEmbeds` placeholders appear empty in the home source.
- No confirmed contact form; contact appears as plain email/phone text.
- No confirmed blog, CMS listing, ecommerce, account login, comments, or search.

Risk: Detail pages may include embedded video, iframe, PDF/download links, galleries, or external prototype links that were not captured in this first pass.

## Migration Risks and Decisions Needed

- About page body: confirm actual visible About content. The route and metadata exist, but one extraction returned Archive body text.
- Detail pages: crawl and inventory each project-detail route before final migration.
- Roominate image: route and card text confirmed, but image URL was not fully captured before Wix rate limiting.
- Media ownership: confirm which Wix-hosted images should be migrated, optimized, replaced, or omitted.
- Public contact: confirmed email and phone should stay visible.
- Old routes: decide whether project routes should remain as-is or redirect to cleaner paths.
- Copy editing: visible copy contains minor grammar/spelling issues such as `transformational`, `educational purpose`, `funnily`, `Netherland`, `Carpel-tunnel`; confirm whether to preserve original wording or lightly edit.
- Social metadata: decide whether one shared social preview image is acceptable or whether each major page/project should have its own preview.
- Video/prototype links: confirm whether there are videos, itch.io builds, GitHub repos, PDFs, or prototype links hidden on detail pages.
- Copyright year: confirm static `2022` versus updated year/range.

## Follow-Up Inventory Checklist

- Open each project detail page and record body text, image galleries, video embeds, downloadable files, and outbound links.
- Capture desktop and mobile screenshots of Home, Archive, About, and representative project pages for visual rebuild reference.
- Download original/high-quality images from Wix media where allowed.
- Create a redirect map from old Wix routes to new static routes.
- Confirm final public contact details and About copy with the site owner.
