## 2026-10-27 - Focus Management for Dynamic Assessment Dashboard
**Learning:** When a form submission unhides and scrolls to a dynamically generated results dashboard (`#results`), screen readers and keyboard focus remain trapped on the submit button unless `tabindex="-1"` is set on the container and `.focus()` is called programmatically.
**Action:** Always pair `scrollIntoView()` on newly revealed content sections with `tabindex="-1"` and `.focus()` to seamlessly transition keyboard and screen reader navigation to the new context.
