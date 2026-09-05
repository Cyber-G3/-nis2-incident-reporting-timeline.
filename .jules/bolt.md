## 2026-09-05 - In-place DOM text update for live timers
**Learning:** Re-rendering full `innerHTML` trees in a 1-second `setInterval` causes unnecessary DOM parsing, element destruction, and layout thrashing. Targeted `textContent` updates on pre-rendered countdown elements preserve DOM nodes and reduce CPU and garbage collection churn.
**Action:** When updating live timers or ticking values in plain vanilla JS applications, update existing DOM element `.textContent` directly instead of re-evaluating the parent component's innerHTML.
