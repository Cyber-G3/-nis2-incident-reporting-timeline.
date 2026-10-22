## 2026-08-16 - Safe localStorage Form Draft Restoration & Object Prototype Protection
**Vulnerability:** Restoring form drafts directly from `localStorage` using `form.elements[key]` and unvalidated key-value assignment allowed prototype pollution keys (`__proto__`, `constructor`, `prototype`) and property overrides on form element collections (such as `toString` or `reset`).
**Learning:** Accessing form controls with property index syntax (`form.elements[key]`) evaluates inherited DOM and JavaScript prototype methods when `key` matches names like `toString`, `submit`, or `reset`.
**Prevention:** Always sanitize untrusted JSON keys from `localStorage` against prototype pollution properties and use `form.elements.namedItem(key)` for secure DOM element lookups.
