## 2026-08-16 - DOM Node Caching for Timer-based Renders
**Learning:** In vanilla JS apps using `setInterval` for live countdown timers, querying the DOM on every tick creates unnecessary layout/DOM lookup overhead. Caching top-level element references at initialization speeds up render ticks without breaking reactivity.
**Action:** Always cache stable DOM element references at module top-level or view initialization when functions are called repeatedly in intervals or event streams.
