## 2026-08-16 - Accessible labeling for compound label elements
**Learning:** When a `<label>` element wraps multiple form controls (e.g. both a `<select>` and an `<input>`), screen readers may read the overarching text for all enclosed controls or misassociate accessible names. Adding explicit `aria-label` attributes to each enclosed control guarantees distinct, unambiguous accessible names across screen readers.
**Action:** Always provide explicit `aria-label` attributes for form controls when nested together inside a shared `<label>`.
