## 2026-03-30 - Avoid full timeline DOM re-rendering on timer ticks

**Learning:** Re-rendering the entire `#timeline` container via `innerHTML` every second in `setInterval` causes unnecessary DOM destruction and recreation, image/node re-evaluations, and layout thrashing.
**Action:** Targeted update of `.countdown` elements in timer loops avoids full HTML string construction and innerHTML parsing while preserving UI state.
