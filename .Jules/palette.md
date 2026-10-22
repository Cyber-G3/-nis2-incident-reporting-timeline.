## 2026-03-31 - Multilingual ARIA Progress Bar Pattern
**Learning:** In applications using DOM TreeWalker text node translation (`translatePage()`), using `aria-labelledby` referencing translated text elements avoids the need for maintaining separate duplicate translations in `aria-label` strings.
**Action:** Prefer `aria-labelledby` pointing to localizable text elements when making UI widgets accessible in multi-language web apps.
