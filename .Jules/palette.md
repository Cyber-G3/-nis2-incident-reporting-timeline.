## 2026-10-24 - Interactive control focus visible indicators
**Learning:** Pure CSS custom focus styles were missing on buttons and links, while inputs used low-contrast focus outlines (`rgba(23, 50, 74, 0.15)`). Using `:focus-visible` with high contrast `var(--navy)` and `outline-offset` provides distinct accessibility feedback during keyboard navigation without intruding on pointer/mouse interactions.
**Action:** Always apply `:focus-visible` styling with `outline-offset: 2px` to buttons, links, and form fields in compact ES module tools.
