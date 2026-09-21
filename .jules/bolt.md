## 2026-03-31 - Target DOM Text Nodes for High-Frequency Timers
**Learning:** Re-rendering entire HTML structures (via `innerHTML`) in `setInterval` timers causes continuous DOM thrashing, reflows, and layout recalculations even when only individual timer text values change.
**Action:** When updating tick-based UI elements (like countdown timers), select and mutate only the specific `.textContent` or text nodes of the target elements rather than triggering a full container re-render.
