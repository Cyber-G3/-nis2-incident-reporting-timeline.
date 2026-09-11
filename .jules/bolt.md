## 2026-08-15 - Targeted textContent updates for 1Hz timers
**Learning:** Re-rendering full HTML trees via `innerHTML` on a 1-second interval destroys DOM nodes and forces full layout/style recalculations.
**Action:** Isolate animated or live-updating DOM text nodes (like countdown timers) and update their `textContent` directly in interval loops.
