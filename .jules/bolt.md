## 2026-08-16 - Targeted DOM updates for high-frequency countdown timers

**Learning:** Replacing entire HTML subtrees via `innerHTML` every second in a timer loop causes unnecessary layout recalcs, DOM element destruction/re-creation, and garbage collection pressure. Caching pre-constructed `Intl.DateTimeFormat` instances and performing targeted `textContent` updates on existing DOM elements avoids DOM churn while maintaining accuracy.

**Action:** Prefer in-place DOM node updates (`textContent`) for high-frequency updates (e.g. 1-second interval timers), falling back to full DOM sub-tree re-renders only when structural or status changes occur.
