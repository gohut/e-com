$base = "D:\PROJECT\E-Com\e-com\frontend"

$files = @(
  @{ path = "src\app\globals.scss"; rel = "../styles" },
  @{ path = "src\app\account\account-layout.module.scss"; rel = "../../styles" },
  @{ path = "src\app\account\addresses\addresses.module.scss"; rel = "../../../styles" },
  @{ path = "src\app\account\cards\cards.module.scss"; rel = "../../../styles" },
  @{ path = "src\app\account\orders\orders.module.scss"; rel = "../../../styles" },
  @{ path = "src\app\account\orders\[id]\order-detail.module.scss"; rel = "../../../../styles" },
  @{ path = "src\app\account\orders\[id]\review\review.module.scss"; rel = "../../../../../styles" },
  @{ path = "src\app\account\orders\[id]\track\track.module.scss"; rel = "../../../../../styles" },
  @{ path = "src\components\address\AddressCard.module.scss"; rel = "../../styles" },
  @{ path = "src\components\cards\CardForm.module.scss"; rel = "../../styles" },
  @{ path = "src\components\navbar\Navbar.module.scss"; rel = "../../styles" },
  @{ path = "src\components\orders\OrderCard.module.scss"; rel = "../../styles" },
  @{ path = "src\components\orders\StarRating.module.scss"; rel = "../../styles" },
  @{ path = "src\components\sidebar\AccountSidebar.module.scss"; rel = "../../styles" }
)

foreach ($f in $files) {
  $fullPath = Join-Path $base $f.path
  $rel = $f.rel
  if (Test-Path $fullPath) {
    $content = Get-Content $fullPath -Raw
    
    # Remove existing @use statements to avoid duplicates
    $content = $content -replace "(?m)^@use .*?variables.*?;\r?\n", ""
    $content = $content -replace "(?m)^@use .*?mixins.*?;\r?\n", ""
    $content = $content -replace "(?m)^@use .*?typography.*?;\r?\n", ""
    
    $prepend = "@use '$rel/variables' as *;`n@use '$rel/mixins' as *;`n"
    if ($f.path -match "globals.scss") {
        $prepend += "@use '$rel/typography';`n"
    }

    $content = $prepend + $content
    Set-Content -Path $fullPath -Value $content -NoNewline
    Write-Host "Fixed: $($f.path)"
  } else {
    Write-Host "NOT FOUND: $($f.path)"
  }
}

Write-Host "All done!"
