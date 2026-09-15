## 2026-03-31 - Target DOM Text Node Mutations for Timers

**Learning:** Re-rendering entire component templates or `innerHTML` trees every second on a `setInterval` causes unnecessary DOM destruction, HTML parsing, layout recalculations, and Garbage Collection overhead.
**Action:** When updating continuous real-time elements like countdown timers, mutate only the specific `textContent` of target DOM nodes directly and conditionally (checking if value changed) to maintain zero GC overhead and minimize layout thrashing.
