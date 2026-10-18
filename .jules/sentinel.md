## 2026-08-16 - Safe dictionary lookups and form element validation
**Vulnerability:** Object lookups using untrusted string keys (`obj[key]`) allow property lookup traversal into `Object.prototype` (e.g. `toString`, `constructor`), returning functions instead of default values.
**Learning:** Standard JS object index lookups fall back to `Object.prototype` properties when a key is not an own property, and `form.elements[key]` can match native HTMLFormElement methods if key matches form method names like `reset` or `submit`.
**Prevention:** Use `Object.prototype.hasOwnProperty.call(obj, key)` for dictionary lookups and validate that `form.elements[key]` is an `HTMLElement` or `RadioNodeList` before assigning values.
