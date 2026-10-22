## 2026-08-22 - Timeline countdown interval DOM re-creation
**Learning:** Re-rendering the entire `#timeline` HTML via `innerHTML` inside `setInterval(..., 1000)` causes continuous layout recalcs and DOM node teardowns/allocations every second, even when results are hidden.
**Action:** Targeted DOM node updates (updating `.countdown` `textContent`) and visibility guards avoid heavy innerHTML re-parsing for dynamic timers in vanilla JS apps.
