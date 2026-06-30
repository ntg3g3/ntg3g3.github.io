param(
  [string] $BaseUrl = "https://www.taogames.online",
  [string] $OutputPath = "docs/wix-embed-scan-results.csv",
  [int] $DelayMs = 5000,
  [int] $RetryDelaySeconds = 60,
  [int] $TimeoutSec = 20,
  [string[]] $Routes,
  [switch] $RemainingOnly
)

$ErrorActionPreference = "Stop"

$workspace = Split-Path -Parent $PSScriptRoot
$targetPath = if ([System.IO.Path]::IsPathRooted($OutputPath)) {
  $OutputPath
} else {
  Join-Path $workspace $OutputPath
}

$targetDir = Split-Path -Parent $targetPath
New-Item -ItemType Directory -Force $targetDir | Out-Null

$allRoutes = @(
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

$routes = $allRoutes
if ($Routes -and $Routes.Count -gt 0) {
  $routes = $Routes | ForEach-Object {
    if ($_.StartsWith("/")) { $_ } else { "/$_" }
  }
}
if ($RemainingOnly) {
  $routes = @(
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
}

function Join-Url([string] $base, [string] $path) {
  return $base.TrimEnd("/") + "/" + $path.TrimStart("/")
}

function Decode-PageContent([string] $content) {
  $slashDecoded = $content -replace "\\/", "/"
  $htmlDecoded = [System.Net.WebUtility]::HtmlDecode($slashDecoded)
  return [Uri]::UnescapeDataString($htmlDecoded)
}

function Select-UniqueMatches([string] $content, [string] $pattern) {
  $items = New-Object "System.Collections.Generic.HashSet[string]"
  foreach ($match in [Regex]::Matches($content, $pattern, "IgnoreCase")) {
    $value = $match.Value.Trim()
    $value = $value -replace "[`"'<>\)\]\},]+$", ""
    [void] $items.Add($value)
  }
  return ($items | Sort-Object)
}

$headers = @{
  "User-Agent" = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
}

$rows = @()

foreach ($route in $routes) {
  $pageUrl = Join-Url $BaseUrl $route
  Write-Host "Scanning $pageUrl"
  $status = "ok"
  $message = ""
  $content = ""

  try {
    try {
      $response = Invoke-WebRequest -Uri $pageUrl -Headers $headers -UseBasicParsing -TimeoutSec $TimeoutSec
    } catch {
      if ($_.Exception.Response -and [int]$_.Exception.Response.StatusCode -eq 429) {
        Write-Warning "Rate limited. Waiting $RetryDelaySeconds seconds before retrying $pageUrl"
        Start-Sleep -Seconds $RetryDelaySeconds
        $response = Invoke-WebRequest -Uri $pageUrl -Headers $headers -UseBasicParsing -TimeoutSec $TimeoutSec
      } else {
        throw
      }
    }
    $content = Decode-PageContent $response.Content
  } catch {
    $status = "failed"
    $message = $_.Exception.Message
    Write-Warning "Failed to scan $pageUrl : $message"
  }

  $strongMedia = @()
  $candidateUrls = @()
  $tagHits = @()

  if ($content) {
    $strongMedia = Select-UniqueMatches $content "https?://[^`"'<>\s]+(?:youtube\.com|youtu\.be|vimeo\.com|video\.wixstatic\.com|\.mp4|\.webm|\.mov)[^`"'<>\s]*"
    $candidateUrls = Select-UniqueMatches $content "https?://[^`"'<>\s]+(?:player|video|iframe|wixstatic)[^`"'<>\s]*"
    $tagHits = Select-UniqueMatches $content "<(?:iframe|video|source)\b[^>]*>"
  }

  $rows += [pscustomobject]@{
    Route = $route
    PageUrl = $pageUrl
    Status = $status
    Message = $message
    StrongMediaCount = $strongMedia.Count
    StrongMediaUrls = ($strongMedia -join " | ")
    CandidateUrlCount = $candidateUrls.Count
    CandidateUrls = ($candidateUrls | Select-Object -First 12) -join " | "
    TagHitCount = $tagHits.Count
    TagHits = ($tagHits | Select-Object -First 8) -join " | "
  }

  Start-Sleep -Milliseconds $DelayMs
}

$rows | Export-Csv -NoTypeInformation -Encoding UTF8 $targetPath

Write-Host ""
Write-Host "Routes scanned: $($rows.Count)"
Write-Host "Strong media hits: $(($rows | Measure-Object -Property StrongMediaCount -Sum).Sum)"
Write-Host "Failed routes: $(($rows | Where-Object { $_.Status -ne 'ok' }).Count)"
Write-Host "Output: $targetPath"
