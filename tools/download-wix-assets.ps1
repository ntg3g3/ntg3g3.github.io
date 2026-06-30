param(
  [string] $BaseUrl = "https://www.taogames.online",
  [string] $OutputDir = "assets/wix-originals",
  [int] $DelayMs = 1500,
  [int] $RetryDelaySeconds = 20,
  [switch] $HomeOnly,
  [switch] $Force
)

$ErrorActionPreference = "Stop"

$workspace = Split-Path -Parent $PSScriptRoot
$targetDir = Join-Path $workspace $OutputDir
$manifestPath = Join-Path $targetDir "wix-assets-manifest.csv"
New-Item -ItemType Directory -Force $targetDir | Out-Null

$routes = @(
  "/",
  "/projects-6",
  "/about-9",
  "/cavern",
  "/projectamazon",
  "/diceadventure",
  "/roblearnx",
  "/cyberland2021",
  "/soulferry",
  "/rememberme",
  "/bellum",
  "/droppingsound3d",
  "/virta",
  "/wristx",
  "/roominate",
  "/drydock",
  "/affix",
  "/botto",
  "/internprojects",
  "/softgood",
  "/photography",
  "/wood",
  "/metal"
)

if ($HomeOnly) {
  $routes = @("/")
}

function Join-Url([string] $base, [string] $path) {
  if ($path -match "^https?://") {
    return $path
  }
  return $base.TrimEnd("/") + "/" + $path.TrimStart("/")
}

function Normalize-WixMediaUrl([string] $rawUrl) {
  $url = $rawUrl -replace "\\/", "/"
  $url = [System.Net.WebUtility]::HtmlDecode($url)
  $url = [Uri]::UnescapeDataString($url)
  $url = $url -replace "[,\)\]\}]+$", ""

  if ($url -match "^(https://static\.wixstatic\.com/media/[^/?#]+)") {
    return $Matches[1]
  }

  return $url
}

function Get-SafeFileName([string] $url, [int] $index) {
  $uri = [Uri] $url
  $name = Split-Path $uri.AbsolutePath -Leaf
  $name = [Uri]::UnescapeDataString($name)

  if ([string]::IsNullOrWhiteSpace($name) -or $name -notmatch "\.[a-zA-Z0-9]{2,5}$") {
    $name = "wix-asset-$index.bin"
  }

  $invalid = [Regex]::Escape((-join [System.IO.Path]::GetInvalidFileNameChars()))
  $name = [Regex]::Replace($name, "[$invalid]", "-")
  return $name
}

$headers = @{
  "User-Agent" = "Mozilla/5.0 (compatible; TaoDesignAssetMigration/1.0)"
}

$mediaUrls = New-Object "System.Collections.Generic.HashSet[string]"
$pageRows = @()

foreach ($route in $routes) {
  $pageUrl = Join-Url $BaseUrl $route
  Write-Host "Scanning $pageUrl"

  try {
    try {
      $response = Invoke-WebRequest -Uri $pageUrl -Headers $headers -UseBasicParsing
    } catch {
      if ($_.Exception.Response -and [int]$_.Exception.Response.StatusCode -eq 429) {
        Write-Warning "Rate limited. Waiting $RetryDelaySeconds seconds before retrying $pageUrl"
        Start-Sleep -Seconds $RetryDelaySeconds
        $response = Invoke-WebRequest -Uri $pageUrl -Headers $headers -UseBasicParsing
      } else {
        throw
      }
    }

    $content = $response.Content
    $slashDecoded = ($content -replace "\\/", "/")
    $decoded = [System.Net.WebUtility]::HtmlDecode($slashDecoded)

    $matches = [Regex]::Matches($decoded, "https://static\.wixstatic\.com/media/[^`"'<>\s]+")
    foreach ($match in $matches) {
      $normalized = Normalize-WixMediaUrl $match.Value
      if ($normalized -match "\.(png|jpe?g|webp|gif|svg|mp4|mov|pdf)$") {
        [void] $mediaUrls.Add($normalized)
        $pageRows += [pscustomobject]@{
          Page = $pageUrl
          AssetUrl = $normalized
        }
      }
    }
  } catch {
    Write-Warning "Failed to scan $pageUrl : $($_.Exception.Message)"
  }

  Start-Sleep -Milliseconds $DelayMs
}

$assets = $mediaUrls | Sort-Object
$manifest = @()
$index = 0

foreach ($assetUrl in $assets) {
  $index += 1
  $fileName = Get-SafeFileName $assetUrl $index
  $filePath = Join-Path $targetDir $fileName

  if ((Test-Path $filePath) -and -not $Force) {
    Write-Host "Skipping existing $fileName"
    $status = "existing"
  } else {
    Write-Host "Downloading $fileName"
    try {
      Invoke-WebRequest -Uri $assetUrl -Headers $headers -OutFile $filePath -UseBasicParsing
      $status = "downloaded"
    } catch {
      Write-Warning "Failed to download $assetUrl : $($_.Exception.Message)"
      $status = "failed"
    }
    Start-Sleep -Milliseconds $DelayMs
  }

  $sourcePages = ($pageRows | Where-Object { $_.AssetUrl -eq $assetUrl } | Select-Object -ExpandProperty Page -Unique) -join " | "
  $manifest += [pscustomobject]@{
    FileName = $fileName
    Status = $status
    SourceUrl = $assetUrl
    SourcePages = $sourcePages
  }
}

$manifest | Export-Csv -NoTypeInformation -Encoding UTF8 $manifestPath

Write-Host ""
Write-Host "Assets found: $($assets.Count)"
Write-Host "Manifest: $manifestPath"
Write-Host "Output: $targetDir"
