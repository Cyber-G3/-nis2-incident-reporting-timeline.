# Palette's Journal - Critical UX & Accessibility Learnings

## 2026-03-29 - Keyboard Focus & ARIA Descriptions in SPA Incident Reporting Tools
**Learning:** Icon/abbreviated text buttons (like "JSON", "Markdown", "ES") and custom-styled action buttons without default borders lack explicit keyboard focus rings and full screen-reader context if missing `aria-label`s.
**Action:** Always ensure `:focus-visible` ring styles are explicitly defined for all `button` and `a` elements, and provide clear ARIA labels for export actions, language toggles, and external links opening in new tabs.
