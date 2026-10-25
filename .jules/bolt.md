## 2026-03-30 - In-place DOM updates for recurring timer intervals
**Learning:** Re-rendering entire DOM trees via `innerHTML` on short intervals (e.g. 1s timers) causes heavy DOM destruction, layout thrashing, and unnecessary string parsing. Updating targeted text nodes (`textContent`) in-place during interval ticks retains existing DOM structures and dramatically lowers CPU work.
**Action:** For ticking timers or real-time indicators, construct the component tree once on state changes and only update target text nodes in-place on interval callbacks.
