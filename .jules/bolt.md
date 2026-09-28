## 2026-03-30 - Direct DOM text updating for recurring timers
**Learning:** Re-rendering entire component DOM structures via `innerHTML` on recurring 1-second intervals causes unnecessary DOM tear-downs, garbage collection pressure, and layouts. Updating only the targeted `.countdown` element `textContent` preserves DOM state and eliminates layout thrashing.
**Action:** Inspect recurring `setInterval` functions for full HTML re-renders and isolate updates to target text nodes.
