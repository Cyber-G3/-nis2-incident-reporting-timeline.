## 2026-03-30 - Keyboard Focus & Action Button Accessibility in Incident Workflows

**Learning:** Incident reporting and compliance dashboards often rely on export buttons and external authority links. Ensuring clear `:focus-visible` rings, explicit `type="button"` attributes on non-submit buttons, and clear ARIA labels (e.g. indicating external links or exact download formats) greatly improves keyboard navigation and screen-reader context for security analysts under high-pressure scenarios.

**Action:** Always include a skip link (`.skip-link`) pointing directly to the primary workflow form, add `:focus-visible` rules for custom button/link variants, and explicitly set `type="button"` and `aria-label` on action buttons.
