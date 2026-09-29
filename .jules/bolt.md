# Bolt's Journal - Critical Learnings

## 2026-02-16 - Avoid full innerHTML re-renders on periodic timers
**Learning:** The application used a 1-second `setInterval` to call `renderTimeline()`, which completely rebuilt `#timeline.innerHTML` every second. This destroyed/re-created all milestone DOM nodes, caused unnecessary style recalculations/layout reflows, and disrupted user text selections.
**Action:** For live timers, update only the dynamic `textContent` of target DOM nodes (`.countdown`) directly instead of re-rendering parent container `innerHTML`.
