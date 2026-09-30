# Bolt's Journal

## 2026-03-30 - Direct DOM Node Text Updates vs Full Timeline Re-renders

**Learning:** Re-rendering complex HTML structures via `innerHTML` every second inside a `setInterval` ticker causes continuous layout thrashing, style recalculation, and GC pressure even when structure/data hasn't changed.
**Action:** For lightweight real-time updates (like countdown timers), target specific child nodes (`.countdown`) directly using `textContent` and fallback to a full re-render only if the element count or structure changes.
