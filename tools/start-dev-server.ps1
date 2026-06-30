$ErrorActionPreference = "Stop"

$workspace = Split-Path -Parent $PSScriptRoot
$nodeBin = "C:\Users\huang\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin"
$pnpm = "C:\Users\huang\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\pnpm.cmd"

$env:CI = "true"
$env:ASTRO_TELEMETRY_DISABLED = "1"
$env:APPDATA = Join-Path $workspace ".tmp-appdata"
$env:Path = "$nodeBin;$env:Path"

Set-Location $workspace
& $pnpm run dev -- --host 127.0.0.1 --port 4321
