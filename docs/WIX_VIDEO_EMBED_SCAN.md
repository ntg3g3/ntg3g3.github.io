# Wix Video / Embed Scan

Scan date: 2026-06-30

Purpose: track the video / dynamic-media part of the Wix migration goal.

## Local Dynamic Assets

The Wix asset crawl recovered 9 `.gif` files and no local `.mp4`, `.webm`, or `.mov` files. All recovered GIFs have been copied into `public/images/projects/...` as source files. The project pages now use optimized animated WebP derivatives generated from those GIFs:

- `/roominate`: 6 animated WebP motion assets
- `/soulferry`: 1 animated WebP motion asset
- `/rememberme`: 1 animated WebP motion asset
- `/botto`: 1 animated WebP motion asset

Motion payload changed from 39.33 MB of GIFs to 12.87 MB of animated WebP files.

See `docs/WIX_RELAYOUT_AUDIT.md` for exact original filenames and public paths.

## Live Wix Initial Scan

Method: `Invoke-WebRequest` against old Wix detail pages, looking for `youtube`, `youtu.be`, `vimeo`, `iframe`, `<video`, `.mp4`, `.webm`, `.mov`, `wix:video`, `player`, and media URLs.

Pages scanned before Wix rate limiting:

| Old route | Result |
| --- | --- |
| `/cavern` | No confirmed YouTube/Vimeo/mp4/webm/mov URL found in extracted URLs. Saw Wix `VideoPlayer` runtime CSS and static image URLs. |
| `/projectamazon` | No confirmed YouTube/Vimeo/mp4/webm/mov URL found in extracted URLs. Saw Wix `VideoPlayer` runtime CSS and static image URLs. |
| `/diceadventure` | No confirmed YouTube/Vimeo/mp4/webm/mov URL found in extracted URLs. Saw Wix `VideoPlayer` runtime CSS and static image URLs. |
| `/roblearnx` | No confirmed YouTube/Vimeo/mp4/webm/mov URL found in extracted URLs. Saw static image URLs only after filtering. |
| `/cyberland2021` | No confirmed YouTube/Vimeo/mp4/webm/mov URL found in extracted URLs. Saw Wix `VideoPlayer` runtime CSS and static image URLs. |

Pages not fully scanned in this pass because Wix returned HTTP 429:

These pages were later scanned successfully with `tools/scan-wix-embeds.ps1`; see `docs/wix-embed-scan-results.csv`.

| Old route set | Result |
| --- | --- |
| Remaining 15 routes from `/soulferry` through `/metal` | 15 ok, 0 failed, 0 strong video/media URL hits |

`TagHitCount` is nonzero only for image `<source srcSet=... type="image/jpeg">` tags on `/photography`, `/wood`, and `/metal`; these are responsive image sources, not video embeds.

## Interpretation

- The local migration has restored all dynamic assets currently present in the downloaded Wix asset folder.
- The completed live scans did not find confirmed external YouTube, Vimeo, mp4, webm, mov, or Wix video asset URLs.
- Public web searches for CAVERN trailer/dev-log terms did not surface a recoverable public URL.
- Many raw `video` / `iframe` keyword hits are likely Wix runtime noise, not user-facing embedded video. Stronger evidence requires extracting actual player URLs or inspecting the rendered page slowly.

## Remaining Verification

- A reusable scanner now exists at `tools/scan-wix-embeds.ps1`.
- Specifically verify CAVERN only if a private, unlisted, or manually shared trailer/dev-log URL exists outside the Wix crawl.
- If an actual YouTube/Vimeo/mp4/webm URL is found, add it as an embedded media section or external link on the matching project page.
