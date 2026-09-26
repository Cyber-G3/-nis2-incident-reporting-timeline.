## 2026-09-26 - Sanitizing Dynamic Timeline & Risk Markup in Client-Side ES Modules
**Vulnerability:** Unescaped string interpolation of workflow statuses, labels, and risk messages into `.innerHTML` enabled DOM-based XSS if fields contained unescaped HTML characters or script tags.
**Learning:** In lightweight Vanilla JS / ES module apps without automated UI framework escaping (like React), DOM rendering via `.innerHTML` must explicitly escape user-controlled or restored state strings.
**Prevention:** Always wrap dynamic strings passed into HTML template string literals with `escapeHTML()`.
