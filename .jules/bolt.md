## 2026-03-29 - Targeted DOM updates vs innerHTML re-rendering
**Learning:** Re-rendering entire component containers via `innerHTML` on 1-second intervals causes DOM thrashing, garbage collection pressure, and focus loss. Selective DOM node updates avoid full layout reflows and DOM destruction.
**Action:** When updating live time-based counters or frequent status elements, update only the specific text nodes or data attributes rather than invoking full HTML template re-renderers.
