# Sentinel Security Journal

## 2026-08-16 - DOM XSS Sanitization in Timeline and Risk Rendering
**Vulnerability:** Unescaped dynamic values (`workflowStatus`, `missing` field names, `risks`) injected into `innerHTML` in `app.js`.
**Learning:** Dynamic values coming from user inputs or draft `localStorage` were inserted directly into HTML templates without sanitization.
**Prevention:** Export and use `escapeHtml()` from `core.js` before embedding any dynamic strings into DOM `innerHTML`.
