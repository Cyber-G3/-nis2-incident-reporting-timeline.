## 2026-03-31 - Direct Element Text Updates for Recurring Countdown Timers

**Learning:** Periodically calling a template-rendering function (`innerHTML` re-parsing) every second for ticking countdowns causes unnecessary DOM nodes destruction, layout recalculations, and elevated garbage collection overhead.
**Action:** When updating ticking countdowns, query existing DOM `.countdown` elements directly and update their `textContent` in-place, and skip timer execution when the target section is hidden.
