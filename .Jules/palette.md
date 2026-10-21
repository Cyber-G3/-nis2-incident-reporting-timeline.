## 2026-10-05 - Dynamic Language Switch Accessibility
**Learning:** In client-side multi-lingual ES module apps where language switching mutates in-page text directly, static link labels fail to convey the dynamic toggle state to screen readers. Updating `aria-label` dynamically when toggling languages provides essential context for assistive technology users.
**Action:** Always pair in-page language translation functions with dynamic updates to `aria-label` attributes on language switcher controls.
