## 2026-03-30 - Cache Intl.DateTimeFormat in recurring UI ticks
**Learning:** Instantiating `Intl.DateTimeFormat` on every function call in recurring loops or timers (like `setInterval` tick intervals) creates significant execution overhead (~100x slower than reusing a cached instance).
**Action:** Always reuse cached `Intl.DateTimeFormat` instances for static locales/options across repeated formatting operations.
