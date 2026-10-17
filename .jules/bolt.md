## 2026-03-30 - Targeted Text Updates for High-Frequency Intervals
**Learning:** Calling `innerHTML` on container elements inside high-frequency `setInterval` callbacks causes unnecessary DOM node destruction, DOM tree re-parsing, GC pressure, and layout recalculations every second.
**Action:** Render structural HTML only when underlying data or inputs change, and use direct `textContent` updates on target elements for periodic time/countdown ticks.
