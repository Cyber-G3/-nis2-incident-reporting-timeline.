## 2026-08-16 - Targeted DOM Text Updates for Timers
**Learning:** Calling `.innerHTML` inside periodic timer intervals (`setInterval`) destroys and re-creates DOM subtrees on every tick, causing unnecessary layout recalcs, HTML parsing overhead, and garbage collection churn.
**Action:** Mutate `.textContent` on existing DOM nodes directly during timer ticks, falling back to full DOM re-rendering only when structural or status changes occur.
