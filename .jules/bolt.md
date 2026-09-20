## 2026-03-30 - Caching Intl.DateTimeFormat instances
**Learning:** Instantiating `Intl.DateTimeFormat` inside repeating functions or render loops (e.g., `setInterval`) is extremely expensive (CPU bottleneck ~100x slower) due to locale/ICU initialization.
**Action:** Always pre-create and reuse static `Intl.DateTimeFormat` instances across the module when options are constant.
