## 2026-09-09 - Client-side innerHTML rendering of dynamic status fields
**Vulnerability:** Workflow status and dynamic fields populated from form data or localStorage were interpolated directly into `.innerHTML` templates without HTML escaping.
**Learning:** In plain ES module client applications, using `.innerHTML` with dynamic form properties or stored draft state introduces XSS risks if non-sanitized inputs are injected.
**Prevention:** Always sanitize dynamic strings using `escapeHtml()` before interpolating into `.innerHTML` templates, and maintain `rel="noopener noreferrer"` on all external links.
