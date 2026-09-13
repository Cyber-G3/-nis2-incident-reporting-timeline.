## 2026-08-16 - Prevent DOM Re-creation on Live Timer Intervals
**Learning:** Calling `innerHTML` on a parent container inside a 1-second `setInterval` destroys and recreates all DOM nodes every tick, causing unnecessary layout recalculations, paint operations, and memory allocations.
**Action:** Render full container markup once upon assessment state changes, then update only the target timer element text nodes (`.countdown`) in-place during interval ticks.
