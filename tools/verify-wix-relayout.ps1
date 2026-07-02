param(
  [switch] $Mobile,
  [int] $MobileWidth = 390,
  [int] $MobileHeight = 844,
  [int] $Port = 4920
)

$ErrorActionPreference = "Stop"

$workspace = Split-Path -Parent $PSScriptRoot
$python = "C:\Users\huang\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"
$node = "C:\Users\huang\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$tmpDir = Join-Path $workspace ".tmp-qa-screenshots"

$oldRoutes = @(
  @{ Legacy = "cavern"; Slug = "cavern" },
  @{ Legacy = "projectamazon"; Slug = "project-amazon" },
  @{ Legacy = "diceadventure"; Slug = "dice-adventure" },
  @{ Legacy = "roblearnx"; Slug = "roblearnx" },
  @{ Legacy = "cyberland2021"; Slug = "cyberland-2021" },
  @{ Legacy = "soulferry"; Slug = "soul-ferry" },
  @{ Legacy = "rememberme"; Slug = "remember-me" },
  @{ Legacy = "bellum"; Slug = "bellum" },
  @{ Legacy = "droppingsound3d"; Slug = "sound-drop" },
  @{ Legacy = "virta"; Slug = "virta" },
  @{ Legacy = "wristx"; Slug = "wristx" },
  @{ Legacy = "roominate"; Slug = "roominate" },
  @{ Legacy = "drydock"; Slug = "in-city-short-distance-ferry-terminal" },
  @{ Legacy = "affix"; Slug = "affix" },
  @{ Legacy = "botto"; Slug = "botto" },
  @{ Legacy = "internprojects"; Slug = "product-design-intern" },
  @{ Legacy = "softgood"; Slug = "soft-goods-project" },
  @{ Legacy = "photography"; Slug = "photography" },
  @{ Legacy = "wood"; Slug = "woodcrafts" },
  @{ Legacy = "metal"; Slug = "metalcrafts" }
)

$motionWebpRefs = @(
  "/images/projects/botto/prototype-loop.webp",
  "/images/projects/remember-me/ar-loop.webp",
  "/images/projects/roominate/interaction-01.webp",
  "/images/projects/roominate/interaction-02.webp",
  "/images/projects/roominate/interaction-03.webp",
  "/images/projects/roominate/interaction-04.webp",
  "/images/projects/roominate/interaction-05.webp",
  "/images/projects/roominate/interaction-06.webp",
  "/images/projects/soul-ferry/vr-loop.webp"
)

$recoveredGifFiles = @(
  "public/images/projects/botto/prototype-loop.gif",
  "public/images/projects/remember-me/ar-loop.gif",
  "public/images/projects/roominate/interaction-01.gif",
  "public/images/projects/roominate/interaction-02.gif",
  "public/images/projects/roominate/interaction-03.gif",
  "public/images/projects/roominate/interaction-04.gif",
  "public/images/projects/roominate/interaction-05.gif",
  "public/images/projects/roominate/interaction-06.gif",
  "public/images/projects/soul-ferry/vr-loop.gif"
)

function Fail([string] $message) {
  throw "VERIFY FAILED: $message"
}

