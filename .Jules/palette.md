## 2026-03-31 - Focus Visible & Action ARIA Labels for Export Utilities
**Learning:** Single-page export utilities often rely on brief button text (e.g. "JSON", "Markdown", "ES") which lacks context for screen reader users, while missing `:focus-visible` CSS rules can make keyboard-only navigation invisible on custom buttons.
**Action:** Always provide explicit `aria-label` attributes for export/action buttons and include high-contrast `:focus-visible` ring rules on custom button and link classes.
