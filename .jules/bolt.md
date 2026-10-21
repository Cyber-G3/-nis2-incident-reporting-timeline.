## 2026-08-16 - Avoid full innerHTML re-renders for periodic live timers
**Learning:** Re-rendering entire component card subtrees via `innerHTML` every second in `setInterval` creates unnecessary DOM parsing, DOM node thrashing, and garbage collection overhead.
**Action:** Update live text nodes in-place (e.g. `node.textContent`) during periodic timer callbacks while leaving full HTML re-renders to event-driven state changes.
