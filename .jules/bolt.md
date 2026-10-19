## 2026-08-16 - Avoid Full DOM Re-renders in High-Frequency Intervals

**Learning:** Re-rendering an entire component tree or element list using `innerHTML` on a 1-second interval creates unnecessary DOM node destructions, HTML parsing overhead, garbage collection pressure, and layout recalculations. Updating targeted text nodes via `textContent` preserves DOM stability and is ~3x faster in execution.

**Action:** When handling timer ticks or live status updates, query and update existing DOM element properties (e.g. `element.textContent`) directly instead of re-executing full template string or HTML generation.
