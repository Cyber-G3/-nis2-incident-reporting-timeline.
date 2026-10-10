## 2026-03-31 - In-place DOM updates for timer intervals
**Learning:** In vanilla client-side applications with countdown timers, re-rendering full innerHTML trees inside `setInterval` causes continuous layout reflows, element destruction, and DOM thrashing.
**Action:** Targeted DOM selection and textContent comparison (`if (el.textContent !== text) el.textContent = text`) avoids unnecessary reflows and DOM mutations on every timer tick.
