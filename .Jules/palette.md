## 2026-09-19 - Focus Visible Styles for Custom Pill Buttons and Radio Choice Wrappers
**Learning:** Custom styled buttons with `border: 0` and custom `choice-row` label wrappers lacked explicit `:focus-visible` and `:focus-within` outlines, impairing keyboard navigation visibility across the app.
**Action:** Always complement custom button and input container styles with explicit `:focus-visible` (using brand tokens like `var(--navy)`) and `:focus-within` on compound form wrappers to maintain WCAG 2.1 AA focus indication standards.
