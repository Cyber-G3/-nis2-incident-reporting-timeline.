## 2026-03-30 - Reuse Intl.DateTimeFormat in Interval Callbacks

**Learning:** Instantiating `new Intl.DateTimeFormat()` on every call inside tight loops or interval callbacks (e.g. `setInterval` tick handlers) causes significant overhead (~356µs per call vs ~2.8µs when cached, a ~125x difference) and GC pressure.

**Action:** Pre-construct and cache `Intl.DateTimeFormat` instances for required locales when formatting dates repeatedly in render loops.
