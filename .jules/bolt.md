## 2026-09-22 - Selective DOM text updates for live timers

**Learning:** Re-rendering an entire list or timeline via `innerHTML` inside a 1-second `setInterval` causes unnecessary DOM destruction, garbage collection pressure, and reflows. Updating only the text content of targeted `.countdown` elements in the ticker preserves DOM nodes and eliminates full-tree HTML string parsing and re-rendering.
**Action:** Always prefer targeting specific text nodes for periodic timer updates rather than invoking complete UI render functions in `setInterval`.
