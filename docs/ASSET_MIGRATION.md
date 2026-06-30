# Asset Migration

## Best Source

The best image source is still the Wix media library or your local originals, because those are more likely to include full-resolution files and cleaner filenames.

## Automated Public-Site Download

Use the helper script to collect publicly referenced Wix assets:

```powershell
powershell -ExecutionPolicy Bypass -File E:\PersonalWebsite\tools\download-wix-assets.ps1
```

It scans known pages and project routes from `taogames.online`, extracts `static.wixstatic.com/media` assets, downloads them into:

```text
assets/wix-originals/
```

It also writes:

```text
assets/wix-originals/wix-assets-manifest.csv
```

The manifest maps downloaded filenames back to source URLs and pages.

## Useful Options

Start with only the home page to avoid Wix rate limiting:

```powershell
powershell -ExecutionPolicy Bypass -File E:\PersonalWebsite\tools\download-wix-assets.ps1 -HomeOnly
```

Download again and overwrite existing files:

```powershell
powershell -ExecutionPolicy Bypass -File E:\PersonalWebsite\tools\download-wix-assets.ps1 -Force
```

Use a slower crawl if Wix rate-limits requests:

```powershell
powershell -ExecutionPolicy Bypass -File E:\PersonalWebsite\tools\download-wix-assets.ps1 -DelayMs 5000 -RetryDelaySeconds 60
```

## After Download

Review images in `assets/wix-originals`, then move approved images into project folders such as:

```text
public/images/projects/skyweaver/
public/images/projects/cavern/
public/images/site/
```

Keep the raw downloaded folder until the migration is complete. Do not put the full originals folder under `public`, because Astro will deploy everything inside `public`.
