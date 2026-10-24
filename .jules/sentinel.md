## 2026-10-24 - Prototype Property Lookup Protection in Object Dictionaries
**Vulnerability:** Untrusted string input matching `Object.prototype` properties (e.g. `constructor`, `toString`) bypassed fallback logic in lookup objects (`AUTHORITIES[input.country]`), returning `[Function: Object]` instead of falling back to default values.
**Learning:** Standard bracket lookups (`obj[key] || fallback`) fail when `key` matches inherited prototype methods or properties because functions/objects on `Object.prototype` are truthy.
**Prevention:** Use `Object.hasOwn(obj, key) ? obj[key] : fallback` for property lookups on dictionary objects receiving user input.
