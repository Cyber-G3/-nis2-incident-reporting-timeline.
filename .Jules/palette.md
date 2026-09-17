## 2026-08-15 - Interactive Button Focus Visibility & Action ARIA Labels
**Learning:** In single-page web applications with custom-styled primary and ghost buttons against variable background cards, native browser focus outlines can fail WCAG contrast requirements unless explicit `:focus-visible` ring offsets (`outline-offset: 2px`) are defined.
**Action:** Always provide explicit `:focus-visible` styling for interactive buttons and ensure export/sample actions have explicit `aria-label` and `title` attributes.
