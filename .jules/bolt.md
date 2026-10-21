## 2026-03-31 - Targeted DOM Text Updates for Timers
**Learning:** Calling `renderTimeline` inside a 1s `setInterval` caused unnecessary DOM node destruction, string parsing, and reflows every second. Updating only `.countdown` elements' `textContent` eliminates layout thrashing while keeping countdown display accurate.
**Action:** When updating recurring UI timers or counters, target specific element properties (`textContent`) instead of re-rendering full component HTML.
