## 2026-03-30 - Targeted DOM updates for high-frequency countdown timers

**Learning:** Re-rendering entire component templates via `innerHTML` inside a high-frequency interval (`setInterval(..., 1000)`) causes unnecessary DOM tearing, re-parsing, layout thrashing, and potential memory churn.
**Action:** When updating dynamic temporal displays like countdown timers every second, target only the text nodes of the countdown elements directly via `textContent` rather than rebuilding the parent DOM tree.
