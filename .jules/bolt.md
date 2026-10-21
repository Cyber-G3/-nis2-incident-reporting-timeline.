## 2026-03-30 - In-place DOM updates for recurring timer intervals
**Learning:** Re-rendering full HTML trees via `innerHTML` on `setInterval` creates unnecessary layout thrashing, DOM node allocation, and GC overhead.
**Action:** For recurring live time counters, mutate existing `textContent` directly in-place rather than calling full render methods on an interval.
