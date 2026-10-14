## 2026-02-21 - Selective DOM element text updates for live timers

**Learning:** Re-rendering full HTML trees via `innerHTML` on periodic `setInterval` timers (e.g. countdown clocks) causes heavy DOM thrashing, layout reflows, and string re-parsing.
**Action:** Isolate dynamic timer elements and update their `.textContent` in place, leaving static card wrappers and metadata DOM nodes intact.
