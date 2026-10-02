## 2026-08-16 - Safe Object Property Lookups for User Input Dictionary Maps
**Vulnerability:** Directly indexing plain JavaScript objects using user-supplied keys (`AUTHORITIES[country] || DEFAULT`) resolves inherited prototype properties like `constructor` or `toString`, returning non-object values (e.g. `[Function: Object]`) and bypassing fallback values.
**Learning:** In client-side ES module apps without map datastructures, property lookups on dictionary objects must explicitly check `Object.hasOwn()` before accessing properties to prevent prototype resolution and unexpected type behavior.
**Prevention:** Always use `Object.hasOwn(dict, key) ? dict[key] : fallback` when resolving dynamic keys from form inputs or localStorage.
