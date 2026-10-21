## 2026-03-30 - In-Place DOM Updates for Live Timers Prevent InnerHTML Thrashing
**Learning:** Periodically re-rendering entire UI component trees via `innerHTML` every second creates unnecessary DOM layout/reflow calculations and garbage collection churn. Updating only the target `textContent` nodes in place eliminates HTML parsing and DOM allocation overhead on timer intervals.
**Action:** When creating live countdowns or ticking timers, update targeted DOM elements' `textContent` directly instead of calling full container re-render routines.