function Run-StaticChecks {
  $projectsPath = Join-Path $workspace "src\data\projects.ts"
  $projectText = Get-Content -Raw -Path $projectsPath

  $visualSectionCount = ([regex]::Matches($projectText, "visualSections:\s*\[")).Count
  if ($visualSectionCount -lt $oldRoutes.Count) {
    Fail "Expected at least $($oldRoutes.Count) visualSections blocks, found $visualSectionCount"
  }

  $missingPages = @()
  $missingVisualSections = @()
  foreach ($route in $oldRoutes) {
    $projectHtml = Join-Path $workspace "dist\projects\$($route.Slug)\index.html"
    if (-not (Test-Path $projectHtml)) {
      $missingPages += $route.Slug
      continue
    }

    $html = Get-Content -Raw -Path $projectHtml
    if ($html -notmatch "visual-story-section") {
      $missingVisualSections += $route.Slug
    }

    $legacyHtml = Join-Path $workspace "dist\$($route.Legacy)\index.html"
    if (-not (Test-Path $legacyHtml)) {
      Fail "Missing legacy route /$($route.Legacy)"
    }
  }

  if ($missingPages.Count) {
    Fail "Missing project pages: $($missingPages -join ', ')"
  }
  if ($missingVisualSections.Count) {
    Fail "Pages missing visual-story-section: $($missingVisualSections -join ', ')"
  }

  $imageRefs = New-Object "System.Collections.Generic.HashSet[string]"
  foreach ($match in [regex]::Matches($projectText, '"/images/projects/[^"]+"')) {
    [void] $imageRefs.Add($match.Value.Trim('"'))
  }

  $missingImages = @()
  foreach ($ref in $imageRefs) {
    $path = Join-Path $workspace ("public\" + $ref.TrimStart("/") -replace "/", "\")
    if (-not (Test-Path $path)) {
      $missingImages += $ref
    }
  }

  if ($missingImages.Count) {
    Fail "Missing image files: $($missingImages -join ', ')"
  }

  $missingMotionRefs = $motionWebpRefs | Where-Object { -not $imageRefs.Contains($_) }
  if ($missingMotionRefs.Count) {
    Fail "Missing connected optimized motion refs: $($missingMotionRefs -join ', ')"
  }
  $missingRecoveredGifs = $recoveredGifFiles | Where-Object { -not (Test-Path (Join-Path $workspace $_)) }
  if ($missingRecoveredGifs.Count) {
    Fail "Missing recovered GIF source files: $($missingRecoveredGifs -join ', ')"
  }

  $embedCsv = Join-Path $workspace "docs\wix-embed-scan-results.csv"
  if (-not (Test-Path $embedCsv)) {
    Fail "Missing docs\wix-embed-scan-results.csv"
  }
  $embedRows = Import-Csv $embedCsv
  if ($embedRows.Count -ne 15) {
    Fail "Expected 15 follow-up embed scan rows, found $($embedRows.Count)"
  }
  $failedEmbedRows = $embedRows | Where-Object { $_.Status -ne "ok" }
  if ($failedEmbedRows.Count) {
    Fail "Embed scan has failed rows: $($failedEmbedRows.Route -join ', ')"
  }
  $strongMediaSum = 0
  foreach ($row in $embedRows) {
    $strongMediaSum += [int] $row.StrongMediaCount
  }
  if ($strongMediaSum -ne 0) {
    Fail "Embed scan found strong media hits: $strongMediaSum"
  }

  [pscustomobject]@{
    OldProjectPages = $oldRoutes.Count
    VisualSections = $visualSectionCount
    ImageRefs = $imageRefs.Count
    MotionWebpRefs = $motionWebpRefs.Count
    RecoveredGifFiles = $recoveredGifFiles.Count
    MissingImages = 0
    EmbedRows = $embedRows.Count
    StrongMediaHits = $strongMediaSum
  }
}

function Run-MobileChecks {
  if (-not (Test-Path $chrome)) {
    Fail "Chrome not found at $chrome"
  }
  if (-not (Test-Path $node)) {
    Fail "Node runtime not found at $node"
  }
  if (-not (Test-Path $python)) {
    Fail "Python runtime not found at $python"
  }

  New-Item -ItemType Directory -Force -Path $tmpDir | Out-Null
  $debugPort = $Port + 100
  $profile = Join-Path $tmpDir "verify-mobile-profile"
  $serverJob = Start-Job -ScriptBlock {
    param($py, $port, $root)
    & $py -m http.server $port --bind 127.0.0.1 --directory (Join-Path $root "dist")
  } -ArgumentList $python, $Port, $workspace

  $chromeProc = $null
  try {
    $chromeProc = Start-Process -FilePath $chrome -ArgumentList @(
      "--headless=new",
      "--remote-debugging-address=127.0.0.1",
      "--remote-debugging-port=$debugPort",
      "--remote-allow-origins=*",
      "--disable-gpu",
      "--no-sandbox",
      "--disable-extensions",
      "--user-data-dir=$profile",
      "about:blank"
    ) -PassThru -WindowStyle Hidden

    Start-Sleep -Seconds 5
    $slugsJson = ($oldRoutes | ForEach-Object { $_.Slug }) | ConvertTo-Json -Compress
    $env:VERIFY_BASE = "http://127.0.0.1:$debugPort"
    $env:VERIFY_SITE = "http://127.0.0.1:$Port"
    $env:VERIFY_SLUGS = $slugsJson
    $env:VERIFY_WIDTH = [string] $MobileWidth
    $env:VERIFY_HEIGHT = [string] $MobileHeight

    $script = @'
const base = process.env.VERIFY_BASE;
const site = process.env.VERIFY_SITE;
const slugs = JSON.parse(process.env.VERIFY_SLUGS);
const width = Number(process.env.VERIFY_WIDTH);
const height = Number(process.env.VERIFY_HEIGHT);

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getJson(path, init) {
  let last = "";
  for (let i = 0; i < 40; i += 1) {
    try {
      const response = await fetch(base + path, init);
      if (response.ok) return await response.json();
      last = `${response.status} ${await response.text()}`;
    } catch (error) {
      last = error.message;
    }
    await sleep(250);
  }
  throw new Error(`CDP not ready: ${last}`);
}

await getJson("/json/version");
const tab = await getJson("/json/new?about:blank", { method: "PUT" });
const ws = new WebSocket(tab.webSocketDebuggerUrl);
let id = 0;
const pending = new Map();

ws.onmessage = (event) => {
  const message = JSON.parse(event.data);
  if (message.id && pending.has(message.id)) {
    const callbacks = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) callbacks.reject(new Error(JSON.stringify(message.error)));
    else callbacks.resolve(message.result);
  }
};

await new Promise((resolve, reject) => {
  ws.onopen = resolve;
  ws.onerror = reject;
});

function send(method, params = {}) {
  const message = { id: ++id, method, params };
  ws.send(JSON.stringify(message));
  return new Promise((resolve, reject) => pending.set(message.id, { resolve, reject }));
}

await send("Page.enable");
await send("Emulation.setDeviceMetricsOverride", {
  width,
  height,
  deviceScaleFactor: 1,
  mobile: true
});

const rows = [];
for (const slug of slugs) {
  await send("Page.navigate", { url: `${site}/projects/${slug}/` });
  for (let i = 0; i < 80; i += 1) {
    const readyExpression = `JSON.stringify({
      path: location.pathname,
      ready: document.readyState,
      sections: document.querySelectorAll('.visual-story-section').length
    })`;
    const readyResult = await send("Runtime.evaluate", { expression: readyExpression, returnByValue: true });
    const ready = JSON.parse(readyResult.result.value);
    if (ready.path === `/projects/${slug}/` && ready.ready !== "loading" && ready.sections > 0) {
      break;
    }
    await sleep(150);
  }
  const expression = `JSON.stringify({
    slug: ${JSON.stringify(slug)},
    vw: innerWidth,
    sw: document.documentElement.scrollWidth,
    overflow: document.documentElement.scrollWidth > innerWidth + 1,
    sections: document.querySelectorAll('.visual-story-section').length
  })`;
  const result = await send("Runtime.evaluate", { expression, returnByValue: true });
  rows.push(JSON.parse(result.result.value));
}

ws.close();
console.log(JSON.stringify(rows));
'@

    $mobileRowsJson = $script | & $node --input-type=module
    $mobileRows = $mobileRowsJson | ConvertFrom-Json
    $overflowRows = $mobileRows | Where-Object { $_.overflow }
    if ($overflowRows.Count) {
      Fail "Mobile overflow detected: $($overflowRows.slug -join ', ')"
    }
    $missingMobileSections = $mobileRows | Where-Object { $_.sections -lt 1 }
    if ($missingMobileSections.Count) {
      Fail "Mobile pages missing visual sections: $($missingMobileSections.slug -join ', ')"
    }

    [pscustomobject]@{
      MobilePages = $mobileRows.Count
      MobileWidth = $MobileWidth
      OverflowCount = $overflowRows.Count
    }
  } finally {
    if ($chromeProc) {
      Stop-Process -Id $chromeProc.Id -Force -ErrorAction SilentlyContinue
    }
    Stop-Job $serverJob -ErrorAction SilentlyContinue
    Remove-Job $serverJob -ErrorAction SilentlyContinue
  }
}

$staticResult = Run-StaticChecks
Write-Host "Static checks passed:"
$staticResult | Format-List

if ($Mobile) {
  $mobileResult = Run-MobileChecks
  Write-Host "Mobile checks passed:"
  $mobileResult | Format-List
}

Write-Host "Wix relayout verification passed."
