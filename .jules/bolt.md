## 2026-09-10 - Direct DOM countdown updates over full innerHTML re-renders
**Learning:** In vanilla JS micro-apps with live timers, triggering full component re-renders (via `innerHTML`) on `setInterval` causes continuous DOM teardown, re-parsing, and loss of DOM state every second.
**Action:** Isolate dynamic textual sub-properties (e.g. countdown strings) and update `.textContent` directly on targeted DOM nodes.
