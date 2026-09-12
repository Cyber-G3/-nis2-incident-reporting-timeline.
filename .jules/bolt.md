## 2025-05-18 - In-Place DOM Updates for Timers vs Full Container Re-renders
**Learning:** Re-rendering an entire list/container of complex DOM nodes via `innerHTML` on every 1s timer tick causes unnecessary DOM thrashing, reflows, and object allocations.
**Action:** When updating tick/timer counters on periodic intervals, query and update the specific `.countdown` DOM elements in-place with `textContent` instead of re-rendering the outer component/container.
