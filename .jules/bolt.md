## 2026-08-16 - In-place DOM update for countdown timers

**Learning:** Periodically re-rendering a component's entire DOM tree using `innerHTML` (e.g. in `setInterval`) triggers heavy DOM parsing, style recalculations, and layout thrashing every second.
**Action:** Prefer in-place DOM updates (`element.textContent`) for fast-frequency timers to avoid DOM re-parsing and layout thrashing.
