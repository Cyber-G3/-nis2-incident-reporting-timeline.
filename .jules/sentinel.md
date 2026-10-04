## 2026-08-16 - DOM XSS via un-escaped innerHTML rendering
**Vulnerability:** Unsanitized dynamic labels, field names, articles, and risk messages rendered directly to `innerHTML` in `app.js`.
**Learning:** Even when input primarily originates from internal translations or predefined fields, direct string interpolation into `innerHTML` allows potential HTML/script injection if dynamic values are modified or populated from external sources.
**Prevention:** Always escape dynamic strings with `escapeHtml` before embedding them into HTML templates rendered via `innerHTML`.
