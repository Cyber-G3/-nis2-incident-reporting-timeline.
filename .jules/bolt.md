# Bolt's Performance Journal

## 2026-08-16 - Reusing Intl.DateTimeFormat and Granular DOM Updates in Live Timers
**Learning:** Rebuilding full DOM subtrees with innerHTML inside 1s intervals creates unnecessary layout, style recalculations, and DOM churn. Additionally, re-instantiating `Intl.DateTimeFormat` on each format call is ~50-60x slower than reusing a cached instance.
**Action:** When updating live ticking elements (like countdown timers or clocks), preserve the container DOM and only mutate target text nodes. Always cache `Intl.DateTimeFormat` instances per locale instead of instantiating inside render/format loops.
