## 2026-09-12 - DOM-based XSS via Unescaped Form/State Input in Timeline Rendering
**Vulnerability:** User-controllable form fields and saved state (such as `earlyStatus`, `notificationStatus`, `finalStatus`) were concatenated directly into HTML template strings rendered via `innerHTML` in `renderTimeline` without HTML entity encoding.
**Learning:** Even when dropdown select inputs limit choice in standard UI, user input from `FormData`, local storage drafts, or direct form element manipulation can inject arbitrary string values that execute via `innerHTML`.
**Prevention:** Always escape dynamic strings with an `escapeHtml` utility before interpolating them into HTML strings rendered via `innerHTML`.
