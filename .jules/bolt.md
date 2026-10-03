## 2026-08-16 - Target textContent updates for timers over full innerHTML rebuilds
**Learning:** Periodically rebuilding an entire component DOM tree via `innerHTML` inside `setInterval` (e.g., for 1-second countdown timers) causes continuous DOM thrashing, style recalculation, and GC pressure.
**Action:** When handling live timers in vanilla JS apps, perform initial DOM structure rendering on state changes, and use lightweight intervals targeting only `.textContent` of timer elements.
