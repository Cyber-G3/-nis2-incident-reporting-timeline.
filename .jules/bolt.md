# Bolt's Journal - Critical Learnings

## 2026-03-30 - Reuse Intl.DateTimeFormat and cache DOM lookups in interval renders
**Learning:** Re-instantiating `Intl.DateTimeFormat` inside interval-driven render loops (`setInterval` running every 1000ms) causes unnecessary garbage collection pressure and layout/execution overhead. Caching formatters and DOM nodes drastically reduces tick cost.
**Action:** Always store `Intl.DateTimeFormat` instances and DOM selectors outside recursive/interval render loops when updating timers or UI widgets.
