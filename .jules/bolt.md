## 2026-03-30 - In-Place Text Updates vs innerHTML Re-renders on Tickers

**Learning:** In vanilla ES module single-page applications with timer intervals (such as countdown clocks), replacing full container `innerHTML` on every tick destroys and recreates DOM nodes, causing heavy DOM parsing, style/layout recalculations, and GC churn.
**Action:** Targeted `textContent` updates on cached DOM query selections eliminate HTML re-parsing and layout thrashing on high-frequency interval updates.
