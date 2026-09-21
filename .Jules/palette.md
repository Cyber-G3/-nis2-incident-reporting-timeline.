## 2026-09-21 - High-Contrast Focus Rings and Dynamic ARIA Labels
**Learning:** Custom styled buttons, links, and card choices in vanilla JS apps often lack keyboard focus rings (`:focus-visible`) and clear screen reader indications for dynamic actions like exports or links opening in new tabs (`target="_blank"`).
**Action:** Always pair `:focus-visible` outline styles with `:has(input:focus-visible)` on container labels for custom inputs, and dynamically keep `aria-label` updated whenever UI translations change.
