## 2026-03-30 - Keyboard Focus Visible Styles and Step Semantics
**Learning:** Dense form interfaces with custom buttons (.ghost, .primary) and step lists need explicit `:focus-visible` styling and ARIA step indicators (`aria-current="step"`) to ensure keyboard navigability for screen readers and power users.
**Action:** Always include global `:focus-visible` outline styles in CSS files for interactive controls (`a`, `button`, `input`, `select`, `textarea`) and mark active step indicators with `aria-current="step"`.
