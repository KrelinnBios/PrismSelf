[CmdletBinding()]
param(
  [switch]$Apply,

  [ValidateRange(1, 1048576)]
  [int]$MinimumSizeKB = 64
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

function Normalize-LayoutWhitespace {
  param(
    [string]$Text,
    [string]$NewLine
  )

  if ([string]::IsNullOrEmpty($Text)) {
    return $Text
  }

  $result = [regex]::Replace(
    $Text,
    '[ \t]+(?=\r?$)',
    '',
    [Text.RegularExpressions.RegexOptions]::Multiline
  )
  $result = [regex]::Replace(
    $result,
    '(?:(?:\r\n|\n|\r)[ \t]*){3,}',
    $NewLine + $NewLine
  )

  return $result
}

function Normalize-OutsideProtectedBlocks {
  param(
    [string]$Content,
    [string]$NewLine
  )

  foreach ($tag in @('script', 'style', 'pre', 'textarea')) {
    $openCount = [regex]::Matches(
      $Content,
      "<$tag\b[^>]*>",
      [Text.RegularExpressions.RegexOptions]::IgnoreCase
    ).Count
    $closeCount = [regex]::Matches(
      $Content,
      "</$tag\s*>",
      [Text.RegularExpressions.RegexOptions]::IgnoreCase
    ).Count
    if ($openCount -ne $closeCount) {
      throw "Refusing to clean HTML with unbalanced <$tag> tags."
    }
  }

  $protectedBlock = [regex]::new(
    '<(?<tag>script|style|pre|textarea)\b[^>]*>.*?</\k<tag>\s*>',
    [Text.RegularExpressions.RegexOptions]::IgnoreCase -bor
      [Text.RegularExpressions.RegexOptions]::Singleline
  )
  $builder = [Text.StringBuilder]::new()
  $position = 0

  foreach ($match in $protectedBlock.Matches($Content)) {
    $outside = $Content.Substring($position, $match.Index - $position)
    [void]$builder.Append((Normalize-LayoutWhitespace $outside $NewLine))
    [void]$builder.Append($match.Value)
    $position = $match.Index + $match.Length
  }

  $tail = $Content.Substring($position)
  [void]$builder.Append((Normalize-LayoutWhitespace $tail $NewLine))

  return $builder.ToString()
}

$repoRoot = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$guideRoot = [IO.Path]::GetFullPath((Join-Path $repoRoot 'Guides'))

if (-not (Test-Path -LiteralPath $guideRoot -PathType Container)) {
  throw "Guide directory not found: $guideRoot"
}

$guidePrefix = $guideRoot.TrimEnd(
  [IO.Path]::DirectorySeparatorChar,
  [IO.Path]::AltDirectorySeparatorChar
) + [IO.Path]::DirectorySeparatorChar
$minimumBytes = $MinimumSizeKB * 1KB
$files = @(
  Get-ChildItem -LiteralPath $guideRoot -File -Filter '*.html' |
    Where-Object { $_.Length -ge $minimumBytes } |
    Sort-Object Name
)

$strictUtf8 = [Text.UTF8Encoding]::new($false, $true)
$changed = 0

foreach ($file in $files) {
  $path = [IO.Path]::GetFullPath($file.FullName)
  if (-not $path.StartsWith($guidePrefix, [StringComparison]::OrdinalIgnoreCase)) {
    throw "Refusing to process a path outside Guides: $path"
  }

  $bytes = [IO.File]::ReadAllBytes($path)
  $hasUtf8Bom = $bytes.Length -ge 3 -and
    $bytes[0] -eq 0xEF -and
    $bytes[1] -eq 0xBB -and
    $bytes[2] -eq 0xBF
  $offset = if ($hasUtf8Bom) { 3 } else { 0 }
  $content = $strictUtf8.GetString($bytes, $offset, $bytes.Length - $offset)
  $newLine = if ($content.Contains("`r`n")) {
    "`r`n"
  } elseif ($content.Contains("`n")) {
    "`n"
  } elseif ($content.Contains("`r")) {
    "`r"
  } else {
    [Environment]::NewLine
  }

  $normalized = Normalize-OutsideProtectedBlocks $content $newLine
  if ($normalized -ceq $content) {
    Write-Host "Clean: $($file.Name)"
    continue
  }

  $changed += 1
  if (-not $Apply) {
    Write-Host "Would update: $($file.Name)"
    continue
  }

  $encoding = [Text.UTF8Encoding]::new($hasUtf8Bom)
  $temporaryPath = "$path.prismself-cleanup-$PID.tmp"
  try {
    [IO.File]::WriteAllText($temporaryPath, $normalized, $encoding)
    Move-Item -LiteralPath $temporaryPath -Destination $path -Force
  } finally {
    if (Test-Path -LiteralPath $temporaryPath) {
      Remove-Item -LiteralPath $temporaryPath -Force
    }
  }

  Write-Host "Updated: $($file.Name)"
}

$mode = if ($Apply) { 'updated' } else { 'would update' }
Write-Host "Scanned $($files.Count) large guide HTML file(s); $changed $mode."

if (-not $Apply -and $changed -gt 0) {
  Write-Host 'Run again with -Apply to write these whitespace-only changes.'
}
