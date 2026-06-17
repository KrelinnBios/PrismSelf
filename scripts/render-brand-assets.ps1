[CmdletBinding()]
param(
  [string]$OutputPath,
  [string]$FaviconPreviewPath
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

Add-Type -AssemblyName System.Drawing

if (-not $OutputPath) {
  $OutputPath = Join-Path $PSScriptRoot '..\og-image.png'
}

function Save-Png {
  param([Drawing.Bitmap]$Bitmap, [string]$Path)

  $stream = [IO.File]::Open(
    [IO.Path]::GetFullPath($Path),
    [IO.FileMode]::Create,
    [IO.FileAccess]::Write
  )
  try {
    $Bitmap.Save($stream, [Drawing.Imaging.ImageFormat]::Png)
  } finally {
    $stream.Dispose()
  }
}

function Draw-Background {
  param([Drawing.Graphics]$Graphics, [int]$Width, [int]$Height)

  $Graphics.Clear([Drawing.Color]::Black)

  $path = [Drawing.Drawing2D.GraphicsPath]::new()
  $r = [Math]::Max($Width, $Height) * 0.62
  $cx = $Width * 0.5
  $cy = $Height * 0.5
  $path.AddEllipse($cx - $r, $cy - $r, $r * 2, $r * 2)
  $brush = [Drawing.Drawing2D.PathGradientBrush]::new($path)
  $brush.CenterColor = [Drawing.ColorTranslator]::FromHtml('#0c0d12')
  $brush.SurroundColors = @([Drawing.Color]::Black)
  $brush.CenterPoint = [Drawing.PointF]::new($cx, $cy)
  $Graphics.FillRectangle($brush, 0, 0, $Width, $Height)
  $brush.Dispose()
  $path.Dispose()
}

function Fill-Poly {
  param([Drawing.Graphics]$Graphics, [Drawing.PointF[]]$Points, [Drawing.Brush]$Brush)

  $path = [Drawing.Drawing2D.GraphicsPath]::new()
  $path.AddPolygon($Points)
  $Graphics.FillPath($Brush, $path)
  $path.Dispose()
}

function Draw-Pyramid {
  param(
    [Drawing.Graphics]$Graphics,
    [Drawing.PointF]$Apex,
    [Drawing.PointF]$BackLeft,
    [Drawing.PointF]$BackRight,
    [Drawing.PointF]$Front,
    [single]$OutlineWidth
  )

  # shared vertical rainbow (matches the #spectrum gradient in the SVGs)
  $rainbowColors = [Drawing.Color[]]@(
    [Drawing.ColorTranslator]::FromHtml('#ff3b30'),
    [Drawing.ColorTranslator]::FromHtml('#ff9500'),
    [Drawing.ColorTranslator]::FromHtml('#ffd60a'),
    [Drawing.ColorTranslator]::FromHtml('#34c759'),
    [Drawing.ColorTranslator]::FromHtml('#0a84ff'),
    [Drawing.ColorTranslator]::FromHtml('#5e5ce6'),
    [Drawing.ColorTranslator]::FromHtml('#bf5af2')
  )
  $rainbowPositions = [single[]]@(0, 0.1667, 0.3333, 0.5, 0.6667, 0.8333, 1)

  # left face — faint refracted rainbow
  $left = [Drawing.Drawing2D.LinearGradientBrush]::new($Apex, $Front, [Drawing.Color]::Red, [Drawing.Color]::Violet)
  $leftBlend = [Drawing.Drawing2D.ColorBlend]::new()
  $leftBlend.Colors = [Drawing.Color[]]($rainbowColors | ForEach-Object { [Drawing.Color]::FromArgb(82, $_) })
  $leftBlend.Positions = $rainbowPositions
  $left.InterpolationColors = $leftBlend
  Fill-Poly $Graphics @($Apex, $BackLeft, $Front) $left
  $left.Dispose()

  # right face — full rainbow
  $rainbow = [Drawing.Drawing2D.LinearGradientBrush]::new($Apex, $Front, [Drawing.Color]::Red, [Drawing.Color]::Violet)
  $blend = [Drawing.Drawing2D.ColorBlend]::new()
  $blend.Colors = [Drawing.Color[]]($rainbowColors | ForEach-Object { [Drawing.Color]::FromArgb(255, $_) })
  $blend.Positions = $rainbowPositions
  $rainbow.InterpolationColors = $blend
  Fill-Poly $Graphics @($Apex, $BackRight, $Front) $rainbow
  $rainbow.Dispose()

  # back base edge, seen through the glass
  $backPen = [Drawing.Pen]::new([Drawing.Color]::FromArgb(89, 255, 255, 255), $OutlineWidth * 0.65)
  $Graphics.DrawLine($backPen, $BackLeft, $BackRight)
  $backPen.Dispose()

  # silhouette + front edge
  $pen = [Drawing.Pen]::new([Drawing.Color]::FromArgb(242, 255, 255, 255), $OutlineWidth)
  $pen.LineJoin = [Drawing.Drawing2D.LineJoin]::Round
  $pen.StartCap = [Drawing.Drawing2D.LineCap]::Round
  $pen.EndCap = [Drawing.Drawing2D.LineCap]::Round
  $edges = @(
    @($Apex, $BackRight), @($BackRight, $Front), @($Front, $BackLeft), @($BackLeft, $Apex),
    @($Apex, $Front)
  )
  foreach ($e in $edges) { $Graphics.DrawLine($pen, $e[0], $e[1]) }
  $pen.Dispose()
}

function Draw-OgImage {
  param([string]$Path)

  $bitmap = [Drawing.Bitmap]::new(1200, 630, [Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $graphics = [Drawing.Graphics]::FromImage($bitmap)
  $graphics.SmoothingMode = [Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $graphics.CompositingQuality = [Drawing.Drawing2D.CompositingQuality]::HighQuality
  $graphics.TextRenderingHint = [Drawing.Text.TextRenderingHint]::AntiAlias

  try {
    Draw-Background $graphics 1200 630
    Draw-Pyramid $graphics `
      ([Drawing.PointF]::new(600, 116)) `
      ([Drawing.PointF]::new(408, 350)) `
      ([Drawing.PointF]::new(792, 350)) `
      ([Drawing.PointF]::new(600, 484)) `
      5.5

    $titleFont = [Drawing.Font]::new('Georgia', 30, [Drawing.FontStyle]::Bold)
    $tagFont = [Drawing.Font]::new('Microsoft YaHei', 13)
    $titleBrush = [Drawing.SolidBrush]::new([Drawing.ColorTranslator]::FromHtml('#f4f5f8'))
    $tagBrush = [Drawing.SolidBrush]::new([Drawing.ColorTranslator]::FromHtml('#9aa3b2'))
    $tagline = -join @([char]0x6027, [char]0x522b, ' ', [char]0x00B7, ' ', [char]0x5fc3, [char]0x7406, ' ', [char]0x00B7, ' ', [char]0x4eba, [char]0x9645)
    $graphics.DrawString('PrismSelf', $titleFont, $titleBrush, 78, 520)
    $graphics.DrawString($tagline, $tagFont, $tagBrush, 82, 572)
    $titleFont.Dispose(); $tagFont.Dispose(); $titleBrush.Dispose(); $tagBrush.Dispose()

    Save-Png $bitmap $Path
  } finally {
    $graphics.Dispose()
    $bitmap.Dispose()
  }
}

function Draw-FaviconPreview {
  param([string]$Path)

  $bitmap = [Drawing.Bitmap]::new(512, 512, [Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $graphics = [Drawing.Graphics]::FromImage($bitmap)
  $graphics.SmoothingMode = [Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $graphics.CompositingQuality = [Drawing.Drawing2D.CompositingQuality]::HighQuality

  try {
    # favicon viewBox (64) -> 512  ==  x8
    Draw-Background $graphics 512 512
    Draw-Pyramid $graphics `
      ([Drawing.PointF]::new(256, 80)) `
      ([Drawing.PointF]::new(72, 304)) `
      ([Drawing.PointF]::new(440, 304)) `
      ([Drawing.PointF]::new(256, 432)) `
      11

    Save-Png $bitmap $Path
  } finally {
    $graphics.Dispose()
    $bitmap.Dispose()
  }
}

Draw-OgImage $OutputPath
Write-Host "Rendered: $([IO.Path]::GetFullPath($OutputPath))"

if ($FaviconPreviewPath) {
  Draw-FaviconPreview $FaviconPreviewPath
  Write-Host "Rendered preview: $([IO.Path]::GetFullPath($FaviconPreviewPath))"
}
