## 2026-08-16 - Prototype Property Resolution in Dictionary Lookups
**Vulnerability:** Unsafe bracket property access on dictionary objects (`AUTHORITIES[input.country]` and `ES[value]`) resolved inherited `Object.prototype` methods/properties (e.g. `constructor`, `toString`) when input matched prototype property names.
**Learning:** `dict[key] || fallback` evaluates to truthy for inherited function properties (like `[Function: Object]`), bypassing default fallback values.
**Prevention:** Always use `Object.prototype.hasOwnProperty.call(dict, key)` or `Object.hasOwn(dict, key)` for dynamic key lookups on plain objects.
