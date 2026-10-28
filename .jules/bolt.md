## 2026-03-01 - Cache Intl.DateTimeFormat in client-side timers
**Learning:** Instantiating `Intl.DateTimeFormat` inside functions called on periodic interval updates (such as `setInterval` timeline re-renders) causes non-trivial CPU overhead (~100x slower date formatting).
**Action:** Always pre-instantiate or cache `Intl.DateTimeFormat` instances at module scope when formatting dates repeatedly.
