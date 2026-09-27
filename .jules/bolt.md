## 2026-02-16 - Avoid full DOM re-renders in periodic timers
**Learning:** Calling full template render functions inside `setInterval` recreates the entire DOM tree every second, causing CPU spikes, garbage collection pressure, and layout thrashing.
**Action:** Isolate dynamic timer text updates to targeted `textContent` updates on specific elements instead of re-rendering innerHTML.
