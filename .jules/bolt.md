# Bolt's Journal - Critical Learnings

## 2026-08-16 - Targeted DOM updates for timers vs full container innerHTML replacement
**Learning:** Re-rendering an entire list or container via `innerHTML = ...` on a 1-second interval creates unnecessary DOM destruction, garbage collection pressure, and layout thrashing.
**Action:** When updating tick-based UI elements like countdown timers, update only the target element's `textContent` in-place rather than rebuilding the parent DOM structure.
