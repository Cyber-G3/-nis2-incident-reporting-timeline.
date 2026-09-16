## 2026-08-16 - DOM XSS in Incident Timeline and Risk Rendering
**Vulnerability:** Dynamic string properties from user inputs (such as form fields mapped to workflow statuses or risk strings) were interpolated directly into HTML templates using `innerHTML` without sanitization.
**Learning:** Building HTML components with template strings in client-side ES module apps without DOM sanitization or HTML entity escaping creates DOM XSS vectors if inputs are controlled or modified by users or saved draft payloads.
**Prevention:** Always sanitize/escape dynamic strings or use safer standard web APIs (e.g., `textContent` or text nodes) prior to HTML string template interpolation.
