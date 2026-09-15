## 2026-09-15 - ARIA Progressbar and Focus-Visible Navigation on Custom Meter Components
**Learning:** Pure visual progress meters using `<i>` inside styled `<div>` elements are inaccessible to screen readers unless paired with proper ARIA attributes (`role="progressbar"`, `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, and `aria-label`) dynamically maintained in JS.
**Action:** When working with custom CSS meters/gauges in client-side dashboards, ensure both static initial HTML attributes and JS DOM updates synchronize `aria-valuenow` alongside inline width styling.
