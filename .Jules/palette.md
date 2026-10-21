## 2026-09-12 - Compound Form Controls in Workflow Grids
**Learning:** Wrapping multiple inputs (e.g. `<select>` status and `<input type="datetime-local">` timestamp) inside a single `<label>` element can cause screen readers to announce both controls with ambiguous context. Giving each inner control an explicit `aria-label` ensures clear, unambiguous element names during screen reader traversal.
**Action:** Always provide explicit `aria-label` attributes on individual inputs when multiple form controls share a wrapping `<label>`.
