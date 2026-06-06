param(
  [Parameter(Mandatory = $true, ValueFromRemainingArguments = $true)]
  [string[]]$Paths
)

$ErrorActionPreference = 'Stop'

function Normalize-TextSegment {
  param([string]$Text)

  if ([string]::IsNullOrEmpty($Text)) { return $Text }

  $t = $Text -replace ([char]0x00A0), ' '
  $t = $t -replace "[ \t]{2,}", ' '

  $closePunc = -join @(
    [char]0xFF0C, [char]0x3002, [char]0xFF1B, [char]0xFF1A, [char]0xFF01, [char]0xFF1F, [char]0x3001,
    [char]0xFF05, [char]0x0025,
    [char]0xFF09, [char]0x0029,
    [char]0x3011, [char]0x005D,
    [char]0x300B, [char]0x300D, [char]0x300F,
    [char]0x201D, [char]0x2019
  )

  $openPunc = -join @(
    [char]0xFF08, [char]0x0028,
    [char]0x3010, [char]0x005B,
    [char]0x300A, [char]0x300C, [char]0x300E,
    [char]0x201C, [char]0x2018
  )

  $basicCjkPunc = -join @([char]0xFF0C, [char]0x3002, [char]0xFF1B, [char]0xFF1A, [char]0xFF01, [char]0xFF1F, [char]0x3001)
  $han = '[\u3400-\u4DBF\u4E00-\u9FFF]'

  $t = $t -replace "[ \t]+([$closePunc])", '$1'
  $t = $t -replace "([$openPunc])[ \t]+", '$1'

  $t = $t -replace "($han)[ \t]+($han)", '$1$2'
  $t = $t -replace "([$basicCjkPunc])[ \t]+($han)", '$1$2'
  $t = $t -replace "($han)[ \t]+([$basicCjkPunc])", '$1$2'

  $t = $t -replace "([$closePunc])[ \t]+($han)", '$1$2'
  $t = $t -replace "($han)[ \t]+([$openPunc])", '$1$2'

  return $t
}

function Normalize-OutsideText {
  param([string]$HtmlFragment)

  if ([string]::IsNullOrEmpty($HtmlFragment)) { return $HtmlFragment }

  $cjkCharOrPunc = '^[\u3400-\u4DBF\u4E00-\u9FFF\u3000-\u303F\uFF00-\uFFEF]$'
  $cjkAny = '[\u3400-\u4DBF\u4E00-\u9FFF\u3000-\u303F\uFF00-\uFFEF]'

  $parts = [regex]::Split($HtmlFragment, '(<[^>]+>)')
  for ($i = 0; $i -lt $parts.Length; $i++) {
    $p = $parts[$i]
    if ([string]::IsNullOrEmpty($p)) { continue }

    if ($p.StartsWith('<') -and $p.EndsWith('>')) {
      continue
    }

    $pForCheck = ($p -replace ([char]0x00A0), ' ')
    if ($pForCheck -match '^\s*$') {
      continue
    }

    $isCjk = ($pForCheck -match $cjkAny)
    $seg = $p

    if ($isCjk) {
      $seg = $seg -replace "\r\n|\r|\n", ' '
      $seg = Normalize-TextSegment $seg
    } else {
      $seg = $seg -replace ([char]0x00A0), ' '
    }

    $nextIsTag = ($i + 1 -lt $parts.Length) -and ($parts[$i + 1].StartsWith('<') -and $parts[$i + 1].EndsWith('>'))
    $prevIsTag = ($i - 1 -ge 0) -and ($parts[$i - 1].StartsWith('<') -and $parts[$i - 1].EndsWith('>'))

    if ($isCjk -and $nextIsTag) {
      $trimmed = $seg.TrimEnd()
      if ($trimmed.Length -gt 0) {
        $last = $trimmed[$trimmed.Length - 1]
        if ([regex]::IsMatch([string]$last, $cjkCharOrPunc)) {
          $seg = $trimmed
        }
      }
    }

    if ($isCjk -and $prevIsTag) {
      $trimmed = $seg.TrimStart()
      if ($trimmed.Length -gt 0) {
        $first = $trimmed[0]
        if ([regex]::IsMatch([string]$first, $cjkCharOrPunc)) {
          $seg = $trimmed
        }
      }
    }

    $parts[$i] = $seg
  }

  return ($parts -join '')
}

function Process-OutsideScriptStylePre {
  param([string]$Content)

  $openRe = [regex]::new('<(script|style|pre)\b[^>]*>', [Text.RegularExpressions.RegexOptions]::IgnoreCase)
  $tagRe = [regex]::new('<[^>]+>')

  $sb = [System.Text.StringBuilder]::new()
  $pos = 0

  while ($pos -lt $Content.Length) {
    $m = $openRe.Match($Content, $pos)
    if (-not $m.Success) {
      $tail = $Content.Substring($pos)
      $tail = $tagRe.Replace($tail, { param($mm) $mm.Value })
      $tail = Normalize-OutsideText $tail
      [void]$sb.Append($tail)
      break
    }

    $before = $Content.Substring($pos, $m.Index - $pos)
    $before = Normalize-OutsideText $before
    [void]$sb.Append($before)

    [void]$sb.Append($m.Value)

    $tagName = $m.Groups[1].Value
    $closeRe = [regex]::new("</$tagName\\s*>", [Text.RegularExpressions.RegexOptions]::IgnoreCase)
    $close = $closeRe.Match($Content, $m.Index + $m.Length)
    if (-not $close.Success) {
      $pos = $m.Index + $m.Length
      continue
    }

    $innerStart = $m.Index + $m.Length
    $inner = $Content.Substring($innerStart, $close.Index - $innerStart)
    [void]$sb.Append($inner)
    [void]$sb.Append($close.Value)

    $pos = $close.Index + $close.Length
  }

  return $sb.ToString()
}

foreach ($file in $Paths) {
  if (-not (Test-Path -LiteralPath $file)) {
    throw "File not found: $file"
  }

  $content = [System.IO.File]::ReadAllText($file, [System.Text.Encoding]::UTF8)
  $content = Process-OutsideScriptStylePre $content
  $content = $content -replace "[ \t]+(?=\r?\n)", ''
  $content = $content.TrimEnd() + "`n"
  [System.IO.File]::WriteAllText($file, $content, [System.Text.UTF8Encoding]::new($false))
}
