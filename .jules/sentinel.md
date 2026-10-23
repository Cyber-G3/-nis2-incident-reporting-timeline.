## 2026-08-16 - Prototype Property Injection in Plain Object Lookup Tables
**Vulnerability:** In plain JS objects used as lookup dictionaries (such as `AUTHORITIES`, `ES`, `uiEs`), lookups using user-controlled or dynamic keys (e.g., `dict[key]`) resolve to `Object.prototype` properties like `[Function: Object]` for keys like `"constructor"` or `"toString"`.
**Learning:** Evaluated fallback expressions like `dict[key] || fallback` return prototype properties instead of the default value.
**Prevention:** Always use `Object.hasOwn(dict, key)` to gate lookup table queries against prototype property resolution.
