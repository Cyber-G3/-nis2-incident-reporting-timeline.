## 2026-03-30 - Direct TextNode Updates for Timers vs. Full innerHTML Re-renders

**Learning:** Periodic interval timers (e.g. 1-second countdown tickers) that call full render functions using `innerHTML` tear down and rebuild entire DOM subtrees unnecessarily. This creates HTML parsing overhead, garbage collection churn, and DOM tree construction every second.

**Action:** For recurring real-time UI updates like countdown timers, mutate only the specific target `textContent` or text nodes instead of re-rendering full HTML templates through `innerHTML`.
